import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Services.css';

export default class Services extends Component {
  render() {
    return (
      <article className='cocktail'>
        <div className='img-container'>
          <img className="card_image" src={this.props.img} alt={this.props.name} />
        </div>
        <div className='cocktail-footer'>
          <h3 className="card_writing">{this.props.name}</h3>
          <h4 className="card_writing">{this.props.price}</h4>
          <p className="card_writing" >{this.props.date}</p>
          <button onClick={this.props.book} className='Book_btn'> Book Now</button>
        </div>
      </article>
    )
  }
}

