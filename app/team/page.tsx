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
        "Mia designs intuitive and visually stunning user interfaces. Her creativity and focus on user experience make every project not only functional but also delightful to use.",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center py-30">
      <div className="w-[90%] h-full flex justify-center items-center">
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full h-full flex flex-col gap-14 items-center">
            <div className="heading text-center flex flex-col justify-center items-center text-2xl gap-4 max-w-2xl">
              <h2 className="text-5xl font-medium uppercase px-2">
                Meet Our Team
              </h2>
              <p className="text-xl px-3 leading-7">
                Our team of dedicated professionals is passionate about
                technology, creativity, and excellence, ensuring every project
                we undertake exceeds expectations.
              </p>
            </div>

            <Carousel className="w-full p-6">
              <CarouselContent>
                {team_data.map(({ name, about, image, profession }, index) => (
                  <CarouselItem className="">
                    <Card
                      key={index}
                      className="w-full p-0 border-none h-auto flex justify-center items-center bg-[#F8F8F8]  rounded-4xl"
                    >
                      <CardContent className="flex p-0 flex-row gap-10 items-center rounded-4xl  w-full h-full">
                        <div className="w-auto h-full  rounded-4xl">
                          <Image
                            src={image}
                            alt="team-image"
                            width={200}
                            height={300}
                            className="w-[450px] h-[516px] object-cover rounded-4xl"
                          />
                        </div>
                        <div className="w-full h-full absolute top-0 -left-5 p-3 flex justify-center items-center -z-10">
                          <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[171px] rotate-45 rounded-full "></div>
                        </div>
                        <div className="flex flex-col gap-10 justify-center pr-5 w-full h-full">
                          <div className="flex flex-col gap-2">
                            <h5 className="font-medium uppercase text-4xl">
                              {name}
                            </h5>
                            <h6 className="font-normal uppercase text-base">
                              {profession}
                            </h6>
                          </div>

                          <p className="text-xl">{about}</p>

                          <div className="flex gap-6 p-3 items-center">
                            <h5 className="sign text-5xl font-mono">{name}</h5>
                            <hr className="border border-black w-[290px]" />
                          </div>

                          <div className="w-full flex justify-end items-end px-7">
                            <div className="flex gap-3">
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
