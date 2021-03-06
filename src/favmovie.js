import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container  } from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {useDispatch} from "react-redux";
import { delFromCart } from "./store/action";

const FavMovie = (props) => {



    const cartt = props.cart
    const dispatch = useDispatch();
    function delFav(cart){
        dispatch(delFromCart(cart))
    }
  return (
      <>

      <h1>FAV MOVIE</h1>
      <Container>
      <Row xs={1} md={3} className="g-4">
          {cartt.map((cartId , index) => {
              return (
             
                  
              <Col key={index}> 
              <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${cartId.poster_path}`} />
                <Card.Body>
                  <Card.Title>{cartId.title}</Card.Title>
                  <Card.Text>
                    <Link  to={`/film/${cartId.id}`}>Show details</Link> 
                    <button type="button" className="btn btn-dark"  onClick={()=> delFav(cartId)} >delete</button>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
                  
              );
          })}
      </Row>
      </Container>
      </>
  );


  


};

function mapStateToProps(state){
    return {
        cart: state.cart
    }
 }

export default connect(mapStateToProps)(FavMovie);
