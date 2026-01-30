import React from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Home,
  Share,
  Plus,
  Layers,
  Maximize2,
  Minus,
  X,
  Lock,
  Search,
  AlertCircle,
  Target,
  Calendar,
  Mail
} from 'lucide-react';

/* Dummy proxy to handle missing svgPaths */
const svgPaths: any = new Proxy({}, { get: () => "M0 0h10v10H0z" });

/* Placeholder images */
const imgCgfOgLogoEditWeb0021 = "/CGFLogo.svg";
const imgLargeYellowCircleSphereBallRound = "/yellow-circle.svg"; // Corrected path
function CoreSafariBigSurToolbarToolbarItem() {
  return (
    <div className="h-[28px] relative shrink-0 w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      <ChevronLeft size={16} color="#737373" />
    </div>
  );
}

function CoreSafariBigSurToolbarToolbarItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      <ChevronRight size={16} color="#737373" />
    </div>
  );
}

function CoreSafariBigSurToolbarToolbarItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      {/* Usually Sidebar or Grid */}
      <Layers size={16} color="#737373" />
    </div>
  );
}

function CoreSafariBigSurToolbarToolbarItem3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      <RotateCcw size={14} color="#737373" />
    </div>
  );
}

function ToolbarGroup() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center overflow-clip right-[12px] top-[12px]" data-name="Toolbar Group">
      <CoreSafariBigSurToolbarToolbarItem />
      <CoreSafariBigSurToolbarToolbarItem1 />
      <CoreSafariBigSurToolbarToolbarItem2 />
      <CoreSafariBigSurToolbarToolbarItem3 />
    </div>
  );
}

function CoreSafariBigSurToolbarToolbarItem4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      <Share size={16} color="#737373" />
    </div>
  );
}

function CoreSafariBigSurToolbarToolbarItem5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      <Plus size={16} color="#BFBFBF" />
    </div>
  );
}

function ToolbarGroup1() {
  return (
    <div className="absolute content-stretch flex items-center left-[134px] overflow-clip top-[12px]" data-name="Toolbar Group">
      <CoreSafariBigSurToolbarToolbarItem4 />
      <CoreSafariBigSurToolbarToolbarItem5 />
    </div>
  );
}

function CoreSafariBigSurToolbarToolbarItem6() {
  return (
    <div className="absolute h-[28px] left-[92px] top-[12px] w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      <Target size={16} color="#737373" />
    </div>
  );
}

function CoreTrafficLightsBigSur() {
  return (
    <div className="absolute h-[12px] left-[21px] top-[20px] w-[52px] flex gap-[8px]" data-name="Core / Traffic Lights (Big Sur)">
      <div className="size-[12px] rounded-full bg-[#EE6A5F] border border-[#CE5347]"></div>
      <div className="size-[12px] rounded-full bg-[#F5BD4F] border border-[#D6A243]"></div>
      <div className="size-[12px] rounded-full bg-[#61C454] border border-[#58A942]"></div>
    </div>
  );
}

function CoreSafariBigSurToolbarToolbarItem7() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[33px] flex items-center justify-center" data-name="Core / Safari (Big Sur) / Toolbar / Toolbar Item">
      <Lock size={12} color="#737373" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[6px] items-center left-[calc(50%+0.5px)] overflow-clip top-1/2">
      <div className="h-[11.432px] relative shrink-0 w-[7.828px] flex items-center justify-center" data-name="Lock">
        <Lock size={10} color="#9E9E9E" />
      </div>
      <div className="flex flex-col font-work font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#4c4c4c] text-[13px] tracking-[-0.052px] whitespace-nowrap">
        <p className="leading-[normal]">CanadianGeologicalFoundation.ca</p>
      </div>
    </div>
  );
}

function CoreSafariBigSurSearchBarDefault() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] h-[28px] left-[42px] right-[42px] rounded-[6px] top-0" data-name="Core / Safari (Big Sur) / Search Bar (Default)">
      <Frame8 />
      <div className="-translate-y-1/2 absolute h-[12.615px] right-[6.33px] top-[calc(50%+0.07px)] w-[10.354px] flex items-center justify-center" data-name="Lock">
        <RotateCcw size={10} color="#797979" />
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="absolute h-[28px] left-[567px] rounded-[6px] top-0 w-[33px]" data-name="SPACER" />;
}

function Frame10() {
  return (
    <div className="absolute h-[28px] left-[26.56%] overflow-clip right-[26.56%] top-[12px]">
      <CoreSafariBigSurToolbarToolbarItem7 />
      <CoreSafariBigSurSearchBarDefault />
      <Spacer />
    </div>
  );
}

