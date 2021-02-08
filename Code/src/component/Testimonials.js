import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../style/Testimonials.css';
export default class Testimonials extends Component {
  render() {
    return (
      <div className="testa-container" style={{ backgroundImage: " url('../images/bg-testamonial.png')" }}>
        <div className="testamonial-container" >
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            <div style={{ backgroundImage: " url('../images/bg-testamonial.png')" }} >
              <img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.0-9/121006590_175679957485188_2787551705850175421_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=lfwwG7kLvxQAX8k6dGl&_nc_oc=AQn2ufTD4rFhVK6LJyJ4LhVSQIQ1xSHNHMaJVv68pu0akQieXyYEhNenRK3-VmtPXvc&_nc_ht=scontent.famm10-1.fna&oh=08d22e885c40ab9eeecf63ac5210f177&oe=60430371" />
              <div className="myCarousel">
                <h3>Al Enooz Laith </h3>
                <h4>Web Developer </h4>
                <p>
                  Lit 🔥
                 </p>
              </div>
            </div>

            <div style={{ backgroundImage: " url('../images/bg-testamonial.png')" }}>
              <img src="https://media-exp1.licdn.com/dms/image/C5635AQEzN0U_59Ab9w/profile-framedphoto-shrink_800_800/0/1612030491853?e=1612753200&v=beta&t=C_I_SjsOjoUqOrHUgsX-TJ0QNhcoC8-xBOPjrQqI1DM" />
              <div className="myCarousel">
                <h3>Lana Mustafa</h3>
                <h4>Back-end Web Developer</h4>
                <p>
                  Mars is
                 </p>
              </div>
            </div>

            <div style={{ backgroundImage: " url('../images/bg-testamonial.png')" }}>
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGe4_04wqmMoQ/profile-displayphoto-shrink_800_800/0/1586190073338?e=1618444800&v=beta&t=BeWUlDUY6K6z7wsJLmMj5-FQU7Tsci3jtvop7zjuGH4" />
              <div className="myCarousel">
                <h3>Khadeejah Hamdan</h3>
                <h4>Expert Lead Trainer @ Coding Academy by Orange</h4>
                <p>
                  Always working out of enthusiasm and the urge to make a difference.
            </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}