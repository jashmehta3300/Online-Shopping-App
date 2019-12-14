import React from "react";
import HeaderComponent from "./HeaderComponent";
import ProductComponent from "./ProductComponent";
import TableComponent from "./TableComponent";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <div>
      <HeaderComponent />
      <Container>
        <br />
        <Row>
          <ProductComponent />
        </Row>
        <br />
        <Row>
          <TableComponent />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
