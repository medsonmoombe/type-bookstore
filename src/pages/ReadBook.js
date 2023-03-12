import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ReadBook(props) {
  const { id } = useParams();
  const { books } = props;
  const [book, setBook] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePdfError = (error) => {
    console.error('Failed to load PDF:', error);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const book = books.filter((book) => Number(book.id) === Number(id));
    setBook(book);
  }, [books, id]);

  return (
    <div className="flex flex-col h-screen">
    <div className="flex items-center justify-center w-full h-20 bg-gray-800 text-white">
      {/* Book menu */}
      <div className="flex items-center justify-center w-full">
        {book?.map((book) => (
          <div
            className="mx-4 cursor-pointer font-medium text-lg hover:text-gray-400 transition-colors duration-300"
            key={book.id}
            onClick={() => setCurrentPage(1)}
          >
            <p className="capitalize">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 m-auto">
      {book?.map((book) => (
        <div
          className="w-full flex flex-col justify-center items-center bg-white-400"
          key={book.id}
        >
          <h2 className="pt-20 text-4xl w-full text-slate-700 font-poppins capitalize">
            {book.title}
          </h2>
          <div className="flex items-center justify-between w-2/3 pt-20">
            <button
              className="px-4 py-2 text-white font-bold rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              onClick={handlePrevPage}
            >
              Prev Page
            </button>
            <div className="text-lg font-bold">
              Page {currentPage} of {numPages}
            </div>
            <button
              className="px-4 py-2 text-white font-bold rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              onClick={handleNextPage}
            >
              Next Page
            </button>
          </div>
          <div className="w-full mx-auto">
            <Document
              className="pt-20 m-auto"
              file={book.file}
              onError={handlePdfError}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page key={`page_${currentPage}`} pageNumber={currentPage} width={700} />
            </Document>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default ReadBook;
