import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import Trailer from "../../modal/Trailer";

export default function DetailedCard({
  movieDetails,
  posterImg,
  backdropImg,
  videoKey,
}) {
  return (
    <Card
      style={{
        borderRadius: "1rem",
        width: "40rem",
        margin: "auto",
        padding: "2rem",
      }}
    >
      <Card.Img
        variant="bottom"
        src={posterImg}
        alt="Movie-poster"
        style={{
          borderRadius: "1rem",
          width: "25rem",
          margin: "auto",
          height: "25rem",
        }}
      />
      <Card.Body>
        <Card.Title>{movieDetails?.title}</Card.Title>

        <Card.Text>{movieDetails?.overview}</Card.Text>

        <Trailer movieTitle={movieDetails.title} videoKey={videoKey} />
      </Card.Body>
      <ListGroup
        style={{ width: "25rem", float: "right" }}
        className="list-group-flush"
      >
        <ListGroupItem>Rating: {movieDetails?.vote_average}</ListGroupItem>
        <ListGroupItem>
          Release Date: {movieDetails?.release_date}
        </ListGroupItem>
        <ListGroupItem>Tag: {movieDetails?.tagline}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Img variant="top" src={backdropImg} alt="Backdrop-poster" />
      </Card.Body>
    </Card>
  );
}
