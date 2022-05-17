import React from 'react';
import styles from './Studies1.module.css';

const Studies1 = () => (
  <div>
    <div>
      <h3>1. 생활코딩</h3>
      맨처음에 코딩을 배우기 위해서 시작한 강의, HTML, CSS, JS, Nodejs등의 기초를 배웠다.
      이를 활용해 야간모드전환, 유튜브첨부, 디스커스 채팅기능, 메모기능 등을 추가해보았다.
      <br />
      <div className={styles.s1} style={{ marginTop: 10, marginRight: 10 }} />
      <div className={styles.s2} style={{ marginRight: 10 }} />
      <div className={styles.s3} />
    </div>
    <br />
    <div>
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
    <div>
      <h3>3. 코딩앙마</h3>
      JS와 React의 기본과정을 익힐 수 있었다. 리액트 훅을 활용하여 토익 영단어장을 만들었다.
    </div>
    <br />
    <div className={styles.s8} style={{ marginRight: 10 }} />
    <div className={styles.s9} style={{ marginRight: 10 }} />
    <div style={{ marginTop: 60, marginBottom: 20 }}>
      <h3>4. 코딩애플 React 강의</h3>
      React, Nodejs를 집중적으로 배웠고, 이를 바탕으로 개발블로그, 쇼핑몰페이지, todoApp을 만들어보았다.
    </div>
    <div className={styles.s10} style={{ marginRight: 10 }} />
    <div className={styles.s11} style={{ marginRight: 10 }} />
    <div className={styles.s12} style={{ marginRight: 10 }} />
    {/* <div className={styles.s13} style={{ marginRight: 10 }} /> */}
    <div className={styles.s14} style={{ marginRight: 10 }} />
    <br />
    <div style={{ marginTop: 60, marginBottom: 20 }}>
      <h3>5. 기타 사이드 프로젝트</h3>
      화장품 쇼핑몰 페이지, 여행상품 업로드 페이지 등등
    </div>
    <div className={styles.s15} style={{ marginRight: 10 }} />
    <div className={styles.s16} style={{ marginRight: 10 }} />
    <div className={styles.s17} style={{ marginRight: 10 }} />
    <div className={styles.s18} style={{ marginRight: 10 }} />
    <div className={styles.s19} style={{ marginRight: 10 }} />
    <div style={{ marginTop: 60, marginBottom: 20 }}>
      <h3>6. 리액트 노드버드 SNS 만들기</h3>
      SNS 만들기 풀스택 심화강좌인데 React, next, saga, redux와 server, MySQL을 연결하는 전체적인 흐름과
      인피니티 스크롤, 서버사이드 랜더링 등을 이해하는데 많은 도움을 주었다. 강의하시는분도 이거하나면 신입으로 취업할 수 있다고 하셔서 믿음이 갔다.
      취업 후에도 이 강의를 전체적으로 한번 더 복습할 예정이다.
    </div>
    <div className={styles.s28} style={{ marginRight: 10 }} />
    <div className={styles.s29} style={{ marginRight: 10 }} />
    <div className={styles.s30} style={{ marginRight: 10 }} />
    <div className={styles.s31} style={{ marginRight: 10 }} />
    <div className={styles.s32} style={{ marginRight: 10 }} />
    <div className={styles.s33} style={{ marginRight: 10 }} />
    <div style={{ marginTop: 60, marginBottom: 20 }}>
      <h3>7. 이미지관리 풀스택</h3>
      MERN스택으로 만들었으며, next, saga, redux를 활용해 새롭게 리뉴얼 해보았다.
    </div>
    <div style={{ marginTop: 20 }}>
      <div className={styles.s21} style={{ marginRight: 10 }} />
      <div className={styles.s22} style={{ marginRight: 10 }} />
    </div>
    <div style={{ marginTop: 20 }}>
      <div className={styles.s23} style={{ marginRight: 10 }} />
      <div className={styles.s24} style={{ marginRight: 10 }} />
    </div>
    <div style={{ marginTop: 20 }}>
      <div className={styles.s25} style={{ marginRight: 10 }} />
      <div className={styles.s26} style={{ marginRight: 10 }} />
    </div>
    <div style={{ marginTop: 80, marginBottom: 20 }}>
      <h3>지금까지 했던 프로젝트들...</h3>
    </div>
    <div className={styles.s27} style={{ marginRight: 10 }} />
  </div>
);

export default Studies1;
