/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function PressPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us-page");
    return function cleanup() {
      document.body.classList.remove("about-us-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="main">
        <div className="section section-dark text-center"
        >
          <Container>
            <h2 className="title">WAVY PRESS</h2>
            <Row>
            <Col className="ml-auto mr-auto" md="4">
                <Card className="card-register ml-auto mr-auto">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/mate-profile-pic.jpg")}
                      />
                    </a>
                  </div>
              <CardBody> 
              <div className="author">
                        <CardTitle tag="h4">Author: Matka</CardTitle>
                      </div>
                <h4 className="title mx-auto">What is Lorem Ipsum?</h4>                  
                <Form className="content">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</h6>
                </Form>
                <Button block className="btn-round" color="danger">
                    Read More
                  </Button>
                </CardBody>
                </Card>
              </Col>

              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-register ml-auto mr-auto">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/mate-profile-pic.jpg")}
                      />
                    </a>
                  </div>
              <CardBody> 
              <div className="author">
                        <CardTitle tag="h4">Author: Matka</CardTitle>
                      </div>
                <h4 className="title mx-auto">What is Lorem Ipsum?</h4>                  
                <Form className="content">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</h6>
                </Form>
                <Button block className="btn-round" color="danger">
                    Read More
                  </Button>
                </CardBody>
                </Card>
              </Col>

                <Col className="ml-auto mr-auto" md="4">
                <Card className="card-register ml-auto mr-auto">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/mate-profile-pic.jpg")}
                      />
                    </a>
                  </div>
              <CardBody> 
              <div className="author">
                        <CardTitle tag="h4">Author: Matka</CardTitle>
                      </div>
                <h4 className="title mx-auto">What is Lorem Ipsum?</h4>                  
                <Form className="content">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</h6>
                </Form>
                <Button block className="btn-round" color="danger">
                    Read More
                  </Button>
                </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default PressPage;
