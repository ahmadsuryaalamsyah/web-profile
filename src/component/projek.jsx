import clsx from 'clsx';
import React from 'react';
import Contact from './contact';
import '../App.css';

// Now you can use faReact in your component

const Projek = () => {
  return (
    <div className="mt-0">
      <div className="bg-neutral-900">
        <p className="font-Poppins text-base sm:text-xl pt-3 text-center mb-[20px] text-green-600 opacity-90">What Do I Offer</p>
        <p className="text-center font-Poppins text-xl md:text-3xl mb-[60px] text-white ">Lorem ipsum, dolor sit Repudiandae, tempora.</p>
        <div className="border-4 z-10 -mb-1 relative rounded-full border-green-500 w-[150px] sm:w-[400px] mx-auto " />
        <div className="mx-[80px] z-0 sm:mx-[90px] md:mx-[150px] border border-black border-opacity-10 bg-neutral-700 bg-opacity-20 rounded-[10px] backdrop-blur-sm py-[60px]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 justify-center flex-wrap ">
            <div className="sm:px-[30px] md:grayscale md:hover:grayscale-0 hover:scale-90 md:hover:scale-105 duration-300 ease-in-out  -mt-5  md:-mt-0 sm:pt-[18px] sm:pb-[30px] px-[30px] pt-[10px] pb-[20px] scale-75 sm:scale-90  lg:scale-95 border-2 border-green-500 rounded-lg text-center">
              <img src="./img/mobiledev.svg" alt="mobiledev" />
              <p className="font-Poppins text-xl text-green-500">Mobile Development</p>
            </div>
            <div className="sm:px-[30px] md:grayscale md:hover:grayscale-0 -mt-5 hover:scale-90 md:hover:scale-105 ease-in-out duration-300 md:-mt-0 sm:pt-[18px] sm:pb-[30px] px-[20px] pt-[10px] pb-[20px] scale-75 sm:scale-90 lg:scale-95 border-2 border-green-500 rounded-lg text-center">
              <img src="./img/mobiledev.svg" alt="mobiledev" />
              <p className="font-Poppins text-xl text-green-500">Mobile Development</p>
            </div>
            <div className="sm:px-[30px] md:grayscale md:hover:grayscale-0 -mt-5 hover:scale-90 md:hover:scale-105 ease-in-out duration-300 md:-mt-0 sm:pt-[18px] sm:pb-[30px] px-[20px] pt-[10px] pb-[20px] scale-75 sm:scale-90 lg:scale-95 border-2 border-green-500 rounded-lg text-center ">
              <img src="./img/mobiledev.svg" alt="mobiledev" />
              <p className="font-Poppins text-xl text-green-500">Mobile Development</p>
            </div>
          </div>
        </div>
        <div className="py-[20px] sm:py-[40px]">
          <p className="text-center font-Poppins text-xl md:text-3xl mb-[60px] text-green-600">Why Hire Me</p>
          <div className="flex flex-row gap-5 sm:gap-8 justify-center flex-wrap px-10">
            <div className="flex flex-col items-center gap-2 ">
              <Hire src="./img/comunicate.svg" />
              <p className="text-xl text-white">Workaholic</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Hire src="./img/Work.svg" />
              <p className="text-xl text-white">Communicative</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Hire src="./img/like.svg" />
              <p className="text-xl text-white">Cooperative</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Hire src="./img/verived.svg" />
              <p className="text-xl text-white">Perfectionist</p>
            </div>
          </div>
        </div>
        <div className="py-4 px-6 sm:px-7 md:px-8 lg:px-[90px]">
          <p className="text-xl sm:text-2xl text-center font-semibold text-green-600">Latest Project</p>
          <div className="border border-neutral-800 bg-[#131313] my-10 py-3 px-5 sm:py-5 sm:px-8 rounded-lg ">
            <div className="hidden md:flex items-center justify-between gap-4">
              <img src="./img/projek.svg" alt="projek" />
              <p className="text-white text-normal sm:text-xl font-semibold font-Poppins">DaurUang Mobile Apps</p>
              <button className="py-3 px-6 bg-green-500 rounded-lg text-white font-semibold mt-3 hover:bg-green-600 hover:scale-90 focus:ring-1 focus:ring-white duration-300">View</button>
            </div>
            <div className="w-full flex gap-6 items-center  md:hidden">
              <div className="w-1/2">
                <img src="./img/projek.svg" alt="projek" />
              </div>
              <div className="w-1/2 ">
                <p className="text-white text-normal sm:text-xl font-semibold font-Poppins">DaurUang Mobile Apps</p>
                <button className="py-2 px-4 bg-green-500 rounded-lg text-white font-semibold mt-3">View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[20px] ">
          <p className=" text-center font-Poppins text-xl md:text-2xl text-green-600">Tools and Skills</p>
          <div className="flex  items-center flex-row justify-center gap-10 mt-10 sm:mt-15 flex-wrap px-10 ">
            <div className="border-4 rounded-[15px]  py-5 px-5 border-neutral-600 grayscale hover:grayscale-0 hover:scale-105 ">
              <img src="./img/html.svg" width={80} alt="html" />
            </div>
            <div className="border-4 rounded-[15px] py-5 px-5 border-neutral-600 grayscale hover:grayscale-0 hover:scale-105 ">
              <img className="hover:animate-spin hover:duration-300" src="./img/react.svg" width={80} alt="react" />
            </div>
            <div className="border-4 rounded-[15px] py-5 px-5 border-neutral-600 grayscale hover:grayscale-0 hover:scale-105">
              <img src="./img/css.svg" width={80} alt="css" />
            </div>
            <div className="border-4 rounded-[15px] py-5 px-5 border-neutral-600 grayscale hover:grayscale-0 hover:scale-105">
              <img src="./img/nodejs.svg" width={80} alt="nodejs" />
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

const Hire = (props) => {
  const { className } = props;
  return (
    <div className="relative rounded-full border border-neutral-400 px-2 py-2">
      <div className={clsx(className, ' border border-green-500 rounded-full px-7 py-7 bg-lime-800 bg-opacity-10 ')}>
        <img {...props} className="" />
      </div>
    </div>
  );
};

export default Projek;
