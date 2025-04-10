import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserForm from './components/UserForm'
import BMIResult from './components/BMIResult'
import MealSuggestions from './components/MealSuggestions'

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h1 className="mb-0">BMI & Meal Suggestion App</h1>
            </div>
            <div className="card-body">
              {!result && (
                <UserForm 
                  setResult={setResult} 
                  setLoading={setLoading} 
                  setError={setError} 
                />
              )}
              
              {loading && (
                <div className="text-center my-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2">Generating meal suggestions...</p>
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  {error}
                </div>
              )}
              
              {result && !loading && (
                <div>
                  <BMIResult bmi={result.bmi} bmiCategory={result.bmiCategory} />
                  <MealSuggestions suggestions={result.mealSuggestions} />
                  <button 
                    className="btn btn-secondary mt-4"
                    onClick={() => setResult(null)}
                  >
                    Start Over
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
