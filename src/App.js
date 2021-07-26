import './Styles/App.css';
import Title from './Components/Title';
import Header from './Components/Header';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Projects from './Components/Projects'
import ServiceCards from './Components/ServiceCards'
import { serviceObj } from './Data/serviceData'
import { portfolioObj } from './Data/portfolioItems';
import { titleObj } from './Data/sectionTitle';


function App() {

  const serviceCards = serviceObj.map((card) => <Services src={card.src} title={card.title} text={card.text}/>)
  const titleCards = titleObj.map((card) => <Title title={card.title} text={card.text} />)
  const portfolioCards = portfolioObj.map((card) => <Portfolio src={card.src} title={card.title} text={card.text} />)
    
  return (
    <div className="App-main">
      <Header />
      <div className="section-title">
        {titleCards[0]}
      </div>
      <ServiceCards serviceCards={serviceCards}/>
      <Projects titleCards={titleCards} portfolioCards={portfolioCards}/>
      {titleCards[2]}
      <About />
      {titleCards[3]}
      <Team />
      <Contact />
    </div>
  );
}

export default App;
