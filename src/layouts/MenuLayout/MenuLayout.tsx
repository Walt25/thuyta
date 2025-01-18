import { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface Props {
  children: ReactNode;
}

export default function MenuLayout({ children }: Props) {
  return (
    <>
      <div className="relative pb-[60px] w-auto px-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/1bac/b1b4/32c71f26cfb1fbe23d6a3cbe648cbdaa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gw3W1nmjM86-aWYL-5BRbmR5mTNy~~o~DlVkZtE6OHSQiZYZjtUk2TR3DZYk70Ipru7a1YPS3-G9M173OFSwisASIIFibv9T5wKtEgR0mwkN6-D0WEjmxNWZQjPz-pe1vpeO0qMM5iTtylO~0oyE85iYPtaXK5qTfqT9CnW36GR5sGt9749ueoNHKTZp7nVsmRfRFwmyOAmzAEGr9mVs6wIG4sNNXPGVO9zgIuNpgvqmfZvu0iz8UcS7Bbnvlc2uesPxPU1suyWqYPw5BrHs1XmqojEgP53ka2wD2DnhiCYoUBLJqTJ~ueb1j7EK0sNkHeyhmoE-CZQb4aKgbCCi7Q__"
          alt=""
          className="absolute h-full w-full  top-0 left-0 z-[-1]"
        />
        <Header type="black"></Header>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
