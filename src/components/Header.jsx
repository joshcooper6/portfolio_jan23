import { useContext, useEffect, useState } from "react"
import ThemeContext from "../context/ThemeContext";
import smallIcon from '../assets/joshua-cooper-website-favicon-white.png'
import SVG from "./SVG";
import sections from "../data/sections";

export default function Header(props) {
    const [rounded, setRounded] = useState(false);
    const { theme, setMenuVisible, targetReached, menuVisible } = useContext(ThemeContext);

    // useEffect(() => {
    //     // if (targetReached) { setRounded(true) }
    //     // else { setRounded(false) }
    //     setRounded(targetReached)
    // }, [targetReached]);

    return <>
        <div className={`transease hover:opacity-90 hover:bg-opacity-80 absolute justify-center items-center self-center ${rounded ? 'w-11/12 mt-10 rounded-full' : 'm-0 bg-transparent w-full rounded-none'}  bg-opacity-10 min-h-[100px]`}>
            <div className="w-full p-1 h-full flex justify-between">
                <img src={smallIcon} className={'fadeIn select-none scale-[.8]'} />

                <div className={`self-center mr-10 cursor-pointer transease hover:translate-y-[-5px]`} onClick={() => setMenuVisible(prev => !prev)}>
                    <SVG size={'small'} icon={menuVisible ? 'close' : 'menu'} color={'white'} />
                </div>

                {/* <div className={`w-screen ${!targetReached && 'hidden'} flex flex-col items-center justify-center h-[100px] bg-transparent bottom-0 fixed` }>
                    <button className={`${theme.text}`} onClick={() => window.scrollTo(0, 0)}>^</button>
                </div> */}
                
                {/* <div className={`hidden md:flex gap-2 self-center mr-10 ${theme.text}`}>
                    { sections.map((section, indx) => {
                        return <a 
                            href={section.path} 
                            className={`hover:border-b-[1px] text-xl font-semibold tracking-tight logo transease hover:translate-y-[-5px] p-4`}
                            children={section.id} 
                            key={indx} 
                            />
                    }) }
                </div> */}
            </div>
        </div>
    </>
};