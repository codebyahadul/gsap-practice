/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { gsap } from 'gsap';

const WaveHover = ({ text }) => {
  const charsRef = useRef([]);

  const handleMouseEnter = () => {
    charsRef.current.forEach((char, index) => {
      gsap.fromTo(
        char,
        { color: '#000000' ,ease:'circ.in' },
        {
          color: '#FF6F61',
          duration: .5,
          delay: index * 0.1, 
          onComplete: () => {
            gsap.to(char, { color: '#000000', duration: 0.1, }); 
          },
        }
      );
    });
  };

  return (
    <span className="wave-hover cursor-pointer" onMouseEnter={handleMouseEnter}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="wave-char"
          ref={(el) => (charsRef.current[index] = el)}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default WaveHover;
