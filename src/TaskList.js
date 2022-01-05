import { Component } from "react";

export class TaskList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            taskList: []
        }
    }

    onChangeEvent(inputValue) {
        this.setState({userInput: inputValue});
    }

    addItem(input) {
        if (input === "") {
            alert("Please enter a task");
        } else {    
            let listArray = this.state.taskList;
            listArray.push(input);
            this.setState({taskList: listArray, userInput: ""});
        }
    }

    deleteItem(item) {
        let listArray = this.state.taskList.filter(i => (i !== item));
        this.setState({taskList: listArray});
    }

    completed(e) {
        const li = e.target;
        li.classList.toggle("completed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>    
                <div className="container">
                    <input type="text" 
                        className="inputField"
                        placeholder="What do you plan to do" 
                        onChange={(e) => this.onChangeEvent(e.target.value)} 
                        value={this.state.userInput}
                    />
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn">&#10133;</button>
                </div>
                <ul className="taskContainer">
                    {this.state.taskList.map((item, index) => (
                        <li className="added" onClick={this.completed} onDoubleClick={() => this.deleteItem(item)} key={index}>{item}</li>
                    ))}
                </ul>
            </form>    
            </div>
        );
    }
}