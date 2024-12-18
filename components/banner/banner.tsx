import Image from "next/image";
export default function banner() {
  return (
    <div className=" flex justify-between max-sm:flex-col max-lg:flex-col ">
      <div className="pr-[60px] pl-[80px] flex items-center gap-6 max-sm:px-0 ">
        <div className="flex flex-col gap-6 max-sm:py-16 max-sm:px-6 max-sm:w-[428px] max-sm:h-[390px] max-xs:py-12 max-xs:px-0 max-xs:items-center">
          <h1 className=" font-RobotoBold text-[56px] leading-[67.2px] max-sm:text-[40px] max-sm:leading-[48px] max-xs:text-[35px] max-xs:w-[300px]">
            Learn new skills online with ease
          </h1>
          <p className="text-[18px] leading-[27px] font-RobotoRegular max-xs:text-base max-xs:w-[300px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className=" pt-4 flex gap-4">
            <button className="bg-white  min-w-[178px] py-3 px-6  rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white max-xs:text-[15px] max-xs:px-3 max-xs:py-2 max-xs:min-w-[155px] ">
              Start learning now
            </button>
            <button className="bg-black text-white min-w-[164px] py-3 px-6  rounded-[5px] border-black border-[1px] hover:bg-white hover:text-black max-xs:text-[15px] max-xs:px-3 max-xs:py-2 max-xs:min-w-[155px] ">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/images/BannerImage.svg"
        alt="Model"
        height={900}
        width={640}
        className="max-sm:hidden"
      ></Image>
      <Image
        src="/images/BannerImage2.svg"
        alt="Model"
        height={390}
        width={640}
        className="sm:hidden"
      ></Image>
    </div>
  );
}