function CoreSafariBigSurToolbarLight() {
  return (
    <div className="bg-white h-[53px] relative rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Core / Safari (Big Sur) / Toolbar / Light">
      <ToolbarGroup />
      <ToolbarGroup1 />
      <CoreSafariBigSurToolbarToolbarItem6 />
      <CoreTrafficLightsBigSur />
      <Frame10 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[76px]" data-name="CGF-OG-Logo-Edit-web-_002 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCgfOgLogoEditWeb0021} />
      </div>
      <p className="font-montserrat-alt font-extrabold leading-[1.2] not-italic relative shrink-0 text-[64px] text-[rgba(0,0,0,0.8)] text-center tracking-[3.84px]">CGF</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(179.408deg, rgb(255, 255, 255) 1.2123%, rgb(242, 242, 242) 122.57%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">Home</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-work font-medium font-medium leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.36px]">Our Story</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-work font-medium font-medium leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.36px]">Our Impact</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-work font-medium font-medium leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.36px]">Our Grants</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-work font-medium font-medium leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.36px]">Explore Geology</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[46px] h-[58px] items-center justify-center relative shrink-0 w-[822px]">
      <div aria-hidden="true" className="absolute border-[#ed1c24] border-b-7 border-solid inset-[0_0_-7px_0] pointer-events-none" />
      <Frame14 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0">
      <p className="font-montserrat font-bold font-bold leading-[1.2] relative shrink-0 text-[16px] text-center text-white">Apply</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#1a191c] content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[127px]">
      <Frame26 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[99px] items-center justify-center px-[36px] py-[18px] relative w-full">
          <Frame24 />
          <Frame15 />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CoreSafariBigSurToolbarLight />
      <Frame19 />
    </div>
  );
}

function CircleExclamationSolid() {
  return (
    <div className="relative size-[36px]" data-name="circle-exclamation-solid 1">
      <AlertCircle size={36} color="#D1AC76" fill="#D1AC76" className="text-white" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(179.633deg, rgb(255, 255, 255) 1.2123%, rgb(242, 242, 242) 122.57%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">What we Do</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <CircleExclamationSolid />
        </div>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0">
      <p className="font-montserrat font-bold font-bold leading-[1.2] relative shrink-0 text-[14px] text-center text-white">Learn More</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#1a191c] content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eac48d] border-solid border-t-8 inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[38px] items-start px-[24px] py-[20px] relative w-full">
        <Frame53 />
        <p className="font-montserrat-alt font-bold leading-[1.3] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-[min-content] whitespace-pre-wrap">Unearthing Canada’s Future</p>
        <p className="font-montserrat font-normal font-normal leading-[1.65] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.6)] tracking-[-0.6px] w-[262px] whitespace-pre-wrap">We invest in curiosity, turning geological wonder into tangible impact.</p>
        <Frame27 />
      </div>
    </div>
  );
}

function LargeYellowCircleSphereBallRound() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="🟡 Large Yellow Circle (Sphere, Ball, Round)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLargeYellowCircleSphereBallRound} />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <LargeYellowCircleSphereBallRound />
      <p className="font-manrope font-semibold font-semibold leading-[1.2] relative shrink-0 text-[16px] text-white">Important Announcement Here!</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="backdrop-blur-[18px] bg-[rgba(110,158,213,0.99)] h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-[997px] top-[98px] w-[334px]">
      <Frame55 />
      <Frame40 />
    </div>
  );
}

function Frame170() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[33px] h-[324px] items-start left-[53px] text-white top-[171px] w-[665px] whitespace-pre-wrap">
      <div className="font-montserrat font-extrabold font-extrabold leading-none relative shrink-0 text-[100px] tracking-[1px] w-[824px]">
        <p className="mb-0">CANADIAN</p>
        <p className="mb-0">GEOLOGICAL</p>
        <p>FOUNDATION</p>
      </div>
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] min-w-full relative shrink-0 text-[36px] tracking-[-1.08px] w-[min-content]">Fueling Geo-science</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[651px] overflow-clip relative rounded-[18px] shrink-0 w-[1368px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18px]">
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[18px]" />
        <div className="absolute inset-0 opacity-89 overflow-hidden rounded-[18px]">
          <div className="absolute h-[157.6%] left-0 max-w-none top-[-11.86%] w-full bg-neutral-200" />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[18px]">
          <div className="absolute h-[59.5%] left-0 max-w-none top-[52.54%] w-full bg-neutral-200" />
        </div>
      </div>
      <Frame56 />
      <Frame170 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-full">
      <Frame64 />
      <Frame5 />
    </div>
  );
}

