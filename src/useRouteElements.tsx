import { useRoutes } from "react-router-dom";
import path from "./constants/path";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuLayout from "./layouts/MenuLayout";
import DragonBoat from "./pages/DragonBoat";
import BanquetHallLayout from "./layouts/BanquetHallLayout/BanquetHallLayout";
import LotusHall from "./pages/LotusHall";
import HoangKimSenHall from "./pages/HoangKimSenHall";
import ThanhSenHall from "./pages/ThanhSenHall";
import ConferenceRoom from "./pages/ConferenceRoom";
import Promotion from "./pages/Promotion";

export default function useRouteElements() {
  const routElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: <Home></Home>,
    },
    {
      path: path.menu,
      index: true,
      element: (
        <MenuLayout>
          <Menu></Menu>
        </MenuLayout>
      ),
    },
    {
      path: path.thuyenRong,
      index: true,
      element: (
        <BanquetHallLayout img="https://s3-alpha-sig.figma.com/img/e73d/ff61/aa2669a4c0dcba8c2af9535c7fb30f6b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XHazNLN9GXBjSJwOIh46qdSfV-akZqRwi~dNfa-s8smvecLVPyHYP2DVqb3H~40qdRVC4SNVQVmuriIGYH6nHnFfU5WjXd3pqk5W1S9B1nKb-sUtXRgFQEiq01ROQ8r~8Ddp5xK81gZl0o66--rgWuzo9v08bflUc6De7Jq84uNdzmoMuh2PZ4UWE~X7fptTcDAYQsNgC4p89UFuVTLIT3qamjl2eIjMwJtgnqeW6M2y-r7xqBua2K4HtO3KRv1qN5hlf149tvCli2YtpSgr44d6h4g~IAV-aaZNYHMtGHU93WtJqc-aNsEqvVoE6xboqKak0b0vm3Go29NsAiFi5w__">
          <DragonBoat></DragonBoat>
        </BanquetHallLayout>
      ),
    },
    {
      path: path.nganSen,
      index: true,
      element: (
        <BanquetHallLayout img="https://s3-alpha-sig.figma.com/img/e73d/ff61/aa2669a4c0dcba8c2af9535c7fb30f6b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XHazNLN9GXBjSJwOIh46qdSfV-akZqRwi~dNfa-s8smvecLVPyHYP2DVqb3H~40qdRVC4SNVQVmuriIGYH6nHnFfU5WjXd3pqk5W1S9B1nKb-sUtXRgFQEiq01ROQ8r~8Ddp5xK81gZl0o66--rgWuzo9v08bflUc6De7Jq84uNdzmoMuh2PZ4UWE~X7fptTcDAYQsNgC4p89UFuVTLIT3qamjl2eIjMwJtgnqeW6M2y-r7xqBua2K4HtO3KRv1qN5hlf149tvCli2YtpSgr44d6h4g~IAV-aaZNYHMtGHU93WtJqc-aNsEqvVoE6xboqKak0b0vm3Go29NsAiFi5w__">
          <LotusHall></LotusHall>
        </BanquetHallLayout>
      ),
    },
    {
      path: path.hoangKimSen,
      index: true,
      element: (
        <BanquetHallLayout img="https://s3-alpha-sig.figma.com/img/e73d/ff61/aa2669a4c0dcba8c2af9535c7fb30f6b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XHazNLN9GXBjSJwOIh46qdSfV-akZqRwi~dNfa-s8smvecLVPyHYP2DVqb3H~40qdRVC4SNVQVmuriIGYH6nHnFfU5WjXd3pqk5W1S9B1nKb-sUtXRgFQEiq01ROQ8r~8Ddp5xK81gZl0o66--rgWuzo9v08bflUc6De7Jq84uNdzmoMuh2PZ4UWE~X7fptTcDAYQsNgC4p89UFuVTLIT3qamjl2eIjMwJtgnqeW6M2y-r7xqBua2K4HtO3KRv1qN5hlf149tvCli2YtpSgr44d6h4g~IAV-aaZNYHMtGHU93WtJqc-aNsEqvVoE6xboqKak0b0vm3Go29NsAiFi5w__">
          <HoangKimSenHall></HoangKimSenHall>
        </BanquetHallLayout>
      ),
    },
    {
      path: path.thanhSen,
      index: true,
      element: (
        <BanquetHallLayout img="https://s3-alpha-sig.figma.com/img/e73d/ff61/aa2669a4c0dcba8c2af9535c7fb30f6b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XHazNLN9GXBjSJwOIh46qdSfV-akZqRwi~dNfa-s8smvecLVPyHYP2DVqb3H~40qdRVC4SNVQVmuriIGYH6nHnFfU5WjXd3pqk5W1S9B1nKb-sUtXRgFQEiq01ROQ8r~8Ddp5xK81gZl0o66--rgWuzo9v08bflUc6De7Jq84uNdzmoMuh2PZ4UWE~X7fptTcDAYQsNgC4p89UFuVTLIT3qamjl2eIjMwJtgnqeW6M2y-r7xqBua2K4HtO3KRv1qN5hlf149tvCli2YtpSgr44d6h4g~IAV-aaZNYHMtGHU93WtJqc-aNsEqvVoE6xboqKak0b0vm3Go29NsAiFi5w__">
          <ThanhSenHall></ThanhSenHall>
        </BanquetHallLayout>
      ),
    },
    {
      path: path.conferenceRoom,
      index: true,
      element: (
        <BanquetHallLayout img="https://s3-alpha-sig.figma.com/img/e73d/ff61/aa2669a4c0dcba8c2af9535c7fb30f6b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XHazNLN9GXBjSJwOIh46qdSfV-akZqRwi~dNfa-s8smvecLVPyHYP2DVqb3H~40qdRVC4SNVQVmuriIGYH6nHnFfU5WjXd3pqk5W1S9B1nKb-sUtXRgFQEiq01ROQ8r~8Ddp5xK81gZl0o66--rgWuzo9v08bflUc6De7Jq84uNdzmoMuh2PZ4UWE~X7fptTcDAYQsNgC4p89UFuVTLIT3qamjl2eIjMwJtgnqeW6M2y-r7xqBua2K4HtO3KRv1qN5hlf149tvCli2YtpSgr44d6h4g~IAV-aaZNYHMtGHU93WtJqc-aNsEqvVoE6xboqKak0b0vm3Go29NsAiFi5w__">
          <ConferenceRoom></ConferenceRoom>
        </BanquetHallLayout>
      ),
    },
    {
      path: path.promotion,
      index: true,
      element: (
        <BanquetHallLayout img="https://s3-alpha-sig.figma.com/img/e73d/ff61/aa2669a4c0dcba8c2af9535c7fb30f6b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XHazNLN9GXBjSJwOIh46qdSfV-akZqRwi~dNfa-s8smvecLVPyHYP2DVqb3H~40qdRVC4SNVQVmuriIGYH6nHnFfU5WjXd3pqk5W1S9B1nKb-sUtXRgFQEiq01ROQ8r~8Ddp5xK81gZl0o66--rgWuzo9v08bflUc6De7Jq84uNdzmoMuh2PZ4UWE~X7fptTcDAYQsNgC4p89UFuVTLIT3qamjl2eIjMwJtgnqeW6M2y-r7xqBua2K4HtO3KRv1qN5hlf149tvCli2YtpSgr44d6h4g~IAV-aaZNYHMtGHU93WtJqc-aNsEqvVoE6xboqKak0b0vm3Go29NsAiFi5w__">
          <Promotion></Promotion>
        </BanquetHallLayout>
      ),
    },
  ]);
  return routElements;
}
