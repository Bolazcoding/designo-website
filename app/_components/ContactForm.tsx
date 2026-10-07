function ContactForm() {
  return (
    <form className="flex flex-col">
      <input
        className="w-[550px] text-[1.7rem] text-white pl-4 py-5"
        type="text"
        placeholder="Name"
      />

      <div className="border-[0.5px] border-b-[#fff]"></div>
      <input
        className="w-[500px] text-[1.6rem] text-white pl-4 py-5 mt-8"
        type="email"
        placeholder="Email Address"
      />

      <div className="border-[0.5px] border-b-[#fff]"></div>

      <input
        className="w-[500px] text-[1.6rem] text-white pl-4 py-5 mt-8"
        type="tel"
        placeholder="Phone"
      />

      <div className="border-[0.5px] border-b-[#fff]"></div>

      <input
        className="w-[500px] text-[1.6rem] text-white pl-4 pt-5 pb-24 mt-8"
        type="text"
        placeholder="Your Message"
      />

      <div className="border-[0.5px] border-b-[#fff]"></div>

      <button className="self-end bg-white text-[1.45rem] text-secondary font-medium tracking-widest uppercase mt-10 py-6.5 px-20 rounded-[0.85rem] cursor-pointer">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
