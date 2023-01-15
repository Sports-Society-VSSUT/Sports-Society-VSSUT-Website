import React from "react";
import styles from "../styles/test.module.css";
import Head from "next/head";

const test = () => {
  return (
    <>
      <Head>
        <title>Sports Society | Kho-Kho</title>
      </Head>
      <div className={styles.page}>
        <div className={styles.scoremain}>
          <span className={styles.live}>Live</span>
          <span className={styles.dot}></span>
          <div className={styles.score}>
            <div className={styles.match}>
              <span className={styles.grp1}>Group A</span>
              <span className={styles.crp1}>A</span>
              <span className={styles.vs1}>0:3</span>
              <span className={styles.crp1}>B</span>
              <span className={styles.grp1}>Group B</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.mainHead}>Kho-Kho</h1>
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
