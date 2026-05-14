import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_FAVORITES } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => {
    return state.userPreferences.favorites;
  });
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Button
          onClick={() => {
            dispatch(ADD_TO_FAVORITES(data.company_name));
          }}
          disabled={favorites?.some(
            (favorite) => favorite === data.company_name,
          )}
        >
          Add to Favorites
        </Button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};
export default Job;
