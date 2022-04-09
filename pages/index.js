import React from "react";
import Home from "./Home";
import Navbar from "../components/Navbar/Navbar";
import SimpleReactLightbox from "simple-react-lightbox";

export default function Index() {
  return (
    <SimpleReactLightbox>
      <div>
        <Navbar />
        <Home />
      </div>
    </SimpleReactLightbox>
  );
}
