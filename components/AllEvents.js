import Image from "next/image";
import styles from "../styles/events.module.css"

const AllEvents = () => {
    return ( 
        <>
            
        <div className={styles.main}>
            <h1 className={styles.title}>Events</h1>
            <div className={styles.events} >
                <div className={styles.event} >
                    <div className={styles.football} ></div>
                    <Image src="/football.png" width={251} height={236} ></Image>
                    <p>Football</p>
                </div>
                <div className={styles.event} >
                <div className={styles.kabaddi} ></div>
                    <Image src="/kabaddi.png" width={251} height={236} ></Image>
                    <p>Kabaddi</p>
                </div>
                <div className={styles.event} >
                    <div className={styles.khokho} ></div>
                    <Image src="/khokho.png" width={251} height={236} ></Image>
                    <p>Kho-Kho</p>
                </div>
                <div className={styles.event}>
                    <div className={styles.cricket} ></div>
                    <Image src="/cricket.png" width={251} height={236} ></Image>
                    <p>Cricket</p>
                </div>
            </div>
        </div>
        </>
    )
}
 
export default AllEvents;