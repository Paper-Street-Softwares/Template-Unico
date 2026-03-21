import { lazy, Suspense } from "react";

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from "../components/sections/Navbar/NavbarNovaTemplate";
import HeroTemplateNovo from "../components/sections/HeroTemplateNovo";
import StepsNovoTemplate from "../components/sections/StepsNovoTemplate";
import FaqNovoTemplate from "../components/sections/FaqNovoTemplate";
// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(
  () => import("../components/sections/FeaturesNovaTemplate"),
);
const CtaNovoTemplate = lazy(
  () => import("../components/sections/CtaNovoTemplate"),
);
const AboutNovoTemplate = lazy(
  () => import("../components/sections/AboutNovoTemplate"),
);

const SocialMediaTemplate = lazy(
  () => import("../components/sections/SocialMediaTemplate"),
);
const FooterNovoTemplate = lazy(
  () => import("../components/sections/FooterNovoTemplate"),
);
const WhatsappAnimated = lazy(
  () => import("../components/interactives/WhatsAppAnimated"),
);

const BlogPosts = lazy(() => import("../components/sections/BlogPosts"));

import { ColorModeProvider } from "../context/UseContextArchive";
import { useColorMode } from "../context/UseContextArchive";
import Important from "../components/sections/Important";
import Emergency from "../components/sections/Emergency";
import { Diferences } from "../components/sections/Diferences";
import { AlternatingSection } from "../context/AlternatingSection";
import FormNovoTemplate from "../components/sections/FormNovoTemplate";
import SocialProof from "../components/sections/SocialProof";
import { NavbarRender } from "../context/UseContextArchive";
import TeamSection from "../components/sections/TeamSection";
import TeamSectionNew from "../components/sections/TeamSection";
import TeamNovoTemplate from "../components/sections/TeamNovoTemplate";

export default function Index() {
  const { colorMode, setColorMode } = useColorMode();
  const { navbarHero } = NavbarRender();

  return (
    <>
      <ColorModeProvider>
        {/* Render imediato */}
        {!navbarHero && <NavbarNovaTemplate colorMode={colorMode} />}

        <main>
          <AlternatingSection index={0} colorMode={colorMode} forcePrimaryDark>
            <HeroTemplateNovo colorMode={colorMode} obs={true} obsTwo={true} />
          </AlternatingSection>

          {/* <AlternatingSection index={1} colorMode={colorMode}>
            <Emergency colorMode={colorMode} />
          </AlternatingSection> */}

          <AlternatingSection index={1} colorMode={colorMode}>
            <Important colorMode={colorMode} />
          </AlternatingSection>

          <AlternatingSection index={2} colorMode={colorMode}>
            <Suspense>
              <FeaturesNovaTemplate
                colorMode={colorMode}
                frasesDestaque={true}
                accordion={true}
                modal={false}
              />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={3} colorMode={colorMode}>
            <Suspense>
              <AboutNovoTemplate
                colorMode={colorMode}
                ButtonModal={false}
                benefits={true}
              />
              {/* <SocialMediaTemplate colorMode={colorMode} /> */}
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={4} colorMode={colorMode} forcePrimaryDark>
            <Suspense>
              <CtaNovoTemplate colorMode={colorMode} container={false} />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={5} colorMode={colorMode}>
            <Suspense>
              <StepsNovoTemplate colorMode={colorMode} />
            </Suspense>
          </AlternatingSection>

          {/* <AlternatingSection index={7} colorMode={colorMode}>
            <SocialProof colorMode={colorMode} />
          </AlternatingSection> */}

          <AlternatingSection index={6} colorMode={colorMode}>
            <Suspense>
              <FaqNovoTemplate colorMode={colorMode} />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={7} colorMode={colorMode} forcePrimaryDark>
            <Suspense>
              <FooterNovoTemplate
                colorMode={colorMode}
                mapa={false}
                phone={true}
                phoneSecond={false}
                expediente={true}
                adress={true}
                email={true}
                emailSecond={false}
                fraseFooter={true} // frase Google LLC
                obs={false}
              />
            </Suspense>
          </AlternatingSection>

          <Suspense fallback={null}>
            <WhatsappAnimated colorMode={colorMode} />
          </Suspense>

          {/* <AlternatingSection index={1} colorMode={colorMode}>
            <FormNovoTemplate />
          </AlternatingSection> */}

          {/* <AlternatingSection index={7} colorMode={colorMode}>
            <Suspense>
              <BlogPosts colorMode={colorMode} />
            </Suspense>
          </AlternatingSection> */}
          {/* <AlternatingSection index={4} colorMode={colorMode} forcePrimaryDark>
            <Suspense>
              <CtaNovoTemplate colorMode={colorMode} container={true} />
            </Suspense>
          </AlternatingSection> */}

          {/* <AlternatingSection index={4} colorMode={colorMode}>
            <Suspense>
              <Diferences colorMode={colorMode} />
            </Suspense>
          </AlternatingSection> */}
        </main>
      </ColorModeProvider>
    </>
  );
}

//imagens
