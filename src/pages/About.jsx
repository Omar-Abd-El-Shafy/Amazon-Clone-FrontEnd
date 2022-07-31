import React from 'react';
import { Container } from 'react-bootstrap';
import { about } from '../data';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
console.log(about);
const About = () => {
  return (
    <div style={{ borderRadius: '2rem' }} className={'bg-dark '}>
      {about.map((item) => (
        <Card
          key={item.id}
          style={{ borderRadius: '2rem' }}
          className={'bg-dark text-white  m-4'}
        >
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.describe}</Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={item.img} alt={item.title} />
        </Card>
      ))}
    </div>
  );
};

export default About;
