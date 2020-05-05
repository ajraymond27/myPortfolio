import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from './Cards';

export default function CardGroups(props) {
    return (
        <>
        <h4>Data Science</h4>
        <CardGroup>
          <Cards />
        </CardGroup>
      </>
    )
  }