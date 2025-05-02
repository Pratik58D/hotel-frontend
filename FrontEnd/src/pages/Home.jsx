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
} from "../assets/assests";

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
        <div className="flex justify-evenly items-center pb-20 text-white  absolute top-[704px] left-[241px]">
          <img src={leftarrow} alt="" />
          <p>Orlando Marriott Lake Mary, FL</p>
          <img src={rightarrow} alt="" />
        </div>
      </section>



      {/* another section */}
      <section className="flex mx-32 my-20 gap-10 ">
        {/* left side */}
        <div className="max-w-[560px] flex flex-col gap-5">
          <div className="flex flex-col gap-2 font-light">
            <h2 className="text-5xl">Building Accommodation Legacies</h2>
            <p>
              Since our establishment, Pinnacle Hotel Management has emerged as
              a leader in hotel development, steering successful projects across
              major markets such as Washington,D.C., Florida, New England, and
              California. Utilizing deep industry knowledge and a relentless
              passion for hospitality, we've also spearheaded numerous brand
              conversion projects, revolutionizing and adding value to existing
              hotels.
            </p>
          </div>



          <div className="flex gap-5 pt-5">

              {/* our Portfolio */}
          <div >
            <img src={building} alt="" />
            <h2 className="text-3xl font-normal py-3 ">Our Portfolio</h2>
            <p>
              Our portfolio brags of several brand conversion projects including
              the Courtyard Alexandria in Virginia, the Fairfield Inn and Suites
              Palm Beach in Florida, among others. Each project a testament to
              our commitment to excellence, and a beacon of our expertise in the
              hospitality industry.
            </p>
          </div>
          <div>
            <img src={star} alt="" />
            <h2 className="text-3xl font-normal py-3">Proven Expertise</h2>
            <p>
              With 30 ground-up hotel development projects under our belt,
              Pinnacle is an authority in the industry. Our successes nationwide
              are the excellent track record that underscores our claim.
            </p>
          </div>




          </div>



        




          {/* contact us */}
          <div>

          </div>
        </div>

        {/* right side */}

        <div>
          <img src={female} alt="" />

        </div>
      </section>
    </div>
  );
};

export default Home;
