import {
    SimpleCountButton,
    TogglePinnButton,
    SumTotalButton,
    TodoListManager,
    UserProfileManager,
    TempConverter,
    UserRoleManager
} from './HelloState'

function HelloStateApp() {
    return (
        <>
            <h2>간단한 Count 버튼</h2>
            <SimpleCountButton />
            
            <h2>간단한 토글 버튼</h2>
            <TogglePinnButton />
            
            <h2>1에서 5까지 합하는 버튼</h2>
            <SumTotalButton />
            
            <h2>Todo List 관리하기</h2>
            <TodoListManager />
            
            <h2>사용자 프로필 관리하기</h2>
            <UserProfileManager />
            
            <h2>온도 변환기</h2>
            <TempConverter />
            
            <h2>사용자 권한 관리하기</h2>
            <UserRoleManager />
        </>
    )
}

export default HelloStateApp