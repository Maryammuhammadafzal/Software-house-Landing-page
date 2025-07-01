import { Card, CardContent } from "@/components/ui/card";
import { title } from "process";
import React from "react";

const TeamPage = () => {
  let team_data = [
    {
      image: "/images/team-image1.png",
      name: "Sarah Thompson",
      profession: "Chief Executive Officer (CEO)",
      about:
        "Sarah is the driving force behind CodeCrafters Studio. With over a decade of experience in the tech industry, she leads with vision and inspires innovation. Her passion for technology and strategic thinking has propelled the company to new heights.",
    },
    {
      image: "/images/team-image1.png",
      name: "Sarah Thompson",
      profession: "Chief Executive Officer (CEO)",
      about:
        "Sarah is the driving force behind CodeCrafters Studio. With over a decade of experience in the tech industry, she leads with vision and inspires innovation. Her passion for technology and strategic thinking has propelled the company to new heights.",
    },
    {
      image: "/images/team-image1.png",
      name: "Sarah Thompson",
      profession: "Chief Executive Officer (CEO)",
      about:
        "Sarah is the driving force behind CodeCrafters Studio. With over a decade of experience in the tech industry, she leads with vision and inspires innovation. Her passion for technology and strategic thinking has propelled the company to new heights.",
    },
   
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center py-30">
      <div className="w-[90%] h-full flex justify-center items-center">
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-full text-center h-full flex flex-col gap-14 items-center">
            <div className="heading flex flex-col justify-center items-center text-2xl gap-4 max-w-2xl">
              <h2 className="text-5xl font-medium uppercase px-2">
                Meet Our Team
              </h2>
              <p className="text-xl px-3 leading-7">
                Our team of dedicated professionals is passionate about
                technology, creativity, and excellence, ensuring every project
                we undertake exceeds expectations.
              </p>
            </div>
            <div className="cards flex flex-wrap w-full h-auto gap-9 justify-center items-center relative">
              <div className="w-full h-full absolute top-0 left-0 p-3 flex justify-center items-center -z-10">
                <div className=" w-[400px] h-[400px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] blur-[171px] rotate-45 rounded-full "></div>
              </div>
              {team_data.map(({ name, about , image , profession }, index) => (
                <Card
                  key={index}
                  className="w-full h-auto flex bg-[#F8F8F8] "
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

export default TeamPage;
