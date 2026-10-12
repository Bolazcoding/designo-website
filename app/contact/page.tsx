import { Metadata } from "next";
import AboutLocation from "../_components/AboutLocation";
import SubmitContact from "../_components/SubmitContact";
import MotionReveal from "../_components/MotionReveal";

export const metadata: Metadata = {
  title: "Contact Us",
};

function page() {
  return (
    <>
      <SubmitContact />
      <MotionReveal>
        <AboutLocation />
      </MotionReveal>
    </>
  );
}

export default page;
