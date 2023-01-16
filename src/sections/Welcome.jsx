import styled from "styled-components";
import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/ThemeContext";
import hawaii from '../assets/IMG_3749.jpg';
import socials from "../data/socials";
import SVG from "../components/SVG";

const Landing = styled.div`
  background-image: url(${props => props.bg});
  min-height: 70vh;
  min-width: 100vw;
  background-size: cover;
  background-position: center;
  background-color: black;
  margin-bottom: 2em;
`

export default function Welcome({ DEVELOPER }) {
    const landingRef = useRef(null);
    const { setTargetReached, scrollPosition } = useContext(ThemeContext);

    useEffect(() => { 
        const landing = landingRef.current.getBoundingClientRect();
        if (scrollPosition >= (landing.height / 4)) {
          setTargetReached(true)
        } else {
          setTargetReached(false)
        };
    
        console.log('scroll pos', scrollPosition)
      }, [scrollPosition]);

    return <>
        <Landing ref={landingRef} bg={hawaii}>
            <div className='min-w-screen flex flex-col items-start lg:pl-40 pl-10 justify-center text-white min-h-screen bg-gray-900 bg-opacity-90'>
                <div className={`logo text-4xl md:max-w-[550px] max-w-[350px]`}>
                <span>Hi, I'm</span> <br/>
                <span className='text-7xl'>{DEVELOPER.first} {DEVELOPER.last}</span>
                </div>
                <div className='flex gap-[3em] m-6'>
                {socials.map((social, socIndx) => {
                    return <a href={social.link} 
                        key={socIndx} 
                        className={`cursor-pointer`}
                        target="_blank">
                            <SVG more={`hover:scale-[2] transease scale-[2.1]`} icon={social.id} color={'white'} />
                        </a>
                })}
                </div>
            </div>
        </Landing>
    </>
}