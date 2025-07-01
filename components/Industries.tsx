import Image from "next/image";
import React from "react";

const Industries = () => {
  let industry_data = [
    {
      image: "/icons/industry-icon1.png",
    },
    {
      image: "/icons/industry-icon2.png",
    },
    {
      image: "/icons/industry-icon3.png",
    },
    {
      image: "/icons/industry-icon4.png",
    },
    {
      image: "/icons/industry-icon5.png",
    },
    {
      image: "/icons/industry-icon6.png",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center md:py-20 py-14">
      <div className="lg:w-[80%] w-[90%] h-auto flex flex-col gap-10 justify-center items-center">
        <div className="heading flex flex-col justify-center items-center text-center text-2xl gap-3 max-w-2xl">
          <h2 className='lg:text-5xl md:text-4xl text-3xl font-medium uppercase px-2'>
            Industries We Serve
          </h2>
          <p className="md:text-xl text-lg px-3 leading-5 md:leading-7">
            We stay ahead of the curve by integrating the latest technologies
            and trends into our solutions.
          </p>
        </div>
        <div className="w-full h-auto flex justify-center items-center p-[1px] bg-gradient-to-r from-[#FB8FD7]  via-[#FDB67F] to-[#8DECFF] rounded-4xl">
          <div className="bg-white rounded-4xl w-full h-full max-xs:flex-wrap max-xs:gap-4 md:p-10 sm:p-7 p-4 lg:p-12 flex justify-evenly items-center">
           
            {industry_data.map(({ image }, index) => (
              <div key={index} className="inline-block w-fit p-[1px] bg-gradient-to-b from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full">
                <button className="bg-white p-3 sm:p-5 text-black  uppercase rounded-full ">
                  <Image
                    src={image}
                    alt="icon"
                    width={40}
                    height={40}
                    className="max-md:w-[30px] max-md:h-[30px]"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
