import Link from "next/link"

export default function Nav(){
    return(
        <>
        <nav className="bg-accent mx-auto rounded-3xl py-4 px-8   sm:text-xl" >
            <ul className="sm:flex sm:flex-row sm:justify-around sm:w-80">
                <li>
                <Link href="#">Description</Link>
                </li>
                <li>
                <Link href="#">Comprar</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}


