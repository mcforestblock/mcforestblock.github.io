import useDarkMode from '../hook/useDarkMode';
const moon = <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
const sun = <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>

const ThemeSwitch = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
       <div className='fixed bottom-1 w-full flex right-1 transition duration-1000'>
        <span onClick={() => setTheme(colorTheme)} className="text-slate-800 m-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-slate-100 transition duration-1000">
        {(colorTheme === "light") ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{sun}</svg>:
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{moon}</svg>}
        </span>
       </div> 
    )
}

export default ThemeSwitch