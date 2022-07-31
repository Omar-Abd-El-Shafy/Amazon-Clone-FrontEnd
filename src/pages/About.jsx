import React from 'react';
import { about } from '../data';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

import Card from 'react-bootstrap/Card';
console.log(about);
const About = () => {
  return (
    <div style={{ borderRadius: '2rem' }} className={''}>
      <Helmet>
        <title>About Amazon</title>
      </Helmet>
      {about.map((item) => (
        <Card key={item.id} style={{ borderRadius: '2rem' }} className={'m-4'}>
          <Card.Body>
            <Card.Title className='fs-1'>{item.title}</Card.Title>
            <Card.Text>{item.describe}</Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={item.img} alt={item.title} />
        </Card>
      ))}
    </div>
  );
};

export default About;
