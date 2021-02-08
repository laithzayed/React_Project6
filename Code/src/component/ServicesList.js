import React, { Component } from 'react'
import Services from './Services'
// import Loading from './Loading'
// import { useGlobalContext } from '../context'



export default class ServicesList extends Component {

  constructor(props) {
    super(props);
    this.state = {

      services: [
        {
          id: '1'
          , img: 'https://cdn.pixabay.com/photo/2020/09/06/22/11/neptune-5550216__340.jpg', name: "Venus",
          price: "80,0000$", date: "1/1/2025"
        },

        {
          id: '2',
          img: 'https://cdn.pixabay.com/photo/2017/02/10/15/57/full-moon-2055469__340.jpg', name: "Mercury",
          price: "100,0000$", date: "1/2/2026"
        },

        {
          id: '3', img: 'https://cdn.pixabay.com/photo/2020/12/28/17/08/earth-is-5867917_1280.jpg', name: "Earth",
          price: "5$", date: "1/3/2027"
        },

        {
          id: '4', img: 'https://cdn.pixabay.com/photo/2021/01/07/21/23/mars-5898494_1280.jpg', name: "Mars",
          price: "100,0000$", date: "1/4/2028"
        },

        { id: '5', img: 'https://cdn.pixabay.com/photo/2018/03/08/20/01/astronomy-3209688__340.jpg', name: "Jupiter", price: "150,0000$", date: "1/5/2029" },

        { id: '6', img: 'https://cdn.pixabay.com/photo/2015/11/01/22/27/asteroids-1017666_1280.jpg', name: "Venus", price: "200,0000$", date: "1/6/2030" }
      ]
    }

  }


  bookHandler = (index) => {
    // const Persons = this.state.Persons;
    // console.log(this.state.services[index]);
    if (!localStorage.getItem("loggeduser")) {
      alert("Please Register To make a book")
    }
    else {
      let booking = [];
      let book = this.state.services[index];
      if (!localStorage.getItem("booking")) {
        booking.push(book)
        localStorage.setItem("booking", JSON.stringify(booking));
      } else {
        // Storing form data in LocalStorage
        let storedUsers = JSON.parse(localStorage.getItem("booking"));
        const newbooking = [...storedUsers, book];
        localStorage.setItem("booking", JSON.stringify(newbooking));
      }
    }


  }





  render() {
    return (
      <section className='section' style={{ backgroundImage: " url('../images/bg-card.png')" }}>
        <h2 className='section-title'>services</h2>
        <div className='cocktails-center'>

          {this.state.services.map((services, index) => {
            return <Services book={() => this.bookHandler(index)} img={services.img} name={services.name} price={services.price} date={services.date} />
          })}
        </div>
      </section>
    )
  }
}


