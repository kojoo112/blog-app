import React from "react";

export type AlertData = {
  message: string;
  state: "success" | "error";
};

const Alert = ({ alert: { message, state } }: { alert: AlertData }) => {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🔥";
  return (
    <p
      className={`p-2 text-center ${isSuccess ? "bg-green-300" : "bg-red-300"}`}
    >{`${icon} ${message}`}</p>
  );
};

export default Alert;
