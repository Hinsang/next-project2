import React from 'react';
import styles from './introduce1.module.css';

const Introduce1 = () => (
  <div style={{ display: 'flex' }}>
    <span style={{ width: '60%' }}>
      <h3>
        프론트엔드 개발자를 꿈꾸는 황인상입니다.
        <br />
        컴퓨터에 관심이 많아서 컴퓨터 소프트웨어 공학과 4년제를 전공했고,
        <br />
        국비지원을 받고, 6개월 이상 인강으로 공부하였습니다.
        <br />
        국비지원학원은 너무 디자인쪽에만 치우쳐져 있는 것 같이 느껴져서
        <br />
        전반적인 흐름을 이해하기는 어려워 보였습니다. 그래서 프론트가
        <br />
        서버와 통신한다는 점에서 백엔드 지식도 알아야 한다고 생각했고,
        <br />
        그래서 프론트엔드에 중점된 풀스택 인강을 듣게되었습니다.
        <br />
        들으면서 부족한 부분이나 중요한 부분은 개인 블로그에 정리하면서 공부했습니다.
        <br />
        아직 신입이기에 부족한 부분도 많이 있겠지만, 막히는 부분이 있다면
        <br />
        지금까지 배운 10여개 인강과 블로그 정리를 참고하고, 적절한 구글링,
        <br />
        책임감과 인내심으로 성실하게 일을 수행하겠습니다.
        <br />
        또한, 앞으로도 꿈을 위해 꾸준히 공부하며 실력을 정진하겠습니다.
      </h3>
    </span>
    <span style={{ width: '40%' }}>
      <div className={styles.me} />
    </span>
  </div>
);

export default Introduce1;
