import Image from "next/image";

export default function Loading(){
    
    return (
        <div className="loading">
         <Image src="/loading.gif" width={300} height={300} alt="loading"></Image>
        </div>
    )
}