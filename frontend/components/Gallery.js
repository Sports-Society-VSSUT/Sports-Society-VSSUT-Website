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
                      <Image width={500} height={350} src="/1.1-min.jpg" alt="image1"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.2-min.jpg" alt="image2" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.3-min.jpg" alt="image3"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.4-min.jpg" alt="image4"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.5-min.jpg" alt="image5"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.6-min.jpg" alt="image6"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.7-min.jpg" alt="image7" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.8-min.jpg" alt="image8"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/1.9-min.jpg" alt="image9"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.1-min.jpg" alt="image10"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.2-min.jpg" alt="image11"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.3-min.jpg" alt="image12" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.4-min.jpg" alt="image13"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.5-min.jpg" alt="image14"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.6-min.jpg" alt="image15"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.7-min.jpg" alt="image16"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.8-min.jpg" alt="image17" />
                  </div>
                  <div>
                      <Image width={500} height={350} src="/2.9-min.jpg" alt="image18"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/3.1-min.jpg" alt="image19"/> 
                  </div>
                  <div>
                      <Image width={500} height={350} src="/3.3-min.jpg" alt="image20"/>
                  </div>
                  <div>
                      <Image width={500} height={350} src="/3.4-min.jpg" alt="image21"/>
                  </div>
              </Carousel>
            </div>
            </div>
        );
    }
};