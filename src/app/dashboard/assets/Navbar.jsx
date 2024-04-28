import React from "react";
import { BellIcon } from "./Svg";

function Navbar() {
  return (
    <div className="flex flex-row  justify-between bg-[#1f2837] text-white p-4">
      <CompanyLogo />
      <SearchBar />
      <ProfileHeader />
    </div>
  );
}

export default Navbar;

const SearchBar = () => {
  return (
    <div className="w-[30%] flex flex-row ">
      <div class="h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          class="appearance-none w-full outline-none focus:outline-none active:outline-none"
        />
        <button
          type="submit"
          class="ml-1 outline-none focus:outline-none active:outline-none"
        >
          <svg
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>

      <button
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-4"
      >
        + Add More
      </button>
    </div>
  );
};

const ProfileHeader = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <BellIcon/>
  <div className="bg-blue-400 w-10 rounded-full">
      <img
        className=" object-cover w-10 h-10 rounded-full "
        src="https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?t=st=1714120064~exp=1714123664~hmac=dca97c930042bf202d817ca974c2ff668120a5496d41741641e4913cee29c3fb&w=1480"
      />
    </div>
    </div>
  
  );
};

const CompanyLogo = () => {
  return (
    <div className="bg-blue-400 w-40 rounded-lg">
      <img
        className=" object-cover w-40 h-10 rounded-lg "
        src="https://img.freepik.com/free-vector/technological-logo-design_1424-39.jpg?t=st=1714120885~exp=1714124485~hmac=5c06b7b32d16b0a5e6d2eed632c17ff30502320b6218a3f5008787f0fc71910c&w=996"
      />
    </div>
  );
};
