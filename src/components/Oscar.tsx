import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    const theme = useContext(ThemeContext);
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        // If type assertion is provided at the time of createContext no need for checking for usercontext here
        // if(userContext) {
            userContext.setUser({
                name: "HEY THERE",
                email: "hey.theme@gmail.com"
            })
        // }
    }
    const handleLogout = () => {
        // if(userContext) {
            userContext.setUser(null)
        // }
    }
    return (
    <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text}}>
        <h2>{props.children}</h2>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h3>User name is: {userContext.user?.name}</h3>
    </div>)
}