function BullseyeSolid() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="bullseye-solid 1">
      <Target size={42} color="#EAC48D" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[528px] whitespace-pre-wrap">
      <p className="font-montserrat-alt font-semibold leading-[1.4] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] w-[667px]">Sustaining geoscience education, outreach and awareness across Canada</p>
      <p className="font-montserrat font-normal font-normal leading-[1.78] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.48px] w-[504px]">{`Every individual is truly entitled to their fundamental needs. Together, we can turn this inspiring vision into a beautiful reality! Let's unite our efforts to create a world where everyone thrives.`}</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[228px] items-start relative shrink-0">
      <BullseyeSolid />
      <Frame60 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_540)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, #EAC48D)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_540" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_540" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">2012 - 2025</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex gap-[10px] items-center justify-end p-[10px] relative rounded-[18px] shrink-0">
      <Frame17 />
      <p className="decoration-solid font-manrope font-semibold font-semibold leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-right tracking-[-0.48px] underline">Education</p>
      <p className="font-manrope font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.4)] tracking-[-0.48px]">/</p>
      <p className="decoration-solid font-manrope font-semibold font-semibold leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-right tracking-[-0.48px] underline">Students</p>
      <p className="font-manrope font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.4)] tracking-[-0.48px]">/</p>
      <p className="decoration-solid font-manrope font-semibold font-semibold leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-right tracking-[-0.48px] underline">Teachers</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex gap-[10px] items-center justify-end leading-[1.3] p-[10px] relative rounded-[18px] shrink-0 text-[16px] tracking-[-0.48px]">
      <p className="decoration-solid font-manrope font-semibold font-semibold relative shrink-0 text-[rgba(0,0,0,0.8)] text-right underline">Events</p>
      <p className="font-manrope font-normal font-normal relative shrink-0 text-[rgba(0,0,0,0.4)]">/</p>
      <p className="decoration-solid font-manrope font-semibold font-semibold relative shrink-0 text-[rgba(0,0,0,0.8)] text-right underline">Geoparks</p>
      <p className="font-manrope font-normal font-normal relative shrink-0 text-[rgba(0,0,0,0.4)]">/</p>
      <p className="decoration-solid font-manrope font-semibold font-semibold relative shrink-0 text-[rgba(0,0,0,0.8)] text-right underline">Classes</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0">
      <p className="font-montserrat font-bold font-bold leading-[1.2] relative shrink-0 text-[16px] text-center text-white">Our Story</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#1a191c] content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[300px] items-end justify-between min-h-px min-w-px relative">
      <Frame59 />
      <Frame29 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="h-[538px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eac48d] border-l-8 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between p-[36px] relative size-full">
        <Frame63 />
        <Frame61 />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[36px] h-[1335px] items-center relative shrink-0 w-full" data-name="HERO SECTION">
      <Frame66 />
      <Frame62 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="black" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[100px]">
      <Frame />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex items-start p-[3px] relative rounded-[100px] shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="white" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center p-[12px] relative rounded-[100px] shrink-0">
      <Frame1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#1a191c] content-stretch flex items-start p-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame70 />
      <Frame32 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">Canadian Geological</p>
    </div>
  );
}

function LargeYellowCircleSphereBallRound1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="🟡 Large Yellow Circle (Sphere, Ball, Round)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLargeYellowCircleSphereBallRound} />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LargeYellowCircleSphereBallRound1 />
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">Success Stories</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #343A40)" id="Ellipse 9" r="9" />
        </svg>
      </div>
      <Frame18 />
      <Frame34 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex h-[29px] items-center justify-between relative shrink-0 w-full">
      <Frame74 />
      <Frame76 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">Cape Breton, Nova Scotia, Canada</p>
    </div>
  );
}

function LargeYellowCircleSphereBallRound2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="🟡 Large Yellow Circle (Sphere, Ball, Round)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLargeYellowCircleSphereBallRound} />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LargeYellowCircleSphereBallRound2 />
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">$12K+</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <p className="font-manrope font-semibold font-semibold leading-[1.3] relative shrink-0 text-[16px] text-black tracking-[-0.48px]">(01)</p>
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(179.596deg, rgb(255, 255, 255) 1.2123%, rgb(242, 242, 242) 122.57%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">2025 06 06</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-work font-medium font-medium leading-[1.2] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.48px]">Last update</p>
      <Frame37 />
    </div>
  );
}

