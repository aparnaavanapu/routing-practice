import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css'


const App = () => (
    <div className="bg-container">
        <div className="card-container">
        <BrowserRouter>
           <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
        </div>
    </div>

)
export default App
