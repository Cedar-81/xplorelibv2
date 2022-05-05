import booksLib from "./booksLib"

function getBooks(req, res) {
    let data = [];

    if(req.method === "GET") {
        data = booksLib
        res.status(200).json({data})
        return data
    }

    return data
}

export default getBooks;