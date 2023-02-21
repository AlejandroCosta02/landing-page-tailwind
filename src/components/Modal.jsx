import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

function Modal(props) {
  /* create alerte popup */
  const diffToast = () => {
    toast.success("Message Sent!", {
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

  /*valide form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn rounded-lg	">
        Contact Me
      </label>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          diffToast();
        })}
      >
        <input
          type="checkbox"
          id="my-modal-4"
          className="modal-toggle rounded-lg"
        />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold mb-4">Lets get in touch</h3>
            <div className="flex flex-col mx-auto w-fit text-center">
              <input
                type="text"
                {...register("firstName", { required: true, minLength: 3 })}
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs mb-2 rounded-lg	"
              />
              {errors.firstName && (
                <span className="">*This field is required</span>
              )}
            </div>
            <div className="flex flex-col mx-auto w-fit text-center">
              <input
                type="email"
                {...register("firsEmail", { required: true, maxLength: 20 })}
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs mb-3 rounded-lg	"
              />
              {errors.firsEmail && <span>*This field is required</span>}
            </div>
            <textarea
              type="text"
              {...register("firstMessage", { required: true, minLength: 5 })}
              className="textarea textarea-accent w-full"
              placeholder="Your Message ..."
            ></textarea>
            {errors.firstMessage && <span>*This field is required</span>}
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              {/* <button className="btn btn-outline btn-black btn-lg rounded-lg">
                Send
              </button> */}
              <button ><label htmlFor='my-modal-4'>send</label></button>
            </div>
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
      </form>
    </>
  );
}

export default Modal;
