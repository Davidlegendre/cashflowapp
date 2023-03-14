import Image from "next/image";
import style from './loading.module.css'
export default function LoadingComponent({mensaje}: any){
    return (
        <div className={style.loading}>
                <Image src="/loading.gif" width={140} height={140} alt="loading" priority></Image>
                <p>{mensaje??"Cargando"}</p>
        </div>
    )
}