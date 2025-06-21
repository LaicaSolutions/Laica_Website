import React from 'react';

const PlanetDecor = ({ position, planetRef }) => {
  const baseStyles = "absolute rounded-full bg-gradient-to-br from-[#4B3F72]/30 to-transparent";
  const leftStyles = "left-[-15%] top-[10%] w-[30vw] h-[30vw]";
  const rightStyles = "right-[-20%] bottom-[-10%] w-[40vw] h-[40vw] bg-gradient-to-tl";

  return (
    <div
      ref={planetRef}
      className={`${baseStyles} ${position === 'left' ? leftStyles : rightStyles}`}
    >
      {position === 'left' ? (
        <>
          <div className="absolute w-[20%] h-[20%] rounded-full bg-[#4B3F72]/40 top-[15%] left-[20%]"></div>
          <div className="absolute w-[10%] h-[10%] rounded-full bg-[#4B3F72]/40 bottom-[30%] right-[25%]"></div>
        </>
      ) : (
        <>
          <div className="absolute w-[15%] h-[15%] rounded-full bg-[#4B3F72]/40 top-[25%] right-[30%]"></div>
          <div className="absolute w-[25%] h-[25%] rounded-full bg-[#4B3F72]/40 bottom-[20%] left-[20%]"></div>
        </>
      )}
    </div>
  );
};

export default PlanetDecor;
