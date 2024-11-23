import Image from "next/image";

export default function trust() {
  return (
    <div className="bg-primary2 min-h-[228px] flex items-center py-20 px-2 gap-16 max-sm:flex-col max-sm:items-start max-sm:py-12 max-sm:px-6">
      <h3 className="font-RobotoBold text-[24px] leading-[33.8px]  max-sm:hidden">
        Trusted by 2000+ companies worldwide.
      </h3>
      <h3 className="font-RobotoBold text-[24px] leading-[33.8px] max-sm:mx-2 max-sm:text-[18px] max-sm:leading-[27px] max-sm:w-[327px] sm:hidden ">
        Trusted by the world's best companies [social proof to build
        credibility]
      </h3>
      <div className="flex justify-center items-center  py-[8.74px] gap-[19.12px] max-lg:px-6">
        <Image
          src="/images/LoremLogos/Logo.svg"
          alt="LoremLogos"
          height={38.52}
          width={123.8}
        />
        <Image
          src="/images/LoremLogos/Logo6.svg"
          alt="LoremLogos"
          height={38.52}
          width={123.8}
        />
        <Image
          src="/images/LoremLogos/Logo5.svg"
          alt="LoremLogos"
          height={38.52}
          width={123.8}
        />
        <Image
          src="/images/LoremLogos/Logo4.svg"
          alt="LoremLogos"
          height={38.52}
          width={123.8}
          className="max-lg:hidden"
        />
        <Image
          src="/images/LoremLogos/Logo3.svg"
          alt="LoremLogos"
          height={38.52}
          width={123.8}
          className="max-lg:hidden"
        />
        <Image
          src="/images/LoremLogos/Logo2.svg"
          alt="LoremLogos"
          height={38.52}
          width={123.8}
          className="max-lg:hidden"
        />
      </div>
    </div>
  );
}
