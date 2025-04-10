import React from 'react';

const BMIResult = ({ bmi, bmiCategory }) => {
  // Function to determine the color based on BMI category
  const getCategoryColor = () => {
    switch (bmiCategory) {
      case 'Underweight':
        return 'text-warning';
      case 'Normal weight':
        return 'text-success';
      case 'Overweight':
        return 'text-warning';
      case 'Obese':
        return 'text-danger';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="my-4 p-4 bg-light rounded">
      <h3 className="text-center mb-3">Your BMI Results</h3>
      <div className="row text-center">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">BMI Value</h5>
              <p className="card-text display-4">{bmi}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Category</h5>
              <p className={`card-text display-5 ${getCategoryColor()}`}>
                {bmiCategory}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h5>What does this mean?</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Underweight (BMI &lt; 18.5):</strong> You may need to gain some weight. Consider consulting with a healthcare provider.
          </li>
          <li className="list-group-item">
            <strong>Normal weight (BMI 18.5-24.9):</strong> You are at a healthy weight. Maintain your current lifestyle with a balanced diet and regular exercise.
          </li>
          <li className="list-group-item">
            <strong>Overweight (BMI 25-29.9):</strong> You may need to lose some weight. Focus on a balanced diet and increased physical activity.
          </li>
          <li className="list-group-item">
            <strong>Obese (BMI ≥ 30):</strong> You may be at increased risk for health problems. Consider consulting with a healthcare provider.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BMIResult;
