"use client"
import {useState, useEffect} from "react";
import React from "react";
import styles from "../styles/test.module.css";
import Head from "next/head";
import io from "socket.io-client";

const test = () => {

  const [event, setEvent] = useState(null);

  useEffect(()=>{
    
    const socket = io("https://illumina-live-score-backend.onrender.com/")
    socket.on('connection-done', ()=>{
      console.log("connected to the main frontend")
    })
    
    socket.on("live-score", (data)=>{
      //console.log(data)
      data.event === 'cricket' ? setEvent(data) : setEvent(null)
    })

    socket.on("close score", ()=>{
      setEvent(null)
    })
  },[])


  return (
    <>
      <Head>
        <title>Sports Society | Cricket</title>
      </Head>
      <div className={styles.page}>
      <h1 className={styles.mainHead}>Cricket</h1>
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
