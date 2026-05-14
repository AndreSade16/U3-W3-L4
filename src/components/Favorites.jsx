import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((rs) => rs.userPreferences.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container className="mt-5">
      <Row>
        <h1>Favorites:</h1>
        <Col>
          <ListGroup>
            {favorites.map((fav) => {
              return (
                <ListGroupItem key={fav}>
                  <p
                    onClick={() => navigate("/" + fav)}
                    style={{ cursor: "pointer" }}
                  >
                    {fav}
                  </p>
                  <Button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: fav })
                    }
                  >
                    Delete
                  </Button>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
