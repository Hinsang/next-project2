import React from 'react';
import StudiesSection from '../../components/StudiesSection';
import styles from '../../components/Studies1.module.css';

const studies4 = () => (
  <div style={{ width: '1000px', margin: '0 auto' }}>
    <StudiesSection />
    <div style={{ marginTop: '60px' }}>
      <h3>4. 코딩애플 React 강의</h3>
      React, Nodejs를 집중적으로 배웠고, 이를 바탕으로 개발블로그, 쇼핑몰페이지, todoApp을 만들어보았다.
    </div>
    <div className={styles.s10} style={{ marginRight: 10 }} />
    <div className={styles.s11} style={{ marginRight: 10 }} />
    <div className={styles.s12} style={{ marginRight: 10 }} />
    {/* <div className={styles.s13} style={{ marginRight: 10 }} /> */}
    <div className={styles.s14} style={{ marginRight: 10 }} />
  </div>
);

export default studies4;
