import React from 'react';
import styles from './About1.module.css';

const About1 = () => (
  <div style={{ width: '70%', height: 800, border: '10px solid skyblue', textAlign: 'center' }}>
    <div style={{ fontSize: '19px', fontWeight: 500, marginTop: 50 }}>
      <h2>
        <u style={{ textUnderlinePosition: 'under' }}>
          Tech Stack!!
        </u>
      </h2>
    </div>
    <div className={styles.flex} style={{ weigth: '60%' }}>
      <div>
        <div className={styles.skill_1} />
        <h4 style={{ marginTop: '-30px' }}>HTML</h4>
      </div>
      <div>
        <div className={styles.skill_2} />
        <h4 style={{ marginTop: '-30px' }}>CSS</h4>
      </div>
      <div>
        <div className={styles.skill_3} />
        <h4 style={{ marginTop: '-30px' }}>JS</h4>
      </div>
      <div>
        <div className={styles.skill_4} />
        <h4 style={{ marginTop: '-30px' }}>Scss</h4>
      </div>
      <div>
        <div className={styles.skill_5} />
        <h4 style={{ marginTop: '-30px' }}>Bootstrap</h4>
      </div>
      <div>
        <div className={styles.skill_6} />
        <h4 style={{ marginTop: '-30px' }}>Git</h4>
      </div>
      <div>
        <div className={styles.skill_7} />
        <h4 style={{ marginTop: '-30px' }}>React</h4>
      </div>
      <div>
        <div className={styles.skill_8} />
        <h4 style={{ marginTop: '-30px' }}>Redux</h4>
      </div>
      <div>
        <div className={styles.skill_9} />
        <h4 style={{ marginTop: '-30px' }}>Nodejs</h4>
      </div>
      <div>
        <div className={styles.skill_10} />
        <h4 style={{ marginTop: '-30px' }}>Next</h4>
      </div>
      <div>
        <div className={styles.skill_11} />
        <h4 style={{ marginTop: '-30px' }}>Express</h4>
      </div>
      <div>
        <div className={styles.skill_12} />
        <h4 style={{ marginTop: '-30px' }}>MongoDB</h4>
      </div>
      <div>
        <div className={styles.skill_13} />
        <h4 style={{ marginTop: '-30px' }}>MySQL</h4>
      </div>
    </div>
  </div>
);

export default About1;
