import Image from "next/image";
import styles from "../styles/events.module.css"
import Link from "next/link";

const AllEvents = () => {

    const goTop = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return ( 
        <>
            
        <div className={styles.main} id="events" >
            <h1 className={styles.title}>Events</h1>
            <div className={styles.events} >
                <Link href="/football" >
                    <div className={styles.event} >
                        <div className={styles.football} ></div>
                        <Image src="/football.png" alt="football" width={251} height={236} ></Image>
                        <p>Football</p>
                    </div>
                </Link>
                <Link href="/kabaddi" >
                    <div className={styles.event} >
                        <div className={styles.kabaddi} ></div>
                        <Image src="/kabaddi.png" alt="kabaddi" width={251} height={236} ></Image>
                        <p>Kabaddi</p>
                    </div>
                </Link>
                <Link href="/khokho" >
                    <div className={styles.event} >
                        <div className={styles.khokho} ></div>
                        <Image src="/khokho.png" alt="khokho" width={251} height={236} ></Image>
                        <p>Kho-Kho</p>
                    </div>
                </Link>
                <Link href="/cricket" >
                    <div className={styles.event}>
                        <div className={styles.cricket} ></div>
                        <Image src="/cricket.png" alt="cricket" width={251} height={236} ></Image>
                        <p>Cricket</p>
                    </div>
                </Link>
            </div>
            <button className={styles.scroll} onClick={goTop} >^</button>
        </div>
        </>
    )
}
 
export default AllEvents;