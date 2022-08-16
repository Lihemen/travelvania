import React from "react";

import "./footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="bm">
      <p>
        Built with &hearts; Hemense Lan | Copyright &copy;{" "}
        {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

