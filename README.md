# 🏡 TravaNest – Airbnb Clone

**TravaNest** is a full-stack vacation rental web application inspired by Airbnb. It allows users to list, and review properties — offering a complete simulation of a real-world booking platform.

This project was built as a hands-on exercise in full-stack development using the **MVC architecture** and a modern tech stack.

---

## ✨ Key Features

- 🔐 **User Authentication**  
  Register, login, and maintain user sessions securely using Passport.js

- 🏘 **CRUD for Listings**  
  Create, edit, and delete property listings with full form validation

- 📸 **Image Upload via Cloudinary**  
  Upload and manage property images with seamless Cloudinary integration

- 📝 **Review System**  
  Users can write and delete reviews for listed properties

- 🗂️ **MVC Architecture**  
  Clean, organized folder structure for scalability and maintainability

- ⚠️ **Validation & Error Handling**  
  Server-side validation with Joi and robust error middleware

- 💬 **Flash Messages**  
  Real-time feedback for user actions like add/edit/delete

---

## 🛠 Tech Stack

| Frontend           | Backend             | Database     | Authentication |
|--------------------|---------------------|--------------|----------------|
| HTML, CSS, JS      | Node.js, Express.js | MongoDB      | Passport.js    |
| EJS Templating     |                     | Mongoose     |                |
| Bootstrap          |                     |              |                |

---

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js & npm  
- MongoDB (local or Atlas URI)  
- Cloudinary account for image uploads

### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SimranKant/TravaNest.git
   cd TravaNest
2. Install dependencies:
   ```bash
   npm install
3. Set up your environment variables in a .env file
   ```bash
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ATLASDB_URL=your_mongodb_atlas_url
   SECRET=your_session_secret
4. Start the server:
   ```bash
   nodemon app.js
5. Visit http://localhost:8080 in your browser.

---

## 📬 Contact

**Simran Kant**  
📧 simrankant@example.com  
🔗 [Portfolio](https://simrankant.vercel.app) • [LinkedIn]([https://linkedin.com/in/simrankant](https://www.linkedin.com/in/simran-kant-74056a281/))

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

⭐ **If you liked this project, consider giving it a star!**

