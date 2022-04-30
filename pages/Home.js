import React from "react";
import Carousel from "../components/Carousel/Carousel";
import CatalougeHome from "../components/Home/CatalougeHome";
import LiteratureHome from "../components/Home/LiteratureHome";
import ExhibitionHome from "../components/Home/ExhibitionHome";
import Alert from "../components/Alert/Alert";
import MobileNav from "../components/Navbar/MobileNav";

const Home = () => {
  return (
    <div className="bg-slate-50">
      {/* <Alert/> */}
      <Carousel />
      {/* <MobileNav/> */}
    
      
    </div>
  );
};

export default Home;
