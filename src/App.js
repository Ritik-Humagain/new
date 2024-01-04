
import './App.css';
import Block from './Block';
import "bootstrap/dist/css/bootstrap.css";  

function App() {
  return (
    <div className="container">
                <Block member={1} name="Ritik Humagain" address="Balaju" contact={9840027049} image="ritik.png" />
                <Block member={2} name="Barnnita Shrestha" address="Bhaisipati" contact={9843241836} image="barnn.png" />
                <Block member={3} name="Monkey D Luffy" address="Kumamoto City" contact={44545454545} image="luffy.png" />
                <Block member={4} name="Roronoa Zoro" address="Balaju" contact={5566556655} image="zoro.png" />
                </div>
                );
}

export default App;

