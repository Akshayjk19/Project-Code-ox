import React from "react";
import { Badge, Card, Container } from "react-bootstrap";
import "./FeaturedProduct.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import bulb from '../../../Assets/Essential-GU10 1.png'


function FeaturedProduct() {
    const products = [
        {id:1,img:`${bulb}`,title:"Essential",Price:"AED 85.75 / Piece",description:"Please Login/Register to See the Stock Details"},
        {id:2,img:`${bulb}`,title:"Essential",Price:"AED 85.75 / Piece",description:"Please Login/Register to See the Stock Details"},
        {id:3,img:`${bulb}`,title:"Essential",Price:"AED 85.75 / Piece",description:"Please Login/Register to See the Stock Details"},
        {id:4,img:`${bulb}`,title:"Essential",Price:"AED 85.75 / Piece",description:"Please Login/Register to See the Stock Details"},
        {id:5,img:`${bulb}`,title:"Essential",Price:"AED 85.75 / Piece",description:"Please Login/Register to See the Stock Details"},
        {id:6,img:`${bulb}`,title:"Essential",Price:"AED 85.75 / Piece",description:"Please Login/Register to See the Stock Details"},
    ]
  return (
    <div>
      <div className="featured-product">
        <Container>
          <div className="info">
            <div className="info-texts">
              <div className="info-header">
                {" "}
                <h1>Featured Products</h1>
                <div className="head-div">
                  <h4>View More Featured Product</h4>
                  <div className="arrow">
                    <div className="arrow-line"></div>
                    <MdKeyboardArrowRight className="arrow-icon" />
                  </div>
                </div>
              </div>
              <p>
                Brighten up your space with our featured lighting fixtures! From
                sleek and modern to classic and elegant, we have the perfect
                fixture to match your style. Shop now and see the difference
                good lighting can make!
              </p>
            </div>
            <div className="info-button">
              <button>Indoor</button>
              <button>Outdoor</button>
              <button>Decorative</button>
              <button>Strip & Neon</button>
            </div>
          </div>
          <div className="products">
          {products.map((e)=>(
            
            <Card key={e.id} style={{width:"18rem",background:"#e0e0e0",fontFamily:'"Noto Serif", serif',color:'#454654',border:'none'}}>
            <Badge className="card-badge bg-warning">New</Badge>
              <Card.Img variant="top" src={e.img} alt="bulb" />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Title className="price">{e.Price}</Card.Title>
                <Card.Text>
                 {e.description}
                </Card.Text>
              </Card.Body>
            </Card>
            ))}
          </div>
          </Container>
      </div>
    </div>
  );
}

export default FeaturedProduct;
