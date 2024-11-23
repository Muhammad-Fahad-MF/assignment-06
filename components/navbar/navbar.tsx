import Image from "next/image";
import { MdMenu } from "react-icons/md";

export default function navbar() {
  return (
    <div className="font-RobotoRegular flex justify-center items-center bg-primary2 px-16 border-b-[1px] border-secondary2 mt-4 h-[72px] max-sm:px-6 max-lg:px-6 max-sm:mt-0 max-lg:mt-0">
      <div className="min-h-[44px] w-[1152px] flex justify-between max-sm:items-center">
        <Image
          src="/images/mainLogo.svg"
          alt="mainLogo"
          height={41}
          width={130}
        />
        <MdMenu className="max-sm:visible text-2xl m-3 lg:hidden" />
        <ul className="bg-white h-[44px] w-[910px] flex justify-center items-center gap-[32px] max-sm:hidden max-lg:hidden ">
          <li className="p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer ">
            <a href="#">Home</a>
          </li>
          <li className="p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer ">
            <a href="#courses">Courses</a>
          </li>
          <li className="p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer ">
            <a href="#service">Services</a>
          </li>
          <li className="p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer ">
            <a href="#achieve">Achievement</a>
          </li>
          <li className="p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer ">
            <a href="#team">About Us</a>
          </li>
          <li className="p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer ">
            <a href="#testimons">Testimonial</a>
          </li>
          <div className="flex gap-4">
            <button className="bg-white min-h-[40px] min-w-[80px] py-2 px-5  rounded-[4px] border-black border-[1px] hover:bg-black hover:text-white">
              Login
            </button>
            <button className="bg-black text-white min-h-[40px] min-w-[95px] py-2 px-5  rounded-[4px] border-black border-[1px] hover:bg-white hover:text-black">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
