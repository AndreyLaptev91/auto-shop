import React from "react";
import { Carousel } from "react-bootstrap";
import autosalon from "../src/photoauto/autosalon.jpg";
import salonauto from "../src/photoauto/salonauto.jpg";
import auto from "../src/photoauto/auto.jpg";

const Main = () => {
  return (
    <Carousel className="py-1 d-flex">
      <Carousel.Item>
        <img
          className="d-block w-100 h-200"
          src={autosalon}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Полная предпродажная подготовка!!!</h2>
          <p>Саратов</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-80" src={salonauto} alt="First slide" />
        <Carousel.Caption>
          <h1>Юридическая чистота сделки!</h1>
          <p>Саратов</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-80" src={auto} alt="First slide" />
        <Carousel.Caption>
          <h1>Пост гарантийное обслуживание!</h1>
          <p>Саратов</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Main;
