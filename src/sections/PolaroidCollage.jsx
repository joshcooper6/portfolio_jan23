import Polaroid from '../components/Polaroid';
import hawaii from '../assets/IMG_3749.jpg';
import pouring from '../assets/pouring.jpg';

export default function PolaroidCollage() {
    const images = [
        { image: hawaii, caption: '' },
        { image: pouring, caption: '' },
        { image: hawaii, caption: '' },
    ]

    const order = ['left', '', 'right', '',];

    function createPolaroids(images, order) {
        return images.map((image, index) => {
            const rotate = order[index % order.length] || '';
            return <Polaroid index={index} rotate={rotate} src={image.image} caption={image.caption} />
        });
    }

    return <div className='min-h-[300px] p-10 flex-col items-center justify-center w-screen flex gap-2 bg-gray-900'>
        <div className='flex transease flex-col md:flex-row self-center'>
            {createPolaroids(images, order)}
        </div>
    </div> 
}