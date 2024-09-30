import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap';

const TextWithPin = () => {
    const textRef = useRef();
    const parentRef = useRef();

    useGSAP(() => {
        gsap.to(textRef.current, {
            transform: 'translateX(-80%)',
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: parentRef.current,
                scroller: 'body',
                start: 'top 0%',
                end: 'top -100%',
                scrub: 2,
                pin: true,
            }
        });
    });

    return (
        <div className="bg-lime-50 overflow-x-hidden">
            <div ref={parentRef} className="relative">
                <h1
                    ref={textRef}
                    className="text-[10vw] sm:text-[15vw] md:text-[20vw] lg:text-[30vw] font-bold uppercase text-nowrap"
                >
                    exploring
                </h1>
            </div>
        </div>
    );
};

export default TextWithPin;
