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
                <td></td>
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

    componentDidMount() {
        this.fetchTasks();
    }

    render() {
        const tableBody = this.getTableBody();
        return (
            <div className="table-body-container">
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
                <button className="primary" onClick={this.addNewTask}>Add a new row</button>
            </div>
        );
    }
}

export default TableBody;
