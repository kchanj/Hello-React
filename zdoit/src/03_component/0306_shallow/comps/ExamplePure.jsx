import React from 'react';

class ExamplePure extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ver: 0,
            users: [{name: 'kim', age: 21}, {name: 'lee', age: 22}]
        };

        this.updateVer1 = this.updateVer1.bind(this);
        this.updateVer2 = this.updateVer2.bind(this);
        this.updateUser1 = this.updateUser1.bind(this);
        this.updateUser2 = this.updateUser2.bind(this);
        this.updateUser3 = this.updateUser3.bind(this);
    }

    updateVer1() {
        this.setState(prev => ({
            ...prev,
            ver: prev.ver
        }));
    }

    updateVer2() {
        this.setState(prev => ({
            ...prev,
            ver: prev.ver + 1
        }));
    }

    updateUser1() {
        this.setState(prev => ({
            ...prev,
            users: prev.users
        }));
    }

    updateUser2() {
        this.setState(prev => ({
            ...prev,
            users: prev.users.map(user => ({...user, age: user.age + 10}))
        }));
    }

    updateUser3() {
        this.setState(prev => ({
            ...prev,
            users: prev.users.map(user => ({...user}))
        }));
    }

    render() {
        console.log(`[ExamplePure] ${this.state.ver}, ${this.state.users[0].age}, ${this.state.users[1].age}`);
        return (
            <div>
                <NormalUserList users={this.state.users} />
                <PureUserList users={this.state.users} />
                <button onClick={this.updateVer1}>버전 유지</button>
                <button onClick={this.updateVer2}>버전 증가</button>
                <button onClick={this.updateUser1}>사용자 유지</button>
                <button onClick={this.updateUser2}>사용자 변경</button>
                <button onClick={this.updateUser3}>사용자 복사</button>
            </div>
        )
    } 
}

class NormalUserList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Example Pure - NormalUserList</h4>
                <ul>
                { this.props.users.map(user => (
                    <li key={user.name}>{user.name} {user.age}</li>
                )) }
                </ul>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`[NormalComponent] componentDidUpdate`);
    }
}

class PureUserList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Example Pure - PureUserList</h4>
                <ul>
                { this.props.users.map(user => (
                    <li key={user.name}>{user.name} {user.age}</li>
                )) }
                </ul>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`[PureComponent] componentDidUpdate`);
    }
}

export default ExamplePure;