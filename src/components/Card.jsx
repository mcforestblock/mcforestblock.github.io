import logo from "../images/fblogo.svg"
import './card.css'
import useDarkMode from '../hook/useDarkMode';
import Carousel from "./extras/Carousel";
import Links from "./extras/Links";
const Card = () => {
    useDarkMode();
    return(
        <div className="flex h-screen justify-center">
            <div className="my-auto flex flex-col">
            <Carousel className="h-full"/>
                <div className="w-11/12 flex container flex-col border bg-slate-100 border-slate-200 rounded-b-xl p-20 dark:bg-slate-800 dark:border-slate-700 drop-shadow-md transition duration-1000">
                    <div className="flex flex-row m-auto items-center align-middle justify-center drop-shadow-md">
                        <img alt="logo" src={logo} className="w-10 sm:w-10 md:w-20 lg:w-28 md:h-auto md:rounded-none rounded-full mx-auto"/>
                        <h1 className=" mx-5 font-bold tracking-wider md:text-5xl lg:text-6xl text-slate-800 dark:text-slate-100 sm:text-3xl  transition duration-1000 "><strong className="hover:text-green-600 transition duration-500">Forestblock</strong>.net</h1>
                    </div>
                </div> 
            <Links/>
            </div>
        </div>
    )
}

export default Card;