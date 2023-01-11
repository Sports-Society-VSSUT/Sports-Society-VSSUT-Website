import Image from "next/image";
import styles from "../styles/contactus.module.css";

const ContactUs = () => {
    return ( 
        <div className={styles.contactUs} >
            <h1 className={styles.title} >Contact Us</h1>
            <div className={styles.container} >
                <div className={styles.details} >
                    <p>Coordinator Illumina</p>
                    <p>Coordinator Athletic Club</p>
                    <p>Asst-Coordinator Illumina</p>
                    <p>Asst-Corordinator Athletic Club</p>
                </div>
                <div className={styles.details} >
                    <p>Sambhunath Biswal  (1234567890)</p>
                    <p>Tanmaya Naik  (1234567890)</p>
                    <p>Sourav Panda  (1234567890)</p>
                    <p>TBA</p>
                </div>
                <Image src="/running.png" width={293} height={293} ></Image>
            </div> 
        </div>
     );
}
 
export default ContactUs;