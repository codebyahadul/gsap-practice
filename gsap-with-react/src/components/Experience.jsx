import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Experience = () => {
    const experiences = [
        {
            company: "Tech Innovators",
            role: "Front-End Developer",
            duration: "Jan 2023 - Present",
            description: "Developed responsive user interfaces using React.js and Tailwind CSS.",
            icon: "💻",
        },
        {
            company: "Creative Solutions",
            role: "Web Developer Intern",
            duration: "June 2022 - Dec 2022",
            description: "Improved website performance and SEO using modern technologies.",
            icon: "🌐",
        },
        {
            company: "Freelance",
            role: "Full-Stack Developer",
            duration: "Jan 2021 - May 2022",
            description: "Built custom web applications for various clients.",
            icon: "🛠️",
        },
    ];

    const lineRef = useRef();
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#experience',
                start: 'top 20%',
                end: 'top -100%',
                scrub:1,
                pin: true,
            },
        });

        tl
            .to(lineRef.current, { height: '100px', opacity: 1, duration: 1 })
            .to('.icon-1', { display: 'block' })
            .from('.experience-0', { x: 50, opacity: 0, duration: 2 })
            .to(lineRef.current, { height: '380px', opacity: 1, duration: 1 })
            .to('.icon-2', { display: 'block',})
            .from('.experience-1', { x: -50, opacity: 0, duration: 2 })
            .to(lineRef.current, { height: '600px', opacity: 1, duration: 1 })
            .to('.icon-3', { display: 'block' })
            .from('.experience-2', { x: -50, opacity: 0, duration: 2 });

        return () => {
            if (tl) {
                tl.kill();
            }
        };
    }, []);

    return (
        <section id="experience" className="bg-gray-900 text-white py-12 px-4 md:px-20">
            <div className="max-w-6xl mx-auto relative experience-container">
                <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
                {/* Vertical Line */}
                <div ref={lineRef} className="absolute left-1/2 transform -translate-x-1/2 h-0 w-1 bg-teal-500 hidden md:block"></div>
                <div className="space-y-12 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-teal-500 h-8 w-8 rounded-full z-10 text-2xl text-white hidden icon-1 top-20">{experiences[0].icon}</div>
                    {/* Connector Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-teal-500 h-8 w-8 rounded-full z-10 text-2xl text-white hidden icon-2 top-[300px]">{experiences[1].icon}</div>
                    {/* Connector Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-teal-500 h-8 w-8 rounded-full z-10 text-2xl text-white hidden icon-3 bottom-[40px]">{experiences[2].icon}</div>
                    
                    {/* Experience 1 */}
                    <div className="experience-0 flex flex-col items-center md:flex-row-reverse md:justify-between relative">
                        <div className="w-full md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg text-left">
                            <h3 className="text-2xl font-semibold">{experiences[0].role}</h3>
                            <p className="text-lg mb-2">{experiences[0].company}</p>
                            <p className="text-sm mb-2">{experiences[0].duration}</p>
                            <p className="text-gray-400">{experiences[0].description}</p>
                        </div>
                    </div>
                    
                    {/* Experience 2 */}
                    <div className="experience-1 flex flex-col md:flex-row items-center md:justify-between relative">
                        <div className="w-full md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg text-left">
                            <h3 className="text-2xl font-semibold">{experiences[1].role}</h3>
                            <p className="text-lg mb-2">{experiences[1].company}</p>
                            <p className="text-sm mb-2">{experiences[1].duration}</p>
                            <p className="text-gray-400">{experiences[1].description}</p>
                        </div>
                    </div>
                    
                    {/* Experience 3 */}
                    <div className="experience-2 flex flex-col items-center md:flex-row-reverse md:justify-between relative">
                        <div className="w-full md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg text-left">
                            <h3 className="text-2xl font-semibold">{experiences[2].role}</h3>
                            <p className="text-lg mb-2">{experiences[2].company}</p>
                            <p className="text-sm mb-2">{experiences[2].duration}</p>
                            <p className="text-gray-400">{experiences[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
