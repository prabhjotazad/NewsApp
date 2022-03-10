import React, { Component } from 'react'

export default class NewsItem extends Component {
    
  render() {
      let {title, desc, imageUrl, btnReadMore, btnUrl} = this.props;
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={imageUrl?imageUrl:'https://icdn.digitaltrends.com/image/digitaltrends/streaming-services-during-coronavirus-pandemic.jpg'} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={btnUrl} className="btn btn-sm btn-primary" target={'_blank'}>{btnReadMore}</a>
        </div>
      </div>
    )
  }
}
