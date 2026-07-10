# ToDo App 📝

A simple ToDo application built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

## Features

- Add, view, update, and delete tasks
- MongoDB Atlas integration
- RESTful API with Express
- Environment variable support using dotenv

## Project Structure

📦ToDo-App
┣ 📂backend
┃ ┣ 📜db.js # MongoDB connection + model
┃ ┣ 📜server.js # Express server
┣ 📜.env # Environment variables (not committed)
┣ 📜README.md # Project documentation
┗ 📜package.json

Install dotenv
bash
npm install dotenv

Create a .env file (in your project root)
env
MONGO_URI=mongodb+srv://jbhdsbhjmbdjljkbwikjeulgiu378ye732yuenkcs.mongodb.net/todos
