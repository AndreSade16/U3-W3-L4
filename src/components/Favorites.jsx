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
import { REMOVE_FROM_FAVORITES } from "../redux/actions";

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
                  <Button onClick={() => dispatch(REMOVE_FROM_FAVORITES(fav))}>
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
