import { useRef, useState } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
const Banner = () => {
    const firstRef = useRef()
    const imgRef = useRef()
    const thirdRef = useRef()
    const fifthRef = useRef()
    const { contextSafe } = useGSAP()
    const firstAnimate = contextSafe(() => {
        gsap.from(firstRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            scale: .5,
            rotate: 720,
            yoyo: true,

        })
    })
    const randomX = gsap.utils.random(-100, 100, 10)
    const randomY = gsap.utils.random(-50, 100, 10)
    const rotate = gsap.utils.random(-360, 360, 60)
    const [xValue, setXValue] = useState(0)
    const [yValue, setYValue] = useState(0)
    const [roti, setRoti] = useState(0)
    // const flyMe = contextSafe(() => {
    //     gsap.to()
    // })
    useGSAP(() => {
        gsap.to(imgRef.current, {
            y: yValue,
            x: xValue,
            duration: .5,
            rotate: roti
        })
    }, [xValue, yValue, rotate])

    useGSAP(() => {

        gsap.to(thirdRef.current, {
            x: 280,
            duration: 2,
            yoyo: true,
            repeat: -1,
            opacity: 2
        })
        gsap.to(fifthRef.current, {
            x: -280,
            duration: 2,
            yoyo: true,
            repeat: -1,
            opacity: 1,
        })
    })
    return (
        <div className="flex flex-col md:flex-row items-center justify-evenly *:text-center min-h-screen max-w-6xl mx-auto">
            <div>
                <button onClick={firstAnimate} className="bg-red-400 px-5 py-2 rounded-md text-white font-semibold active:scale-105">Rotate Me</button>
                <div ref={firstRef} className="min-w-[200px] min-h-[200px] bg-red-400 mt-20"></div>
            </div>
            <div>
                <button onClick={() => {
                    setXValue(randomX)
                    setYValue(randomY)
                    setRoti(rotate)
                }} className="bg-green-600 px-5 py-2 rounded-md text-white font-semibold active:scale-105">Hit Me</button>
                <div className="min-w-[200px] min-h-[200px] mt-20">
                    <img ref={imgRef} className="size-40" src="https://i.pinimg.com/originals/d7/ff/9e/d7ff9ed48522bb892df3c62c41a6f3c6.png" alt="" />
                </div>
            </div>
            <div>
                <div ref={thirdRef} className="min-w-[200px] min-h-[200px] rounded-full bg-blue-400 mt-20"></div>
            </div>
            <div>
                <div ref={fifthRef} className="min-w-[200px] min-h-[200px] rounded-full bg-amber-400 mt-20"></div>
            </div>
        </div>
    );
};

export default Banner;