import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ServicePage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-[90%] h-full flex justify-center items-center relative">
        <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[130px] rotate-45 rounded-4xl "></div>
        <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center">
          <div className="w-full text-center h-full flex flex-col gap-6 items-center">
            <div className="heading flex flex-col justify-center items-center text-2xl gap-3 max-w-2xl">
              <h2 className="text-5xl font-medium uppercase px-2">
                Tailored Solutions for Every Need
              </h2>
              <p className="text-xl px-3 leading-7">
                We prioritize your needs, ensuring transparency, communication,
                and collaboration throughout the development process.
              </p>
            </div>
            <div className="cards flex flex-wrap w-full h-auto gap-9 justify-center items-center">
              <Card  className="w-[340px] border-gradient h-[335px] rounded-xl p-3 text-center flex justify-center items-center">
                <CardContent className="flex flex-col gap-4 tetx-center justify-center items-center  w-full h-full">
                  <h5 className="font-medium uppercase text-xl">
                    Custom Software Development
                  </h5>
                  <p className="text-sm">
                    Empower your business with bespoke software solutions
                    designed specifically for your operations. From planning to
                    deployment, we provide scalable and robust applications
                    tailored to your needs.
                  </p>
                  <button className=" bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] text-white px-8 py-2 uppercase rounded-full font-semibold">
                    {`Learn More`}
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
