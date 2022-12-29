import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FileUploadPage() {
  const [file, setFile] = useState([]);
  const [Image, setImage] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFile(data);
  };
  console.log(file);
 
  function handleChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("file", { required: true })} type="file" />
        <button type="submit">Submit</button>
      </form>
      <div className="App">
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <img src={Image} />
        <a href={file} download={file}>download book</a>
      </div>
    </>
  );
}

export default FileUploadPage;
