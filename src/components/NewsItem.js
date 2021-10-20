import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div>
                <div className="card">
                    <div style={{display:'flex', justifyContent: 'flex-end'}}>
                    <span className="position-absolute top-0 badge rounded bg-danger" >{source}</span>
                    </div>
                <img src={!imageUrl?"https://media.istockphoto.com/vectors/no-photo-available-or-missing-image-vector-id499642119":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
