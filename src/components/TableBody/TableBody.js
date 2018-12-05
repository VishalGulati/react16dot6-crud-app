import React, { Component } from 'react';
import './TableBody.css';
import { API } from '../../axios/AxiosLauncher';

const sampleData = {
    "fields": {
        "title": {
            "stringValue": "task2"
        },
        "description": {
            "stringValue": "Vishal - My second task"
        }
    }
};

class TableBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: null
        }
    }

    fetchTasks = () => {
        API.get()
            .then(res => {
                this.setState({
                    tasks: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    getTableBody = () => {
        const { tasks } = { ...this.state };
        return tasks ? tasks.documents.map((task, index) => {
            return (<tr key={index}>
                <td>{task.fields.title.stringValue}</td>
                <td>{task.fields.description.stringValue}</td>
                <td>
                    <button className="btn btn-danger delete-btn" onClick={() => this.deleteTask(task.name)}>
                        <span className="glyphicon glyphicon-trash"></span> Delete
                    </button>
                    <button className="btn btn-primary"><span className="glyphicon glyphicon-edit"></span> Update</button>
                </td>
            </tr>)
        }) : '';
    }

    addNewTask = () => {
        API.post('', sampleData)
            .then(res => {
                this.fetchTasks();
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteTask = (name) => {
        const taskId = name.split('/').pop();
        API.delete(`/${taskId}`)
            .then(res => {
                this.fetchTasks();
            })
            .catch(error => {
                console.log(error);
            });
    }


    updateTask = () => {
        API.post('', sampleData)
            .then(res => {
                this.fetchTasks();
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.fetchTasks();
    }

    render() {
        const tableBody = this.getTableBody();
        return (
            tableBody ? <div className="table-body-container">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
                <button className="btn btn-primary newrow-btn" onClick={this.addNewTask}>Add a new row</button>
            </div> : ''
        );
    }
}

export default TableBody;
