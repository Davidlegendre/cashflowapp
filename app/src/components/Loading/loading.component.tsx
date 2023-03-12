import Image from "next/image";
import style from './loading.module.css'
export default function LoadingComponent(){
    return (
        <div className={style.loading}>
                <Image src="/loading.gif" width={140} height={140} alt="loading"></Image>
                <p>Cargando</p>
        </div>
    )
}