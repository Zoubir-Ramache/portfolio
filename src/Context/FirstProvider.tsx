import { useContext, createContext, useState } from "react";

interface MycontextType  {
    theme: string;
    setTheme: (value: string) => void;
    ActiveNavbar: boolean;
    setActiveNavbar: (value: boolean) => void;
}
const MyContext = createContext<MycontextType>({
    theme:"dark",
    setTheme:()=>{},
    ActiveNavbar : false,
    setActiveNavbar :()=>{}
})

const MyProvider = ({ children }: any) => {

    const [theme, setTheme] = useState("dark")
    const [ActiveNavbar, setActiveNavbar] = useState(false)
    return (

        <MyContext.Provider value={{ theme, setTheme, ActiveNavbar, setActiveNavbar }}>

            {children}
        </MyContext.Provider>
    )

}
export default MyProvider
export const useStateContext = () => useContext(MyContext) 