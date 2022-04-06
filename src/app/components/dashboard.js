import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './player';
import PlayList from './playlist';
const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <div className="player-area">
            <h3 className="title">Play your favourite youtube videos</h3>
            <Player />
          </div>
        </Col>
        <Col lg={6}>
          <div className="playlist-area">
            <h3 className="title">Playlist</h3>
            <PlayList />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
