"use client";

import { faInstagram, faTiktok, faXTwitter } from '@/node_modules/@fortawesome/free-brands-svg-icons/index';
import { faPlus, faTrashCan } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import { faPencil } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@/node_modules/@fortawesome/react-fontawesome/index';
import Link from '@/node_modules/next/link';
import React, { useEffect, useState } from 'react'
import { getData, updateDataStatus } from './models/mahasiswa';


export default function RootPage() {
  // Buat Hook 
  // Hook dengan "use state", kurung kurawal karena tipe data object ({Second})
  const [getValue, setValue] = useState({});

  // Buat fungsi fetch data
  async function fetchData() {
    setValue(await getData());
  }

  async function handleDelete(npm: string) {
    const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus data - ${npm} ?`);
    if (confirmDelete) {
      const result = await updateDataStatus(npm, "N");
      if (result.success) {
        alert("Data berhasil dihapus.");
        fetchData(); // Refresh data
      } else {
        alert("Terjadi kesalahan saat menghapus data.");
      }
    }
  }

  // Hook dengan "use effect"
  useEffect(() => {
    // Panggil fungsi fetchData()
    setValue (fetchData())

  }, [])
  

// Jika menggunakan findUnique
// const mahasiswa = await prisma.tb_mahasiswa.findUnique({
//   where: {
//     id: 1,
//   },
// })
  
  return (
    <>
    {/* Tambah Data Mahsiswa Button */}
    <title>View Data Mahasiswa</title>
    <nav className="mb-3 flex justify-end ">
      <Link href={"/add"} className="btn btn-info">
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      Tambah Data Mahasiswa
      </Link>
    </nav>
    {/* Tampilkan data mahasiswa */}
    <table className='w-full'>
        <thead>
          <tr className='bg-slate-300 h-12 border border-slate-700'>
            <th className='w-10 border border-slate-700'>Aksi</th>
            <th className='w-10 border border-slate-700'>NPM</th>
            <th className='w-1/2 border border-slate-700'>Nama</th>
            <th className='w-30 border border-slate-700'>Prodi</th>
          </tr>
        </thead>
      <tbody>
    {Object.values(getValue).map((data: any, index: number)=> (
      // <div key={index}>
      //   <div>
      //     {data.npm} - {data.nama} - {data.prodi}
      //   </div>
      // </div>
      <tr>
        <td className='border border-slate-700 px-2.5 text-center p-2'>
          {/* icon edit */}
          <Link href={"/edit/${btoa(data.npm)"} className="bg-sky-700 text-white px-2 py-1 rounded mr-1" title='Ubah Data'>
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
          </Link>
                                              
          {/* icon delete */}
          <Link href={"/"}  className="bg-red-700 text-white px-2 py-1 rounded ml-1" title='Hapus Data' onClick={() => handleDelete(data.npm)}>
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </Link>
          

          
        </td>
        <td className='border border-slate-700 px-2.5 text-center'>{data.npm}</td>
        <td className='border border-slate-700 px-2.5 text-justify'>{data.nama}</td>
        <td className='border border-slate-700 px-2.5 text-center'>{data.prodi}</td>
      </tr>
      
      
    ))}
        </tbody>
    </table>

    {/* Menapilkan findUnique */}
    {/* {mahasiswa?.nama} */}
    </>
  )
}
