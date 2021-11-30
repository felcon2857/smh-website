import React from "react";
import { Container } from "react-bootstrap";

function PageHeader({ page_title, tagline }) {
  return (
    <div className="page-header">
      <Container>
        <h1 className="page-header-title fade-in-bottom">{page_title}</h1>
        <h3 className="page-header-description fade-in-bottom2">{tagline}</h3>
      </Container>
    </div>
  );
}
export default PageHeader;
