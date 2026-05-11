import BookApi from "../api/BookApi.js";

class BookService {
    books = [];

    // Méthode d'ajout d'un livre
    async addBook(book) {
        try {
            // Appel de l'API
            await BookApi.createBook(book);
        }
        // Gestion en cas d'erreur
        catch (e) {
            console.log(e);
            throw Error("Impossible d’ajouter le book", book);
        }
    }

    // Méthode de récupération de tous les livres
    async getAllBooks() {
        try {
            // Appel de l'API
            const apiResponse = await BookApi.getAllBooks();
            // Récupération des données
            this.books = apiResponse.data;
            return this.books;
        }
        // Gestion en cas d'erreur
        catch (e) {
            throw Error("Impossible de récupérer les books");
        }
    }
}

export default new BookService();