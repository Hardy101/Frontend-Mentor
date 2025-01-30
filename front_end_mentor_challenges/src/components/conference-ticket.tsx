import React from "react";
import logo from "../assets/images/logo-full.svg";

const ConferenceTicket: React.FC = () => {
  return (
    <>
      <main className="h-screen text-neutral-0 bg-[url('./assets/images/background-desktop.png')] bg-[50%] bg-center bg-no-repeat font-ir">
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
          <div className="body mt-6 w-3/5 mx-auto">
            <form action="#" className="grid gap-2">
              <div className="form-control">
                <label
                  htmlFor="avatar"
                  className="grid gap-2 border-spacing-5   border-2 border-dashed border-neutral-500"
                >
                  <span className="text-left">Upload Avatar</span>
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    className="w-0 h-0"
                  />
                  <span>Drag and drop or click to upload</span>
                </label>
              </div>
              <div className="form-control grid text-left gap-2">
                <label htmlFor="fname">Full Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-500 placeholder:text-neutral-500 text-sm outline-none"
                />
              </div>
              <div className="form-control grid text-left gap-2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-500 placeholder:text-neutral-500 text-sm outline-none"
                />
              </div>
              <div className="form-control grid text-left gap-2">
                <label htmlFor="ghuname">Github Username</label>
                <input
                  type="text"
                  name="ghuname"
                  id="ghubname"
                  placeholder="@yourusername"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-500 placeholder:text-neutral-500 text-sm outline-none"
                />
              </div>
              <div className="form-control">
                <button className="py-2 w-full rounded-md bg-orange-700 text-neutral-900 font-ixbold">
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
