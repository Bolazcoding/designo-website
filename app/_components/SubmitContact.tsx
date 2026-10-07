import ContactForm from "./ContactForm";

function SubmitContact() {
  return (
    <section className="bg-primary flex items-center gap-30 justify-center mx-[6rem] rounded-2xl pt-28 pb-20 pr-30">
      <div className="flex flex-col justify-center rounded-l-xl pl-35">
        <h1 className="text-white text-7xl font-medium">Contact us</h1>
        <p className="text-white text-[1.6rem] mt-7">
          Ready to take it to the next level? Let&apos;s talk about your project
          or idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that&apos;s relatable to your
          users, drop us a line.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}

export default SubmitContact;
