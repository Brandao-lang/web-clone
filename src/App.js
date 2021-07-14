import './App.css';
import Title from './Title';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Contact from './Contact';



let serviceObj = [
  {src:"https://static.thenounproject.com/png/1074958-200.png", title: "E-Commerce", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
  {src:"https://image.flaticon.com/icons/png/512/22/22914.png", title: "Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
  {src:"https://icon-library.com/images/lock-icon-png/lock-icon-png-22.jpg", title: "Web Security", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}]

let titleObj = [
  {title: "SERVICES", text:"Lorem ipsum dolor sit amet consectetur."},{title: "PORTFOLIO", text: "Lorem ipsum dolor sit amet consectetur."},{title: "ABOUT", text:"Lorem ipsum dolor sit amet consectetur."},{title: "OUR AMAZING TEAM", text: "Lorem ipsum dolor sit amet consectetur."}
]

let portfolioObj = [
  {src:"https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/us/1920/kv/kv-2.png", title:"Threads", text:"Illustration"},
  {src:"https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80", title:"Explore", text:"Graphic Design"},
  {src:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/06/1024/512/TESLA-LOGO.jpg?ve=1&tl=1", title:"Finish", text:"Identity"},
  {src:"https://www.inma.org/files/images/blogs/feature_photos/Oct16_Ideas-Buytaert-1800.jpg", title:"Lines", text:"Branding"},
  {src:"https://c1.wallpaperflare.com/preview/329/721/231/lights-rainbow-laptop-macbook.jpg", title:"Southwest", text:"Website Design"},
  {src:"https://i.guim.co.uk/img/media/fc10a8f855fdb8944331d7463c8220143c6222ae/0_353_5400_3240/master/5400.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=ef13a289ecd1b554b5bd6f6da2c7824b", title:"Window", text:"Photography"}
]



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
      <div className="cards">
        {serviceCards}
      </div>
     <div className="portfolio-section">
     <div className="section-title">
        {titleCards[1]}
        </div>
      <div className="p-cards">
        {portfolioCards}
      </div>
      </div> 
      {titleCards[2]}
      <About />
      {titleCards[3]}
      <Team />
      <Contact />
    </div>
  );
}

export default App;
