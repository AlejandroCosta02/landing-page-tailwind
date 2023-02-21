import React, { useState } from "react";
import { useForm } from "react-hook-form";

function PopupModal() {
  const [changeInput, setChangeInput] = useState('')
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  /*valide form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const handleChange = (e) => {
    setChangeInput(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit((data) => {
      setChangeInput(data)
      console.log(data)
      handleOpen()
      
    })}>
      <label htmlFor="my-modal" className="btn">open modal</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <div className="flex flex-col mx-auto w-fit text-center">
              <input
                type="text"
                {...register("firstName", { required: true, minLength: 3 })}
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs mb-2 rounded-lg	"
                onChange = {handleChange}
              />
              {errors.firstName && (
                <span className="">*This field is required</span>
              )}
            </div>
        <div className="modal-action">
        </div>
      </div>
      </div>
    </form>
  );
}

export default PopupModal;
