import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components';
import ThemeContext from './context/ThemeContext';
import hawaii from './assets/IMG_3749.jpg';
import Polaroid from './components/Polaroid';
import pouring from './assets/pouring.jpg';
import LatestTweet from './sections/LatestTweet';
import Welcome from './sections/Welcome';
import Portfolio from './sections/Portfolio';
import PolaroidCollage from './sections/PolaroidCollage';

function App() {

  const DEVELOPER = {
    first: 'Joshua',
    last: 'Cooper',
    about: `I'm a full stack software developer building web applications
    primarily with Javascript.`
  }

  const [theme, setTheme] = useState({
    bg: 'bg-slate-900',
    text: 'text-white'
  });

  const [menuVisible, setMenuVisible] = useState(false);

  const array = [hawaii, pouring, hawaii];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [targetReached, setTargetReached] = useState(false);
  
  return (
    <div className={`${theme.bg} min-h-screen min-w-screen flex flex-col`}>
      <ThemeContext.Provider value={{theme, menuVisible, targetReached, setTargetReached, scrollPosition, setMenuVisible}}>
        <Header />
        <Welcome DEVELOPER={DEVELOPER} />
        <Portfolio />
        <LatestTweet />

        <div className={`${theme.text} mt-[100px] w-screen bg-slate-600 min-h-[100px]`}>
          Footer
        </div>
        
      </ThemeContext.Provider>
    </div>
  )
}

export default App
