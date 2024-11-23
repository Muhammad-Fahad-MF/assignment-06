import Image from "next/image";

export default function contact() {
  return (
    <div className='bg-[#f7f7f7] pr-[64px] pl-[62px] py-3 border-b-[1px] border-[#676767] max-sm:hidden max-lg:hidden'>
      <div className='flex justify-between '>
       <div className='flex font-RobotoRegular text-sm gap-4 '>
        <p>Phone Number: 956 742 455 678</p>
        <p className='border-l-[1px] border-[#676767] pl-4'>Email:info@ddsgnr.com</p>
       </div>
       <div className='flex justify-end gap-4 '>
        <div className='flex gap-3'>
         <Image src='/images/Facebook.svg' alt='fbLogo' height={24} width={24}/>
         <Image src='/images/Instagram.svg' alt='InLogo' height={24} width={24}/>
         <Image src='/images/Vector.svg' alt='XLogo' height={20} width={20}/>
         <Image src='/images/LinkedIn.svg' alt='LibLogo' height={23} width={23}/>
        </div>
       </div>
      </div>
    </div>
  )
}
