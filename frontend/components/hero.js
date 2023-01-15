import styles from "../styles/Hero.module.css"

const Hero = () => {
    return ( 
    <div>
  <div className={styles.main}>
    <div className={styles.text}>
    <h3>A trophy carries dust. Memories last forever</h3>
    <p>Illumina sports fest of VSSUT</p>
    </div>
   <img src="/bck.png" alt="" />
   </div>

   <div className={styles.about} id="about-us" >
    <div>
    <h2>
        About Us
    </h2>
    <p>Veer Surendra Sai University of Technology (VSSUT) organizes its yearly sports fest named as ILLUMINA with great elation and valor.The two days sports extravaganza of our University kicks-off with a gallant show. The inaugural day starts off with the lighting of the torch at Burla Temple which kindles the spirit of sportsmanship and togetherness among all the VSSUTians. A number of sports enthusiasts turns up to become a part of the torch march from the temple to the University’s ground lead by Sports Secretary,VSSUT,Burla. They are greeted by a large crowd (students, staff and local people) encouraging and applauding them</p>
    </div>
    <div className={styles.illumina}>
      <h3>Illumina</h3>
      <p>Veer Surendra Sai University of Technology (VSSUT) organizes its yearly sports fest named as ILLUMINA with great elation and valor.The two days sports extravaganza of our University kicks-off with a gallant show. The inaugural day starts off with the lighting of the torch at Burla Temple which kindles the spirit of sportsmanship and togetherness among all the VSSUTians. A number of sports enthusiasts turns up to become a part of the torch march from the temple to the University’s ground lead by Sports Secretary,VSSUT,Burla. They are greeted by a large crowd (students, staff and local people) encouraging and applauding them</p>
    </div>
    <div className={styles.yoga}>
      <h3>Yoga Club</h3>
      <p>Yoga Club VSSUT is the official member- operated club of Veer Surendra Sai University of Technology, working for the enlightenment of the students of the college by taking them out of their busy and monotonous schedule through Yoga. The club works through organizing health and thought-awareness events and competitions, both on and off the campus. The devoted motto of this society and the events- spreading health awareness and purity of thoughts among the juvenile and energetic minds for the bright future of India, as well as to provide a friendly circle and harmonious environment for the inquisitive people.</p>
    </div>
   </div>

    </div> 
    );
}
 
export default Hero;