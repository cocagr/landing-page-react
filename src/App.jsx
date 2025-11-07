import Card from './componentes/Card.jsx'
import CardList from "./componentes/CardList";
import Navbar from './componentes/Navbar.jsx'
import Jumbotron from './componentes/Jumbotron'
import Footer from './componentes/Footer.jsx'

function App() {
  return (
    <div className="page">
      <header className="head">
        <Navbar />
      </header>
      <div className="body d-flex flex-column m-5">
        <div className="jumbotron">
          <Jumbotron />
        </div>
        <CardList />
      </div>
      <footer className="foot">
        <Footer />
      </footer>
    </div>
  )
}

export default App
