import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Modal() {
  /* create alerte popup */
  const diffToast = () => {
    toast.success('Message Sent!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn rounded-lg	">
        Contact Me
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle rounded-lg	"
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold mb-4">Lets get in touch</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs mb-2 rounded-lg	"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs mb-3 rounded-lg	"
          />
          <textarea
            className="textarea textarea-accent w-full"
            placeholder="Your Message ..."
          ></textarea>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <button
            onClick={diffToast}
            className="btn btn-outline btn-black btn-lg rounded-lg	"
          >
            Send
          </button>
        </label>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </label>
    </>
  );
}

export default Modal;
