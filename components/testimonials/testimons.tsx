"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export default function Testimons() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div id="testimons" className=" w-screen py-28 px-16 flex flex-col gap-20 max-sm:px-6 max-sm:py-12 max-sm:gap-12">
      <div className="flex flex-col gap-5 max-sm:gap-4">
        <h2 className="font-RobotoBold text-5xl leading-[57.6px] max-sm:hidden">
          Customer testimonials
        </h2>
        <h2 className="font-RobotoBold text-5xl leading-[57.6px] sm:hidden max-sm:text-[32px] max-sm:leading-[41.6px] max-sm:text-center">
          What Our Student Say
        </h2>
        <p className="font-RobotoRegular text-[18px] leading-[27px] max-sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col gap-12 max-sm:items-center ">
        <div className="flex gap-8 max-sm:hidden">
          <span className="min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:w-[380px] max-sm:h-[322px]">
            <section className="flex items-center">
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
            </section>
            <section className="flex flex-col gap-6">
              <p className="font-RobotoRegular text-[18px] leading-[27px] ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <span className="flex gap-5 ">
                <Image
                  src="/images/TeamDP/Image3.svg"
                  alt="Social"
                  height={56}
                  width={56}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-RobotoRegular font-semibold text-[18px] leading-6">
                    James Nduku
                  </h2>
                  <p className="font-RobotoRegular ">Software Developer</p>
                </div>
              </span>
            </section>
          </span>
          <span className="min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:hidden">
            <section className="flex items-center">
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
            </section>
            <section className="flex flex-col gap-6">
              <p className="font-RobotoRegular text-[18px] leading-[27px] ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <span className="flex gap-5 ">
                <Image
                  src="/images/TeamDP/Image.svg"
                  alt="Social"
                  height={56}
                  width={56}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-RobotoRegular font-semibold text-[18px] leading-6">
                    Erick Kipkemboi
                  </h2>
                  <p className="font-RobotoRegular ">Scrum Master</p>
                </div>
              </span>
            </section>
          </span>
          <span className="min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:hidden">
            <section className="flex items-center">
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
              <HiStar className="text-3xl" />
            </section>
            <section className="flex flex-col gap-6">
              <p className="font-RobotoRegular text-[18px] leading-[27px] ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <span className="flex gap-5 ">
                <Image
                  src="/images/TeamDP/Image6.svg"
                  alt="Social"
                  height={56}
                  width={56}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-RobotoRegular font-semibold text-[18px] leading-6">
                    Stephen Kerubo
                  </h2>
                  <p className="font-RobotoRegular ">UI/UX Designer</p>
                </div>
              </span>
            </section>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-[2px] max-sm:hidden">
        <div className="flex justify-between min-h-2 min-w-[72px]">
          <FaCircle className="text-[8px] text-black " />
          <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
          <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
          <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
          <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
        </div>
        <div className="flex gap-[15px]">
          <BsArrowLeftCircle className="text-5xl font-thin hover:bg-black hover:text-white rounded-full  " />
          <BsArrowRightCircle className="text-5xl font-thin hover:bg-black hover:text-white rounded-full" />
        </div>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="sm:hidden"
      >
        <div className="flex flex-col ">
          <div>
            <CarouselContent>
              <CarouselItem className="w-screen flex justify-center items-center pb-3">
                <span className="min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:w-[380px] max-sm:h-[322px]">
                  <section className="flex items-center">
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                  </section>
                  <section className="flex flex-col gap-6">
                    <p className="font-RobotoRegular text-[18px] leading-[27px] ">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare."
                    </p>
                    <span className="flex gap-5 ">
                      <Image
                        src="/images/TeamDP/Image3.svg"
                        alt="Social"
                        height={56}
                        width={56}
                        className="rounded-full"
                      />
                      <div>
                        <h2 className="font-RobotoRegular font-semibold text-[18px] leading-6">
                          James Nduku
                        </h2>
                        <p className="font-RobotoRegular ">
                          Software Developer
                        </p>
                      </div>
                    </span>
                  </section>
                </span>
              </CarouselItem>
              <CarouselItem className="w-screen flex justify-center items-center pb-3">
                <span className="min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:w-[380px] max-sm:h-[322px] ">
                  <section className="flex items-center">
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                  </section>
                  <section className="flex flex-col gap-6">
                    <p className="font-RobotoRegular text-[18px] leading-[27px] ">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare."
                    </p>
                    <span className="flex gap-5 ">
                      <Image
                        src="/images/TeamDP/Image.svg"
                        alt="Social"
                        height={56}
                        width={56}
                        className="rounded-full"
                      />
                      <div>
                        <h2 className="font-RobotoRegular font-semibold text-[18px] leading-6">
                          Erick Kipkemboi
                        </h2>
                        <p className="font-RobotoRegular ">Scrum Master</p>
                      </div>
                    </span>
                  </section>
                </span>
              </CarouselItem>
              <CarouselItem className="w-screen flex justify-center items-center pb-3">
                <span className="min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:w-[380px] max-sm:h-[322px]">
                  <section className="flex items-center">
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                    <HiStar className="text-3xl" />
                  </section>
                  <section className="flex flex-col gap-6">
                    <p className="font-RobotoRegular text-[18px] leading-[27px] ">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare."
                    </p>
                    <span className="flex gap-5 ">
                      <Image
                        src="/images/TeamDP/Image6.svg"
                        alt="Social"
                        height={56}
                        width={56}
                        className="rounded-full"
                      />
                      <div>
                        <h2 className="font-RobotoRegular font-semibold text-[18px] leading-6">
                          Stephen Kerubo
                        </h2>
                        <p className="font-RobotoRegular ">UI/UX Designer</p>
                      </div>
                    </span>
                  </section>
                </span>
              </CarouselItem>
            </CarouselContent>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-between min-h-2 min-w-[72px]">
              <FaCircle className="text-[8px] text-black " />
              <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
              <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
              <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
              <FaCircle className="text-[8px] text-secondary2 hover:text-black" />
            </div>
            <div className="w-[111px] flex justify-between">
              <CarouselPrevious className="border-[1px] border-black" />
              <CarouselNext className="border-[1px] border-black text-[24px]" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
