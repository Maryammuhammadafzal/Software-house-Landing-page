import React from "react";

const Join = () => {
  return (
    <div className="w-full h-auto py-10 flex justify-center items-center">
      <div
        className="w-[90%] min-h-[300px] flex justify-between items-center px-10  bg-cover rounded-3xl"
        style={{ backgroundImage: `url('/images/join-bg.png')` }}
      >
        <div className="flex flex-col  max-w-xl justify-start items-starttext-center">
          <h1 className="text-4xl font-medium uppercase leading-16">
            Join Us
          </h1>
          <p className="text-base leading-7">
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
