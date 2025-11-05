import React from "react";

const Circle = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Outer Circle */}
      <div className="relative w-80 h-80 rounded-full bg-transparent">
        {/* Top Left */}
        <div className="absolute w-1/2 h-1/2 bg-blue-400 rounded-tl-full transform -translate-x-[10%] -translate-y-[10%] rotate-[-5deg] flex items-center justify-center">
          <span className="text-white font-semibold text-center px-2">
            Top Left
          </span>
        </div>

        {/* Top Right */}
        <div className="absolute right-0 w-1/2 h-1/2 bg-green-400 rounded-tr-full transform translate-x-[10%] -translate-y-[10%] rotate-[5deg] flex items-center justify-center">
          <span className="text-white font-semibold text-center px-2">
            Top Right
          </span>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-0 w-1/2 h-1/2 bg-yellow-400 rounded-bl-full transform -translate-x-[10%] translate-y-[10%] rotate-[5deg] flex items-center justify-center">
          <span className="text-white font-semibold text-center px-2">
            Bottom Left
          </span>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-red-400 rounded-br-full transform translate-x-[10%] translate-y-[10%] rotate-[-5deg] flex items-center justify-center">
          <span className="text-white font-semibold text-center px-2">
            Bottom Right
          </span>
        </div>

        {/* Center Small Circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-20 h-20 bg-white border-4 border-gray-300 rounded-full shadow-lg flex justify-center items-center">
            <span className="text-gray-700 font-bold">Center</span>
          </div>
        </div>
      </div>
    </div>         
  );
};

export default Circle;
