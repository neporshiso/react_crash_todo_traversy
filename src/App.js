import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About"
import Header from "./components/layout/Header";
import uuid from "uuid";
import "./App.css";

class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: "Take out the trash",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "Dinner with girlfriend",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "Meeting with team",
                completed: false
            }
        ]
    };

    // Toggle Complete
    toggleComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    // Delete Todo
    delTodo = id => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    };

    // Add Todo
    addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos
                                    todos={this.state.todos}
                                    toggleComplete={this.toggleComplete}
                                    delTodo={this.delTodo}
                                />
                            </>
                        )} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
