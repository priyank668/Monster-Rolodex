
import { Component } from "react";
import "./card-list.style.css"


class CardList extends Component{
  render(){
    console.log("render")
    const {monsters} = this.props ; 

  return(  
    <div className="card-list" >
   {monsters.map(monster=>{
    const {name , email , id}  = monster;
    return (<div className="card-container" key={id}>
      <img  src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      </div>)
   })}
    </div>
  )


  }




}

export default CardList;