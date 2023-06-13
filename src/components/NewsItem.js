import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
            <div className="card my-3" >
<div>
  <span className="badge rounded-pill bg-warning" 
  style={{display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
          }}>{source} </span>
  </div>
  
        <img src={!imageUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH76uwv2y3PFV2fO4qxdtkDZD5Ev1T8KDRxA&usqp=CAU':imageUrl}className="card-img-top" alt="..."/>
        <div className="card-body" >
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-danger'>By {!author?'Unkown':author} on {new Date(date).toUTCString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more..</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
