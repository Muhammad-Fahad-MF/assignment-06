import Head from 'next/head';
import Image from 'next/image'
import { HiStar } from 'react-icons/hi';
import { FaCircle, FaStar } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Your Name" />
      </Head>
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
      <div className='font-RobotoRegular flex justify-center items-center bg-primary px-16 border-b-[1px] border-secondary mt-4 h-[72px] max-sm:px-6 max-lg:px-6 max-sm:mt-0 max-lg:mt-0'>
        <div className='min-h-[44px] w-[1152px] flex justify-between max-sm:items-center'>
          <Image src='/images/mainLogo.svg' alt='mainLogo' height={41} width={130}/>
          <MdMenu className='max-sm:visible text-2xl m-3 lg:hidden'/>
          <ul className='bg-white h-[44px] w-[910px] flex justify-center items-center gap-[32px] max-sm:hidden max-lg:hidden '>
            <li className='p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer '><a href='#' >Home</a></li>
            <li className='p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer '><a href='#courses' >Courses</a></li>
            <li className='p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer '><a href='#' >Services</a></li>
            <li className='p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer '><a href='#' >Achievement</a></li>
            <li className='p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer '><a href='#' >About Us</a></li>
            <li className='p-[10px] hover:border-b-[1px] hover:border-black cursor-pointer '><a href='#' >Testimonial</a></li>
            <div className='flex gap-4'>
             <button className='bg-white min-h-[40px] min-w-[80px] py-2 px-5  rounded-[4px] border-black border-[1px] hover:bg-black hover:text-white'>Login</button>
             <button  className='bg-black text-white min-h-[40px] min-w-[95px] py-2 px-5  rounded-[4px] border-black border-[1px] hover:bg-white hover:text-black'>Sign Up</button>
            </div>
          </ul>
        </div>
      </div>
      <div className=' flex justify-between max-sm:flex-col max-lg:flex-col '>
        <div className='pr-[60px] pl-[80px] flex items-center gap-6 max-sm:px-0'>
          <div className='flex flex-col gap-6 max-sm:py-16 max-sm:px-6 max-sm:w-[428px] max-sm:h-[390px] '>
            <h1 className=' font-RobotoBold text-[56px] leading-[67.2px] max-sm:text-[40px] max-sm:leading-[48px] max-sm: max-sm:'>Learn new skills online with ease</h1>
            <p className='text-[18px] leading-[27px] font-RobotoRegular'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            <div className=' pt-4 flex gap-4'>
             <button className='bg-white min-h-[48px] min-w-[178px] py-3 px-6  rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white '>Start learning now</button>
             <button className='bg-black text-white min-h-[48px] min-w-[164px] py-3 px-6  rounded-[5px] border-black border-[1px] hover:bg-white hover:text-black'>Explore Courses</button>
            </div>
          </div>
        </div>
        <Image src='/images/BannerImage.svg' alt='Model' height={900} width={640} className='max-sm:hidden'></Image>
        <Image src='/images/BannerImage2.svg' alt='Model' height={390} width={640} className='sm:hidden'></Image>
      </div>
      <div className='bg-primary min-h-[228px] flex items-center py-20 px-2 gap-16 max-sm:flex-col max-sm:items-start max-sm:py-12 max-sm:px-6'>
        <h3 className='font-RobotoBold text-[24px] leading-[33.8px]  max-sm:hidden'>Trusted by 2000+ companies worldwide.</h3>
        <h3 className='font-RobotoBold text-[24px] leading-[33.8px] max-sm:mx-2 max-sm:text-[18px] max-sm:leading-[27px] max-sm:w-[327px] sm:hidden '>Trusted by the world's best companies [social proof to build credibility]</h3>
        <div className='flex justify-center items-center  py-[8.74px] gap-[19.12px] max-lg:px-6'>
          <Image src='/images/LoremLogos/Logo.svg' alt='LoremLogos'  height={38.52} width={123.8}/>
          <Image src='/images/LoremLogos/Logo6.svg' alt='LoremLogos' height={38.52} width={123.8}/>
          <Image src='/images/LoremLogos/Logo5.svg' alt='LoremLogos' height={38.52} width={123.8}/>
          <Image src='/images/LoremLogos/Logo4.svg' alt='LoremLogos' height={38.52} width={123.8} className='max-lg:hidden'/>
          <Image src='/images/LoremLogos/Logo3.svg' alt='LoremLogos' height={38.52} width={123.8} className='max-lg:hidden'/>
          <Image src='/images/LoremLogos/Logo2.svg' alt='LoremLogos' height={38.52} width={123.8} className='max-lg:hidden'/>
        </div>    
      </div>
      <div className='bg-white w-screen min-h-[1049px] px-16 py-28 flex flex-col gap-20 items-center max-sm:gap-12 max-sm:py-12 max-sm:px-6 max-sm:min-h-[862px]'>
        <div className='min-h-[109px] flex flex-col gap-6'>
          <h2 className='font-RobotoBold text-5xl leading-[57.6px] max-sm:text-[32px] max-sm:leading-[41.6px] max-sm:text-center '>Explore Courses By Category</h2>
          <p className='  font-RobotoRegular text-[18px] leading-[27px] max-sm:text-center'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className='w-screen min-h-[636px] flex flex-col gap-16'>
          <div className='w-screen min-h-[132px] flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-6'>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/pen.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Design & Development</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/volume-high.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Marketing</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/group.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Development</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
          </div>
          <div className='w-screen min-h-[132px] flex justify-between max-sm:hidden' >
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/microphone.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Communication</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/link.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Digital Marketing</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/arrow-2.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Self Development</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
          </div>
          <div className='w-screen min-h-[132px] flex justify-between max-sm:hidden'>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/briefcase.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Business</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/book.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Finance</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
            <span className='w-[410.67px] min-h-[132px] rounded-[5px] p-4 flex gap-8 bg-primary'>
              <div className='bg-white min-w-[100px] min-h-[100px] rounded-[5px] p-[34px] flex gap-[10px]'>
                <Image src='/images/CLogos/book2.svg' alt='CLogos' height={32} width={32}/>
              </div>
              <div className='min-h-[57px] w-[246.67px] flex flex-col justify-center'>
                <h4 className='font-RobotoRegular font-semibold text-xl leading-[30px]'>Consulting</h4>
                <p className='font-RobotoRegular text-lg leading-[27px]'>50+ Courses Available</p>
              </div>
            </span>
          </div>
          <div className='flex justify-center'>
            <button className='bg-white min-h-[48px] min-w-[155px] py-3 px-6 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>View All Courses</button>
          </div>
        </div>
      </div>
      <div className=' min-h-[488px] py-28 px-16 flex gap-20 max-sm:py-12 max-sm:px-6'>
        <div className=' flex gap-6 flex-col'>
          <div className=' flex flex-col gap-4'>
            <h2 className='font-RobotoBold text-5xl leading-[57.6px] text-center max-sm:text-[32px] max-sm:leading-[41.6px]'>Our Achivements</h2>
            <p className='font-RobotoRegular text-center text-[18px] leading-[27px] max-sm:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <p className='font-RobotoRegular text-center text-[18px] leading-[27px] sm:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
          </div>
          <div className='flex gap-6 w-[100%] max-sm:flex-col '>
            <div className=' py-2 flex w-[50%] justify-between  max-sm:w-[100%]'>
              <span className=' flex flex-col gap-2 items-center w-[40%] '>
                <h3 className=' font-RobotoBold text-[40px] leading-[48px]'>+200</h3>
                <p className='font-RobotoRegular '>Courses</p>
              </span>
              <span className=' flex flex-col gap-2 items-center w-[40%] '>
                <h3 className='font-RobotoBold text-[40px] leading-[48px]'>50K</h3>
                <p className='font-RobotoRegular '>Mentors</p>
              </span>
            </div>
            <div className=' py-2 flex justify-between  w-[50%] max-sm:w-[100%]'>
              <span className='  flex flex-col gap-2 items-center w-[40%] '>
                <h3 className=' font-RobotoBold text-[40px] leading-[48px]'>370K</h3>
                <p className=' font-RobotoRegular '>Students</p>
              </span>
              <span className=' flex flex-col gap-2 items-center w-[40%] '>
                <h3 className='font-RobotoBold text-[40px] leading-[48px]'>100+</h3>
                <p className='font-RobotoRegular '>Recognition</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen min-h-[1742px] py-28 px-16 flex flex-col gap-[60px] items-center justify-center max-sm:py-12 max-sm:px-6'>
        <div className='min-h-[118px] flex flex-col gap-4'>
          <h1 className='font-RobotoBold text-center text-[56px] leading-[67.2px]'>Courses</h1>
          <p className='font-RobotoRegular text-[18px] leading-[27px] text-center'>Your Ultimate Guide to learning</p>
        </div>
        <div className='flex flex-col gap-16'>
          <section className='min-h-10 min-w-[336px]'>
            <ul className='flex gap-2 justify-center'>
              <li className='font-RobotoRegular py-2 px-4 hover:border-b-[1px] hover:border-secondary cursor-pointer'>Popular</li>
              <li className='font-RobotoRegular py-2 px-4 hover:border-b-[1px] hover:border-secondary cursor-pointer'>Recommended</li>
              <li className='font-RobotoRegular py-2 px-4 hover:border-b-[1px] hover:border-secondary cursor-pointer'>Best  Price</li>
            </ul>
          </section>
          <div className='flex flex-col gap-16'>
            <span className='flex gap-8 max-sm:flex-col'>
              <div className='bg-primary w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]'>
               <Image src='/images/CardImgs/Image.svg' alt='CardImage' height={300} width={416}/>
               <div className='flex flex-col px-4 pb-6 gap-6'>
                 <div className='flex flex-col gap-2'>
                  <span className='flex justify-between'>
                    <h4 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>Design</h4>
                    <div className='flex justify-center items-center gap-1'>
                      <HiStar className='h-6 w-6 text-[#6c6b6b7f]'/>
                      <h6 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>5.0</h6>
                    </div>
                  </span>
                  <h2 className='font-RobotoBold text-[24px] leading-[33.6px]'>UX/UI Design 201</h2>
                  <p className='font-RobotoRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                 </div>
                 <div className='flex gap-4'>
                  <button className='bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>Enroll Now</button>
                  <h5 className='rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium'>$400</h5>
                 </div>
               </div>
              </div>
              <div className='bg-primary w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]'>
               <Image src='/images/CardImgs/Image6.svg' alt='CardImage' width={416} height={312} />
               <div className='flex flex-col px-4 pb-6 gap-6'>
                 <div className='flex flex-col gap-2'>
                  <span className='flex justify-between'>
                    <h4 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>Programmimg</h4>
                    <div className='flex justify-center items-center gap-1'>
                      <HiStar className='h-6 w-6 text-[#6c6b6b7f]'/>
                      <h6 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>5.0</h6>
                    </div>
                  </span>
                  <h2 className='font-RobotoBold text-[24px] leading-[33.6px]'>Introduction to Python</h2>
                  <p className='font-RobotoRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                 </div>
                 <div className='flex gap-4'>
                  <button className='bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>Enroll Now</button>
                  <h5 className='rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium'>$400</h5>
                 </div>
               </div>
              </div>
              <div className='bg-primary w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]'>
               <Image src='/images/CardImgs/Image5.svg' alt='CardImage' height={300} width={416}/>
               <div className='flex flex-col px-4 pb-6 gap-6'>
                 <div className='flex flex-col gap-2'>
                  <span className='flex justify-between'>
                    <h4 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>Business</h4>
                    <div className='flex justify-center items-center gap-1'>
                      <HiStar className='h-6 w-6 text-[#6c6b6b7f]'/>
                      <h6 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>5.0</h6>
                    </div>
                  </span>
                  <h2 className='font-RobotoBold text-[24px] leading-[33.6px]'>Data Analysis for Beginners</h2>
                  <p className='font-RobotoRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                 </div>
                 <div className='flex gap-4'>
                  <button className='bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>Enroll Now</button>
                  <h5 className='rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium'>$400</h5>
                 </div>
               </div>
              </div>
            </span>
            <span className='flex gap-8 max-sm:hidden'>
              <div className='bg-primary w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]'>
               <Image src='/images/CardImgs/Image4.svg' alt='CardImage' height={300} width={416}/>
               <div className='flex flex-col px-4 pb-6 gap-6'>
                 <div className='flex flex-col gap-2'>
                  <span className='flex justify-between'>
                    <h4 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>Art</h4>
                    <div className='flex justify-center items-center gap-1'>
                      <HiStar className='h-6 w-6 text-[#6c6b6b7f]'/>
                      <h6 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>5.0</h6>
                    </div>
                  </span>
                  <h2 className='font-RobotoBold text-[24px] leading-[33.6px]'>Art Specialization</h2>
                  <p className='font-RobotoRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                 </div>
                 <div className='flex gap-4'>
                  <button className='bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>Enroll Now</button>
                  <h5 className='rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium'>$400</h5>
                 </div>
               </div>
              </div>
              <div className='bg-primary w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]'>
               <Image src='/images/CardImgs/Image3.svg' alt='CardImage' height={300} width={416}/>
               <div className='flex flex-col px-4 pb-6 gap-6'>
                 <div className='flex flex-col gap-2'>
                  <span className='flex justify-between'>
                    <h4 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>Law</h4>
                    <div className='flex justify-center items-center gap-1'>
                      <HiStar className='h-6 w-6 text-[#6c6b6b7f]'/>
                      <h6 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>5.0</h6>
                    </div>
                  </span>
                  <h2 className='font-RobotoBold text-[24px] leading-[33.6px]'>Rule of Law</h2>
                  <p className='font-RobotoRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                 </div>
                 <div className='flex gap-4'>
                  <button className='bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>Enroll Now</button>
                  <h5 className='rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium'>$400</h5>
                 </div>
               </div>
              </div>
              <div className='bg-primary w-[416px] min-h-[534px] flex flex-col gap-6 rounded-[5px]'>
               <Image src='/images/CardImgs/Image2.svg' alt='CardImage' height={300} width={416}/>
               <div className='flex flex-col px-4 pb-6 gap-6'>
                 <div className='flex flex-col gap-2'>
                  <span className='flex justify-between'>
                    <h4 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>Tech</h4>
                    <div className='flex justify-center items-center gap-1'>
                      <HiStar className='h-6 w-6 text-[#6c6b6b7f]'/>
                      <h6 className='font-RobotoRegular font-semibold text-[14px] leading-[21px]'>5.0</h6>
                    </div>
                  </span>
                  <h2 className='font-RobotoBold text-[24px] leading-[33.6px]'>Introduction to webflow</h2>
                  <p className='font-RobotoRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                 </div>
                 <div className='flex gap-4'>
                  <button className='bg-white min-h-[40px] min-w-[117px] py-2 px-5 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>Enroll Now</button>
                  <h5 className='rounded-[5px] min-h-[40px] min-w-[77px] py-2 px-5 font-RobotoRegular font-medium'>$400</h5>
                 </div>
               </div>
              </div>
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='bg-white min-h-[40px] min-w-[152px] py-2 px-4 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular'>View All Courses</button>
        </div>
      </div>
      <div className='w-screen min-h-[895px] py-28 px-16 flex flex-col items-center gap-20 max-sm:py-12 max-sm:px-6'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-RobotoBold text-5xl leading-[57.6px] text-center max-sm:text-[32px] max-sm:leading-[41.6px]'>Our team</h2>
          <p className='font-RobotoRegular text-[18px] leading-[27px] text-center max-sm:w-[363px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className='flex flex-col gap-24'>
          <span className='flex gap-12 max-sm:flex-col'>
            <div className='flex flex-col gap-6 items-center w-[394.67px]'>
              <Image src='/images/TeamDP/Image.svg' alt='Team' height={80} width={80}/>
              <section className='flex flex-col gap-1'>
                <h2 className='font-RobotoRegular font-semibold text-center text-xl leading-[30px]'>James Nduku</h2>
                <p className='font-RobotoRegular text-[18px] leading-[27px] text-center'>Marketing Coordinator</p>
              </section>
              <section className='flex justify-center items-center gap-[14px]'>
                <Image src='/images/LinkedIn.svg' alt='Social' height={18} width={18}/>
                <Image src='/images/Vector.svg' alt='Social' height={15.3} width={18}/>
                <Image src='/images/TeamDP/Vector.svg' alt='Social' height={18} width={18}/>
              </section>
            </div>
            <div className='flex flex-col gap-6 items-center w-[394.67px]'>
              <Image src='/images/TeamDP/Image2.svg' alt='Team' height={80} width={80}/>
              <section className='flex flex-col gap-1'>
                <h2 className='font-RobotoRegular font-semibold text-center text-xl leading-[30px]'>Joseph Munyambu</h2>
                <p className='font-RobotoRegular text-[18px] leading-[27px] text-center'>Nursing Assistant</p>
              </section>
              <section className='flex justify-center items-center gap-[14px]'>
                <Image src='/images/LinkedIn.svg' alt='Social' height={18} width={18}/>
                <Image src='/images/Vector.svg' alt='Social' height={15.3} width={18}/>
                <Image src='/images/TeamDP/Vector.svg' alt='Social' height={18} width={18}/>
              </section>
            </div>
            <div className='flex flex-col gap-6 items-center w-[394.67px]'>
              <Image src='/images/TeamDP/Image3.svg' alt='Team' height={80} width={80}/>
              <section className='flex flex-col gap-1'>
                <h2 className='font-RobotoRegular font-semibold text-center text-xl leading-[30px]'>Joseph Ngumbau</h2>
                <p className='font-RobotoRegular text-[18px] leading-[27px] text-center'>Medical Assistant</p>
              </section>
              <section className='flex justify-center items-center gap-[14px]'>
                <Image src='/images/LinkedIn.svg' alt='Social' height={18} width={18}/>
                <Image src='/images/Vector.svg' alt='Social' height={15.3} width={18}/>
                <Image src='/images/TeamDP/Vector.svg' alt='Social' height={18} width={18}/>
              </section>
            </div>
          </span>
          <span className='flex gap-12 max-sm:hidden'>
            <div className='flex flex-col gap-6 items-center w-[394.67px]'>
              <Image src='/images/TeamDP/Image4.svg' alt='Team' height={80} width={80}/>
              <section className='flex flex-col gap-1'>
                <h2 className='font-RobotoRegular font-semibold text-center text-xl leading-[30px]'>Erick Kipkemboi</h2>
                <p className='font-RobotoRegular text-[18px] leading-[27px] text-center'>Web Designer</p>
              </section>
              <section className='flex justify-center items-center gap-[14px]'>
                <Image src='/images/LinkedIn.svg' alt='Social' height={18} width={18}/>
                <Image src='/images/Vector.svg' alt='Social' height={15.3} width={18}/>
                <Image src='/images/TeamDP/Vector.svg' alt='Social' height={18} width={18}/>
              </section>
            </div>
            <div className='flex flex-col gap-6 items-center w-[394.67px]'>
              <Image src='/images/TeamDP/Image5.svg' alt='Team' height={80} width={80}/>
              <section className='flex flex-col gap-1'>
                <h2 className='font-RobotoRegular font-semibold text-center text-xl leading-[30px]'>Stephen Kerubo</h2>
                <p className='font-RobotoRegular text-[18px] leading-[27px] text-center'>President of Sales</p>
              </section>
              <section className='flex justify-center items-center gap-[14px]'>
                <Image src='/images/LinkedIn.svg' alt='Social' height={18} width={18}/>
                <Image src='/images/Vector.svg' alt='Social' height={15.3} width={18}/>
                <Image src='/images/TeamDP/Vector.svg' alt='Social' height={18} width={18}/>
              </section>
            </div>
            <div className='flex flex-col gap-6 items-center w-[394.67px]'>
              <Image src='/images/TeamDP/Image6.svg' alt='Team' height={80} width={80}/>
              <section className='flex flex-col gap-1'>
                <h2 className='font-RobotoRegular font-semibold text-center text-xl leading-[30px]'>John Leboo</h2>
                <p className='font-RobotoRegular text-[18px] leading-[27px] text-center'>Dog Trainer</p>
              </section>
              <section className='flex justify-center items-center gap-[14px]'>
                <Image src='/images/LinkedIn.svg' alt='Social' height={18} width={18}/>
                <Image src='/images/Vector.svg' alt='Social' height={15.3} width={18}/>
                <Image src='/images/TeamDP/Vector.svg' alt='Social' height={18} width={18}/>
              </section>
            </div>
          </span>
        </div>
        <button className='bg-white min-h-[40px] min-w-[89px] py-2 px-4 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular sm:hidden'>View All</button>
      </div>
      <div className=' w-screen py-28 px-16 flex flex-col gap-20 max-sm:px-6 max-sm:py-12 max-sm:gap-12'>
        <div className='flex flex-col gap-5 max-sm:gap-4'>
          <h2 className='font-RobotoBold text-5xl leading-[57.6px] max-sm:hidden'>Customer testimonials</h2>
          <h2 className='font-RobotoBold text-5xl leading-[57.6px] sm:hidden max-sm:text-[32px] max-sm:leading-[41.6px] max-sm:text-center'>What Our Student Say</h2>
          <p className='font-RobotoRegular text-[18px] leading-[27px] max-sm:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-col gap-12 max-sm:items-center'>
          <div className='flex gap-8 '>
            <span className='min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:w-[380px] max-sm:h-[322px]'>
              <section className='flex items-center'>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
              </section>
              <section className='flex flex-col gap-6'>
                <p className='font-RobotoRegular text-[18px] leading-[27px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                <span className='flex gap-5 '>
                 <Image src='/images/TeamDP/Image3.svg' alt='Social' height={56} width={56} className='rounded-full'/>
                 <div>
                   <h2 className='font-RobotoRegular font-semibold text-[18px] leading-6'>James Nduku</h2>
                   <p className='font-RobotoRegular '>Software Developer</p>
                 </div>
                </span>
              </section>
            </span>
            <span className='min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:hidden'>
              <section className='flex items-center'>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
              </section>
              <section className='flex flex-col gap-6'>
                <p className='font-RobotoRegular text-[18px] leading-[27px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                <span className='flex gap-5 '>
                 <Image src='/images/TeamDP/Image.svg' alt='Social' height={56} width={56} className='rounded-full'/>
                 <div>
                   <h2 className='font-RobotoRegular font-semibold text-[18px] leading-6'>Erick Kipkemboi</h2>
                   <p className='font-RobotoRegular '>Scrum Master</p>
                 </div>
                </span>
              </section>
            </span>
            <span className='min-h-[322px] w-[362.7px] border-[1px] border-black p-8 flex flex-col gap-6 max-sm:hidden'>
              <section className='flex items-center'>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
                <HiStar className='text-3xl'/>
              </section>
              <section className='flex flex-col gap-6'>
                <p className='font-RobotoRegular text-[18px] leading-[27px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                <span className='flex gap-5 '>
                 <Image src='/images/TeamDP/Image6.svg' alt='Social' height={56} width={56} className='rounded-full'/>
                 <div>
                   <h2 className='font-RobotoRegular font-semibold text-[18px] leading-6'>Stephen Kerubo</h2>
                   <p className='font-RobotoRegular '>UI/UX Designer</p>
                 </div>
                </span>
              </section>
            </span>
          </div>
        </div>
        <div className='flex justify-between items-center mb-[2px]'>
          <div className='flex justify-between min-h-2 min-w-[72px]'>
            <FaCircle className='text-[8px] text-black '/>
            <FaCircle className='text-[8px] text-secondary hover:text-black'/>
            <FaCircle className='text-[8px] text-secondary hover:text-black'/>
            <FaCircle className='text-[8px] text-secondary hover:text-black'/>
            <FaCircle className='text-[8px] text-secondary hover:text-black'/>
          </div>
          <div className='flex gap-[15px]'>
            <BsArrowLeftCircle className='text-5xl font-thin hover:bg-black hover:text-white rounded-full'/>
            <BsArrowRightCircle className='text-5xl font-thin hover:bg-black hover:text-white rounded-full'/>
          </div>
        </div>
      </div>
      <div className=' p-20 max-sm:px-6 max-sm:py-12'>
        <div className='flex flex-col gap-20 max-sm:gap-12'>
          <section className='flex justify-between max-sm:flex-col'>
            <div className='max-sm:min-h-[91px] max-sm:flex max-sm:justify-between max-sm:flex-col max-sm:items-center'>
              <h2 className='font-RobotoRegular font-semibold text-[18px] leading-[27px] max-sm:text-center'>Subscribe to our newsletter</h2>
              <p className='font-RobotoRegular max-sm:text-center max-sm:w-[287px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex flex-col gap-4 '>
              <section className='flex gap-4 min-h-12 max-sm:flex-col max-sm:items-center'>
                <input className='border-[1px] border-black rounded-[5px] p-3 font-RobotoRegular text-[#505050] focus:outline-none focus:ring-0 max-sm:w-[380px] max-sm:min-h-[48px]' type='text' placeholder='Enter your email'></input>
                <button className='bg-white min-h-[48px] min-w-[119px] py-3 px-6 rounded-[5px] border-black border-[1px] hover:bg-black hover:text-white flex gap-2 font-RobotoRegular max-sm:w-[380px] max-sm:min-h-[48px] max-sm:flex max-sm:justify-center'>Subscribe</button>
              </section>
              <p className='font-RobotoRegular text-[12px] leading-[18px] max-sm:text-center'>By subscribing you agree to with our <code className='font-RobotoRegular underline'>Privacy Policy</code></p>
            </div>
          </section>
          <section className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:min-h-[811px]'>
            <div className='w-[250px] max-sm:flex max-sm:justify-center'>
              <Image src='/images/mainLogo.svg' alt='mainLogo' height={40} width={130}/> 
            </div> 
            <div className='w-[250px] flex flex-col justify-between max-sm:items-center'>
              <h2 className='font-RobotoRegular font-semibold text-[16px] leading-[24px]'>Courses</h2>
              <ul >
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Business</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Development</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Technology</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Design</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Programming</li>
              </ul> 
            </div>
            <div className='w-[250px] flex flex-col justify-between max-sm:items-center'>
              <h2 className='font-RobotoRegular font-semibold text-[16px] leading-[24px]'>Resources</h2>
              <ul>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Career</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Resume</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Learning</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Interview Preparation</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Jobs</li>
              </ul> 
            </div>
            <div className='w-[250px] flex flex-col justify-between max-sm:items-center'>
              <h2 className='font-RobotoRegular font-semibold text-[16px] leading-[24px] '>About Us</h2>
              <ul>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Contact</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Help/Support</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>FAQ</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Terms and Conditions</li>
                <li className='py-2 font-RobotoRegular text-[14px] leading-[21px] max-sm:text-center'>Partners</li>
              </ul> 
            </div>
          </section>
          <section className='border-t-[1px] border-black pt-7 '>
            <div className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:min-h-[114px]'>
              <span className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:min-h-[66px]'>
                <p className='font-RobotoRegular text-[14px] leading-[21px]'>2023 Ddsgnr. All right reserved.</p>
                <ul className='flex justify-between min-w-[345px]'>
                  <li className='font-RobotoRegular text-[14px] leading-[21px] underline'>Privacy Policy</li>
                  <li className='font-RobotoRegular text-[14px] leading-[21px] underline'>Terms of Service</li>
                  <li className='font-RobotoRegular text-[14px] leading-[21px] underline'>Cookies Settings</li>
                </ul>
              </span>
              <div className='flex gap-3'>
               <Image src='/images/Facebook.svg' alt='fbLogo' height={24} width={24}/>
               <Image src='/images/Instagram.svg' alt='InLogo' height={24} width={24}/>
               <Image src='/images/Vector.svg' alt='XLogo' height={20} width={20}/>
               <Image src='/images/LinkedIn.svg' alt='LibLogo' height={23} width={23}/>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}