function ManStudentLightSkinToneUniversityEducationScholar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="👨🏻‍🎓 Man Student Light Skin Tone (University, Education, Scholar)">
      <div className="absolute inset-0 max-w-none pointer-events-none size-full bg-neutral-200" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <ManStudentLightSkinToneUniversityEducationScholar />
      <p className="font-montserrat-alt font-medium leading-[1.4] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px]">Success Story One</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame75 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[20px] relative w-full">
        <Frame54 />
        <Frame72 />
        <p className="font-manrope font-normal font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] tracking-[-0.42px] w-[262px] whitespace-pre-wrap">We’ve impacted rural communities in Africa, Asia, and Latin America with safe water.</p>
        <p className="font-manrope font-semibold font-semibold leading-[1.5] relative shrink-0 text-[14px] text-black tracking-[-0.42px] w-[262px] whitespace-pre-wrap">Read more →</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[20px] self-stretch shrink-0 w-[294px]">
        <div className="absolute inset-0 max-w-none opacity-88 pointer-events-none rounded-[20px] size-full bg-neutral-200" />
      </div>
      <Frame71 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[433px] items-start left-[-292px] p-[28px] rounded-[24px] top-0 w-[671px]">
      <div aria-hidden="true" className="absolute border-[#6e9ed5] border-solid border-t-8 inset-0 pointer-events-none rounded-[24px]" />
      <Frame65 />
      <Frame67 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">Victoria, British Columbia, Canada</p>
    </div>
  );
}

function LargeYellowCircleSphereBallRound3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="🟡 Large Yellow Circle (Sphere, Ball, Round)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLargeYellowCircleSphereBallRound} />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LargeYellowCircleSphereBallRound3 />
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">$12K+</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <p className="font-manrope font-semibold font-semibold leading-[1.3] relative shrink-0 text-[16px] text-black tracking-[-0.48px]">(01)</p>
          <Frame80 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(179.596deg, rgb(255, 255, 255) 1.2123%, rgb(242, 242, 242) 122.57%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">2025 06 06</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-work font-medium font-medium leading-[1.2] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.48px]">Last update</p>
      <Frame41 />
    </div>
  );
}

function ManStudentLightSkinToneUniversityEducationScholar1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="👨🏻‍🎓 Man Student Light Skin Tone (University, Education, Scholar)">
      <div className="absolute inset-0 max-w-none pointer-events-none size-full bg-neutral-200" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <ManStudentLightSkinToneUniversityEducationScholar1 />
      <p className="font-montserrat-alt font-medium leading-[1.4] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px]">Success Story Two</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame85 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[20px] relative w-full">
        <Frame83 />
        <Frame84 />
        <p className="font-manrope font-normal font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] tracking-[-0.42px] w-[262px] whitespace-pre-wrap">We’ve impacted rural communities in Africa, Asia, and Latin America with safe water.</p>
        <p className="font-manrope font-semibold font-semibold leading-[1.5] relative shrink-0 text-[14px] text-black tracking-[-0.42px] w-[262px] whitespace-pre-wrap">Read more →</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[20px] self-stretch shrink-0 w-[294px]">
        <div className="absolute inset-0 max-w-none opacity-88 pointer-events-none rounded-[20px] size-full bg-neutral-200" />
      </div>
      <Frame82 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[433px] items-start left-[416px] p-[28px] rounded-[24px] top-0 w-[670px]">
      <div aria-hidden="true" className="absolute border-[#6e9ed5] border-solid border-t-8 inset-0 pointer-events-none rounded-[24px]" />
      <Frame79 />
      <Frame81 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">Vancouver, British Columbia, Canada</p>
    </div>
  );
}

function LargeYellowCircleSphereBallRound4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="🟡 Large Yellow Circle (Sphere, Ball, Round)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLargeYellowCircleSphereBallRound} />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LargeYellowCircleSphereBallRound4 />
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">$7K+</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <p className="font-manrope font-semibold font-semibold leading-[1.3] relative shrink-0 text-[16px] text-black tracking-[-0.48px]">(02)</p>
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(179.588deg, rgb(255, 255, 255) 1.2123%, rgb(242, 242, 242) 122.57%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">2025 05 24</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-work font-medium font-medium leading-[1.2] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.48px]">Last update</p>
      <Frame44 />
    </div>
  );
}

function MovieCameraFilmRecordingVideo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="🎥 Movie Camera (Film, Recording, Video)">
      <div className="absolute inset-0 max-w-none pointer-events-none size-full bg-neutral-200" />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <MovieCameraFilmRecordingVideo />
      <p className="font-montserrat-alt font-medium leading-[1.4] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px]">Success Story Two</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame93 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[20px] relative w-full">
        <Frame91 />
        <Frame92 />
        <p className="font-manrope font-normal font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] tracking-[-0.42px] w-[262px] whitespace-pre-wrap">Children with supplies and classes. Hear from those we support — their joy.</p>
        <p className="font-manrope font-semibold font-semibold leading-[1.5] relative shrink-0 text-[14px] text-black tracking-[-0.42px] w-[262px] whitespace-pre-wrap">Read more →</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[20px] self-stretch shrink-0 w-[294px]">
        <div className="absolute inset-0 max-w-none opacity-85 pointer-events-none rounded-[20px] size-full bg-neutral-200" />
      </div>
      <Frame90 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[433px] items-start left-[1123px] p-[28px] rounded-[24px] top-0 w-[671px]">
      <div aria-hidden="true" className="absolute border-[#6e9ed5] border-solid border-t-8 inset-0 pointer-events-none rounded-[24px]" />
      <Frame87 />
      <Frame89 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="col-1 content-stretch flex gap-[24px] h-[546.731px] items-start ml-0 mt-[158.76px] relative row-1 shadow-[0px_-406px_114px_0px_rgba(0,0,0,0),0px_-260px_104px_0px_rgba(0,0,0,0.01),0px_-146px_88px_0px_rgba(0,0,0,0.03),0px_-65px_65px_0px_rgba(0,0,0,0.04),0px_-16px_36px_0px_rgba(0,0,0,0.05)] w-[1368px]">
      <Frame68 />
      <Frame78 />
      <Frame86 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="-translate-x-1/2 col-1 font-montserrat-alt font-semibold h-[200.763px] leading-[0.62] ml-[764.5px] mt-0 not-italic relative row-1 text-[#2f2f2f] text-[256px] text-center tracking-[-5.12px] w-[1137px] whitespace-pre-wrap">IMPACT</p>
      <Frame69 />
    </div>
  );
}

