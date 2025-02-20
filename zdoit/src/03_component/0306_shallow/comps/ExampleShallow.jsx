import React from 'react';
import {shallowEqual} from 'shallow-equal';

class ExampleShallow extends React.Component {

    render() {

        const user1 = {name: 'kim', age: 21}
        const user2 = {name: 'kim', age: 21}

        const nums1 = [1, 2, 3, 4];
        const nums2 = [1, 2, 3, 4];

        const users1 = [{name: 'kim', age: 21}, {name: 'lee', age: 22}, {name: 'park', age: 23}];
        const users2 = [{name: 'kim', age: 21}, {name: 'lee', age: 22}, {name: 'park', age: 23}];

        const isUserStrictEqual = (user1 === user2);
        const isUserShallowEqual = shallowEqual(user1, user2);

        const isNumsStrictEqual = (nums1 === nums2);
        const isNumsShallowEqual = shallowEqual(nums1, nums2);

        const isUsersStrictEqual = (users1 === users2);
        const isUsersShallowEqual = shallowEqual(users1, users2);

        return (
            <div>
                <h4>Example Shallow</h4>
                <p>isUserStrictEqual = {String(isUserStrictEqual)}</p>      {/*false*/}
                <p>isUserShallowEqual = {String(isUserShallowEqual)}</p>    {/*true*/}
                <hr/>
                <p>isNumsStrictEqual = {String(isNumsStrictEqual)}</p>      {/*false*/}
                <p>isNumsShallowEqual = {String(isNumsShallowEqual)}</p>    {/*true*/}
                <hr/>
                <p>isUsersStrictEqual = {String(isUsersStrictEqual)}</p>    {/*false*/}
                <p>isUsersShallowEqual = {String(isUsersShallowEqual)}</p>  {/*false*/}
            </div>
        )
    } 
}

export default ExampleShallow;