import React, { useState } from "react";
import logo from "../assets/images/logo-full.svg";
import info from "../assets/images/icon-info.svg";
import upload from "../assets/images/icon-upload.svg";
import { preview } from "vite";

interface FormData {
  name: string;
  email: string;
  ghubname: string;
  file: File | null;
  previewUrl: string | null;
}

const ConferenceTicket: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    ghubname: "",
    file: null,
    previewUrl: null,
  });

  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setFormData({ ...formData, file: selectedFile, previewUrl: previewUrl });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Form Submitted Successfully! ${formData}`);
    setFormData({
      name: "",
      email: "",
      ghubname: "",
      file: null,
      previewUrl: null,
    });
  };
  return (
    <>
      <main className="min-h-screen px-8 text-neutral-0 bg-[url('./assets/images/background-desktop.png')] bg-cover bg-center bg-no-repeat font-ir">
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
            <form
              action="#"
              onSubmit={handleSubmit}
              className="grid gap-2 text-left"
            >
              <div className="form-control grid gap-1">
                <span className="form-label">Upload Avatar</span>
                <label
                  htmlFor="file"
                  className="text-center flex flex-col gap-2 bg-neutral-900 border border-dashed border-neutral-500 rounded-md rounded-md py-4"
                >
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={handleFileChange}
                    className="w-0 h-0"
                  />
                  {formData.file ? (
                    <p className="grid grid-cols-2 gap-x-3 gap-y-4 px-8">
                      {formData.previewUrl && (
                        <img
                          src={formData.previewUrl}
                          alt="thumbnail"
                          className="col-span-2 w-16 rounded-xl mx-auto border border-neutral-500"
                        />
                      )}
                      <button className="py-1 text-xs bg-neutral-700 rounded-md text-neutral-300 font-ibold">
                        remove image
                      </button>
                      <button className="py-1 text-xs bg-neutral-700 rounded-md text-neutral-300 font-ibold">
                        change image
                      </button>
                    </p>
                  ) : (
                    <p className="flex flex-col gap-3">
                      <span className="mx-auto bg-neutral-700 border-neutral-500 rounded-xl p-2">
                        <img src={upload} alt="" className="mx-auto w-5" />
                      </span>
                      <span className="my-auto">
                        Drag and drop or click to upload
                      </span>
                    </p>
                  )}
                </label>
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
                  name="name"
                  id="name"
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
                  name="ghubname"
                  id="ghubname"
                  value={formData.ghubname}
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
