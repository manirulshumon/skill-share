import { Link } from 'react-router-dom';

const RegisterPage = () => {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Create new account</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder='Enter a valid password'
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account? {' '}
          <Link to="/login" className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage