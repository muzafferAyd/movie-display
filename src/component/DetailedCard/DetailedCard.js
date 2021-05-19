import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import Trailer from "../../modal/Trailer";

export default function DetailedCard({
  movieDetails,
  posterImg,
  backdropImg,
  videoKey,
}) {
  const styles = {
    card: {
      borderRadius: 55,
      padding: "3rem",
      width: "35rem",
      margin: "auto",
    },
    cardImage: {
      height: "100%",
      objectFit: "cover",
      borderRadius: 55,
      width: "25rem",
      margin: "auto",
    },
  };

  return (
    <Card style={styles.card}>
      <Card.Img
        variant="bottom"
        src={posterImg}
        alt="Movie-poster"
        style={styles.cardImage}
      />
      <Card.Body>
        <Card.Title>{movieDetails?.title}</Card.Title>
        <Card.Text>{movieDetails?.overview}</Card.Text>
        <Trailer movieTitle={movieDetails.title} videoKey={videoKey} />
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Rating : {movieDetails?.vote_average}</ListGroupItem>
        <ListGroupItem>
          Release Date : {movieDetails?.release_date}
        </ListGroupItem>
        <ListGroupItem>Tag : {movieDetails?.tagline}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Img variant="top" src={backdropImg} alt="Backdrop-poster" />
      </Card.Body>
    </Card>
  );
}
