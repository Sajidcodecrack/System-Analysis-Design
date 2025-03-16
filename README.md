# System-Analysis-Design
# **Budget-Based AI Meal Recommendation System**

## **📌 Overview**
This project is an **AI-powered meal recommendation system** that suggests budget-friendly, healthy meals based on user inputs such as **BMI, dietary preferences, and monthly budget**. The system leverages the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and integrates **Retrieval-Augmented Generation (RAG) with Generative AI (Gemini API)** for personalized recommendations.

---
## **🛠 Tech Stack**
- **Frontend:** React.js (Tailwind CSS for styling)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** Gemini API (Generative AI), RAG-based Retrieval System
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas

---
## **🚀 Features**
✅ **User Input Form** (BMI, allergies, budget, meal preferences)  
✅ **Budget-Friendly Meal Suggestions** (AI-powered recommendations)  
✅ **Personalized Diet Planning** (Based on health metrics)  
✅ **Smart Data Retrieval** (MongoDB stores food data & pricing)  
✅ **AI Chatbot for Meal Queries** (Real-time food recommendations)  
✅ **Email-Based Weekly Progress Reports**  
✅ **Wearable Device Syncing** (Smartwatch integration for health tracking)  

---
## **📂 Project Structure**
```
📦 Budget-Meal-Recommendation
├── 📁 backend  # Node.js + Express.js Backend
│   ├── 📁 models  # MongoDB Schemas
│   ├── 📁 routes  # API Endpoints
│   ├── 📁 controllers  # Business Logic
│   ├── server.js  # Main Server File
│
├── 📁 frontend  # React.js Frontend
│   ├── 📁 src
│   │   ├── 📁 components  # UI Components
│   │   ├── 📁 pages  # Pages (Home, Dashboard, etc.)
│   │   ├── App.js  # Main App Component
│
├── 📁 data  # Food Dataset (MongoDB JSON Import)
│
├── .env  # API Keys & Configuration
├── package.json  # Dependencies
├── README.md  # Documentation
```

---
## **⚙️ Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/Budget-Meal-Recommendation.git
cd Budget-Meal-Recommendation
```

### **2️⃣ Backend Setup**
```bash
cd backend
npm install
```
Create a **.env** file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```
Start the server:
```bash
npm run dev
```

### **3️⃣ Frontend Setup**
```bash
cd frontend
npm install
npm start
```

---
## **📌 API Endpoints**
### **🔹 User Meal Recommendation API**
**Endpoint:** `/api/generate-meal`  
**Method:** `POST`  
**Description:** Suggests a budget-friendly meal based on user input.  

#### **📥 Request Body:**
```json
{
  "budget": 400,
  "taste": "Spicy",
  "allergies": ["Peanuts"],
  "bmi": 22
}
```

#### **📤 Response:**
```json
{
  "mealPlan": "Grilled Chicken Salad with Brown Rice and Vegetables under 400 BDT"
}
```

### **🔹 Fetch All Available Meals**
**Endpoint:** `/api/meals`  
**Method:** `GET`  
**Description:** Retrieves all meals stored in MongoDB.  

#### **📤 Response:**
```json
[
  {
    "name": "Vegetable Khichuri",
    "price": 150,
    "calories": 400,
    "type": "Vegetarian"
  },
  {
    "name": "Grilled Chicken Salad",
    "price": 350,
    "calories": 500,
    "type": "Protein-Rich"
  }
]
```

---
## **🤖 How AI & RAG Work in This System**
1️⃣ **User inputs** budget, taste preference, and dietary needs.  
2️⃣ **MongoDB retrieves** meals within the budget.  
3️⃣ **Backend augments** meal data and sends it to **Gemini API**.  
4️⃣ **Gemini generates** a **personalized meal plan**.  
5️⃣ **Frontend displays** AI-powered meal suggestions.  

---
## **📌 Contribution Guidelines**
1️⃣ **Fork** the repository.  
2️⃣ Create a new branch: `git checkout -b feature-branch`.  
3️⃣ Commit changes: `git commit -m "Added new feature"`.  
4️⃣ Push to GitHub: `git push origin feature-branch`.  
5️⃣ Submit a **Pull Request**.  

---
## **🛠 Future Enhancements**
- ✅ AI-powered **grocery list generation** based on meals.  
- ✅ **Voice command support** for chatbot.  
- ✅ **Smartwatch calorie tracking integration**.  

---
## **📌 License**
This project is licensed under the **MIT License**.

---


