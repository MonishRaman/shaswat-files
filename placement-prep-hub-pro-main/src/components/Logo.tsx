
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-placemate-blue shadow-md">
        <img 
          src="/lovable-uploads/11e83bd8-b75a-4421-89f2-a9e06d517016.png" 
          alt="PLACE-MATE-HUB Logo"
          className="h-full w-full object-cover" 
        />
      </div>
      <span className="text-xl font-bold hidden md:block">PLACE-MATE-HUB</span>
    </div>
  );
};

export default Logo;
