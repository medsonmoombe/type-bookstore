import React from 'react';

const Register = () => {
  return (
<div className="flex flex-col items-center justify-center  h-screen bg-cover bg-center" style={{ backgroundImage: "url('assets/images/books.jpg')" }}>
  <div className="bg-white p-8 w-[50%] sm:w-[80%] md:w-[60%] rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 font-poppins">Register</h1>
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-semibold text-gray-800 font-poppins">Email</label>
        <input type="email" placeholder="Enter email" className="border-2 rounded-lg py-2 px-4 text-lg outline-none" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-lg font-semibold text-gray-800 font-poppins">Password</label>
        <input type="password" placeholder="Enter password" className="border-2 rounded-lg py-2 px-4 text-lg outline-none" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirm-password" className="text-lg font-semibold text-gray-800 font-poppins">Confirm Password</label>
        <input type="password" placeholder="Confirm password" className="border-2 rounded-lg py-2 px-4 text-lg outline-none" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-8 text-lg font-poppins">
        Register
      </button>
    </form>
    <div className="text-center text-gray-800 font-poppins mt-4">
      Already have an account? <a href="/sign_in" className="text-blue-500 hover:text-blue-600 font-semibold">Sign in here</a>.
    </div>
  </div>
</div>

  )
}

export default Register