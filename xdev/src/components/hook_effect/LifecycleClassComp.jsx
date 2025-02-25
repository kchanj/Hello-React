import styles from '../../Card.module.css';
import React from 'react';

class LifecycleClassComp extends React.Component {

    /**
     * 생성자는 해당 컴포넌트가 마운트되기 전에 호출
     * - super(props) 호출
     * - this.state 초기화
     * - 이벤트 처리 메서드 바인딩
     */
    constructor(props) {
        super(props);
        this.state = {count:0};
        console.log(`[LifecycleClassComp] constructor (this=${this.state.count})`);
    }

    /**
     * 컴포넌트 마운트 및 갱신 시에 render 메서드를 호출하기 직전에 호출
     * - state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무 것도 갱신하지 않을 수 있음
     */
    static getDerivedStateFromProps(props, state) {
        console.log(`[LifecycleClassComp] get state (state=${state.count})`);
        return null;
    }

    /**
     * 컴포넌트 갱신 시에 render 메서드를 호출하기 직전에 호출
     * - 현재 state 또는 props의 변화가 컴포넌트의 출력 결과에 영향을 미치는지 여부를 리턴
     * - 기본 동작은 매 state 변화마다 다시 렌더링을 수행
     * - this.props와 nextProps, 그리고 this.state와 nextState를 비교한 뒤 false를 반환하며 갱신 작업을 생략
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[LifecycleClassComp] should update (this=${this.state.count}, next=${nextState.count})`);
        return true;
    }

    /**
     * 반드시 구현돼야하는 유일한 메서드
     * - this.props와 this.state의 값을 활용하여 React 엘리먼트 반환
     */
    render() {
        console.log(`[LifecycleClassComp] render (this=${this.state.count})`);
        return (
            <div className={styles.card}>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.handleCount}>+1</button>
            </div>
        )
    }

    /**
     * 렌더링된 결과가 DOM 등에 반영되기 전에 호출
     * - 컴포넌트가 DOM으로부터 스크롤 위치 등과 같은 정보를 이후 변경되기 전에 얻을 수 있음
     * - 이 메서드가 반환하는 값은 componentDidUpdate()에 인자로 전달됨
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[LifecycleClassComp] get snapshot (prev=${prevState.count}, this=${this.state.count})`);
        return null;
    }

    /**
     * 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
     * - DOM 노드가 있어야 하는 초기화 작업
     * - 네트워크 요청 작업
     */
    componentDidMount() {
        console.log(`[LifecycleClassComp] did mount (this=${this.state.count})`);
        console.log(`------------------------------------------------------------`);
    }

    /**
     * 컴포넌트가 갱신된 직후에 호출, 최초 렌더링에서는 생략됨
     * - DOM 노드을 조작하는 작업
     * - 이전과 현재의 props를 비교하여 네트워크 요청
     * - getSnapshotBeforeUpdate()에서 반환하는 snapshot를 인자로 받음
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`[LifecycleClassComp] did update (this=${this.state.count})`);
        console.log(`------------------------------------------------------------`);
    }

    /**
     * 컴포넌트가 마운트 해제되어 제거되기 직전에 호출
     * - 타이머 제거
     * - 네트워크 요청 취소
     * - 필요한 모든 정리 작업을 수행
     */
    componentWillUnmount() {
        console.log(`[LifecycleClassComp] will unmount (this=${this.state.count})`);
        console.log(`------------------------------------------------------------`);
    }

    handleCount = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
        console.log(`[LifecycleClassComp] handle count`);
    }

}

export default LifecycleClassComp;