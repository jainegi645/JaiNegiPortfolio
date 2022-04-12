import React from "react";
import Home from "./Home";
import Navbar from "../components/Navbar/Navbar";
import SimpleReactLightbox from "simple-react-lightbox";
import AboutUs from "../components/Home/AboutUs";
import CatalougeHome from "../components/Home/CatalougeHome";
import LiteratureHome from "../components/Home/LiteratureHome";
import ExhibitionHome from "../components/Home/ExhibitionHome";
import Fotter from "../components/Fotter/Fotter";
import FullLiteraturePage from "../components/Literature/FullLiteraturePage";

export default function Index() {
  return (
    <SimpleReactLightbox>
      <div>
        <Navbar />
        <Home />
        <AboutUs/>
      <CatalougeHome/>
      <LiteratureHome/>
      {/* <ExhibitionHome/> */}
      {/* <FullLiteraturePage/> */}
      <Fotter/>
      </div>
    </SimpleReactLightbox>
  );
}
