import { Breakpoints } from "common";
import {
  Banner,
  LimitedEdition,
  MobileUserMenu,
  Slider,
  TimerComponent,
  UomoInstagram,
} from "components";
import { ShopColections } from "components";
import { TrendyProducts } from "components";
import { Support } from "components/Content";
import { useMediaQuery } from "react-responsive";

export default function HomeView() {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  return (
    <>
      <Slider autoPlay={true} autoPlayTime={4000} />
      {isMobile && <MobileUserMenu />}
      <ShopColections />
      <TrendyProducts />
      <TimerComponent />
      <Banner />
      <LimitedEdition />
      <UomoInstagram />
      <Support />
    </>
  );
}
