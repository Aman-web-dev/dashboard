import React from "react";
import { BackIcon,ForwardIcon } from "./Svg";

function Main() {
  return (
    <div className="flex flex-col  w-full p-2 gap-2">
      <Header />
      <Filters />
      <CardContainers />
      <Table />
    </div>
  );
}

export default Main;

const Header = () => {
  return (
    <div className="bg-white py-4 px-2 rounded-xl">
      <p className="text-xl font-bold text-purple-950">Header</p>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="bg-white  py-4 px-2 rounded-xl">
      <p className="text-xl font-bold text-purple-950">Filter</p>
    </div>
  );
};

const CardContainers = () => {
  return (
    <div className="flex flex-row gap-2 justify-between">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <section className="py-4 bg-white  rounded-xl px-2 border-l-4 border-red-400">
      <section className="flex flex-row items-center">

        <div className="flex flex-col">
        <p className="font-bold font-sm text-green-700">
          Consultations Count
        </p>
        <p className="text-sm font-normal text-black">Today/Period</p>
        </div>
      

        <img
          className="w-20 h-20 rounded-full"
          src="https://img.freepik.com/free-vector/butterfly-logo-colorful-gradient-illustrations_483537-972.jpg?t=st=1714240907~exp=1714244507~hmac=c8812f59dc613195acb242232fb3398a38f9f795e94a92e62ccecccb6c1d466a&w=996"
        />
      </section>
    </section>
  );
};

const Table = () => {

  const tableStyle = {
    border: "2px solid black",
    padding:"15px",
    margin:"2px"
};
  return (
    <div className="w-[100%] my-8 bg-white rounded-xl p-4 h-screen">
      <section className="flex flex-row items-center justify-between">
        <p className="text-xl font-bold text-purple-950">Consultants</p>

        <div className="flex flex-row gap-4 item-center ">
          <BackIcon/>
          <ForwardIcon/>
          {/* <div className="h-10 w-10 bg-blue-300 rounded-full" />
          <div className="h-10 w-10 bg-blue-300 rounded-full" /> */}
        </div>
      </section>

      <section className="mt-8">


        <table className="w-full my-4 text-center" style={tableStyle}>
          <tbody>
            <tr className="" style={tableStyle}>
              <th className="" style={tableStyle}>Name</th>
              <th className="" style={tableStyle}>Patient Count</th>
              <th className="" style={tableStyle}>Labs</th>
              <th className="" style={tableStyle}>Diet Plans</th>

            </tr>
            <tr className="">
              <td className="" style={tableStyle}>John Smith</td>
              <td className="" style={tableStyle}>12</td>
              <td className="" style={tableStyle}>14</td>
              <td className="" style={tableStyle}>9</td>
            </tr>
            <tr className="">
              <td className="" style={tableStyle}>John Smith</td>
              <td className="" style={tableStyle}>12</td>
              <td className="" style={tableStyle}>14</td>
              <td className="" style={tableStyle}>9</td>
            </tr>
            <tr className="">
              <td className="" style={tableStyle}>John Smith</td>
              <td className="" style={tableStyle}>12</td>
              <td className="" style={tableStyle}>14</td>
              <td className="" style={tableStyle}>9</td>
            </tr>
            <tr className="">
              <td className="" style={tableStyle}>John Smith</td>
              <td className="" style={tableStyle}>12</td>
              <td className="" style={tableStyle}>14</td>
              <td className="" style={tableStyle}>9</td>
            </tr> 
            <tr className="">
              <td className="" style={tableStyle}>John Smith</td>
              <td className="" style={tableStyle}>12</td>
              <td className="" style={tableStyle}>14</td>
              <td className="" style={tableStyle}>9</td>
            </tr> 
            <tr className="">
              <td className="" style={tableStyle}>John Smith</td>
              <td className="" style={tableStyle}>12</td>
              <td className="" style={tableStyle}>14</td>
              <td className="" style={tableStyle}>9</td>
            </tr> 
          </tbody>
        </table>
      </section>
    </div>
  );
};
