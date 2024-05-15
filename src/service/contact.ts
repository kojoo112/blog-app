import { EmailData } from "@/service/email";

export const sendContactEmail = async (email: EmailData) => {
  const response = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패함.");
  }

  return data;
};
