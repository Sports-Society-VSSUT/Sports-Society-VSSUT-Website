
import {useState, useEffect} from "react";
import React from "react";
import styles from "../styles/test.module.css";
import Head from "next/head";

const test = () => {

  const [event, setEvent] = useState(0);

  useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch('https://illumina-live-score-backend.onrender.com/api')
      const json = await res.json()

      json.map((data)=>{
        if(data.event === 'khokho'){
          setEvent(data);
          // console.log(event)  
        }
      })
    }

    getData()
  },[event])


  return (
    <>
      <Head>
        <title>Sports Society | Kho-Kho</title>
      </Head>
      <div className={styles.page}>
      <h1 className={styles.mainHead}>Kho-Kho</h1>
        <div className={styles.scoremain}>
          <span className={styles.live}>Live</span>
          <span className={styles.dot}></span>
          <div className={styles.score}>
            <div className={styles.match}>
              {
                !event ? <span className={styles.grp1} >No Live Match</span> :
                <div>
                  <span className={styles.grp1}>House {event.teamA}</span>
                  <span className={styles.vs1}> {event.scoreA} : {event.scoreB} </span>
                  <span className={styles.grp1}>House {event.teamB} </span>
                </div>
              }
            </div>
          </div>
        </div>
        <div className={styles.card}>
         
          <div className={styles.card1}>
            <h1 className={styles.head}>Match I</h1>
            <div className={styles.fixturecard}>
              <div className={styles.match}>
                <span className={styles.grp}>Group A</span>
                <span className={styles.crp}>A</span>
                <span className={styles.vs}>V/S</span>
                <span className={styles.crp}>B</span>
                <span className={styles.grp}>Group B</span>
              </div>
              <div className={styles.time}>
                <strong>
                  <p>27.01.2023 | VSSUT Ground</p>
                </strong>
              </div>
            </div>
            <h1 className={styles.head}>Match II</h1>
            <div className={styles.fixturecard}>
              <div className={styles.match}>
                <span className={styles.grp}>Group A</span>
                <span className={styles.crp}>C</span>
                <span className={styles.vs}>V/S</span>
                <span className={styles.crp}>D</span>
                <span className={styles.grp}>Group D</span>
              </div>
              <div className={styles.time}>
                <strong>
                  <p>27.01.2023 | VSSUT Ground</p>
                </strong>
              </div>
            </div>
            <h1 className={styles.head}>Match III</h1>
            <div className={styles.fixturecard}>
              <div className={styles.match}>
                <span className={styles.grp}>Group A</span>
                <span className={styles.crp}>A</span>
                <span className={styles.vs}>V/S</span>
                <span className={styles.crp}>B</span>
                <span className={styles.grp}>Group B</span>
              </div>
              <div className={styles.time}>
                <strong>
                  <p>27.01.2023 | VSSUT Ground</p>
                </strong>
              </div>
            </div>
            <h1 className={styles.head}>Match IV</h1>
            <div className={styles.fixturecard}>
              <div className={styles.match}>
                <span className={styles.grp}>Group A</span>
                <span className={styles.crp}>C</span>
                <span className={styles.vs}>V/S</span>
                <span className={styles.crp}>D</span>
                <span className={styles.grp}>Group D</span>
              </div>
              <div className={styles.time}>
                <strong>
                  <p>27.01.2023 | VSSUT Ground</p>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default test;
