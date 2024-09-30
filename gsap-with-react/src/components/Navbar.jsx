import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { useRef } from 'react';
const Navbar = () => {
    const logoRef = useRef()
    const tl = gsap.timeline()
    useGSAP(() => {
        tl.from(logoRef.current, {
            y: -30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
        })
        tl.from('.linkList h2', {
            y: -30,
            opacity: 0,
            stagger: 0.3
        })
    })
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center my-5 max-w-6xl mx-auto">
            <div>
                <h1 ref={logoRef} className="text-xl md:text-2xl font-bold">GSAP With React</h1>
            </div>
            <div className="flex items-center gap-8 *:cursor-pointer text-lg font-medium linkList">
                <h2>Home</h2>
                <h2>Products</h2>
                <h2>Contact</h2>
                <h2>About Us</h2>
            </div>
        </nav>
    );
};

export default Navbar;