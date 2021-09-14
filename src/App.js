import './Styles/App.css';
import Title from './Components/Title';
import Header from './Components/Header';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Projects from './Components/Projects'
import ServiceCards from './Components/ServiceCards'
import Popup from './Components/Popup';
import { titleObj } from './Data/sectionTitle';

function App() {

 const titleCards = titleObj.map((card) => <Title title={card.title} text={card.text} />)
 
  return (
    <div className="App-main">
      <Popup />
      <Header />
      <div className="section-title">
        {titleCards[0]}
      </div>
      <ServiceCards />
      <Projects titleCards={titleCards} />
      <div className='about-section'>
        {titleCards[2]}
        <About />
      </div>
      <div className='team-section'>
        {titleCards[3]}
        <Team />
      </div>
        <Contact />
      </div>
  );
}

export default App;
