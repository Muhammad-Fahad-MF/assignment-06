

export default function achievements() {
  return (
    <div id="achieve" className=" min-h-[488px] py-28 px-16 flex gap-20 max-sm:py-12 max-sm:px-6">
      <div className=" flex gap-6 flex-col">
        <div className=" flex flex-col gap-4">
          <h2 className="font-RobotoBold text-5xl leading-[57.6px] text-center max-sm:text-[32px] max-sm:leading-[41.6px]">
            Our Achivements
          </h2>
          <p className="font-RobotoRegular text-center text-[18px] leading-[27px] max-sm:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <p className="font-RobotoRegular text-center text-[18px] leading-[27px] sm:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.{" "}
          </p>
        </div>
        <div className="flex gap-6 w-[100%] max-sm:flex-col ">
          <div className=" py-2 flex w-[50%] justify-between  max-sm:w-[100%]">
            <span className=" flex flex-col gap-2 items-center w-[40%] ">
              <h3 className=" font-RobotoBold text-[40px] leading-[48px]">
                +200
              </h3>
              <p className="font-RobotoRegular ">Courses</p>
            </span>
            <span className=" flex flex-col gap-2 items-center w-[40%] ">
              <h3 className="font-RobotoBold text-[40px] leading-[48px]">
                50K
              </h3>
              <p className="font-RobotoRegular ">Mentors</p>
            </span>
          </div>
          <div className=" py-2 flex justify-between  w-[50%] max-sm:w-[100%]">
            <span className="  flex flex-col gap-2 items-center w-[40%] ">
              <h3 className=" font-RobotoBold text-[40px] leading-[48px]">
                370K
              </h3>
              <p className=" font-RobotoRegular ">Students</p>
            </span>
            <span className=" flex flex-col gap-2 items-center w-[40%] ">
              <h3 className="font-RobotoBold text-[40px] leading-[48px]">
                100+
              </h3>
              <p className="font-RobotoRegular ">Recognition</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
