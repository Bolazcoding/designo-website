import { Metadata } from "next";
import AboutLocation from "../_components/AboutLocation";
import SubmitContact from "../_components/SubmitContact";

export const metadata: Metadata = {
  title: "About Us",
};

function page() {
  return (
    <>
      <SubmitContact />
      <AboutLocation />
    </>
  );
}

export default page;
