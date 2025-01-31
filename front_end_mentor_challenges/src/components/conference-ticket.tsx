import React, { useState } from "react";
import logo from "../assets/images/logo-full.svg";
import info from "../assets/images/icon-info.svg";
import upload from "../assets/images/icon-upload.svg";

interface FormData {
  name: string;
  email: string;
  guname: string;
}

const ConferenceTicket: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    guname: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <main className="px-8 text-neutral-0 bg-[url('./assets/images/background-desktop.png')] bg-[50%] bg-center bg-no-repeat font-ir">
        <div className="md:w-2/5 mx-auto py-10 text-center">
          <div className="heading">
            <img src={logo} alt="logo" className="mx-auto" />
            <h1 className="font-ibold text-3xl mt-10">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-neutral-300">
              Secure your spot at next year's biggest coding conference.
            </p>
          </div>
          <div className="body mt-6 w-4/6 mx-auto">
            <form action="#" className="grid gap-2 text-left">
              <div className="form-control grid gap-1">
                <label htmlFor="avatar">Upload Avatar</label>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="w-0 h-0"
                />
                <p className="text-center flex flex-col gap-2 bg-neutral-900 border border-dashed border-neutral-500 rounded-md rounded-md py-2">
                  <span className="mx-auto bg-neutral-700 border-neutral-500 rounded-xl p-2">
                    <img src={upload} alt="" className="mx-auto w-5" />
                  </span>
                  <span className="my-auto">
                    Drag and drop or click to upload
                  </span>
                </p>
                <p className="text-xs flex text-neutral-500 mt-2 ">
                  <img src={info} alt="" className="my-auto" />
                  <span className="my-auto">
                    Upload your photo (JPG or PNG, max size: 500KB)
                  </span>
                </p>
              </div>
              <div className="form-control grid text-left gap-2">
                <label htmlFor="fname" className="label-form">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-500 placeholder:text-neutral-500 text-sm outline-none"
                />
              </div>
              <div className="form-control grid text-left gap-2">
                <label htmlFor="email" className="label-form">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-500 placeholder:text-neutral-500 text-sm outline-none"
                />
                <p
                  id="errorEmail"
                  className="hidden text-xs flex gap-2 text-orange-500"
                >
                  <img src={info} alt="" className="my-auto" />
                  <span className="my-auto">
                    Please enter a valid email address
                  </span>
                </p>
              </div>
              <div className="form-control grid text-left gap-2">
                <label htmlFor="ghuname" className="label-form">
                  Github Username
                </label>
                <input
                  type="text"
                  name="ghuname"
                  id="ghubname"
                  value={formData.guname}
                  onChange={handleChange}
                  placeholder="@yourusername"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-500 placeholder:text-neutral-500 text-sm outline-none"
                />
              </div>
              <div className="form-control">
                <button className="py-2 w-full rounded-md text-xs bg-orange-700 text-neutral-900 font-ixbold">
                  Generate My Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConferenceTicket;
