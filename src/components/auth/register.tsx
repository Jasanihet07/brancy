import React from "react"
import { FaRegEnvelope } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import ComHeader from "../common/ComHeader"

interface Props {}

const Register = (props: Props) => {
  return (
    <div>
      <ComHeader />
      <div className="bg-red-200 w-full h-40 mb-8 py-10 px-8 sm:px-8 md:px-16 lg:px-24 xl:px-56">
        <div className="font-sans mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
          <p className="flex gap-2">
            <a href="/">Home</a>/<span>Register</span>
          </p>
        </div>
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mt-4 text-3xl">
          Account
        </div>
      </div>
      <div className="flex flex-col-reverse items-center justify-center w-full flex-1 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center mb-8">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full sm:w-2/3 max-w-4xl">
          <div className="w-full sm:w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-red-600">Glossy</span>Labs
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-black-500 mb-2">
                Register Here
              </h2>

              <div className="flex flex-col items-center sm:border-yellow-500 mt-10">
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <CgProfile className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <a
                  href="#"
                  className="border-2 border-black text-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-200 hover:text-white mt-5"
                >
                  Submit
                </a>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/5 bg-red-200 text-black rounded-tr-2xl rounded-br-2xl py-8 px-4 sm:py-36 sm:px-8">
            <h2 className="text-3xl font-bold mb-2">Sign In Here</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-6">
              Fill up personal information and start the journey with us.
            </p>
            <a
              href="./login"
              className="border-2 border-black rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-yellow-500"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
