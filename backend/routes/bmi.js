const express = require('express');
const router = express.Router();

// Calculate BMI function
const calculateBMI = (heightFeet, heightInches, weightKg) => {
  // Convert height to meters
  const totalHeightM = ((heightFeet * 12) + heightInches) * 0.0254;
  const bmi = weightKg / (totalHeightM ** 2);
  
  // Determine BMI Category
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (18.5 <= bmi && bmi < 24.9) {
    category = "Normal weight";
  } else if (25 <= bmi && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  
  return {
    bmi: parseFloat(bmi.toFixed(2)),
    category
  };
};

// POST route for BMI calculation
router.post('/calculate', (req, res) => {
  try {
    const { heightFeet, heightInches, weightKg } = req.body;
    
    // Validate input
    if (!heightFeet || !heightInches || !weightKg) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Calculate BMI
    const bmiResult = calculateBMI(
      parseFloat(heightFeet),
      parseFloat(heightInches),
      parseFloat(weightKg)
    );
    
    return res.status(200).json(bmiResult);
  } catch (error) {
    console.error('BMI calculation error:', error);
    return res.status(500).json({ error: 'Server error during BMI calculation' });
  }
});

module.exports = router;
