import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import { useEffect, useState } from "react";

function Calculadora({ colorMode }) {
  const [altura, setAltura] = useState(900);

  useEffect(() => {
    function receberAltura(event) {
      if (event.data?.tipo === "resize") {
        setAltura(event.data.altura);
      }
    }

    window.addEventListener("message", receberAltura);
    return () => window.removeEventListener("message", receberAltura);
  }, []);

  return (
    <div>
      <SectionArea paddingbot={false}>
        <SectionWrapper>
          <SectionHeaderNovo
            miniTitle={content.texts.calculadora.miniTag}
            title={content.texts.calculadora.title}
            subtitle={content.texts.calculadora.subtitle}
            colorMode={colorMode}
            className={`mb-3`}
          />
          <iframe
            src="/calculadora.html"
            style={{
              width: "100%",
              height: `${altura}px`,
              border: "none",
              overflow: "hidden",
            }}
          />
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default Calculadora;
