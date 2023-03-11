import Image from "next/image"
import Link from "next/link"
import style from "./css/footer.module.css"
export default function Footer(){
    return(
    <footer className={style.footer}>
        <code>Copyright CashFlowApp 2023 - PowerBy Vercel</code>
        <Link href="https://vercel.com">
            <Image alt="logo_vercel" src="/vercel.svg" width={170} height={70}></Image>
        </Link>
      </footer>
    )
}