import React from 'react';
import StudiesSection from '../../components/StudiesSection';
import styles from '../../components/Studies1.module.css';

const studies2 = () => (
  <div style={{ width: '1000px', margin: '0 auto' }}>
    <StudiesSection />
    <div style={{ marginTop: '60px' }}>
      <h3>2. 패스트캠퍼스</h3>
      <p>
        HTML, CSS, JS 웹 퍼블리싱에 대한 기초를 자세히 배울 수 있었던 인강이었다. 스타벅스 메인페이지를 만들어보면서
        레이아웃 잡는법과 간단한 js모듈들을 사용해보았다.
      </p>
      {/* <a href="https://wizardly-chandrasekhar-941eb3.netlify.app/" target="_parent" rel="noreferrer"><u>링크</u></a> */}
    </div>
    <div className={styles.s4} style={{ marginRight: 10 }} />
    <div className={styles.s5} style={{ marginRight: 10 }} />
    <div className={styles.s6} style={{ marginRight: 10 }} />
    <div className={styles.s7} />
  </div>
);

export default studies2;
