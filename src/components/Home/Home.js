import React from "react";
import RCarousel from "../HtmlControls/RCarousel";
import EmployeeList from "../Shared/EmployeeList"

const Home = () => {
  return (
    <>
      <div className="slider">
      <RCarousel />
      <EmployeeList/>
      </div>

      
    </>
  );
};

export default Home;
