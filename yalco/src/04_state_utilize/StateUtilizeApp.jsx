import { UserProfileManager } from './components/UserProfileManager'
import { TempConverter } from './components/TempConverter'
import { UserRoleManager } from './components/UserRoleManager'

const StateUtilizeApp = () => {
    return (
        <>
            <UserProfileManager />
            <TempConverter />
            <UserRoleManager />
        </>
    )
}

export default StateUtilizeApp