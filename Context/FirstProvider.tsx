import { useContext, createContext, useState } from "react";

interface MycontextType  {
    theme: string;
    setTheme: (value: string) => void;
    ActiveNavbar: boolean;
    setActiveNavbar: (value: boolean) => void;
    ActiveNavbarOnScroll:()=>void;
    loading:boolean;
    setLoading :(val:boolean)=>void;
}
const MyContext = createContext<MycontextType>({
    theme:"dark",
    setTheme:()=>{},
    ActiveNavbar : false,
    setActiveNavbar :()=>{} , 
    ActiveNavbarOnScroll:()=>{},
    loading:true,
    setLoading :()=>{},

})

const MyProvider = ({ children }: any) => {

    const [loading, setLoading] = useState(true)
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

        <MyContext.Provider value={{ theme, setTheme, ActiveNavbar, setActiveNavbar , ActiveNavbarOnScroll , loading , setLoading}}>

            {children}
        </MyContext.Provider>
    )

}
export default MyProvider
export const useStateContext = () => useContext(MyContext) 