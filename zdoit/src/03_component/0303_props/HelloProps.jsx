import React from 'react';
import SimpleMessage from './comps/SimpleMessage';
import StringMessage from './comps/StringMessage';
import VariedMessage from './comps/VariedMessage';

class HelloProps extends React.Component {
    render() {

        const name = "Kim";
        const male = true; //남자: true, 여자: false/null/undefined
        const age = 21;
        const lotto = [2, 3, 5, 7, 11, 13];
        const family = {father: 'Kim', mother: 'Lee', grandparents: true};
        const motto = <span>열심히 살자</span>;
        const greet = () => console.log('Hello');

        return (
            <div>
                <h3>3-3 컴포넌트에 데이터를 전달하는 프로퍼티</h3>
                <SimpleMessage message="Hello Kim" />
                <StringMessage message="Hello Lee" />
                <VariedMessage name={name}
                               male={male}
                               age={age}
                               lotto={lotto}
                               family={family}
                               motto={motto}
                               greet={greet}>
                    <h4>Varied Message</h4>
                </VariedMessage>
            </div>
        )
    }
}

export default HelloProps;