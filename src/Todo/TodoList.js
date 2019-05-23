import React, {Component} from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }
    onChange(event) {
        this.setState({
            userInput: event.target.value
        }, () => console.log(this.state.userInput));
    }
    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        }, () => console.log(this.state))
    }
    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }
    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item} className='list-group-item'>
                    {item}  <button className='delete-btn' onClick={this.deleteTodo.bind(this)}>Удалить!</button>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <form>
                    <input
                        className="input-group"
                        value={this.state.userInput}
                        type="text"
                        placeholder="Добавить задачу"
                        onChange={this.onChange.bind(this)}
                    />
                    <button className="btn btn-danger btn-lg btn-block" onClick={this.addTodo.bind(this)}>Добавить</button>
                </form>
                <div className='list-group'>
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

export default TodoList;