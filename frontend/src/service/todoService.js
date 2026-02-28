import api from "../api/api";

function getErrorMessage(err) {
    const errorMessages = Object.entries(err.response.data).map(([key, value]) => `${key}- ${value}`);
    const errorMsg = errorMessages.join(',');
    return errorMsg;
}

const getAllTodos = async () => {
    try {
        const response = await api.get('/todos');
        return response.data.todos;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

const createTodo = async (title) => {
    try {
        const response = await api.post('/todo', {
            title,
            completed: false
        });

        return response.data;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

const deleteTodo = async (id) => {
    try {
        const response = await api.delete(`/todo/${id}`);
        
        return response.data;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

const updateTodo = async (id, updateData) => {
    try {
        const response = await api.put(`/todo/${id}`,updateData);
        
        return response.data;
    } catch (error) {
        throw new Error(getErrorMessage(error)); 
    }
};

const todoService = {
    getAllTodos,
    createTodo,
    deleteTodo,
    updateTodo
};

export default todoService;