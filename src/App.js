import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import Searchbox  from "./components/search-box/search-boxcomponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      newstring: "",
    };
  }

  componentDidMount() {
    // console.log("hello");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        this.setState({ monsters: user });
      });
  }
  handelchange = (event)=>{
    const  newstrings = event.target.value;
      this.setState({newstring:newstrings})
      
    }
    

  render() {
    const{monsters , newstring}=this.state;
    const {handelchange}  = this ;
    const newmonster = monsters.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(newstring.toLocaleLowerCase());
    });

    return (
      <div className="App">
      <h1 className="title-card">MONSTER ROLODEX</h1>
        
        <Searchbox className="monster-search" change ={handelchange} placeholder ={"search monster"}/>

       
        <CardList monsters={newmonster} />

      </div>
    );
  }
}

export default App;
