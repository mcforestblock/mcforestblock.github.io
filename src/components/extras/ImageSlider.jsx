import { useState } from "react";

const left = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
const right = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const previous = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const next = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // const toSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex)
    // }

    return (
        <div className={"h-60 w-full relative rounded-t-xl items-center"}>
            {/* <div className="flex flex-row absolute bottom-1 z-10 mx-auto bg-slate-100 dark:bg-slate-800 rounded-lg drop-shadow-md transition duration-1000">
                {
                    slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="text-slate-800 dark:text-slate-100 mx-1 cursor-pointer drop-shadow-md transition duration-1000" onClick={() => toSlide(slideIndex)}>◎</div>
                    ))
                }
            </div> */}
            <div className={"h-60 relative rounded-t-xl bg-cover bg-center z-0"} style={carouselStyle}></div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-800 dark:text-slate-100 z-10 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl drop-shadow-md transition duration-1000" onClick={previous}>{left}</div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-800 dark:text-slate-100 z-10 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl drop-shadow-md transition duration-1000" onClick={next}>{right}</div>
        </div>
    )
}
export default ImageSlider;