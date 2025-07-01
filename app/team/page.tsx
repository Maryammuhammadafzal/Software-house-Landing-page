import { Card, CardContent } from "@/components/ui/card";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const TeamPage = () => {
  let team_data = [
    {
      image: "/images/team-image1.jpg",
      name: "Sarah Thompson",
      profession: "Chief Executive Officer (CEO)",
      about:
        "Sarah is the driving force behind CodeCrafters Studio. With over a decade of experience in the tech industry, she leads with vision and inspires innovation. Her passion for technology and strategic thinking has propelled the company to new heights.",
    },
    {
      image: "/images/team-image2.jpg",
      name: "James Carter",
      profession: "Chief Technology Officer (CTO)",
      about:
        "James is the tech wizard behind our cutting-edge solutions. With expertise in multiple programming languages and systems architecture, he ensures our technology stack remains top-notch and future-ready.",
    },
    {
      image: "/images/team-image3.jpg",
      name: "Emily Rodriguez",
      profession: "Project Manager",
      about:
        "Emily brings projects to life with meticulous planning and coordination. Her focus on communication and detail ensures every project is delivered on time and exceeds client expectations.",
    },
    {
      image: "/images/team-image4.jpg",
      name: "Daniel Lee",
      profession: "Lead Developer",
      about:
        "Daniel is the backbone of our development team, specializing in crafting scalable and robust applications. His dedication to clean code and innovative solutions drives the success of our projects.",
    },
    {
      image: "/images/team-image5.jpg",
      name: "Mia Patel",
      profession: "UI/UX Designer",
      about:
        "Mia designs intuitive and visually stunning user interfaces. Her creativity and focus on user experience make every project not only functional but also delightful to use.",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center md:py-20 xs:py-10 py-7 lg:py-30">
      <div className="lg:w-[90%] md:w-[95%] w-full h-full flex justify-center items-center">
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full h-full flex flex-col gap-14 items-center">
            <div className="heading text-center flex flex-col justify-center items-center text-2xl gap-4 max-w-2xl">
              <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium uppercase sm:px-2 px-1'>
                Meet Our Team
              </h2>
              <p className="md:text-xl sm:text-lg text-base px-3 leading-5 md:leading-7">
                Our team of dedicated professionals is passionate about
                technology, creativity, and excellence, ensuring every project
                we undertake exceeds expectations.
              </p>
            </div>

            <Carousel className="w-full md:p-6 p-3">
              <CarouselContent>
                {team_data.map(({ name, about, image, profession }, index) => (
                  <CarouselItem className="">
                    <Card
                      key={index}
                      className="w-full p-0 border-none h-auto flex justify-center items-center bg-[#F8F8F8] rounded-4xl"
                    >
                      <CardContent className="flex p-0 flex-col sm:flex-row md:gap-10 sm:gap-6 gap-3 items-center rounded-4xl w-full h-full">
                        <div className="w-auto h-full  rounded-4xl">
                          <Image
                            src={image}
                            alt="team-image"
                            width={200}
                            height={300}
                            className="sm:w-[450px] w-[350px] h-full md:h-[450px] lg:h-[516px] object-cover rounded-4xl"
                          />
                        </div>
                        {/* <div className="w-full h-full absolute top-0 -left-5 p-3 flex justify-start items-center z-10">
                          <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[171px] rotate-45 rounded-full "></div>
                        </div> */}
                        <div className="flex flex-col md:gap-7 gap-4 lg:gap-10 justify-center md:pr-5 w-full h-full">
                          <div className="flex flex-col md:gap-2 sm:gap-1 gap-0 max-sm:p-1 max-md:p-3">
                            <h5 className="font-medium uppercase lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                              {name}
                            </h5>
                            <h6 className="font-normal uppercase text-[10px] sm:text-xs md:text-sm lg:text-base">
                              {profession}
                            </h6>
                          </div>

                          <p className="lg:text-xl md:text-lg sm:text-sm text-xs">{about}</p>

                          <div className="flex md:gap-6 sm:gap-3 gap-1 p-3 items-center">
                            <h5 className="sign xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg font-mono">{name}</h5>
                            <hr className="border border-black sm:w-[150px] w-[100px] md:w-[200px] lg:w-[290px]" />
                          </div>

                          <div className="w-full flex justify-end items-end px-7">
                            <div className="flex gap-1 lg:gap-3">
                             <CarouselPrevious ><MoveLeftIcon size={30} /></CarouselPrevious>   
                             <CarouselNext ><MoveRightIcon size={30} /></CarouselNext> 
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* 
  */}
            </Carousel>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
