import { imageType } from "@/app/types/headerform.type";
import Image from "next/image";

export default function HeaderForm({title, image}:{title: string, image: imageType}){
    return (
        <div className="header_form">
            <Image src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                ></Image>            
            <p>{title}</p>
        </div>
    )
}