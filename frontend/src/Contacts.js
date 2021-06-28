import React from "react";
import { Carousel } from "react-bootstrap";
import autosalon from "../src/photoauto/autosalon.jpg";
import salonauto from "../src/photoauto/salonauto.jpg";
import auto from "../src/photoauto/auto.jpg";

const Contacts = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-50" src={autosalon} alt="First slide" />
        <Carousel.Caption className="container d-flex justify-content-between">
          <h3>Контакты и адреса</h3>
          <p>Саратов</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={salonauto} alt="First slide" />
        <Carousel.Caption className="container d-flex justify-content-between">
          <h3>Контакты и адреса</h3>
          <p>Саратов</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src={auto} alt="First slide" />
        <Carousel.Caption className="container d-flex justify-content-between">
          <h3 className="container d-flex justify-content-between">
            Контакты и адреса
          </h3>
          <p className="container d-flex justify-content-between">Г. Саратов</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Contacts;
