"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Alert, { AlertData } from "@/components/Alert";
import { sendContactEmail } from "@/service/contact";

const LABEL_CLASS = "block text-gray-700 text-sm font-bold mb-2";
const INPUT_CLASS =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

type Form = {
  email: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [alert, setAlert] = useState<AlertData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setAlert({ state: "success", message: "mail 전송에 성공!" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setAlert({ state: "error", message: "mail 전송에 실패!" });
      })
      .finally(() => {
        setTimeout(() => setAlert(null), 2000);
      });
  };

  return (
    <>
      {alert && <Alert alert={alert} />}
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text"
      >
        <label className={LABEL_CLASS} htmlFor="email">
          Your Email
        </label>
        <input
          autoFocus
          onChange={onChange}
          className={INPUT_CLASS}
          type="text"
          id="email"
          name="email"
          value={form.email}
          // required
        />
        <label className={LABEL_CLASS} htmlFor="subject">
          제목
        </label>
        <input
          className={INPUT_CLASS}
          onChange={onChange}
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          // required
        />
        <label className={LABEL_CLASS} htmlFor="message">
          본문
        </label>
        <textarea
          onChange={onChange}
          className={`${INPUT_CLASS} resize-none`}
          id="message"
          name="message"
          rows={5}
          value={form.message}
          // required
        />
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
