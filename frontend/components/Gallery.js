import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/gallery.module.css'
import Image from 'next/image'

  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className={styles.box} id="gallery">
                  <h2>Gallery</h2>
            <div className={styles.gallery}>
                
              <Carousel showIndicators = {false} showThumbs = {false} autoPlay interval="3000" infiniteLoop>
                  <div>
                      <Image width={500} height={350} src="/il1.jpg" alt="image1"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il7.jpg" alt="image2" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il13.jpg" alt="image3"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il15.jpg" alt="image4"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il16.jpg" alt="image5"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il20.jpg" alt="image6"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il19.jpg" alt="image7" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il12.jpg" alt="image8"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il11.jpg" alt="image9"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il10.jpg" alt="image10"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il9.jpg" alt="image11"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/i;8.jpg" alt="image12" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il6.jpg" alt="image13"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il5.jpg" alt="image14"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il4.jpg" alt="image15"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/_DSC0225-1.jpg" alt="image16"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/ill17.jpg" alt="image17"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il2.jpg" alt="image18" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il14.jpg" alt="image19"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/il18.jpg" alt="image20"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/4-1.jpg" alt="image21"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/12.jpg" alt="image22"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/54.jpg" alt="image23"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/102.jpg" alt="image24"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/104.jpg" alt="image25"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/111.jpg" alt="image26"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1676643483087.jpg" alt="image27"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1676643483102.jpg" alt="image28"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1676643484649.jpg" alt="image29"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1676732042488.jpg" alt="image30"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/d1sh (7).jpg" alt="image31"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/d1sh (162).jpg" alt="image31"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/hj(13).jpg" alt="image32"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/hj(22).jpg" alt="image33"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/j (32).jpg" alt="image34"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/kkk (231).jpg" alt="image35"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/kkk (272).jpg" alt="image35"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/relay (74)-1.jpg" alt="image36"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/SP01.jpg" alt="image37"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/TEv (79).jpg" alt="image38"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/TEv (108).jpg" alt="image39"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/TEv (169)-01.jpg" alt="image40"/> 
                  </div>
                  {/* <div>
                      <Image width={500} height={350} src="/3.3-min.jpg" alt="image20"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/3.4-min.jpg" alt="image21"/>
                  </div> */}
              </Carousel>
            </div>
            </div>
        );
    }
};