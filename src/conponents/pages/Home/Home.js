import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FloatingLabel, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MyAccordion from "../../MyAccordion/MyAccordion";
import css from "./Home.module.scss";

const Home = () => {
  const text =
    // eslint-disable-next-line max-len
    "В японской мифологии кошек чаще всего изображали в виде бакэнэко — кошки, наделённой мифическими способностями.";
  // eslint-disable-next-line max-len
  const text2 =
    // eslint-disable-next-line max-len
    "Женщины-кошки также иногда изображаются в виде оборотней, но тем не менее, помогая людям, наделены добрыми качествами. Часто бывают волшебными помощниками героев в мифах и легендах. Как и лисы, девушки-кошки могут быть очень опасны. В человеческом облике демонстрируют сверхчеловеческую гибкость, подвижность и хитрость. Сохраняют кошачью расцветку тела. Также женщины-кошки в японской мифологии — это прекрасные девы, которые могут преобразовываться в кошек, в обмен на свою красоту.";
  return (
    <>
      <div className={`${css.flexMain}`}>
        <div className={`${css.boxColumn_2_2}`}>
          <div className={`${css.box_my}`}>
            <div className={`${css.profile}`}>
              <img src="jenski_portret.jpg" alt="foto"></img>
              <strong>Тимка Моря </strong>
              {" Начинающая дизайнерка "}
              <br />
              <a className="my px-0 mx-2" href="https://vk.com/id204515834">
                <FontAwesomeIcon icon="fa-brands fa-vk" />
              </a>
              <a className="my px-0 mx-2" href="https://vk.com/id204515834">
                <FontAwesomeIcon icon="fa-brands fa-vk" />
              </a>
              <a className="my px-0 mx-2" href="https://vk.com/id204515834">
                <FontAwesomeIcon icon="fa-brands fa-vk" />
              </a>
            </div>
          </div>
          <div className={`${css.box_my_2}`}>
            <MyAccordion title={"Navigation"}>
              <Navbar>
                <Nav style={{ flexDirection: "column" }}>
                  <Nav.Link
                    className="my px-0 mx-2"
                    as={NavLink}
                    to="/Myprofile"
                  >
                    <FontAwesomeIcon icon="fa-regular fa-user" /> My profile
                  </Nav.Link>
                  <Nav.Link className="my px-0 mx-2" as={NavLink} to="/Balance">
                    <FontAwesomeIcon icon="fa-regular fa-user" /> Balance
                  </Nav.Link>
                  <Nav.Link
                    className="my px-0 mx-2"
                    as={NavLink}
                    to="/Connections"
                  >
                    <FontAwesomeIcon icon="fa-regular fa-user" /> Connections
                  </Nav.Link>
                  <Nav.Link className="my px-0 mx-2" as={NavLink} to="/Friends">
                    <FontAwesomeIcon icon="fa-regular fa-user" /> Friends
                  </Nav.Link>
                  <Nav.Link
                    className="my px-0 mx-2"
                    as={NavLink}
                    to="/Connections"
                  >
                    <FontAwesomeIcon icon="fa-regular fa-user" /> Connections
                  </Nav.Link>
                  <Nav.Link
                    className="my px-0 mx-2"
                    as={NavLink}
                    to="/Accountsettings"
                  >
                    <FontAwesomeIcon icon="fa-regular fa-user" /> Account
                    settings
                  </Nav.Link>
                </Nav>
              </Navbar>
            </MyAccordion>
          </div>
          <div className={`${css.box_my_2}`}>
            <MyAccordion title={"Share your thoughts"}>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "300px" }}
                />
              </FloatingLabel>
            </MyAccordion>
          </div>
        </div>
        <div className={`stick ${css.boxColumn_2_1}`}>
          <div className={`${css.box_my_2}`}>
            <MyAccordion title={"Title"} date={"5 minutes"}>
              <img src="image 2022.png" alt="foto"></img>
              <>
                <p>{text}</p>
                <p>{text2}</p>
              </>
            </MyAccordion>
          </div>
          <div className={`${css.box_my_2}`}>
            <MyAccordion title={"Title"}>
              <img src="image 2022.png" alt="foto"></img>
              <>
                <p>{text}</p>
                <p>{text2}</p>
              </>
            </MyAccordion>
          </div>
          <div className={`${css.box_my_2}`}>
            <MyAccordion title={"Title"}>
              <img src="image 2022.png" alt="foto"></img>
              <>
                <p>{text}</p>
                <p>{text2}</p>
              </>
            </MyAccordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
