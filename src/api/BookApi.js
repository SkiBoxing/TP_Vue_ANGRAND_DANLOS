import Axios from "axios";

const axios = Axios.create({});

// URL de base de l'API
const BASE_URL = "http://localhost:3000";

class BookApi {
    // Méthode de récupération de tous les livres
    getAllBooks() { 
        // Appel de l'API
        return axios.get(`${BASE_URL}/books`);
    };

    // Méthode non implémentée car non-demandée dans l'énoncé
    getBook(id) { };
    deleteBook(id) { };
    updateBook(id) { };

    // Méthode de création d'un livre
    createBook(book) { 
        // Appel de l'API
        return axios.post(`${BASE_URL}/book`, book);
    };
}

export default new BookApi();