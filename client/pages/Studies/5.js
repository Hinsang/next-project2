import React from 'react';
import StudiesSection from '../../components/StudiesSection';
import styles from '../../components/Studies1.module.css';

const studies5 = () => (
  <div style={{ width: '1000px', margin: '0 auto' }}>
    <StudiesSection />
    <div style={{ marginTop: '60px' }}>
      <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>5. 기타 사이드 프로젝트</div>
      <div style={{ fontSize: '16px', fontWeight: 500 }}>
        화장품 쇼핑몰 페이지, 여행상품 업로드 페이지 등등
      </div>
    </div>
    <div className={styles.s15} style={{ marginRight: 10 }} />
    <div className={styles.s16} style={{ marginRight: 10 }} />
    <div className={styles.s17} style={{ marginRight: 10 }} />
    <div className={styles.s18} style={{ marginRight: 10 }} />
    <div className={styles.s19} style={{ marginRight: 10 }} />
  </div>
);

export default studies5;
