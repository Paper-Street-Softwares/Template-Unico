import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import { Menu } from "lucide-react";
import content from "../../content/content";

function Navbar() {
  return (
    <SectionArea
      className={`bg-[#07202D] fixed z-50`}
      paddingTopAndBottom={false}
    >
      <SectionWrapper>
        <div className="flex items-center h-fit py-2 justify-between w-full">
          <div className=" max-w-[40%]">
            <img
              src={content.texts.navbar.logo.img}
              alt={content.texts.navbar.logo.alt}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <Menu className="text-[#C03D1A]" />
            </div>
            <div className="flex flex-col text-sm ml-4">
              <button className="text-white">PT</button>
              <button className="text-white/40">EN</button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Navbar;
