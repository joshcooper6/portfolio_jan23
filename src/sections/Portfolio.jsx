import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import SVG from '../components/SVG';
import resume from '../assets/resume.pdf';
import portfolio from '../data/portfolio';
import hobbyProjects from '../data/hobbyProjects';
import Project from '../components/Project';
import styled from 'styled-components';

const HobbyProject = styled.div`
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
`

export default function Portfolio() {

    const { theme } = useContext(ThemeContext);
    const [showMore, setShowMore] = useState(false);

    return <>
        <div id="portfolio" className={`${theme.text} logo flex flex-col justify-center items-center p-5 min-w-screen`}>
             <div className='flex justify-between w-10/12 max-w-[800px]'>
                <h2 className='text-5xl font-bold self-center'>Portfolio</h2>
                <a
                    href={resume}
                    target="_blank"
                    className='bg-slate-800 p-4 font-thin hover:font-bold transease rounded-lg'>
                PDF Resumé
                </a>
                </div>
            <div className='md:max-w-[850px] max-w-[500px] flex flex-col gap-6'>
                { portfolio.map((project, index) => {
                    return <Project project={project} key={index} index={index} /> }) }
            </div>

            <button onClick={() => {setShowMore(prev => !prev)}} 
            className='w-full border p-6 rounded-xl max-w-[300px] mb-6'
            children={showMore ? 'Hide Projects' : 'See More'}
            />
                    

            <div className={`transfast ${showMore ? 'max-h-[1000px]' : 'max-h-[0] opacity-0'} flex flex-wrap justify-center gap-3`}>
                { hobbyProjects.map((project, index) => {
                    return <a href={project.src} target={'_blank'} className='flex flex-col items-center justify-center rounded-xl'>
                        <HobbyProject bg={project.image} className='min-w-[200px] w-11/12 md:max-w-[200px] min-h-[200px] rounded-xl'>
                            <div className='w-full bg-gray-500 hover:bg-opacity-100 hover:bg-white transfast hover:text-slate-900 bg-opacity-90 h-full flex flex-col items-center justify-center rounded-xl'>
                                <h3 className='text-xl m-0 w-10/12 text-center font-thin'>{project.text}</h3>
                            </div>
                        </HobbyProject>
                    </a>
                }) }
            </div>
        </div>
    </>
}