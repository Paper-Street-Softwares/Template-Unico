import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import image1 from "../../assets/imgs/socialProof/img1.webp";
import image2 from "../../assets/imgs/socialProof/img2.webp";
import image3 from "../../assets/imgs/socialProof/img3.webp";
import image4 from "../../assets/imgs/socialProof/img4.webp";
import image5 from "../../assets/imgs/socialProof/img5.webp";
import image6 from "../../assets/imgs/socialProof/img6.webp";
import image7 from "../../assets/imgs/socialProof/img7.webp";
import { Carousel } from "primereact/carousel";

function Reconhecimentos() {
  const logos = [
    { src: image1, alt: "Logo 1" },
    { src: image2, alt: "Logo 2" },
    { src: image3, alt: "Logo 3" },
    { src: image4, alt: "Logo 4" },
    { src: image5, alt: "Logo 5" },
    { src: image6, alt: "Logo 6" },
    { src: image7, alt: "Logo 7" },
  ];

  const itemTemplate = (item) => {
    return <img src={item.src} alt={item.alt} className="m-auto" />;
  };

  return (
    <SectionArea>
      <div className="flex flex-col gap-6">
        <SectionHeaderNovo
          title="Reconhecimentos"
          subtitle="O Miguel Neto Advogados é destaque nas principais publicações do mercado jurídico."
          type="article"
          className="max-w-[300px]"
        />
        <div className="w-[90%] mx-auto">
          <Carousel
            value={logos}
            numVisible={1} // só 1 por vez para os bullets aparecerem
            numScroll={1}
            circular
            autoplayInterval={3000}
            itemTemplate={itemTemplate}
            showIndicators // bullets visíveis
            showNavigators={false} // opcional, remove setas se quiser foco nos bullets
          />
        </div>
      </div>
    </SectionArea>
  );
}

export default Reconhecimentos;
