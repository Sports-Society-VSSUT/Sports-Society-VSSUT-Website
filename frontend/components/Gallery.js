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
                
              <Carousel>
                  <div>
                      <img src="/ecel.jpg" alt="image1"/>
                  </div>
                  <div>
                      <img src="/engm.jpg" alt="image2" />
                  </div>
                  <div>
                      <img src="/robo.jpg" alt="image3"/>
                  </div>
                  <div>
                      <img src="/vib.jpg" alt="image4"/> 
                  </div>
                  <div>
                      <img src="/space.jpg" alt="image5"/>
                  </div>
              </Carousel>
            </div>
            </div>
        );
    }
};