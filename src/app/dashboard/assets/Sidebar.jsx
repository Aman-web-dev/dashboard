"use client";

import React, { useEffect } from "react";
import {
  UserIcon,
  DatabaseIcon,
  FunnelIcon,
  PharmaIcon,
  RegistrationIcon,
  ConsultationIcon,
  TestIcon,
  BillingIcon
} from "./Svg";
import Link from "next/link";

function Sidebar() {
  let node;
  useEffect(() => {
    const elem = document.getElementsByClassName("card-container");
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", (e) => {
        if (elem[i].contains(e.target) || e.target) {
          const child = elem[i].getElementsByTagName("div");
          node = child;

          child[0].classList.remove("bg-blue-400");
          child[0].classList.remove("bg-[#f6fafb]");
          child[0].classList.add("bg-blue-400");
          console.log();
        }
      });
    }
  }, []);

  const eventListner = (e) => {
    console.log(e.target);
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-[#ffffff] shadow-lg  min-h-screen text-black pb-8">
      <p className="text-gray-500 font-bold text-sm mx-auto mt-4">
        Darshboards
      </p>
      <Cards
        svg={<UserIcon />}
        CardTitle={"Patients"}
        handleClick={(e) => eventListner(e)}
      />
      <Cards
        svg={<DatabaseIcon />}
        CardTitle={"HR"}
        handleClick={(e) => eventListner(e)}
      />
      <Cards
        svg={<FunnelIcon />}
        CardTitle={"Labs"}
        handleClick={(e) => eventListner(e)}
      />
      <Cards
        svg={<PharmaIcon />}
        CardTitle={"Pharma"}
        handleClick={(e) => eventListner(e)}
      />
      <p className="text-gray-500 font-bold text-sm mx-auto mt-4">Processes</p>

      <Cards
        svg={<RegistrationIcon />}
        CardTitle={"Registration"}
        handleClick={(e) => eventListner(e)}
      />
      <Cards
        svg={<ConsultationIcon />}
        CardTitle={"Consultation"}
        handleClick={(e) => eventListner(e)}
      />
      <Cards
        svg={<TestIcon />}
        CardTitle={"Tests"}
        handleClick={(e) => eventListner(e)}
      />
        <Cards
        svg={<BillingIcon />}
        CardTitle={"Billing"}
        handleClick={(e) => eventListner(e)}
      />
    </div>
  );
}

export default Sidebar;

const Cards = (props) => {
  return (
    <div className="card-container w-40" onClick={(e) => props.handleClick(e)}>
      <div
        id="navigation-box"
        className="flex px-4 mx-4 flex-col items-center py-4  shadow-lg rounded-xl bg-[#f6fafb]"
      >
        {props.svg}
        <p className="font-bold">{props.CardTitle}</p>
      </div>
    </div>
  );
};
