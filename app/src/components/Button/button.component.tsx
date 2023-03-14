
import { HtmlHTMLAttributes } from "react"

interface Props{
    classname: string,
    click: () => void | null,
    content:  string
}

export default function Button({classname, click, content}: Props){
    return (<button onClick={click} className={classname}>{content}</button>)
}