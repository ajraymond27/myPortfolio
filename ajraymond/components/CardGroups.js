import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from './Cards';

export default function CardGroups(props) {
    return (
        <>
        <h4>{props.tech.class}</h4>

        <CardGroup>
          {props.tech.projects.map((tech) => (
              <Cards project={tech} />
            ))}
        </CardGroup>
      </>
    )
  }