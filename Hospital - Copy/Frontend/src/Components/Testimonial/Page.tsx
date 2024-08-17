// import React from "react";
// import { PinContainer } from "../ui/3d-pin";
// import starIcon from '../../assets/images/Star.png';
// import userImg from  "../../assets/images/doctor-img01.png";

// export function AnimatedPinDemo() {
//   return (
//     <div className="flex flex-row justify-center">
//       <PinContainer
//         title="Book Now"
//         href="https:www.google.com"
//         className="mx-2" // Adjust the margin as needed
//       >
//         <div className="flex">
//           <div className="flex items-center justify-center h-32 w-32 rounded-lg">
//             <img src={userImg} alt="Description of your image" className="max-h-full max-w-full" />
//           </div>
//           <div className="flex items-center ml-2">
//             <h2 className="text-white">Ratings- </h2>
//             <img src={starIcon} alt="Star Icon" className="h-4 w-4 ml-2" /> {/* Add ml-1 class here */}
//             <span className="text-sm font-semibold text-white">5</span>
//           </div>
//         </div>

//         <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-60">
//           <h3 className="font-bold text-base text-slate-100">Aceternity UI</h3>
//           <div className="font-normal">
//             <span className="text-slate-500">Customizable Tailwind CSS and Framer Motion Components.</span>
//           </div>
//         </div>
//       </PinContainer>
//     </div>
//   );
// }

import React from "react";
import { BackgroundGradient } from "../ui/3d-pin";
import { IconAppWindow } from "@tabler/icons-react";
import starIcon from '../../assets/images/Star.png';
import Image1 from  "../../assets/images/doctor-img01.png";

export function BackgroundGradientDemo() {
  return (
    <div className="container py-8">
      <div className="flex flex-row justify-between">
        
      <div className="w-4" />
      <BackgroundGradient className="rounded-[16px] max-w-[300px] p-2 sm:p-4 bg-white dark:bg-zinc-900">
      <img
        src={Image1} // Use Image1 instead of Image as the variable
        alt="jordans"
        height="200" // Decrease the height of the image
        width="200" // Decrease the width of the image
        className="block mx-auto"
      />

        <p className="text-base sm:text-xl text-black mt-2 mb-1 dark:text-neutral-200">
        Mary Johnson
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        "Exceptional service! The doctors and staff at this hospital provided me with top-notch care during my recent surgery. I couldn't have asked for a better experience."
        </p>
        <div className="flex items-center ml-2 py-4">
          <h2 className="text-white">Ratings- </h2>
          <img src={starIcon} alt="Star Icon" className="h-4 w-4 ml-2" /> {/* Add ml-1 class here */}
          <span className="text-sm font-semibold text-white">5</span>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[16px] max-w-[300px] p-2 sm:p-4 bg-white dark:bg-zinc-900">
      <img
        src={Image1} // Use Image1 instead of Image as the variable
        alt="jordans"
        height="200" // Decrease the height of the image
        width="200" // Decrease the width of the image
        className="block mx-auto"
      />
        <p className="text-base sm:text-xl text-black mt-2 mb-1 dark:text-neutral-200">
        Robert Anderson
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        "I am truly grateful for the care I received at this hospital. The nurses were attentive, the facilities were clean. Thank you for making my recovery process smooth and comfortable."
        </p>
        <div className="flex items-center ml-2 py-4">
          <h2 className="text-white">Ratings- </h2>
          <img src={starIcon} alt="Star Icon" className="h-4 w-4 ml-2" /> {/* Add ml-1 class here */}
          <span className="text-sm font-semibold text-white">5</span>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[16px] max-w-[300px] p-2 sm:p-4 bg-white dark:bg-zinc-900">
      <img
        src={Image1} // Use Image1 instead of Image as the variable
        alt="jordans"
        height="200" // Decrease the height of the image
        width="200" // Decrease the width of the image
        className="block mx-auto"
      />
        <p className="text-base sm:text-xl text-black mt-2 mb-1 dark:text-neutral-200">
        Sarah Martinez
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        "The medical team at this hospital goes above and beyond to ensure patient comfort and well-being. I highly recommend this hospital to anyone in need of medical attention."
        </p>
        <div className="flex items-center ml-2 py-4">
          <h2 className="text-white">Ratings- </h2>
          <img src={starIcon} alt="Star Icon" className="h-4 w-4 ml-2" /> {/* Add ml-1 class here */}
          <span className="text-sm font-semibold text-white">5</span>
        </div>
      </BackgroundGradient>
      <div className="w-4" />

      {/* Repeat the BackgroundGradient components here as needed */}
      
    </div>
    </div>
  );
}

