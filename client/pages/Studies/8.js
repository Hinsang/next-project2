import React from 'react';
import StudiesSection from '../../components/StudiesSection';
import styles from '../../components/Studies1.module.css';

const studies8 = () => (
  <div style={{ width: '1000px', margin: '0 auto' }}>
    <StudiesSection />
    <div style={{ marginTop: '60px' }}>
      <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>8. 요즘 만들고 있는 협업사이트 DOCT</div>
      <div style={{ fontSize: '16px', fontWeight: 500 }}>
        도메인까지 구매했으니 틈틈히 만들어볼 생각이다. 프론트 부분, 리덕스, 사가는 연결해두었다.
      </div>
    </div>
    <div className={styles.s34} style={{ marginRight: 10 }} />
  </div>
);

export default studies8;
