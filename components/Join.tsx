import React from "react";

const Join = () => {
  return (
    <div className="w-full h-auto py-10 flex justify-center items-center">
      <div
        className="w-[90%] min-h-[300px] flex justify-between items-center xs:px-7 px-4 sm:px-10  bg-cover rounded-3xl bg-right"
        style={{ backgroundImage: `url('/images/join-bg.png')` }}
      >
        <div className="flex flex-col  max-w-xl justify-start gap-3 items-starttext-center">
          <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium uppercase px-2'>
            Join Us
          </h1>
          <p className="md:text-xl xs:text-lg text-base px-3 leading-5 xs:leading-6 md:leading-7">
            At CodeCrafters Studio, we transform ideas into reality by
            delivering cutting-edge software solutions tailored to your unique
            needs.
          </p>
          <div className="inline-block my-8 w-fit p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full">
          <button className=" bg-white text-black px-8 py-2 uppercase rounded-full font-semibold">
            {`Let’s Connect`}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
