import React, {Component, PureComponent} from 'react';
import TodoItem from "./TodoItem";
import ShowRatio from './ShowRatio'


class TodoList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: [],
            done: [],
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.doneTodo = this.doneTodo.bind(this)
    }

    // componentDidMount() {
    //     fetch('./json/todo.json')
    //         .then(response => {
    //             console.log(response)
    //             return response.json()
    //         })
    //         .then(response => {
    //             console.log(response)
    //             this.setState({list: response})
    //         })
    // }

     loadHarryTodo() {
         fetch('/json/todo.json').then(response => {
             return response.json()
         }).then(res =>{
             this.setState({list: res})
         })
    }

    loadFarbodTodo() {
        fetch('/json/todo_farbod.json').then(response => {
            return response.json()
        }).then(res =>{
            this.setState({list: res})
        })
    }

    componentDidMount(){
        this.loadHarryTodo()
    }

    componentDidUpdate(prevProps, prevState){
        let currentUser = this.props.user;
        if(currentUser !== prevProps.user){
            if (currentUser === "1") {
                this.setState({done: []}, () => this.loadHarryTodo())
            } else {
                this.setState({done: []}, () => this.loadFarbodTodo())
            }
        }
    }

    addTodo() {
        console.log(this)
        this.setState({list: [{ "id": this.state.length, "todo": this.state.value}, ...this.state.list], value: ' '})
    }

    removeTodo(todo) {
        let list = this.state.list.filter(l => l.todo !== todo.todo)
        this.setState({list: list})
    }

    doneTodo(todo) {
        this.removeTodo(todo)
        this.setState({done: [todo, ...this.state.done]})
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.value} onChange={e => {
                        this.setState({value: e.target.value})
                    }}/>
                    <button onClick={this.addTodo}>add</button>
                </div>
                <ul>
                    {this.state.list.map((item, i) => <TodoItem
                        key={item.id}
                        index={i + 1}
                        title={item.todo}
                        remove={() => this.removeTodo(item)}
                        doneTodo={() => this.doneTodo(item)}
                    />)}
                </ul>
                <h3> Done Tasks</h3>
                <ul>
                    {this.state.done.map(d => <li key={d.id}>{d.todo}</li>)}
                </ul>
                <ShowRatio 
                doneWork= {this.state.done.length}
                remainWork= {this.state.list.length}
                />
            </div>
        )
    }
}

export default TodoList