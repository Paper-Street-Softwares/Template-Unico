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
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    image,
    bgObservation,
    textDestaque,
    textObservation;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-quartenary";
      iconBg = "bg-white text-primaryDark";
      image = " border-[8px] border-white";
      bgObservation = "bg-primaryDark";
      textObservation = "text-white";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      cardBg = "bg-dark";
      iconBg = "bg-darkOpacity text-primaryLight";
      image = " border-[8px] border-borderImage";
      bgObservation = "bg-primaryLight";
      textObservation = "text-black";

      break;
    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-quartenary";
      iconBg = "bg-white text-primaryDark";
      image = " border-[8px] border-white";
      bgObservation = "bg-primaryDark";
      textObservation = "text-white";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-white";
      cardBg = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      iconBg = "bg-white text-primaryLight";
      image =
        " border-[8px] border-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      bgObservation = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      textObservation = "text-white";
  }

  const finalIconColor =
    iconColor ??
    (colorMode === "dark" || colorMode === "defaultDark" ? "#430E16" : "#fff");

  return (
    <MotionDivDownToUp>
      <div className="grid">
        <div
          className={`group p-6 rounded-xl ${cardBg} hover:scale-105 transition-all duration-700 max-w-[500px]`}
        >
          <div
            className={`w-10 h-10 rounded-full ${iconBg} mb-4 flex items-center justify-center shadow-sm transition-transform`}
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
              <line x1="12" y1="0" x2="12" y2="14.5" />

              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          </div>
          <h1
            className={`font-secondFont font-bold text-lg mb-2 ${text} transition-all`}
          >
            {title}
          </h1>
          <p
            className={`text-sm font-secondFont font-light ${textOpacity} transition-all`}
          >
            {paragraph}
          </p>
        </div>
      </div>
      {/* <div
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
            <line x1="12" y1="0" x2="12" y2="14.5" />

            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
        </div>
      </div> */}
    </MotionDivDownToUp>
  );
}

export default CardsImportants;
