import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/gallery.module.css'
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className={styles.box} id="gallery">
                  <h2>Gallery</h2>
            <div className={styles.gallery}>
                
              <Carousel showIndicators = {false}>
                  <div>
                      <img src="/1.1.jpg" alt="image1"/>
                  </div>
                  <div>
                      <img src="/1.2.jpg" alt="image2" />
                  </div>
                  <div>
                      <img src="/1.3.jpg" alt="image3"/>
                  </div>
                  <div>
                      <img src="/1.4.jpg" alt="image4"/> 
                  </div>
                  <div>
                      <img src="/1.5.jpg" alt="image5"/>
                  </div>
                  <div>
                      <img src="/1.6.jpg" alt="image6"/>
                  </div>
                  <div>
                      <img src="/1.7.jpg" alt="image7" />
                  </div>
                  <div>
                      <img src="/1.8.jpg" alt="image8"/>
                  </div>
                  <div>
                      <img src="/1.9.jpg" alt="image9"/> 
                  </div>
                  <div>
                      <img src="/2.1.jpg" alt="image10"/>
                  </div>
                  <div>
                      <img src="/2.2.jpg" alt="image11"/>
                  </div>
                  <div>
                      <img src="/2.3.jpg" alt="image12" />
                  </div>
                  <div>
                      <img src="/2.4.jpg" alt="image13"/>
                  </div>
                  <div>
                      <img src="/2.5.jpg" alt="image14"/> 
                  </div>
                  <div>
                      <img src="/2.6.jpg" alt="image15"/>
                  </div>
                  <div>
                      <img src="/2.7.jpg" alt="image16"/>
                  </div>
                  <div>
                      <img src="/2.8.jpg" alt="image17" />
                  </div>
                  <div>
                      <img src="/2.9.jpg" alt="image18"/>
                  </div>
                  <div>
                      <img src="/3.1.jpg" alt="image19"/> 
                  </div>
                  <div>
                      <img src="/3.3.jpg" alt="image20"/>
                  </div>
                  <div>
                      <img src="/3.4.jpg" alt="image21"/>
                  </div>
              </Carousel>
            </div>
            </div>
        );
    }
};