import React from 'react'
import './News.css'
import { Card, Container } from 'react-bootstrap'
import { MdKeyboardArrowRight } from 'react-icons/md'
function News() {
    const news = [
        {id:1,title:'News, Blog & Articles',description:'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!',last:'Read Full Articles'},
        {id:2,title:'News, Blog & Articles',description:'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!',last:'Read Full Articles'},
        {id:3,title:'News, Blog & Articles',description:'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!',last:'Read Full Articles'},
        {id:4,title:'News, Blog & Articles',description:'Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!',last:'Read Full Articles'},
    ]
  return (
    <div>
    <div className='news'>
    <Container>
    <div className='news-info'>
    <div className='news-head'>
    <h1>News, Blog & Articles</h1>
    <p>Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!</p>
    </div>
    <div className='news-article'>
    <div className='news-article-div'>
    {news.map((e)=>(
    <Card  key={e.id} className='news-card' >
              <Card.Img variant="top" className='news-card-img'  />
              <Card.Body>
                <Card.Title className='news-card-title'>{e.title}</Card.Title>
                
                <Card.Text className='news-card-texts'>
                 {e.description}
                </Card.Text>
                <Card.Title className="news-card-title">{e.last}</Card.Title>
                <div className="arrow">
                <div className="arrow-line"></div>
                <MdKeyboardArrowRight className="arrow-icon" />
              </div>
              </Card.Body>
            </Card>
            ))}
    </div>
    </div>
    </div>
    </Container>
    </div>
    </div>
  )
}

export default News