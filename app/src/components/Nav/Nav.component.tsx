

import styles from './css/nav.module.css'
import MasterNav from './masterNav.component';
export const metadata ={
    caches: "no-cache"
}
export default function Nav({children}: any)
{
    
    return(
        <MasterNav styles={styles}>
            {children}
        </MasterNav>
    )
}