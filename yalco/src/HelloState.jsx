import { useState } from "react"

/** 간단한 Count 버튼 */
const SimpleCountButton = () => {

    const [count, setCount] = useState(0);
    console.log("SimpleCountButton")
    console.log(useState(0));

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </>
    )
}

/** 간단한 토글 버튼 */
const TogglePinnButton = () => {

    const [isPinned, setPinned] = useState(false);

    const togglePinned = () => {
        setPinned(!isPinned);
    }

    return (
        <>
            <button onClick={togglePinned}>
                {isPinned && '📌'} 동해물과 백두산이
            </button>
            <button onClick={togglePinned}>
                {isPinned && '📌'} 남산 위에 저 소나무
            </button>
        </>
    )
}

/** 1에서 5까지 합하는 버튼 */
const SumTotalButton = () => {

    const [count, setCount] = useState(0);

    const sumTotal = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 2);
        setCount(prev => prev + 3);
        setCount(prev => prev + 4);
        setCount(prev => prev + 5);
    }

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={sumTotal}>
            1에서 5까지 합하기
            </button>
            <button onClick={() => setCount(0)}>
            초기화
            </button>
        </>
    )
}

/** Todo List 관리하기 */
const TodoListManager = () => {

    const [todoList, setTodoList]
        = useState(["Learn React", "Build a project"]);

    const [newTodo, setNewTodo]
        = useState("Hello React");

    const delTodoList = (index) => {
        setTodoList(
            todoList.filter((e, i) => i !== index)
        );
    }

    const addTodoList = () => {
        if(!newTodo) {
            return;
        }

        setTodoList(
            [...todoList, newTodo]
        );
        setNewTodo("");
    }

    return (
        <>
            <p>Typing : {newTodo}</p>
            <input type="text"
                   value={newTodo}
                   onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodoList}>
                Add Todo
            </button>

            <h3>Toto List</h3>
            <ul>
                {
                    todoList.map((todo, index) => {
                        return (
                            <li key={index}>
                                {todo}
                                <button onClick={() => delTodoList(index)}>Delete</button>
                            </li>
                        )
                    }) 
                }
            </ul>
        </>
    )
}

/** 사용자 프로필 관리하기 */
const UserProfileManager = () => {

    const users = ['Alice', 'Bob', 'Clark'];
    const [user, setUser] = useState(users[0]);
    const [status, setStatus] = useState(true);

    console.log('Rendered UserProfileManager');

    return (
        <>
            <h3>User Profile</h3>
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <li key={index}>
                                {user}
                            </li>
                        )
                    }) 
                }
            </ul>
            <button onClick={() => setUser(
                users[(users.indexOf(user)+1) % users.length]
            )}>
                Switch User
            </button>
            <button onClick={() => setStatus(!status)}>
                Toggle Status
            </button>
            <p>
                {status ? 'Active' : 'Inactive'}
            </p>

            {/* user를 자식 컴포넌트로 전달 */}
            <UserProfile name={user} />
        </>
    )
}

const UserProfile = ({name}) => {

    const [status, setStatus] = useState('Available');

    console.log('Rendered UserProfile');

    return (
        <div className="user-profile">
            <h3>{name}</h3>
            <p>{status}</p>
            <button onClick={() => setStatus('Available')}>
                Set Available
            </button>
            <button onClick={() => setStatus('Away')}>
                Set Away
            </button>
        </div>
    )
}

/** 온도 변환기 */
const TempConverter = () => {

    const [temp, setTemp] = useState("");
    const [unit, setUnit] = useState("Celsius");

    // 다시 랜더링되면서 온도가 변환됨(자식 컴포넌트에서 setState 함수 호출)
    const _temp = (unit === "Celsius") ? (temp*9/5 + 32).toFixed(1)
                                       : ((temp-32) * 5/9).toFixed(1);

    return (
        <div>
            <h3>Temperature Converter</h3>
            <TempValueComp temp={temp}
                           unit={unit}
                           onTempChange={setTemp} />
            <TempUnitComp unit={unit}
                          onUnitChange={setUnit} />
            <p>Converted : { temp ? _temp : "--"} {unit === "Celsius" ? "℉" : "℃"}</p>
        </div>
    )
}

const TempValueComp = ({temp, unit, onTempChange}) => {
    return (
        <div className="temp-input">
            <input type="number"
                   value={temp}
                   onChange={(e) => onTempChange(e.target.value)}
                   placeholder={`In ${unit}`} />
            <span> {unit}</span>
        </div>
    )
}

const TempUnitComp = ({unit, onUnitChange}) => {
    return (
        <div className="unit-selector">
            <label>
                <input type="radio"
                       value="Celsius"
                       checked={unit === "Celsius"}
                       onChange={(e) => onUnitChange(e.target.value)} />
                Celsius
            </label>
            <label>
                <input type="radio"
                       value="Fahrenheit"
                       checked={unit === "Fahrenheit"}
                       onChange={(e) => onUnitChange(e.target.value)} />
                Fahrenheit
            </label>
        </div>
    )
}

/** 사용자 권한 관리하기 */
const UserRoleManager = () => {

    const roles = ['user', 'admin', 'guest'];
    const [formData, setFormData] = useState({
        username: '',
        subscribed: false,
        role: 'user'
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newFormData = {
            ...formData,
            [name]: (type === 'checkbox' ? checked : value)
        }

        setFormData(newFormData);
    };

    return (
        <form>
            <p>Name: {formData.username}</p>
            <p>Subscription: {formData.subscribed && 'Subscribed'}</p>
            <p>Role: {formData.role}</p>
            <hr/>
            <input type="text"
                   name="username"
                   placeholder="Username"
                   value={formData.username}
                   onChange={(e) => handleChange(e)} />
            <br/>
            <label>
                <input type="checkbox"
                    name="subscribed"
                    checked={formData.subscribed}
                    onChange={(e) => handleChange(e)} />
                Subscription
            </label>
            <br/>
            <select name="role"
                    value={formData.role}
                    onChange={(e) => handleChange(e)}>
                { roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                )) }
            </select>
        </form>
    )
}

export {
    SimpleCountButton,
    TogglePinnButton,
    SumTotalButton,
    TodoListManager,
    UserProfileManager,
    TempConverter,
    UserRoleManager
}