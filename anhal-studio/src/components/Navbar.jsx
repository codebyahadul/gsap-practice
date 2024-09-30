import WaveHover from "./WaveHover";

const Navbar = () => {
    return (
        <div className="flex justify-between py-5 px-5 md:py-8 md:px-8">
            <div className="flex justify-evenly flex-1">
                <div className="text-start w-full">
                    <h1 className="text-xl font-bold">
                    <WaveHover text="Hello, World!" />
                    </h1>
                </div>
                <ul className="uppercase w-full font-semibold">
                    <li>
                        <WaveHover text='Home' />
                    </li>
                    <li>
                    <WaveHover text='Projects' />
                    </li>
                    <li><WaveHover text='About' /></li>
                    <li><WaveHover text='Lab' /></li>
                </ul>
            </div>
            <div className="flex-1 text-end text-lg font-medium">
                <button><WaveHover text="Let's talk +" /></button>
            </div>
        </div>
    );
};

export default Navbar;