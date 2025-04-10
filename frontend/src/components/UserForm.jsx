import { useState } from 'react';
import { getMealSuggestions } from '../services/api';

const UserForm = ({ setResult, setLoading, setError }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    heightFeet: '',
    heightInches: '',
    weightKg: '',
    budget: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate form data
      for (const key in formData) {
        if (!formData[key]) {
          throw new Error('All fields are required');
        }
      }

      // Make API call to get meal suggestions using the API service
      const result = await getMealSuggestions(formData);
      setResult(result);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.response?.data?.error || error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Enter Your Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Years"
              min="1"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="heightFeet" className="form-label">Height (Feet)</label>
            <input
              type="number"
              className="form-control"
              id="heightFeet"
              name="heightFeet"
              value={formData.heightFeet}
              onChange={handleChange}
              placeholder="Feet"
              min="1"
              max="8"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="heightInches" className="form-label">Height (Inches)</label>
            <input
              type="number"
              className="form-control"
              id="heightInches"
              name="heightInches"
              value={formData.heightInches}
              onChange={handleChange}
              placeholder="Inches"
              min="0"
              max="11"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="weightKg" className="form-label">Weight (kg)</label>
            <input
              type="number"
              className="form-control"
              id="weightKg"
              name="weightKg"
              value={formData.weightKg}
              onChange={handleChange}
              placeholder="Kilograms"
              step="0.1"
              min="1"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="budget" className="form-label">Budget (TK)</label>
            <input
              type="number"
              className="form-control"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Monthly budget"
              min="1"
            />
          </div>
        </div>

        <div className="d-grid gap-2 col-md-6 mx-auto mt-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Get Meal Suggestions
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
