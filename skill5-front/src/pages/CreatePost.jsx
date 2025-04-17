export default function CreatePost() {
  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
    'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories',
    'Nunavut', 'Yukon'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Post</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-1">Author</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Province</label>
            <select className="w-full p-2 border rounded" required>
              <option value="">Select Province</option>
              {provinces.map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1">Availability</label>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="time"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Contact Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}