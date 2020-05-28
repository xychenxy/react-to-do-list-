import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from 'uuid';

export default class App extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <TodoInput/>
                        <TodoList/>
                        <div className="col-4 bg-warning">1</div>
                        <div className="col-4 bg-danger">2</div>
                        <div className="col-4 bg-warning">3</div>
                    </div>
                </div>
            </div>
        )
    }
}