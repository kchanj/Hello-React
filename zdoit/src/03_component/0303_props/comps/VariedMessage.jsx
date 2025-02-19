import React from 'react';
import PropType from 'prop-types';

class VariedMessage extends React.Component {
    render() {

        const { name,
                male,
                age,
                lotto,
                family,
                motto,
                greet } = this.props;

        return (
            <div className="message-container">
                {this.props.children}
                <div>이름: {name}</div>
                <div>성별: {male ? '남자' : '여자'}</div>
                <div>나이: {age}</div>
                <div>취미: {lotto}</div>
                <div>가족: {String(Object.entries(family))}</div>
                <div>좌우명: {motto}</div>
                <div>메소드: {String(greet)}</div>
            </div>
        )
    }
}

VariedMessage.PropType = {
    name: PropType.string.isRequired,
    male: PropType.bool,
    age: PropType.number,
    lotto: PropType.arrayOf(PropType.number),
  //family: PropType.object,
    family: PropType.shape({
        father: PropType.string,
        mother: PropType.string,
        grandparents: PropType.bool
    }),
    motto: PropType.node,
    greet: PropType.func
}

VariedMessage.defaultProps = {
    age: 30,
    lotto: [1, 2, 3, 4, 5, 6]
}

export default VariedMessage;