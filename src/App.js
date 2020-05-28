import React, {Component} from 'react';
import TodoItem from "./components/TodoItem";

export default class App extends Component{
    render(){
        return(
            <section>
              <h2>Todo List</h2>
              <TodoItem/>
            </section>
        )
    }
}