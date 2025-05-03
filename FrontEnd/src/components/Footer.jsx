import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#35404A] text-white w-full">
      <div className="flex w-full justify-center gap-20 pt-10 pb-14 ">
        <div className="flex flex-col gap-5">
          <h2 className="text-[30px] font-normal">Company Info</h2>
            <p>Pinnacle Hotel Management </p>
            <div>
            <p>1480 Royal Palm Beach, </p>
           <p> Suite A Royal Palm Beach, FL 33411</p>
            </div>

            <p>Phone: 561-242-9066</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[30px] font-normal">Quick Links</h2>
          <div>
            <ul className=" flex flex-col gap-3">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>OUR HOTELS</li>
              <li>PROJETS</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* copy right */}
      <p className="text-center py-2">©2025 Pinnacle Hotel Management. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