function ImpactSection() {
  return (
    <div className="bg-[#fafafa] h-[978px] relative shrink-0 w-full" data-name="IMPACT SECTION">
      <div aria-hidden="true" className="absolute border-[#6e9ed5] border-l-8 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[135px] items-start justify-center px-[36px] relative size-full">
          <Frame77 />
          <Group />
        </div>
      </div>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[17px] relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-montserrat-alt font-bold leading-[1.86] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.36px]">CANADIAN GEOLOGICAL FOUNDATION</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="black" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[100px]">
      <Frame2 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex items-start p-[3px] relative rounded-[100px] shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="white" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center p-[12px] relative rounded-[100px] shrink-0">
      <Frame3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#1a191c] content-stretch flex items-start p-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame47 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame98 />
      <Frame46 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame172 />
      <Frame97 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-montserrat-alt font-semibold leading-[1.4] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] w-[557px]">Grant Application Portal</p>
      <p className="font-montserrat font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.48px] w-[433px]">
        Apply today to fund your next geoscience project!
        <br aria-hidden="true" />
        Our current application are located here. Select one to t
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[8px] shrink-0 w-[165px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.48px]">CGF Coverform</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[8px] relative w-full">
          <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.4)] text-center tracking-[-0.48px]">Application Form</p>
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shrink-0 w-[433px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function FilePdfSolid() {
  return (
    <div className="relative shrink-0 size-[23px] flex items-center justify-center" data-name="file-pdf-solid 1">
      {/* PDF Icon */}
      <div className="relative">
        <X size={23} color="black" /> {/* Placeholder/FileText */}
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex gap-[15px] items-center overflow-clip relative shrink-0 w-full">
      <p className="font-montserrat font-semibold font-semibold leading-[1.5] relative shrink-0 text-[12px] text-black tracking-[-0.36px]">{`CGFCoverform.pdf `}</p>
      <FilePdfSolid />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[16px] shrink-0">
      <p className="font-montserrat-alt font-bold leading-[1.4] min-w-full not-italic relative shrink-0 text-[20px] text-black tracking-[-0.8px] w-[min-content] whitespace-pre-wrap">CGF Coverform</p>
      <p className="font-montserrat font-normal font-normal leading-[1.4] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] tracking-[-0.42px] w-[216px] whitespace-pre-wrap">Complete and submit this for digitally; receive a PDF printout</p>
      <Frame171 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame103 />
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[16px] shrink-0 w-[189px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
            <div className="absolute max-w-none rounded-[16px] size-full bg-neutral-200" />
            <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 rounded-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[238px] items-start relative shrink-0">
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0">
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[16px] text-center text-white">Complete and Download CGF Coverform</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#1a191c] content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame51 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative">
      <Frame95 />
      <Frame99 />
      <Frame100 />
      <Frame50 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(179.593deg, rgb(255, 255, 255) 1.2123%, rgb(242, 242, 242) 122.57%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">2025 09 30</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="h-[18px] relative shrink-0 w-[16px] flex items-center justify-center" data-name="Vector">
        <Calendar size={16} color="black" />
      </div>
      <p className="font-montserrat-alt font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.48px]">Deadline</p>
      <Frame108 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.3] relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-montserrat-alt font-medium not-italic relative shrink-0 text-[20px] text-black tracking-[-0.6px] w-full">Grant One Application</p>
      <p className="font-manrope font-normal font-normal relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] tracking-[-0.36px] w-full">Over 2.2 billion rely on unsafe sources.</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8ab594] border-solid border-t-8 inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[12px] relative w-full">
        <Frame107 />
        <Frame109 />
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(179.579deg, rgb(255, 255, 255) 1.2123%, rgb(242, 242, 242) 122.57%)" }}>
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_538)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, black)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_538" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_538" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.36px]">2025 10 03</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="h-[18px] relative shrink-0 w-[16px] flex items-center justify-center" data-name="Vector">
        <Calendar size={16} color="black" />
      </div>
      <p className="font-montserrat-alt font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.48px]">Deadline</p>
      <Frame112 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.3] relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-montserrat-alt font-medium not-italic relative shrink-0 text-[20px] text-black tracking-[-0.6px] w-full">Grant Two Application</p>
      <p className="font-manrope font-normal font-normal relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] tracking-[-0.36px] w-full">Over 700 million live on under $2.15 daily.</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8ab594] border-solid border-t-8 inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[12px] relative w-full">
        <Frame111 />
        <Frame113 />
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-[#2e3034] relative rounded-[100px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
          <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[12px] text-center text-white">Application Instructions</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-[#1a191c] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative w-full">
        <Frame115 />
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[16px] items-center left-1/2 p-[16px] rounded-[36px] top-1/2 w-[334px]">
      <Frame106 />
      <Frame110 />
      <Frame114 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <circle cx="16" cy="16" fill="var(--fill-0, #00FF3B)" id="Ellipse 10" r="13" />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame4 />
      <p className="font-montserrat-alt font-semibold leading-[1.2] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[-0.4px]">Currently Accepting Applications</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g filter="url(#filter0_f_1_566)" id="Ellipse 8">
              <circle cx="5" cy="5" fill="var(--fill-0, white)" r="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_f_1_566" width="10" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_566" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px]">2025</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[36px] top-[36px] w-[603px]">
      <Frame117 />
      <Frame118 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="flex-[1_0_0] h-[676px] min-h-px min-w-px relative">
      <div className="absolute h-[676px] left-0 rounded-[24px] top-0 w-[644px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <div className="absolute h-full left-[-2.48%] max-w-none top-0 w-[104.97%] bg-neutral-200" />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.03)] inset-0 rounded-[24px]" />
        </div>
      </div>
      <Frame105 />
      <Frame116 />
    </div>
  );
}

