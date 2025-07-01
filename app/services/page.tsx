import { Card, CardContent } from "@/components/ui/card";
import { title } from "process";
import React from "react";

const ServicePage = () => {
  let service_data = [
    {
      title: "Custom Software Development",
      description:
        "Empower your business with bespoke software solutions designed specifically for your operations. From planning to deployment, we provide scalable and robust applications tailored to your needs.",
    },
    {
      title: "Web Application Development",
      description:
        "Enhance your online presence with dynamic and user-friendly web applications. Our team specializes in modern frameworks and ensures seamless user experiences across all devices.",
    },
    {
      title: "Mobile App Development",
      description:
        "Reach your audience wherever they are with intuitive and responsive mobile applications. We develop apps for Android, iOS, and cross-platform solutions to meet your business goals.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud computing with our scalable, secure, and cost-effective cloud services. From migration to management, we help you harness the cloud's full potential.",
    },
    {
      title: "E-Commerce Development",
      description:
        "Boost your sales with customized e-commerce platforms. We provide end-to-end solutions, including payment gateways, inventory management, and responsive design.",
    },
    {
      title: "IT Consulting",
      description:
        "Navigate the complexities of technology with our expert consulting services. We provide insights, strategies, and solutions to optimize your IT infrastructure.",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center py-30">
      <div className="w-full md:w-[95%] lg:w-[90%] h-full flex justify-center items-center">
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full text-center h-full flex flex-col gap-14 items-center">
            <div className="heading flex flex-col justify-center items-center text-2xl gap-4 max-w-lg md:max-w-xl lg:max-w-2xl">
              <h2 className='lg:text-5xl md:text-4xl text-3xl font-medium uppercase px-2'>
                Tailored Solutions for Every Need
              </h2>
              <p className="md:text-xl text-lg px-3 leading-6 md:leading-7">
                We prioritize your needs, ensuring transparency, communication,
                and collaboration throughout the development process.
              </p>
            </div>
            <div className="cards flex flex-wrap w-full h-auto gap-9 justify-center items-center relative">
              <div className="w-full h-full absolute top-0 left-0 p-3 flex justify-center items-center -z-10">
                <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[171px] rotate-45 rounded-full "></div>
              </div>
              {service_data.map(({ title, description }, index) => (
                <Card
                  key={index}
                  className="w-[340px] border-gradient h-[335px] rounded-xl p-3 text-center flex justify-center items-center"
                >
                  <CardContent className="flex flex-col gap-4 text-center justify-evenly items-center  w-full h-full">
                    <div className="flex flex-col gap-4 justify-center items-center w-full h-auto text-center">
                      <h5 className="font-medium uppercase text-xl">{title}</h5>
                      <p className="text-sm">{description}</p>
                    </div>
                    <button className=" bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] text-white px-8 py-2 uppercase rounded-full font-semibold">
                      {`Learn More`}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
