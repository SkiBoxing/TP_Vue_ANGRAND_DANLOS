import Axios from "axios";

const axios = Axios.create({});

// URL de base de l'API
const BASE_URL = "/api";

class TaskApi {
    createTask(task) { 
        return axios.post(`${BASE_URL}/tasks`, task);
    };

    getAllTasks(params = {}) { 
        return axios.get(`${BASE_URL}/tasks`, { params });
    };

    getTask(id) { 
        return axios.get(`${BASE_URL}/tasks/${id}`);
    };

    updateTask(id, task) { 
        return axios.put(`${BASE_URL}/tasks/${id}`, task);
    };

    deleteTask(id) { 
        return axios.delete(`${BASE_URL}/tasks/${id}`);
    };
}

export default new TaskApi();