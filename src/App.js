import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css"
import {v1 as uuid} from 'uuid';

export default class App extends Component{

    state = {
        items:[],
        id:uuid(),
        item:'',
        editItem: false
    }

    handleChange = (e) =>{
        this.setState({
            item:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const newItem = {
            id:this.state.id,
            title:this.state.item
        }
        const updateItems = [...this.state.items,newItem]
        this.setState(
            {items:updateItems, item:'', id:uuid(),editItem:false
            }
            )
    }

    handleClear = () =>{
        this.setState({
            items:[],
        })
    }

    handleDelete = (id) =>{
        const filteredItem = this.state.items.filter((item) => item.id !== id)
        this.setState({items:filteredItem})
    }

    handleEdit = (id) =>{
        const filteredItem = this.state.items.filter((item) => item.id !== id)
        const selectedItem = this.state.items.find(item=>item.id === id)
        this.setState({
            items: filteredItem,
            item:selectedItem.title,
            id:id,
            editItem: true
        })
    }

    render(){



        return(
            <div className="container">
                <div className="row">
                    {/*get todo things from input, distribute todo things to todo list*/}
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">Todo Input</h3>
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleEdit={this.handleEdit}
                            editItem={this.state.editItem}
                            handleSubmit={this.handleSubmit}/>

                        <TodoList
                            items={this.state.items}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            handleClear={this.handleClear}/>
                    </div>
                </div>
            </div>
        )
    }
}