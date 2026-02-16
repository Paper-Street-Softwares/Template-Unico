import React from "react";
import imgIcon from "../../assets/imgs/icons/exclamation.webp";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function CardsImportants({
  title,
  paragraph,
  colorMode,
  className,
  iconColor,
}) {
  //precisa fazer colorMode
  let bgCircle, bgCard, titleMode, description;
  switch (colorMode) {
    case "light":
      bgCard = "bg-quartenary";
      bgCircle = "bg-white";
      titleMode = "text-corTitulosPreto";
      description = "text-corOutrosTextosPreto";
      break;
    case "dark":
      bgCard = "bg-dark";
      bgCircle = "bg-darkOpacity";
      titleMode = "text-corTitulosBranca";
      description = "text-corOutrosTextosBranca";
      break;
    case "defaultDark":
      bgCard = "bg-quartenary";
      bgCircle = "bg-white";
      titleMode = "text-corTitulosPreto";
      description = "text-corOutrosTextosPreto";
      break;
    case "defaultLight":
      bgCard = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      bgCircle = "bg-white";
      titleMode = "text-corTitulosBranca";
      description = "text-corOutrosTextosBranca";
  }

  const finalIconColor =
    iconColor ??
    (colorMode === "dark" || colorMode === "defaultDark" ? "#430E16" : "#fff");

  return (
    <MotionDivDownToUp>
      <div
        className={`relative h-fit shadow-lg max-w-[400px] py-12 px-8 rounded-[18px] flex flex-col gap-4 font-secondFont group transition-all duration-700 hover:scale-105 ${className ?? bgCard} `}
      >
        <h1
          className={`text-start font-secondFont font-bold text-lg duration-700 ${className ?? titleMode}`}
        >
          {title}
        </h1>
        <p
          className={`text-start text-sm font-secondFont font-light ${description} duration-700`}
        >
          {paragraph}
        </p>

        <div
          className={`absolute shadow border-primaryDark duration-700 transition-all rounded-full p-3 -top-6 left-6 ${bgCircle}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={finalIconColor}
            stroke={finalIconColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* <circle cx="12" cy="12" r="10" /> */}

            {/* traço principal maior */}
            <line x1="12" y1="0" x2="12" y2="14.5" />

            {/* ponto do ! bem maior */}
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default CardsImportants;
