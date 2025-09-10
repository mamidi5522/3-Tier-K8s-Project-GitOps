import React from "react";

export default function StatusBar({ status }) {
  if (!status.message) return null;
  return <div className={`status ${status.type}`}>{status.message}</div>;
}
