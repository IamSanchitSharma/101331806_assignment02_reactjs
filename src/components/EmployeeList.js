import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import API from './API';
import EmployeeDetails from './EmployeeDetails';
import {Button, Table } from "react-bootstrap";

export default class EmployeeList extends Component {
    
    constructor(props) {
        
        super(props);
        this.API = new API();

        this.state = {
            employees: []
        }
        }

        componentDidMount (){
            this.API.getEmployees().then((response) => {
                this.setState({employees: response.data});
                console.log(response.data);
            });
        }

        // Getting employee using their id
        getEmployeeDataByID = (id) => {
            axios.get(`https://assignment02-101331806-deploy.herokuapp.com/api/emp/employees/${id}`)
            .then(res =>{
                console.log(res.data)
            })
        }

            // Deleting employee using their id
        deleteEmployeeDataByID = (id) => {
            axios.delete(`https://assignment02-101331806-deploy.herokuapp.com/api/emp/employees/${id}`)
            .then(res =>  { 
                console.log(res.data+" The " +id + " has been deleted");
                let emp = this.state.employees.filter(employees => {
                    return employees.id !== id
                })
                this.setState({...this.state, employees: emp})
                alert("The " +id + " has been deleted");
                window.location.assign("/employees");
            });
        }
        
        render() {
            return (
                    <div>
                        <h1 className='text-center' style={{marginTop:"40px",marginBottom:"50px"}}>Employees</h1>
                        <div className="container">
                            <div style={{marginTop:"20px", marginBottom:"20px"}} className="row">
                                <div className="card col-md-3" style={{marginBottom:"20px"}} >
                                    <Link to={"/add-employees"} className="btn btn-success" style={{color:"white",fontSize:"20px"}}>Add Employee</Link>
                                </div>
                                <div>
                                    <Table striped border={true.toString()} hover>
                                        <thead className="bg-opacity-25 bg-dark">
                                            <tr style={{fontSize:"22px", textAlign:"center"}}>
                                                <th className="big-info" scope="col">#Employee ID</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Email Id</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        this.state.employees.map((emp) => (
                                        <tr key={emp.id} style={{textAlign:"center", fontSize:"20px", fontFamily:"sans-serif"}}>
                                            <EmployeeDetails emp={emp} />
                                        
                                            <td style={{padding:"8px",}}>

                                            <Link style={{marginRight:"8px"}} to={`update-employees/${emp._id}`}>
                                                <Button onClick={(e) => this.getEmployeeDataByID(emp._id)} className="btn btn-success">Update</Button>
                                            </Link>

                                            <Link style={{marginRight:"8px"}} to={`delete-employees/${emp._id}`}>
                                                <Button onClick={(e) => this.deleteEmployeeDataByID(emp._id)} className="btn-danger">Delete</Button>
                                            </Link>

                                            <Link to={`view-employees/${emp._id}`}>
                                                <Button className="btn-primary">View</Button>
                                            </Link>
                                            
                                            </td>

                                        </tr>
                                    ))
                                    } 
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    }
