import React from "react";

const ServicePage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-[90%] h-full flex justify-center items-center relative">
        <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[110px] rotate-45 rounded-4xl "></div>
        <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center">
            <div className="w-full h-full flex flex-col items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
