import React from "react";
import Navbar from "../components/Navbar";
import {
  layer,
  hotelL,
  hotelM,
  hotelR,
  leftarrow,
  rightarrow,
  building,
  star,
  female,
  contact,
  blue_rectangle,
  traingle,
} from "../assets/assests";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-scroll ">
      <Navbar />
      {/*hero Section  */}
     <section className=" h-[679px] bg-gradient-to-b from-[#35404A] to-[#6E7984]">
        {/* the traingular image on background */}
        <img
          src={layer}
          alt=""
          className="absolute top-[150px] left-[-204px] w-[847px] h-[820px] opacity-30"
        />

        {/* text */}
        <div className="text-white text-center pt-20  ">
          <h2 className="text-[48px] font-light">Pinnacle Hotel Management</h2>
          <h2 className="text-[22px] font-medium">
            Elevating Hospitality, Managing Experiences.
          </h2>
        </div>

        <div>
          <img
            src={hotelL}
            alt=""
            className="absolute top-[370px] left-[130px] z-10"
          />
          <img
            src={hotelM}
            alt=""
            className="absolute top-[346px] left-[488.25px] z-20"
          />
          <img
            src={hotelR}
            alt=""
            className="absolute top-[374px] left-[930px] z-10"
          />
        </div>

        {/* scroller */}
        <div className="flex justify-evenly items-center pb-20 mt-96 text-white">
          <img src={leftarrow} alt="" />
          <p>Orlando Marriott Lake Mary, FL</p>
          <img src={rightarrow} alt="" />
        </div>
      </section>

      {/* accommodation section */}
      <section className="flex ml-30 mr-10 my-20 gap-15 ">
        {/* left side */}
        <div className="max-w-[540px] flex flex-col gap-5">
          <div className="flex flex-col gap-2 font-normal">
            <h2 className="text-[45px] ">
              Building Accommodation Legacies
            </h2>
            <p >
              Since our establishment, Pinnacle Hotel Management has emerged as
              a leader in hotel development, steering successful projects across
              major markets such as Washington,D.C., Florida, New England, and
              California. Utilizing deep industry knowledge and a relentless
              passion for hospitality, we've also spearheaded numerous brand
              conversion projects, revolutionizing and adding value to existing
              hotels.
            </p>
          </div>

          <div className="flex gap-5 pt-5 ">
            {/* our Portfolio */}
            <div className="flex-1">
              <div className="h-34">
                <img src={building} alt="" />
              </div>
              <h2 className="text-3xl font-normal pb-3 ">Our Portfolio</h2>
              <p>
                Our portfolio brags of several brand conversion projects
                including the Courtyard Alexandria in Virginia, the Fairfield
                Inn and Suites Palm Beach in Florida, among others. Each project
                a testament to our commitment to excellence, and a beacon of our
                expertise in the hospitality industry.
              </p>
            </div>
            {/* proven expertise */}
            <div className="flex-1">
              <div className="h-34  ">
                <img src={star} alt="" />
              </div>
              <h2 className="text-3xl font-normal pb-3 ">Proven Expertise</h2>
              <p>
                With 30 ground-up hotel development projects under our belt,
                Pinnacle is an authority in the industry. Our successes
                nationwide are the excellent track record that underscores our
                claim.
              </p>
            </div>
          </div>

          {/* contact us */}
          <img src={contact} alt="" className="pt-10 w-60 " />
        </div>

        {/* right side */}
        <div className="relative">
          <img
            src={blue_rectangle}
            alt=""
            className="z-0 absolute top-20 right-0 "
          />

          <img
            src={female}
            alt="female photo"
            className="z-10 absolute top-0 right-20"
          />

          <img src={traingle} 
          alt=""
           className="" />

          <div className=" bg-white absolute bottom-5 right-0 z-50 h-[280px] w-[280px] pt-3 pl-3">
            <div className="flex flex-col items-center justify-center bg-[#A7A59F] h-[269px] w-[269px] text-white">
              <p className="font-bold text-[85px]">30+</p>
              <p className="font-normal -mt-5">successful project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section
        className="relative w-full h-[520px] bg-cover bg-center py-16 px-4"
        style={{ backgroundImage: `url(${hotelL})` }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#046FAAE8] bg-opacity-90 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          {/* Title & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[34px] font-normal mb-2">Our Services</h2>
            <p className="text-sm ">
              Pinnacle offers a range of services aimed at maximizing our
              clients' satisfaction.
            </p>
            <p className="text-sm">
              From hotel management to project development, we offer bespoke
              solutions based on the specific needs of our clients.
            </p>
          </div>

          {/* Service Cards */}
          <div className="  max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Card 1 */}
            <div className="bg-white text-black rounded-xl shadow-lg px-6 pt-6 pb-20">
              <h3 className="text-4xl font-normal mb-3">Hotel Management</h3>
              <p className="text-sm pr-20">
                We offer extraordinary hotel management services, with the goal
                of improving performance and increasing revenue. Our team
                combines industry knowledge and practical expertise to ensure
                sustainable growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black rounded-xl shadow-lg px-6 pt-6 pb-20">
              <h3 className="text-4xl font-normal mb-3 ">
                Project Development
              </h3>
              <p className="text-sm pr-20">
                From conceptualization to opening, our experienced team assists
                in managing all phases of a hotel development project, ensuring
                that every element aligns perfectly with the overall vision.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-black rounded-lg shadow-md px-6 pt-6 pb-20">
              <h3 className="text-4xl font-normal mb-3 pr-3">Lorem Ipsumamit</h3>
              <p className="text-sm pr-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitaton ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <img src={contact} alt="" className="mx-auto mt-30 mb-10" />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