function AdditionalSection() {
  return (
    <div className="bg-white h-[944px] relative shrink-0 w-full" data-name="ADDITIONAL SECTION">
      <div aria-hidden="true" className="absolute border-[#8ab594] border-l-8 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start pt-[88px] px-[64px] relative size-full">
        <Frame94 />
        <Frame104 />
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[76px]" data-name="CGF-OG-Logo-Edit-web-_002 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCgfOgLogoEditWeb0021} />
      </div>
      <p className="font-montserrat-alt font-extrabold leading-[1.2] not-italic relative shrink-0 text-[64px] text-[rgba(0,0,0,0.8)] text-center tracking-[3.84px]">CGF</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0">
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[12px] text-black text-center">Signup for Geoscience News</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shrink-0 w-[536px]">
      <Frame123 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0">
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[12px] text-center text-white">Signup for Grant Notifications</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-[#1a191c] content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[535px]">
      <Frame126 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame125 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-[576px]">
      <p className="font-montserrat-alt font-semibold leading-[1.4] min-w-full not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-1.92px] w-[min-content] whitespace-pre-wrap">{`Stay Up to Date with our Grants & News!`}</p>
      <p className="font-manrope font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.48px] w-[406px] whitespace-pre-wrap">Receive regular updates on the topics of your choice.</p>
      <Frame122 />
      <Frame124 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
      <p className="font-montserrat-alt font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-1.28px] w-[min-content]">Geoscience Resource 1</p>
      <p className="font-montserrat font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.48px] w-[264px]">A cool new resource released by National Geographic Canada.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="white" />
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center p-[12px] relative rounded-[100px] shrink-0 size-[24px]">
      <Frame6 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[#1a191c] content-stretch flex items-start p-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame132 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative rounded-[32px] shrink-0 w-full">
      <div className="h-[300px] pointer-events-none relative rounded-[20px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
          <div className="absolute bg-[rgba(0,0,0,0.03)] inset-0 rounded-[20px]" />
          <div className="absolute max-w-none object-contain rounded-[20px] size-full bg-neutral-200" />
        </div>
        <div aria-hidden="true" className="absolute border-[#8384c2] border-solid border-t-8 inset-0 rounded-[20px]" />
      </div>
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
      <p className="font-montserrat-alt font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-1.28px] w-[min-content]">Geoscience Resource 3</p>
      <p className="font-montserrat font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.48px] w-[264px]">A cool blog article from a sister company of CGF.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="white" />
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center p-[12px] relative rounded-[100px] shrink-0 size-[24px]">
      <Frame7 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-[#1a191c] content-stretch flex items-start p-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame136 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative rounded-[32px] shrink-0 w-full">
      <div className="h-[300px] pointer-events-none relative rounded-[20px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
          <div className="absolute bg-[rgba(0,0,0,0.03)] inset-0 rounded-[20px]" />
          <div className="absolute max-w-none object-contain rounded-[20px] size-full bg-neutral-200" />
        </div>
        <div aria-hidden="true" className="absolute border-[#8384c2] border-solid border-t-8 inset-0 rounded-[20px]" />
      </div>
      <Frame134 />
      <Frame135 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative">
      <Frame129 />
      <Frame133 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center text-white w-[367px] whitespace-pre-wrap">
      <p className="font-montserrat-alt font-bold leading-[1.4] min-w-full not-italic relative shrink-0 text-[32px] tracking-[-1.28px] w-[min-content]">Featured Geoscience Resource</p>
      <p className="font-montserrat font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] tracking-[-0.48px] w-[264px]">A Roadmap of the Earth’s history and where Canada fits in.</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0 w-[123px]">
      <p className="font-montserrat font-semibold font-semibold leading-[1.2] relative shrink-0 text-[12px] text-center text-white">Visit Resource</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="white" />
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center p-[12px] relative rounded-[100px] shrink-0 size-[38px]">
      <Frame9 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-[#1a191c] content-stretch flex gap-[10px] items-center pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[185px]">
      <Frame143 />
      <Frame144 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[109px]">
      <Frame142 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] bottom-[-80px] content-stretch flex flex-col gap-[36px] h-[556px] items-center justify-center left-1/2 py-[36px] w-[440px]">
      <Frame140 />
      <Frame141 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="absolute h-[1002px] left-0 pointer-events-none rounded-[20px] top-0 w-[440px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[20px]" />
          <div className="absolute max-w-none rounded-[20px] size-full bg-neutral-200" />
        </div>
        <div aria-hidden="true" className="absolute border-[#8384c2] border-solid border-t-8 inset-0 rounded-[20px]" />
      </div>
      <Frame139 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
      <Frame138 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
      <p className="font-montserrat-alt font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-1.28px] w-[min-content]">Geoscience Resouce 2</p>
      <p className="font-montserrat font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.48px] w-[264px]">A recounting of iconoclastic flow at Mount Unzen, Japan.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="white" />
    </div>
  );
}

function Frame149() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center p-[12px] relative rounded-[100px] shrink-0 size-[24px]">
      <Frame11 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-[#1a191c] content-stretch flex items-start p-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame149 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative rounded-[32px] shrink-0 w-full">
      <div className="h-[311px] pointer-events-none relative rounded-[20px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
          <div className="absolute bg-[rgba(0,0,0,0.03)] inset-0 rounded-[20px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <div className="absolute h-[94.32%] left-0 max-w-none top-[4.61%] w-full bg-neutral-200" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#8384c2] border-solid border-t-8 inset-0 rounded-[20px]" />
      </div>
      <Frame147 />
      <Frame148 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
      <p className="font-montserrat-alt font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-1.28px] w-[min-content]">Geoscience Resource 4</p>
      <p className="font-montserrat font-normal font-normal leading-[1.3] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.48px] w-[264px]">A cool now interactive tool that teaches Earth’s layers.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center" data-name="Frame">
      <ChevronRight size={16} color="white" />
    </div>
  );
}

