import React from "react"
import Card from "react-bootstrap/Card"
import Joker from '../public/Joker.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}> 
        <Card.Img variant="top" src={Joker} />
        <Card.Body>
            <Card.Title>Wade Graves</Card.Title>
            <Card.Text>
            I am from Wisconsin and I like football.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard