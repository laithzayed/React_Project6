
import { Component } from 'react';
import OurTeam from './ourTeam';
import '../style/ourTeam.css';

class ourTeamList extends Component {
  render() {
    return (
      <div className="container-list" style={{ backgroundImage: " url('../images/bg-card.png')" }}>
        <h2 className="section-title">Our-Team</h2>
        <div className="cantainer">
          <OurTeam img="./images/dania.jfif" name="Dania" job="Scrum Master from moon" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
          <OurTeam img="./images/aseel.png" name="Aseel" job="Developer-from-mars" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
          <OurTeam img="./images/kawther.jfif" name="Kawther" job="الدَعْوَةٌ إلى اللَّه" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />

          <OurTeam img="./images/laith.jfif" name="Laith Zayed" job="Devloper-from-venus" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />

          <OurTeam img="https://avatars.githubusercontent.com/u/71829355?s=400&u=ab772fb234f2673202a3e736fd5f7b62c8764e67&v=4" name="Jacoub" job="from-anonther-planet" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />

          <OurTeam img="https://i.insider.com/5e32f2a324306a19834af322?width=700" name="Yoda-Alenooz" job="Fighting Darth Vader" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
        </div>
      </div >
    );
  }
}

export default ourTeamList;