function Frame153() {
  return (
    <div className="bg-[#2e3034] content-stretch flex items-center justify-center p-[12px] relative rounded-[100px] shrink-0 size-[24px]">
      <Frame12 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(135,123,123,0.25)]" />
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-[#1a191c] content-stretch flex items-start p-[3px] relative rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
      <Frame153 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative rounded-[32px] shrink-0 w-full">
      <div className="h-[300px] pointer-events-none relative rounded-[20px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-[20px]">
          <div className="absolute bg-[rgba(0,0,0,0.03)] inset-0 rounded-[20px]" />
          <div className="absolute max-w-none object-contain rounded-[20px] size-full bg-neutral-200" />
        </div>
        <div aria-hidden="true" className="absolute border-[#8384c2] border-solid border-t-8 inset-0 rounded-[20px]" />
      </div>
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative">
      <Frame146 />
      <Frame150 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[24px] h-[1052px] items-start justify-center py-[65px] relative shrink-0 w-full">
      <Frame128 />
      <Frame137 />
      <Frame145 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[109px] h-[1736px] items-center pb-[36px] pt-[69px] px-[36px] relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border-[#8384c2] border-l-8 border-solid inset-0 pointer-events-none" />
      <Frame120 />
      <Frame121 />
      <Frame127 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4961px] items-start left-0 top-0 w-[1440px]">
      <HeroSection />
      <ImpactSection />
      <AdditionalSection />
      <Frame119 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0">
      <p className="font-work font-semibold font-semibold leading-[1.2] relative shrink-0 text-[12px] text-black text-center">Donate</p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start pl-[3px] pr-[24px] py-[3px] relative rounded-[100px] shrink-0">
      <Frame158 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[340px]">
      <p className="font-manrope font-medium font-medium leading-[1.4] relative shrink-0 text-[48px] text-[rgba(255,255,255,0.8)] tracking-[-1.92px] w-[403px] whitespace-pre-wrap">We Fuel Canadian Geoscience</p>
      <p className="font-manrope font-normal font-normal leading-[1.3] min-w-full relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.48px] w-[min-content] whitespace-pre-wrap">Your donation empowers mothers, brings clean water, and helps communities thrive.</p>
      <Frame157 />
    </div>
  );
}

