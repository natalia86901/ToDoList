import { Component } from "react";
import image from './circle.png';

export class List extends Component {
  state = {
  userInput: "",
  list: [ ]
  }

  onChangeEvent(e) {
    this.setState({userInput: e}) 
}
addItem(input) {
    if (input === "") {
        alert('Please enter an item')
    }
    else {
    let listArray = this.state.list;
    listArray.push(input)
    this.setState({list: listArray, userInput: ''})
}

}

crossWord(event) {
   const li = event.target;
   li.classList.toggle('crossed');
}

deleteItem() {
  let listArray = this.state.list;
  listArray = [];
  this.setState({list: listArray})
}
onSubmitForm(e) {
    e.preventDefault();
}

  render() {
    return(
        <div>
            <form onSubmit={this.onSubmitForm}>
        <div className="container">
        <input onChange={(e) => {this.onChangeEvent(e.target.value)}} type='text' placeholder="Enter your task"
        value={this.state.userInput}/>
        </div>
        <div className="container">
            <button className = "Add" onClick={()=> this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.List.map((item, index) => (
                    <li onClick={this.crossWord} key={index}><img src={image} width="30px" alt="check"/>
                    {item}</li>
                ))}
            </ul>
            <div className="container">
                <button className = "Delete" onClick={() => {this.deleteItem()}}>Delete</button>
            </div>
            </form>
        </div>
    
    )
  }
}
