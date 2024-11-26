import Image from "next/image";

export default function footer() {
  return (
    <div className=" p-20 max-sm:px-6 max-sm:py-12">
      <div className="flex flex-col gap-20 max-sm:gap-12">
        <section className="flex justify-between max-sm:flex-col">
          <div className="max-sm:min-h-[91px] max-sm:flex max-sm:justify-between max-sm:flex-col max-sm:items-center">
            <h2 className="font-RobotoRegular font-semibold text-[18px] leading-[27px] max-sm:text-center">
              Subscribe to our newsletter
            </h2>
            <p className="font-RobotoRegular max-sm:text-center max-sm:w-[287px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <section className="flex gap-4 min-h-12 max-sm:flex-col max-sm:items-center">
              <input
                className="border-[1px] border-black rounded-[5px] p-3 font-RobotoRegular text-[#505050] focus:outline-none focus:ring-0 max-sm:w-[380px] max-sm:min-h-[48px] max-xs:w-[340px]"
                type="text"
                placeholder="Enter your email"
              ></input>
              <button className="bg-white min-h-[48px] min-w-[119px] py-3 px-6 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular max-sm:w-[380px] max-sm:min-h-[48px] max-sm:flex max-sm:justify-center max-xs:w-[340px]">
                Subscribe
              </button>
            </section>
            <p className="font-RobotoRegular text-[12px] leading-[18px] max-sm:text-center">
              By subscribing you agree to with our{" "}
              <code className="font-RobotoRegular underline">
                Privacy Policy
              </code>
            </p>
          </div>
        </section>
        <section className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:min-h-[811px]">
          <div className="w-[250px] max-sm:flex max-sm:justify-center">
            <Image
              src="/images/mainLogo.svg"
              alt="mainLogo"
              height={40}
              width={130}
            />
          </div>
          <div className="w-[250px] flex flex-col justify-between max-sm:items-center">
            <h2 className="font-RobotoRegular font-semibold text-[16px] leading-[24px]">
              Courses
            </h2>
            <ul>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Business
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Development
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Technology
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Design
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Programming
              </li>
            </ul>
          </div>
          <div className="w-[250px] flex flex-col justify-between max-sm:items-center">
            <h2 className="font-RobotoRegular font-semibold text-[16px] leading-[24px]">
              Resources
            </h2>
            <ul>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Career
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Resume
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Learning
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Interview Preparation
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Jobs
              </li>
            </ul>
          </div>
          <div className="w-[250px] flex flex-col justify-between max-sm:items-center">
            <h2 className="font-RobotoRegular font-semibold text-[16px] leading-[24px] ">
              About Us
            </h2>
            <ul>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Contact
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Help/Support
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                FAQ
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Terms and Conditions
              </li>
              <li className="py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center">
                Partners
              </li>
            </ul>
          </div>
        </section>
        <section className="border-t-[1px] border-black pt-7 ">
          <div className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:min-h-[114px]">
            <span className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:min-h-[66px]">
              <p className="font-RobotoRegular text-[14px] leading-[21px]">
                2023 Ddsgnr. All right reserved.
              </p>
              <ul className="flex justify-between min-w-[345px]">
                <li className="font-RobotoRegular text-[14px] leading-[21px] underline">
                  Privacy Policy
                </li>
                <li className="font-RobotoRegular text-[14px] leading-[21px] underline">
                  Terms of Service
                </li>
                <li className="font-RobotoRegular text-[14px] leading-[21px] underline">
                  Cookies Settings
                </li>
              </ul>
            </span>
            <div className="flex gap-3">
              <Image
                src="/images/Facebook.svg"
                alt="fbLogo"
                height={24}
                width={24}
              />
              <Image
                src="/images/Instagram.svg"
                alt="InLogo"
                height={24}
                width={24}
              />
              <Image
                src="/images/Vector.svg"
                alt="XLogo"
                height={20}
                width={20}
              />
              <Image
                src="/images/LinkedIn.svg"
                alt="LibLogo"
                height={23}
                width={23}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