function EnvelopeWithArrowEmailMessageMail() {
  return (
    <div className="relative shrink-0 size-[36px] flex items-center justify-center" data-name="📩 Envelope With Arrow (Email, Message, Mail)">
      <Mail size={36} color="white" />
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <EnvelopeWithArrowEmailMessageMail />
      <p className="font-montserrat font-medium font-medium leading-[1.4] relative shrink-0 text-[36px] text-[rgba(255,255,255,0.8)] text-right tracking-[-1.44px]">kevin.ansdell@usask.ca</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col font-manrope font-medium font-medium gap-[12px] items-start relative shrink-0 text-[20px] text-[rgba(255,255,255,0.6)] tracking-[-0.6px]">
      <p className="relative shrink-0 w-full">Instagram : @canaadiangeo</p>
      <p className="relative shrink-0 w-full">X : @canadiangeo</p>
      <p className="relative shrink-0 w-full">You Tube : CanadianGeo</p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-end relative shrink-0 whitespace-pre-wrap">
      <p className="font-manrope font-semibold font-semibold min-w-full relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] tracking-[-0.96px] w-[min-content]">Get in Touch</p>
      <Frame163 />
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex flex-col font-manrope font-medium font-medium gap-[12px] items-start relative shrink-0 text-[20px] text-[rgba(255,255,255,0.6)] tracking-[-0.6px]">
      <p className="relative shrink-0 w-full">Our Impact</p>
      <p className="relative shrink-0 w-full">Our Grants</p>
      <p className="relative shrink-0 w-full">Explore Geology</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-end relative shrink-0 w-[154px] whitespace-pre-wrap">
      <p className="font-manrope font-semibold font-semibold min-w-full relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] tracking-[-0.96px] w-[min-content]">Quicklinks</p>
      <Frame165 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex flex-col font-manrope font-medium font-medium gap-[12px] items-start relative shrink-0 text-[20px] text-[rgba(255,255,255,0.6)] tracking-[-0.6px] whitespace-pre-wrap">
      <p className="relative shrink-0 w-full">Our Story</p>
      <p className="relative shrink-0 w-full">Our Grants</p>
      <p className="relative shrink-0 w-full">Our Stories</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-end relative shrink-0">
      <p className="font-manrope font-semibold font-semibold relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] tracking-[-0.96px]">About Us</p>
      <Frame166 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col font-manrope font-medium font-medium gap-[12px] items-start relative shrink-0 text-[20px] text-[rgba(255,255,255,0.6)] tracking-[-0.6px]">
      <p className="relative shrink-0 w-full">Saskatoon, Canada</p>
      <p className="relative shrink-0 w-full">{`+1  123 4567`}</p>
      <p className="relative shrink-0 w-full">09.00 AM - 05.00 PM</p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-end relative shrink-0 whitespace-pre-wrap">
      <p className="font-manrope font-semibold font-semibold min-w-full relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] tracking-[-0.96px] w-[min-content]">Our Office</p>
      <Frame168 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex gap-[56px] items-start justify-end leading-[1.5] relative shrink-0 text-right w-full">
      <Frame162 />
      <Frame164 />
      <Frame13 />
      <Frame167 />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-end relative shrink-0">
      <Frame160 />
      <Frame161 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame156 />
      <Frame159 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex font-manrope font-medium font-medium h-[50px] items-center justify-between leading-[normal] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] tracking-[-0.54px] underline w-full">
      <p className="decoration-solid relative shrink-0">Copyright 2025 Canadian Geological Foundation - all rights reserved</p>
      <p className="decoration-solid relative shrink-0 text-right w-[168px] whitespace-pre-wrap">{`Privacy & Policy`}</p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="absolute bg-[#050505] content-stretch flex flex-col gap-[72px] h-[588px] items-center left-0 px-[36px] py-[72px] top-[5138px] w-[1440px]">
      <Frame155 />
      <Frame169 />
    </div>
  );
}

export default function CgfBHome() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="CGF B - HOME">
      <Frame96 />
      <Frame154 />
    </div>
  );
}