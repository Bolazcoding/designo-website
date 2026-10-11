"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const validateField = (name: keyof FormValues, value: string) => {
  const trimmedValue = value.trim();

  switch (name) {
    case "name":
      if (!trimmedValue) return "Please enter your name.";
      if (trimmedValue.length < 2)
        return "Name must be at least 2 characters long.";
      return "";
    case "email":
      if (!trimmedValue) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        return "Please enter a valid email address.";
      }
      return "";
    case "phone":
      if (!trimmedValue) return "Please enter your phone number.";
      if (!/^\+?[0-9()\-\s]{7,}$/.test(trimmedValue)) {
        return "Please enter a valid phone number.";
      }
      return "";
    case "message":
      if (!trimmedValue) return "Please enter your message.";
      if (trimmedValue.length < 10)
        return "Message must be at least 10 characters long.";
      return "";
    default:
      return "";
  }
};

const validateForm = (values: FormValues) => {
  const nextErrors: FormErrors = {};

  (Object.keys(values) as Array<keyof FormValues>).forEach((field) => {
    const error = validateField(field, values[field]);

    if (error) {
      nextErrors[field] = error;
    }
  });

  return nextErrors;
};

function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const field = name as keyof FormValues;

    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (hasSubmitted) {
      const nextError = validateField(field, value);
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: nextError,
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    console.log("Contact form submitted successfully:", formValues);
  };

  return (
    <form
      className="flex w-full min-w-0 flex-col"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <input
          className={`w-full min-w-0 bg-transparent px-4 py-4 text-[1.6rem] text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 ${
            hasSubmitted && errors.name
              ? "border-b-[1px] border-[#ffb8b8]"
              : "border-b-[0.5px] border-b-[#fff]"
          }`}
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
          aria-invalid={hasSubmitted && Boolean(errors.name)}
        />
        {hasSubmitted && errors.name ? (
          <p className="mt-2 text-[1.2rem] text-[#ffb8b8]">{errors.name}</p>
        ) : null}
      </div>

      {/* <div className="border-[0.5px] border-b-[#fff]"></div> */}

      <div className="mt-8">
        <input
          className={`w-full min-w-0 bg-transparent px-4 py-4 text-[1.6rem] text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 ${
            hasSubmitted && errors.email
              ? "border-b-[1px] border-[#ffb8b8]"
              : "border-b-[0.5px] border-b-[#fff]"
          }`}
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email Address"
          aria-invalid={hasSubmitted && Boolean(errors.email)}
        />
        {hasSubmitted && errors.email ? (
          <p className="mt-2 text-[1.2rem] text-[#ffb8b8]">{errors.email}</p>
        ) : null}
      </div>

      {/* <div className="border-[0.5px] border-b-[#fff]"></div> */}

      <div className="mt-8">
        <input
          className={`w-full min-w-0 bg-transparent px-4 py-4 text-[1.6rem] text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 ${
            hasSubmitted && errors.phone
              ? "border-b-[1px] border-[#ffb8b8]"
              : "border-b-[0.5px] border-b-[#fff]"
          }`}
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          placeholder="Phone"
          aria-invalid={hasSubmitted && Boolean(errors.phone)}
        />
        {hasSubmitted && errors.phone ? (
          <p className="mt-2 text-[1.2rem] text-[#ffb8b8]">{errors.phone}</p>
        ) : null}
      </div>

      {/* <div className="border-[0.5px] border-b-[#fff]"></div> */}

      <div className="mt-8">
        <textarea
          className={`w-full min-w-0 resize-y bg-transparent px-4 py-4 text-[1.6rem] text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 ${
            hasSubmitted && errors.message
              ? "border-b-[1px] border-[#ffb8b8]"
              : "border-b-[0.5px] border-b-[#fff]"
          }`}
          name="message"
          value={formValues.message}
          onChange={handleChange}
          placeholder="Your Message"
          aria-invalid={hasSubmitted && Boolean(errors.message)}
          rows={5}
        />
        {hasSubmitted && errors.message ? (
          <p className="mt-2 text-[1.2rem] text-[#ffb8b8]">{errors.message}</p>
        ) : null}
      </div>

      {/* <div className="border-[0.5px] border-b-[#fff]"></div> */}

      {isSubmitted ? (
        <p className="mt-4 self-end text-[1.2rem] text-[#d7f5d2]">
          Your message has been sent successfully.
        </p>
      ) : null}

      <button className="mt-8 w-full cursor-pointer rounded-[0.85rem] bg-white px-10 py-6 text-[1.45rem] font-medium uppercase tracking-widest text-secondary transition-colors hover:bg-secondary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-10 sm:w-auto sm:self-end sm:px-20">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
