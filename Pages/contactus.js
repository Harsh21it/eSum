import React from "react";
import MainLayout from "../Layout/MainLayout";
import leaves from "../Images/Leaves.jpeg";

function ContactUs() {
  return (
    <MainLayout>
    <div className='py-10 overflow-x-hidden'>
        <div className='py-12 animate-marquee whitespace-nowrap text-green-400' style={{'font-family': 'Bungee Outline'}}>
            <span className='mx-8 text-8xl'>Contact Us</span>
            <span className='mx-8 text-8xl'>Contact Us</span>
            <span className='mx-8 text-8xl'>Contact Us</span>
            <span className='mx-8 text-8xl'>Contact Us</span>
            <span className='mx-8 text-8xl'>Contact Us</span>
        </div></div>
        <div className="grid place-content-center h-[824px]" style={{ backgroundImage:`url(${leaves})` }} id="form">
            <form className="max-w-[700px] w-full bg-slate-800 bg-opacity-50 mx-auto p-8 rounded-lg z-11">
            <div className="text-center py-3 text-3xl text-white font-bold">
              Contact Us
            </div>
            <div className="flex">
              <div className="flex flex-col py-3 pr-1">
                <label className="">
                  <input
                    type="text"
                    className="rounded-lg text-center w-full h-10"
                    placeholder="FirstName"
                  />
                </label>
              </div>
              <div className="flex flex-col py-3 pl-1">
                <label>
                  <input
                    type="text"
                    className="rounded-lg text-center w-full h-10"
                    placeholder="Lastname"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col py-3">
              <label>
                <input
                  type="text"
                  className="rounded-lg text-center w-full h-10"
                  placeholder="EmailID"
                />
              </label>
            </div>
            <div className="flex flex-col py-3">
              <label>
                <textarea
                  className="rounded-lg text-center w-full h-10"
                  placeholder="Message/Question"
                  maxlength="100"
                />
              </label>
            </div>
            <div className="flex flex-col py-3">
              <button className="text-xl bg-slate-400 rounded-lg border-2 py-2">
                <a href="mailto:esummit24@gmail.com">Submit</a>
              </button>
            </div>
          </form>
        </div>
      <hr className="border-slate-900" />
    </MainLayout>
  );
}

export default ContactUs;

