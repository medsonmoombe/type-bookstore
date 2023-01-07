import React, { useState } from "react";
import { MdUploadFile, MdImage } from "react-icons/md";
import { useForm } from "react-hook-form";
import { options } from "./fakeData"
import { useDispatch } from "react-redux";
import { addBook } from "../redux/book/AddBook";

function FileUploadPage() {

  const dispatch = useDispatch();
  const [file, setFile] = useState([]);
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [user_id, setUser_id] = useState(1);
  const [description, setDescription] = useState();
  


  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const newBook = {
  //     user_id: 1,
  //     title,
  //     author,
  //     description,
  //     image
  //   };
  //   console.log(newBook);
  //  dispatch(addBook(newBook))
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('image', image);
    fetch(`http://localhost:3000/users/${1}/books`, {
      method: 'POST',
      body: formData
    })
    .catch(error=>console.log(error));

  }




  return (
    <>
    <form onSubmit={handleSubmit} className="border-0 rounded mt-8  sm:mt-[15%] gap-2 p-8 h-[100%] flex flex-col items-center w-[80%] sm:w-[90%] m-auto bg-slate-400">
      <div className="flex justify-center relative pt-4">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="w-full h-[70px] relative z-10 opacity-0 bg-red-700" />
        <p className="absolute rounded opacity-[0.9] bg-orange-400 top-0 left-0 w-[100%] h-[80px] text-white capitalize pt-2">click to upload Book</p>
        <MdUploadFile size={4} color={"#fff"} className="text-white absolute top-8 left-0 w-full h-[30px]"/>
        {/* <a href={file.name} download={file.name}>
          download book
        </a> */}
      </div>

      <div className="flex justify-center relative m-auto">
        <input type="file" onChange={(e)=> setImage(e.target.files[0])} className="w-full h-[70px] relative z-10 opacity-0 bg-red-700"/>
        <p className="absolute rounded opacity-[0.9] bg-orange-400 top-0 left-0 w-[100%] h-[80px] text-white capitalize pt-2">click upload Image</p>
        <MdImage size={4} color={"#fff"} className="text-white absolute top-8 left-0 w-full h-[30px]"/>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <input onChange={(e)=> setTitle(e.target.value)} type="text" name="title" placeholder="Book Title" className="outline-0 w-full p-1 rounded font-poppins placeholder:font-poppins capitalize"/>
        <input onChange={(e)=> setAuthor(e.target.value)} type="text" name="author" placeholder="Author name" className="outline-0 w-full p-1 rounded font-poppins placeholder:font-poppins capitalize"/>
        <select
            id="small"
            className="w-auto p-2 text-sm text-zinc-900 capitalize font-poppins border-0 outline-0 rounded bg--400"
            name="categories"
          >
            {options.map((option) => (
              <option key={option.id} className="bg-gray-400">{option.name}</option>
            ))}
          </select>
        <textarea onChange={(e)=> setDescription(e.target.value)} type="text" name="description" placeholder="Book description" className="outline-0 w-full p-1 rounded font-poppins placeholder:font-poppins capitalize"></textarea>
      </div>
      <button type="submit" className="border-0 bg-orange-400 rounded w-auto px-2 py-1 text-white font-poppins">Submit</button>
    </form>
    </> 
  );
}

export default FileUploadPage;
