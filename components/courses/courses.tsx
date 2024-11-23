import Image from "next/image";
import { HiStar } from 'react-icons/hi';

export default function courses() {
  return (
    <div id="courses" className="w-screen min-h-[1742px] py-28 px-16 flex flex-col gap-[60px] items-center justify-center max-sm:py-12 max-sm:px-6">
      <div className="min-h-[118px] flex flex-col gap-4">
        <h1 className="font-RobotoBold text-center text-[56px] leading-[67.2px]">
          Courses
        </h1>
        <p className="font-RobotoRegular text-[18px] leading-[27px] text-center">
          Your Ultimate Guide to learning
        </p>
      </div>
      <div className="flex flex-col gap-16">
        <section className="min-h-10 min-w-[336px]">
          <ul className="flex gap-2 justify-center">
            <li className="font-RobotoRegular py-2 px-4 hover:border-b-[1px] hover:border-secondary2 cursor-pointer">
              Popular
            </li>
            <li className="font-RobotoRegular py-2 px-4 hover:border-b-[1px] hover:border-secondary2 cursor-pointer">
              Recommended
            </li>
            <li className="font-RobotoRegular py-2 px-4 hover:border-b-[1px] hover:border-secondary2 cursor-pointer">
              Best Price
            </li>
          </ul>
        </section>
        <div className="flex flex-col gap-16">
          <span className="flex gap-8 max-sm:flex-col">
            <div className="bg-primary2 w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]">
              <Image
                src="/images/CardImgs/Image.svg"
                alt="CardImage"
                height={300}
                width={416}
              />
              <div className="flex flex-col px-4 pb-6 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="flex justify-between">
                    <h4 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                      Design
                    </h4>
                    <div className="flex justify-center items-center gap-1">
                      <HiStar className="h-6 w-6 text-[#6c6b6b7f]" />
                      <h6 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                        5.0
                      </h6>
                    </div>
                  </span>
                  <h2 className="font-RobotoBold text-[24px] leading-[33.6px]">
                    UX/UI Design 201
                  </h2>
                  <p className="font-RobotoRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
                    Enroll Now
                  </button>
                  <h5 className="rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium">
                    $400
                  </h5>
                </div>
              </div>
            </div>
            <div className="bg-primary2 w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]">
              <Image
                src="/images/CardImgs/Image6.svg"
                alt="CardImage"
                width={416}
                height={312}
              />
              <div className="flex flex-col px-4 pb-6 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="flex justify-between">
                    <h4 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                      Programmimg
                    </h4>
                    <div className="flex justify-center items-center gap-1">
                      <HiStar className="h-6 w-6 text-[#6c6b6b7f]" />
                      <h6 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                        5.0
                      </h6>
                    </div>
                  </span>
                  <h2 className="font-RobotoBold text-[24px] leading-[33.6px]">
                    Introduction to Python
                  </h2>
                  <p className="font-RobotoRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
                    Enroll Now
                  </button>
                  <h5 className="rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium">
                    $400
                  </h5>
                </div>
              </div>
            </div>
            <div className="bg-primary2 w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]">
              <Image
                src="/images/CardImgs/Image5.svg"
                alt="CardImage"
                height={300}
                width={416}
              />
              <div className="flex flex-col px-4 pb-6 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="flex justify-between">
                    <h4 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                      Business
                    </h4>
                    <div className="flex justify-center items-center gap-1">
                      <HiStar className="h-6 w-6 text-[#6c6b6b7f]" />
                      <h6 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                        5.0
                      </h6>
                    </div>
                  </span>
                  <h2 className="font-RobotoBold text-[24px] leading-[33.6px]">
                    Data Analysis for Beginners
                  </h2>
                  <p className="font-RobotoRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
                    Enroll Now
                  </button>
                  <h5 className="rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium">
                    $400
                  </h5>
                </div>
              </div>
            </div>
          </span>
          <span className="flex gap-8 max-sm:hidden">
            <div className="bg-primary2 w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]">
              <Image
                src="/images/CardImgs/Image4.svg"
                alt="CardImage"
                height={300}
                width={416}
              />
              <div className="flex flex-col px-4 pb-6 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="flex justify-between">
                    <h4 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                      Art
                    </h4>
                    <div className="flex justify-center items-center gap-1">
                      <HiStar className="h-6 w-6 text-[#6c6b6b7f]" />
                      <h6 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                        5.0
                      </h6>
                    </div>
                  </span>
                  <h2 className="font-RobotoBold text-[24px] leading-[33.6px]">
                    Art Specialization
                  </h2>
                  <p className="font-RobotoRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
                    Enroll Now
                  </button>
                  <h5 className="rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium">
                    $400
                  </h5>
                </div>
              </div>
            </div>
            <div className="bg-primary2 w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]">
              <Image
                src="/images/CardImgs/Image3.svg"
                alt="CardImage"
                height={300}
                width={416}
              />
              <div className="flex flex-col px-4 pb-6 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="flex justify-between">
                    <h4 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                      Law
                    </h4>
                    <div className="flex justify-center items-center gap-1">
                      <HiStar className="h-6 w-6 text-[#6c6b6b7f]" />
                      <h6 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                        5.0
                      </h6>
                    </div>
                  </span>
                  <h2 className="font-RobotoBold text-[24px] leading-[33.6px]">
                    Rule of Law
                  </h2>
                  <p className="font-RobotoRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
                    Enroll Now
                  </button>
                  <h5 className="rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium">
                    $400
                  </h5>
                </div>
              </div>
            </div>
            <div className="bg-primary2 w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]">
              <Image
                src="/images/CardImgs/Image2.svg"
                alt="CardImage"
                height={300}
                width={416}
              />
              <div className="flex flex-col px-4 pb-6 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="flex justify-between">
                    <h4 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                      Tech
                    </h4>
                    <div className="flex justify-center items-center gap-1">
                      <HiStar className="h-6 w-6 text-[#6c6b6b7f]" />
                      <h6 className="font-RobotoRegular font-semibold text-[14px] leading-[21px]">
                        5.0
                      </h6>
                    </div>
                  </span>
                  <h2 className="font-RobotoBold text-[24px] leading-[33.6px]">
                    Introduction to webflow
                  </h2>
                  <p className="font-RobotoRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
                    Enroll Now
                  </button>
                  <h5 className="rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium">
                    $400
                  </h5>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-white min-h-[40px] min-w-[152px] py-2 px-4 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
          View All Courses
        </button>
      </div>
    </div>
  );
}
