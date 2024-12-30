import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
// Import file Global.css
import "../app/globals.css"
// import fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css"

export const metadata = {
  title: 'Home',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body>
        {/* {/buat area header/} */}
        <header>
        {/* {/area image/} */}
        {/* <img src="../banner2.png" alt="Logo UTI" /> */}
        {/* Pilih image yang next/imgae */}
        <Image src={"/banner2.png"} alt={"Logo UTI"} width={1851} height={222} ></Image>

        {/* {/area menu/} */}
        <nav className="mt-5 flex justify-center">
          <Link href={"/"} className="bg-green-500 rounded-full text-white px-5 py-2.5
           hover:bg-red-500 mr-2 w-64">Data Mahasiswa</Link>
          <Link href={"/"} className="bg-green-500 rounded-full text-white px-5 py-2.5 
           hover:bg-red-500 ml-2 w-64">Log Data Mahasiswa</Link>
        </nav>
        </header>
        
        <section className="m-5">
          {/* {/buat area content/} */}
          {children}
        </section>
        

        {/* {/buat area footer/} */}
        <footer className="bg-green-500 text-white px-5 py-2.5 text-center mt-5 flex justify-center">
          Copyright &copy; 2024 - Muhammad Syafiq Nasrullah
        </footer>
      </body>
    </html>
  )
}
