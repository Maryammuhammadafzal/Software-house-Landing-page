import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const ContactPage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-[90%] h-auto flex justify-between items-start gap-4 md:flex-row flex-col">
        <div className="content flex w-[50%] p-6 flex-col items-start justify-start">
          <div className="heading flex flex-col text-2xl gap-3 max-w-lg leading-10">
            <h2 className="text-4xl font-medium uppercase">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-base pr-3 leading-7">
              We prioritize your needs, ensuring transparency, communication,
              and collaboration throughout the development process.
            </p>
          </div>

          <div className="flex flex-col py-6 w-full h-auto gap-2 justify-center">
            <p className="text-lg flex gap-1 font-normal">
              <span className="font-semibold capitalize">Email: </span>
              <span>info@[yourDomain]gmail.com</span>
            </p>
            <p className="text-lg flex gap-1 font-normal">
              <span className="font-semibold capitalize">phone: </span>
              <span>+92 3333333</span>
            </p>
            <p className="text-lg flex gap-1 font-normal">
              <span className="font-semibold capitalize">Address: </span>
              <span>Sindh Karachi , Pakistan</span>
            </p>
            <p className="text-lg flex gap-1 font-normal">
              <span className="font-semibold capitalize">social Media: </span>
              <span>www.socialmedia.com</span>
            </p>
          </div>
        </div>

        <div className="form flex flex-col items-start justify-between gap-6 w-[50%] p-6 h-full">
          <div className="flex flex-col gap-6 h-auto w-full">
            <div className="flex flex-row max-lg:flex-wrap gap-4">
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="name">Name</Label>
                <Input type="name" id="name" className="border-none shadow-none focus:border-[2px] active:border-[2px] rounded-none input-border-gradient" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" className="border-none shadow-none focus:border rounded-none input-border-gradient" />
              </div>
            </div>

            <div className="grid w-full gap-3">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" className="border-none shadow-none focus:border rounded-none input-border-gradient" />
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
