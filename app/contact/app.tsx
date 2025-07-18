import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const ContactPage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-full md:w-[95%] lg:w-[90%] h-auto flex justify-between items-start gap-4 md:flex-row flex-col">
        <div className="content flex w-full md:w-[50%] px-6 flex-col items-start justify-start">
          <div className="heading flex flex-col text-2xl gap-3 max-w-lg leading-10">
            <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium uppercase md:px-2'>
              Tailored Solutions for Every Need
            </h2>
            <p className="md:text-xl xs:text-lg text-base md:px-3 leading-5 md:leading-7">
              We prioritize your needs, ensuring transparency, communication,
              and collaboration throughout the development process.
            </p>
          </div>

          <div className="flex flex-col py-6 w-full h-auto gap-2 justify-center">
            <p className="xs:text-lg text-base flex gap-1 font-normal">
              <span className="font-semibold capitalize">Email: </span>
              <span>info@[yourDomain]gmail.com</span>
            </p>
            <p className="xs:text-lg text-base flex gap-1 font-normal">
              <span className="font-semibold capitalize">phone: </span>
              <span>+92 3333333</span>
            </p>
            <p className="xs:text-lg text-base flex gap-1 font-normal">
              <span className="font-semibold capitalize">Address: </span>
              <span>Sindh Karachi , Pakistan</span>
            </p>
            <p className="xs:text-lg text-base flex gap-1 font-normal">
              <span className="font-semibold capitalize">social Media: </span>
              <span>www.socialmedia.com</span>
            </p>
          </div>
        </div>

        <div className="form flex flex-col items-center md:items-start justify-between gap-6 w-full md:w-[50%] px-6 h-full">
          <div className="flex flex-col items-center md:items-start gap-6 h-auto w-full">
            <div className="flex flex-row max-lg:flex-wrap justify-center md:justify-start gap-4">
              <div className="grid w-full max-w-sm items-center gap-3 ">
                <Label htmlFor="name">Name</Label>
                <div className="inline-block  p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-lg">
                <Input
                  type="name"
                  id="name"
                  className="border-none w-full shadow-none bg-white text-black rounded-lg"
                />
                </div>
              </div>
              <div className="grid w-full max-w-sm items-center gap-3 ">
                <Label htmlFor="email">Email</Label>
                <div className="inline-block  p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-lg">
                <Input
                  type="email"
                  id="email"
                  className="border-none w-full shadow-none bg-white text-black rounded-lg"
                />
                </div>
              </div>
            </div>

            <div className="grid items-center w-full max-w-sm gap-3">
              <Label htmlFor="message">Your message</Label>
               <div className="inline-block  p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-lg">
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="border-none w-full shadow-none bg-white text-black rounded-lg"
              />
                </div>
            </div>
          </div>
          <div className="inline-block w-fit m-3 p-[1px] bg-gradient-to-r from-[#FB8FD7] via-[#FDB67F] to-[#8DECFF] rounded-full">
            <button className="bg-white text-black px-8 py-2 uppercase rounded-full font-semibold">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
