import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const formPopUp = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [medium, setMedium] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [cloudinaryRes, setCloudinaryRes] = useState("");

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "pwa2bnlq");
    
    await axios
      .post("https://api.cloudinary.com/v1_1/damaczg5v/image/upload", formData)
      .then((response) => {
        console.log(response);
        setCloudinaryRes(response.data);
        console.log("this is  cloudinaryRes state", cloudinaryRes);
      })
      .then(() => {
        // sendEmail();
        console.log("send mail invoked");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendEmail = async() => {
    await emailjs
      .send(
        "service_c0s0fyo",
        "template_6mcwm3e",
        {
          name: name,
          title: title,
          size: size,
          medium: medium,
          email: email,
          contactNo: contactNo,
          message: message,
          image: cloudinaryRes.original_filename,
          cloudinaryUrl: cloudinaryRes.url,
        },
        "LiF_zKhRw3utGDT9j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="mt-4 md:mt-0">
        <button
          type="button"
          className="inline-block px-9 py-4 bg-cyan-600 rounded-xl  text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenteredScrollable"
        >
          Upload
        </button>
      </div>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenteredScrollable"
        tabIndex="-1"
        aria-labelledby="exampleModalCenteredScrollable"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalCenteredScrollableLabel"
              >
                About the exhibit
              </h5>

              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body relative p-4">
              <form>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    value={title}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Size
                  </label>
                  <input
                    value={size}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Medium
                  </label>
                  <input
                    value={medium}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setMedium(e.target.value)}
                  />
                </div>

                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Contact No.
                  </label>
                  <input
                    value={contactNo}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                </div>


                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setImageSelected(e.target.files[0]);
                    }}
                  />
                </div>
              </form>

          
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                onClick={uploadImage}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default formPopUp;
