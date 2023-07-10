import { useContext, createContext, useState } from "react";

interface MycontextType  {
    theme: string;
    setTheme: (value: string) => void;
    ActiveNavbar: boolean;
    setActiveNavbar: (value: boolean) => void;
    ActiveNavbarOnScroll:()=>void;
}
const MyContext = createContext<MycontextType>({
    theme:"dark",
    setTheme:()=>{},
    ActiveNavbar : false,
    setActiveNavbar :()=>{} , 
    ActiveNavbarOnScroll:()=>{}
})

const MyProvider = ({ children }: any) => {

    const [theme, setTheme] = useState("dark")
    const [ActiveNavbar, setActiveNavbar] = useState(false)
    const ActiveNavbarOnScroll=()=>{
      const scrollPosition = window.pageYOffset
        if (scrollPosition > 400) {
            setActiveNavbar(true)
          } else {
            setActiveNavbar(false)
          }
          
    }
    return (

        <MyContext.Provider value={{ theme, setTheme, ActiveNavbar, setActiveNavbar , ActiveNavbarOnScroll}}>

            {children}
        </MyContext.Provider>
    )

}
export default MyProvider
export const useStateContext = () => useContext(MyContext) 