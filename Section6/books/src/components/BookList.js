import BookShow from "./BookShow";

function BookList({books,onDelete,onEdit}){

    const renderedBooks=books.map((book)=>{
       return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book}/>
    });

    return <div>{renderedBooks}</div>;
}

export default BookList;