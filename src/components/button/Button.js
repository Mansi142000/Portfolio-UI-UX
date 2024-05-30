import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab, download }) {
  return (
    <div className={className}>
      {href ? (
        <a
          className="main-button"
          href={href}
          target={newTab && "_blank"}
          download={download}
        >
          {text}
        </a>
      ) : (
        <button className="main-button">
          {text}
        </button>
      )}
    </div>
  );
}
