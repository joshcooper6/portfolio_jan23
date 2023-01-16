import player from '../assets/screenshots/Player.png';
import colorquiz from '../assets/screenshots/colorquiz.png';
import three3d from '../assets/screenshots/3d.png';
import ipod from '../assets/screenshots/1.png';

const hobbyProjects = [
    {
        image: player, 
        text: 'React.js Music Player', 
        src: 'https://jcbestalbums22.web.app', 
        pstn: 'object-bottom',
        desc: 'React.js web application utilizing YouTube to create a custom player of the best albums of 2022.'
    },
    {
        image: colorquiz, 
        text: 'React.js Color Quiz', 
        src: 'https://jc-color-quiz.web.app', 
        pstn: 'object-center',
        desc: 'Test your hex code knowledge with this quick color quiz.'
    },
        {
        image: three3d, 
        text: 'Three.js 3D Model', 
        src: 'https://jc3dthree.web.app', 
        pstn: 'object-center',
        desc: 'Rendered a 3D model using Ready Player Me, Blender, Mixamo, and React Three Fiber.'
    },
    {
        image: ipod, 
        text: 'Vanilla.js iPod', 
        src: 'https://jc-ipodclassic.web.app', 
        pstn: 'object-center',
        desc: 'Audio player designed with CSS by photo reference running on Javascript.'
    }
]

export default hobbyProjects;