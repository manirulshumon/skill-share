import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const navigate = useNavigate();
  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
    'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories',
    'Nunavut', 'Yukon'
  ];

  // Properly initialize all form fields
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    province: '',
    availability: {
      date: '',
      time: ''
    },
    contact: {
      email: ''
    }
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested object properties
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/posts', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      navigate('/');
    } catch (err) {
      console.error('Error creating post:', err);
      alert(err.response?.data?.message || 'Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Post</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded h-32"
              required
            />
          </div>

          {/* Province */}
          <div>
            <label className="block mb-1">Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Province</option>
              {provinces.map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-1">Availability</label>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                name="availability.date"
                value={formData.availability.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="time"
                name="availability.time"
                value={formData.availability.time}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                step="300" // 5-minute increments
              />
            </div>
          </div>

          {/* Contact Email */}
          <div>
            <label className="block mb-1">Contact Email</label>
            <input
              type="email"
              name="contact.email"
              value={formData.contact.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 disabled:bg-gray-400"
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
}