import React from "react";

export default function Header() {
  return (
    <header>
      <img
        src="img.jpg"
        alt="3-Tier App Banner"
        style={{
          width: "100%",
          maxWidth: "1280px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
        }}
      />
      <h1>3-Tier Kubernetes Application</h1>
      <p>Frontend + Node.js + MongoDB on AWS EKS</p>
      <h2>Design and Developed by HarishNShetty</h2>
    </header>
  );
}
