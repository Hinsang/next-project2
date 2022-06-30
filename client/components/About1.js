import React from 'react';
import styles from './About1.module.css';

const About1 = () => (
  <div style={{ width: '70%', height: 800, border: '10px solid skyblue', textAlign: 'center' }}>
    <div style={{ fontSize: '19px', fontWeight: 500, marginTop: 30 }}>
      <h2>
        <u style={{ textUnderlinePosition: 'under' }}>
          Tech Stack!!
        </u>
      </h2>
    </div>
    <div className={styles.flex} style={{ weigth: '60%' }}>
      <div>
        <div className={styles.skill_1} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>HTML</div>
      </div>
      <div>
        <div className={styles.skill_2} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>CSS</div>
      </div>
      <div>
        <div className={styles.skill_3} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>JS</div>
      </div>
      <div>
        <div className={styles.skill_4} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>Scss</div>
      </div>
      <div>
        <div className={styles.skill_5} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>Bootstrap</div>
      </div>
      <div>
        <div className={styles.skill_6} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>Git</div>
      </div>
      <div>
        <div className={styles.skill_7} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>React</div>
      </div>
      <div>
        <div className={styles.skill_8} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>Redux</div>
      </div>
      <div>
        <div className={styles.skill_9} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>Nodejs</div>
      </div>
      <div>
        <div className={styles.skill_10} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>Next</div>
      </div>
      <div>
        <div className={styles.skill_11} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>Express</div>
      </div>
      <div>
        <div className={styles.skill_12} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>MongoDB</div>
      </div>
      <div>
        <div className={styles.skill_13} />
        <div style={{ marginTop: '-30px', fontSize: '19px', fontWeight: 600 }}>MySQL</div>
      </div>
    </div>
  </div>
);

export default About1;
