// In this project I have used components of the app in different js files, which are rendered accordinly.
import axios from "axios";

export default class API {
    constructor() {
        this.axios = axios.create({
            baseURL: "https://assignment02-101331806-deploy.herokuapp.com/api/emp",
            timeout: 1000,
            headers: {"Acsess-Control-Allow-Origin": "*"}
        });
    }

    getEmployees() {
        return this.axios.get("/employees");
    }

    getEmployeeById(id) {
        return this.axios.get(`/employees/:${id}`);
    }
}