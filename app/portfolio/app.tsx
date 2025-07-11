import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const PortfolioPage = () => {
  const portfolio_images = [
    "/images/portfolio-image1.jpg",
    "/images/portfolio-image2.jpg",
    "/images/portfolio-image3.jpg",
    "/images/portfolio-image4.jpg",
    "/images/portfolio-image5.jpg",
    "/images/portfolio-image6.jpg",
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center py-8 xs:py-12 md:py-20">
      <div className="lg:w-[90%] md:w-[95%] w-full h-full flex justify-center items-center ">
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full text-center h-full flex flex-col gap-6 items-center">
            <div className="heading flex flex-col justify-center items-center text-2xl gap-3 max-w-2xl">
              <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium uppercase sm:px-2 px-1'>
                Tailored Solutions for Every Need
              </h2>
              <p className="md:text-xl xs:text-lg text-base px-3 leading-5 md:leading-7">
                We prioritize your needs, ensuring transparency, communication,
                and collaboration throughout the development process.
              </p>
            </div>
            <section className=" flex justify-center items-center w-full h-full relative">
              <div className="w-full h-full absolute top-0 left-0 p-3 flex justify-center items-center -z-10">
                <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[151px] rotate-45 rounded-full "></div>
              </div>
              <div className="grid h-auto w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolio_images.map((src, index) => (
                  <Card
                    key={index}
                    className={`
        w-full overflow-hidden rounded-3xl bg-transparent p-0 border-none shadow-none
        ${
          index === 4
            ? "col-span-2 md:col-span-2 lg:col-span-3"
            : "col-span-2"
        }
        ${index === 5 
          ? "max-xl:col-span-3"
          : ""
        }
      `}
                  >
                    <CardContent className=" p-0">
                      <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full min-w-[300px] h-[290px] rounded-3xl object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
