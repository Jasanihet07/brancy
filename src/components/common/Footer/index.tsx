import Link from "next/link"
import Image from "next/image"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa"
import { NavLinksType } from "@/utils/types"
import { IoMdHeart } from "react-icons/io"
import logo from "@/public/images/logo.jpg"


// { data }: { data: NavLinksType }

const Footer = () => {
  return (
    // <footer className=" body-font bg-gray-300 mt-12">
    //     <div className="container px-5 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    //       <div className="flex justify-center pt-7 w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    //         <Link
    //           href={"/"}
    //           className="flex w-40 title-font font-medium items-center md:justify-start justify-center text-gray-900"
    //         >
    //           {/* <div className="relative">
    //             <Image src={data.image} width={80} height={80} alt="logo" />
    //           </div> */}
    //           <Image src={logo} width={80} height={80} alt="logo" />
    //         </Link>

    //         {/* <div className="mt-5 cursor-pointer">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been.
    //         </div> */}
    //       </div>
    //       <div className="flex md:pl-40 md:pt-7 md:pr-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
    //         <div className=" px-4">
    //           <h2 className="title-font  text-gray-900 font-extrabold tracking-widest text-sm mb-3 cursor-pointer">
    //             INFORMATION
    //           </h2>
    //           <div className="flex md:pt-3 space-x-10">
    //             <nav className="list-none mb-10 ">
    //               <li className="py-3">
    //                 <a
    //                   href="./about-us"
    //                   className="text-gray-600 hover:text-gray-800 cursor-pointer"
    //                 >
    //                   About us
    //                 </a>
    //               </li>
    //               <li className="py-3">
    //                 <a
    //                   href="./contact-us"
    //                   className="text-gray-600 hover:text-gray-800 cursor-pointer"
    //                 >
    //                   Contact
    //                 </a>
    //               </li>
    //             </nav>
    //             <nav className=" list-none ">
    //               <li className="py-3">
    //                 <a
    //                   href="./login"
    //                   className="text-gray-600 hover:text-gray-800 cursor-pointer"
    //                 >
    //                   Login
    //                 </a>
    //               </li>
    //               <li className="py-3">
    //                 <a
    //                   href="./products"
    //                   className="text-gray-600 hover:text-gray-800 cursor-pointer"
    //                 >
    //                   Shop
    //                 </a>
    //               </li>
    //             </nav>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="md:pl-20 md:pr-20 md:pt-7">
    //         <h2 className="title-font  text-gray-900 font-extrabold tracking-widest text-sm mb-3 cursor-pointer ">
    //           SOCIAL INFO
    //         </h2>
    //         <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center md:pt-5 sm:justify-start">
    //           <a
    //             href="https://www.facebook.com/profile.php?id=100054730871790"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className=" mr-4"
    //           >
    //             <FaFacebookF size={20} />
    //           </a>
    //           <a
    //             href="https://x.com/TheSpecialChar?s=20"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className=" mr-4"
    //           >
    //             <FaTwitter size={20} />
    //           </a>
    //           <a
    //             href="https://www.instagram.com/thespecialchar?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className=" mr-4"
    //           >
    //             <FaInstagram size={20} />
    //           </a>
    //           <a
    //             href="https://www.linkedin.com/company/thespecialcharacter/mycompany/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <FaLinkedinIn size={20} />
    //           </a>
    //         </span>
    //       </div>
    //     </div>
    //     <hr />

    //     <div className="py-4 test-sm text-center">
    //       <p className="mb-2 sm:mb-0 cursor-pointer">
    //         <span className="flex item-center justify-center text-xs">
    //           © 2023 GlossyLabs — Made with
    //           <IoMdHeart fill="red" className="mx-1" /> by Semi Colon.
    //         </span>
    //       </p>
    //     </div>
    //   </footer>
    //Aapdu footer upar che
    <footer className=" body-font bg-gray-300 lg:mt-16 bg-red-200">
      <div className="container px-5 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex justify-center pt-7 w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href={"/"}
            className="flex w-40 title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image src={logo} alt="logo of the website" />
          </Link>
        </div>

        <div className="flex-grow flex  flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left justify-center text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 ">
              INFORMATION
            </h2>
            <nav className="list-none mb-10 ">
              <li className="py-3">
                <a
                  href="./about-us"
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  About-us
                </a>
              </li>
              <li className="py-3">
                <a
                  href="./login"
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  Login
                </a>
              </li>
              <li className="py-3">
                <a
                  href="./products"
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  Shop
                </a>
              </li>
            </nav>
          </div>

          {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <nav className="list-none mb-10 ">
                  <li className='py-3'>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">About Us</a>
                  </li>
                  <li className='py-3'>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Login</a>
                  </li>
                </nav>
              </div>
            </div> */}
        </div>
        <div className="m-auto">
          <span className="inline-flex  justify-center sm:justify-start ">
            <a
              href="https://www.facebook.com/profile.php?id=100054730871790"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} style={{ marginRight: "10px" }} />
            </a>
            <a
              href="https://x.com/TheSpecialChar?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} style={{ marginRight: "10px" }} />
            </a>
            <a
              href="https://www.instagram.com/thespecialchar?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} style={{ marginRight: "10px" }} />
            </a>
            <a
              href="https://www.linkedin.com/company/thespecialcharacter/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "10px" }} />
            </a>
          </span>
        </div>
      </div>

      <div className="bg-gray-100"></div>
      <div className="flex justify-center">
        <p className="text-gray-500 text-sm text-center sm:text-left flex justify-center">
          © 2023 GlossyLabs — Made with <IoMdHeart fill="red" /> by Semi Colon.
        </p>
      </div>
    </footer>
  )
}

export default Footer
