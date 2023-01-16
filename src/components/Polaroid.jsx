import React from 'react';

const Polaroid = ({ src, rotate, index, caption }) => {
  return (
    <div className={`transease hover:z-30 relative z-20 p-3 bg-white rounded-lg shadow-md w-64 h-[280px] ${rotate === 'right' && 'rotate-[-20deg] z-0 translate-y-[-50px] md:translate-y-0 md:translate-x-[-50px]'} ${rotate === 'left' && 'rotate-[20deg] z-10 translate-y-[40px] md:translate-y-0 md:translate-x-[50px]'}`}>
      <img src={src} className="object-cover w-full shadow-lg rounded-lg h-[200px]" alt="Polaroid" />
      <div className="absolute text-xl bottom-5 polaroid-cap left-[20px] text-center text-gray-600">
        {caption}
      </div>
    </div>
  );
}

export default Polaroid;