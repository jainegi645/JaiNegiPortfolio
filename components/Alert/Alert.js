import React,{useEffect} from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";

const Alert = () => {
  const socket = io("http://localhost:1337");

  useEffect(() => {
    socket.on("connection", (payload) => {
      console.log(payload); 
    });
 
  }, []);


  const notify = () => toast("Wow so easy!");



  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default Alert;
