import Image from "next/image";

export default function cta() {
  return (
    <div id="service" className="bg-white w-screen min-h-[1049px] px-16 py-28 flex flex-col gap-20 items-center max-sm:gap-12 max-sm:py-12 max-sm:px-6 max-sm:min-h-[862px]">
      <div className="min-h-[109px] flex flex-col gap-6">
        <h2 className="font-RobotoBold text-5xl leading-[57.6px] max-sm:text-[32px] max-sm:leading-[41.6px] max-sm:text-center ">
          Explore Courses By Category
        </h2>
        <p className="  font-RobotoRegular text-[18px] leading-[27px] max-sm:text-center">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="w-screen min-h-[636px] flex flex-col gap-16">
        <div className="w-screen min-h-[132px] flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-6">
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/pen.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Design & Development
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/volume-high.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Marketing
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/group.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Development
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
        </div>
        <div className="w-screen min-h-[132px] flex justify-between max-sm:hidden">
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/microphone.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Communication
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/link.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Digital Marketing
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/arrow-2.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Self Development
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
        </div>
        <div className="w-screen min-h-[132px] flex justify-between max-sm:hidden">
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/briefcase.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Business
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/book.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Finance
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
          <span className="w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary2">
            <div className="bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]">
              <Image
                src="/images/CLogos/book2.svg"
                alt="CLogos"
                height={32}
                width={32}
              />
            </div>
            <div className="min-h-[57px] w-[246.67px] flex flex-col justify-center">
              <h4 className="font-RobotoRegular font-semibold text-xl leading-[30px]">
                Consulting
              </h4>
              <p className="font-RobotoRegular text-lg leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </span>
        </div>
        <div className="flex justify-center">
          <button className="bg-white min-h-[48px] min-w-[155px] py-3 px-6 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
