import axios from "axios";

export default {
    getCategories: () =>   
        axios.get('http://127.0.0.1:8000/api/categories'),
    getOneCategory: (id) =>
        axios.get('http://127.0.0.1:8000/api/categories/'+id),
    addCategory: (category) =>
        axios.post('http://127.0.0.1:8000/api/categories/', category),
    updateCategory: (category, id) =>
        axios.put('http://127.0.0.1:8000/api/categories/'+id, category),
    deleteCategory: (id) =>
        axios.delete('http://127.0.0.1:8000/api/categories/'+id),
}