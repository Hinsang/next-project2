import Link from 'next/link';
import React from 'react';
import styles from './Studies1.module.css';

const StudiesSection = () => (
  <div>
    <div className="text" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px' }}>공부한 내용들</div>
    <div style={{ display: 'flex' }}>
      <Link href="/Studies/1">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>1</div>
        </div>
      </Link>
      <Link href="/Studies/2">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>2</div>
        </div>
      </Link>
      <Link href="/Studies/3">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>3</div>
        </div>
      </Link>
      <Link href="/Studies/4">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>4</div>
        </div>
      </Link>
      <Link href="/Studies/5">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>5</div>
        </div>
      </Link>
      <Link href="/Studies/6">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>6</div>
        </div>
      </Link>
      <Link href="/Studies/7">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>7</div>
        </div>
      </Link>
      <Link href="/Studies/8">
        <div className={styles.studies_box}>
          <div className={styles.studies_link}>8</div>
        </div>
      </Link>
    </div>
  </div>
);

// StudiesSection.propTypes = {
//   children: PropTypes.elementType.isRequired,
// };

export default StudiesSection;
