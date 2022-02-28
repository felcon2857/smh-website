import React from "react";
import { Container } from "react-bootstrap";

function PageHeader({ page_title, tagline }) {
  const location = window.location.pathname;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "url(/assets" + location + "-bgk.png), #1a66a82f",
        backgroundPosition: "center",
        backgroundRepeat: "none",
        backgroundSize: "cover",
        height: "220px",
      }}
    >
      {/* // <div className="page-header"> */}
      <Container>
        <h1 className="page-header-title fade-in-bottom">{page_title}</h1>
        <h3 className="page-header-description fade-in-bottom2">{tagline}</h3>
      </Container>
    </div>
  );
}
export default PageHeader;
