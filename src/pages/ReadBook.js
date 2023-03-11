import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function ReadBook(props) {
  const { id } = useParams();
  const { books } = props;
  const [book, setBook] = useState([]);
  
  const handlePdfError = (error) => {
    console.error('Failed to load PDF:', error);
  };

  useEffect(() => {
      const book = books.filter((book) => Number(book.id) === Number(id));
      setBook(book);
      console.log(book);
  }, [books, id])
  

 

  return (
    <div>
      {book?.map((book) => (
        <div className='w-full flex flex-col justify-center items-center bg-gray-400' key={book.id}>
          <h2 className=' pt-4 text-4xl w-full text-slate-700 font-poppins capitalize'>{book.title}</h2>
          <Document file={book.file} onError={handlePdfError}>
            <Page pageNumber={1} width={700} />
          </Document>
        </div>
      ))}
    </div>
  );
}


export default ReadBook;
