import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { isVisible } from "@testing-library/user-event/dist/utils";



export const Projects = () => {

    const Projects = [
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
    ];
  
    return (
      <section className="Projects" id="Projects">
        <Container>
          <Row>
            <Col size={12}>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>a section to showcase my work wich in the future there will be a pop up expansion add in to it to show more details of the project.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            Projects.map((Projects, index) => {
                              return (
                                <ProjectCards
                                  key={index}
                                  {...Projects}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>this page has not been filled up yet</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>this page has not been filled up yet</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>this page has not been filled up yet</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
  }
  