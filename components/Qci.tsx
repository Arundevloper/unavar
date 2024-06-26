import React from "react";
import Image from "next/image";

const Qci = () => {
  return (
    <div className="qci my-10 p-5 px-10 flex flex-wrap gap-10 justify-around">
      <div className="left w-screen md:w-[40%]">
        <h2 className="text-5xl font-semibold leading-[1.5] text-[#0f7a87] font-roboto-slab">
          Ensuring the Highest <br /> Standards of Food safety and Quality.
        </h2>
        <p className=" my-5 text-xl leading-[1.7]">
          Unavar, is a distinguished certification body dedicated to aiding
          Indian Food Business Operators (FBOs) in obtaining certifications
          aligned with the Food Safety Standards Authority of India (FSSAI),
          International Organization for Standardization (ISO), Quality Council
          of India (QCI) and various global standards.
        </p>
        <div className="sub flex items-center gap-4">
          <Image
            alt="img2"
            src="/images/layer-1.svg"
            width={100}
            height={100}
          />
          <h3 className="text-3xl font-[500]">
            QCI Accredited <br /> Oraganization
          </h3>
        </div>
      </div>
      <div className="right">
        <Image
          alt="img"
          className=" shadow-[23px_-23px_#0f7a87]"
          src="/images/newpic2.webp"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Qci;
