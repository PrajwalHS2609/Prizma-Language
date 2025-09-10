import React from "react";
import "./ThankYou.css";
import Link from "next/link";

const words = [
  "Merci", "Gracias", "Danke", "Arigato", "Obrigado",
  "Grazie", "Kiitos", "Asante", "Spasibo", "Welalin",
  "Multumesc", "Matondo", "Chokran", "Terima Kasih", "Salamat",
  "Mahalo", "Matur Nuwun", "Dank Je", "Vunaka", "Kia Ora"
];

const ThankYou = () => {
  return (
    <div className="thankyou-wrapper">
      <div className="wordcloud">
        {words.map((word, i) => (
          <span key={i} className="word">{word}</span>
        ))}
        <h1 className="thankyou-main">THANK YOU</h1>
      </div>

      <div className="thankyou-actions">
        <Link href="/">
          <button className="btn-primary">Go to Home</button>
        </Link>
        <Link href="/courses">
          <button className="btn-outline">Explore Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
