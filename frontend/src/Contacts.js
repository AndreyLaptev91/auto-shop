import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import { Row, Col, ListGroup } from "react-bootstrap";
import {
  AiFillPhone,
  AiFillMail,
  AiFillInstagram,
  AiFillBank,
} from "react-icons/ai";

const mapState = { center: [51.65516, 46.025818], zoom: 18 };

class MapBasics extends React.Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { showMap } = this.state;

    return (
      <div>
        <div>
          <Row>
            <Col xs="4">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <AiFillPhone />
                  +7 7350 1505
                </ListGroup.Item>
                <ListGroup.Item>
                  <AiFillMail /> @proday_taz
                </ListGroup.Item>
                <ListGroup.Item>
                  <AiFillInstagram /> @proday_taz
                </ListGroup.Item>
                <ListGroup.Item>
                  <AiFillBank /> ул. дачная 6А Зоринский, Россия
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs="8">
              <YMaps>
                <div id="map-basics">
                  {showMap && (
                    <Map width="400px" height="400px" state={mapState} />
                  )}
                </div>
              </YMaps>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MapBasics;
