const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables
require('dotenv').config();

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Get meal suggestions function
const getMealSuggestions = async (name, age, gender, heightFeet, heightInches, weightKg, budget) => {
  try {
    // Calculate BMI
    const totalHeightM = ((heightFeet * 12) + heightInches) * 0.0254;
    const bmi = weightKg / (totalHeightM ** 2);
    
    // Determine BMI Category
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (18.5 <= bmi && bmi < 24.9) {
      bmiCategory = "Normal weight";
    } else if (25 <= bmi && bmi < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
    
    const roundedBmi = parseFloat(bmi.toFixed(2));
    
    // Create prompt for Gemini
    const prompt = `
    Suggest affordable Bengali and English meals for ${name}, who is ${age} years old, ${heightFeet} feet ${heightInches} inches tall, and weighs ${weightKg} kg.
    - Gender: ${gender}
    - BMI: ${roundedBmi} (${bmiCategory})
    - Monthly budget: ${budget} TK
    - Provide 3 times meal suggestions  in bangladesh with estimated cost and calorie count.
    - Suggestions should be based on gender: if male, suggest meals suitable for males; if female, suggest meals suitable for females.
    - Meals should include both Bengali and English cuisine.
    - Format the suggestions in a table with columns for meal name, calorie count, and budget cost and per day meal cost must be mentioned.
    - Write in 350-400 max word but dont suggest recipie details just suggest recipies names also frutis name with price and calories in a awesome technique for user
    `;
    
    // Generate content with Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return {
      bmi: roundedBmi,
      bmiCategory,
      mealSuggestions: text
    };
  } catch (error) {
    console.error('Error generating meal suggestions:', error);
    throw error;
  }
};

// POST route for meal suggestions
router.post('/suggestions', async (req, res) => {
  try {
    const { name, age, gender, heightFeet, heightInches, weightKg, budget } = req.body;
    
    // Validate input
    if (!name || !age || !gender || !heightFeet || !heightInches || !weightKg || !budget) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Get meal suggestions
    const result = await getMealSuggestions(
      name,
      parseInt(age),
      gender.toLowerCase(),
      parseInt(heightFeet),
      parseInt(heightInches),
      parseFloat(weightKg),
      parseInt(budget)
    );
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Meal suggestion error:', error);
    return res.status(500).json({ error: 'Server error during meal suggestion generation' });
  }
});

module.exports = router;
