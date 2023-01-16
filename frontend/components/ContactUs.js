import Image from "next/image";
import styles from "../styles/contactus.module.css";

const ContactUs = () => {
    return ( 
        <div className={styles.contactUs} id="contact-us" >
            <h1 className={styles.title} >Administration</h1>
            <div className={styles.container} >
                <div className={styles.details} >
                    <p>Vice-Chancellor</p>
                    <p>Dean of Student Welfare</p>
                    <p>Vice President Sports Society</p>
                    <p>Faculty Advisor Sports Society</p>
                    <p>Coordinator Illumina</p>
                    <p>Coordinator Athletic Club</p>
                    <p>Asst-Coordinator Illumina</p>
                    <p>Asst-Corordinator Athletic Club</p>
                </div>
                <div className={styles.details} >
                    <p>Prof. Bansidhar Majhi</p>
                    <p>Prof. Sanjaya Kumar Patro</p>
                    <p>Mr. Anand Kumar Behera</p>
                    <p>Mr. Amit Chatterjee</p>
                    <p>Sambhunath Biswal  (7653896560)</p>
                    <p>Tanmaya Naik  (7008847192)</p>
                    <p>Sourav Panda  (9938563152)</p>
                    <p>TBA</p>
                </div>
                <Image src="/running.png" width={293} height={293} ></Image>
            </div> 
        </div>
     );
}
 
export default ContactUs;