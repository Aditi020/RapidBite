## Demo Video 👇 
You can watch the demo video for the **Employee Register** project 👉 👉 [here](https://drive.google.com/file/d/1J7J9n5Atykk0PBw4r0q-BB7NnG5V5JaO/view?usp=sharing).👈 👈


# React + Vite

## Getting Started

Follow these steps to create and set up your Vite React project.

## Collaborating on the Project

If you're collaborating on this project, follow these additional steps:


## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Aditi020/RapidBite.git
```

### 2. Install dependencies

```bash
cd mern-todo-app

# Split the terminal:

# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd Frontend
npm install
```

### 3. MongoDB Setup

- Open MongoDB Compass
- Create a new database named `RapidBtie`
- Inside the `RapidBite` database, create a collection named `Food/User/Admin`

### 4. Server setup for database connection

```bash
PORT=3000  # Port number for the server (you can change it if needed)
MONGO_URI=mongodb+srv://aditikumar2224:AK0MongoDB@cluster0.zie5hxe.mongodb.net/Todo-application  # MongoDB connection URI
```
#### change your url here above



### 5. Running the App

```bash
# Start the server (from the 'Backend' directory)
npm start

# Start the client (from the 'Frontend' directory)
npm start
```

The server will run on `http://localhost:3000/Rapidbite` and the client on `http://localhost:5173/`.

## Usage

- Open your web browser and go to `http://localhost:3000/todos`.
- You can add, update tasks, mark them as completed, or delete them.

## Contributing

Feel free to contribute to this project by submitting pull requests.

## Libraries Used

### Node
- Description: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- Installation:
   ```bash
   # No installation needed as Node.js is a runtime environment
   ```

### Express
- Description: Express is a fast, unopinionated, minimalist web framework for Node.js.
- Installation:
   ```bash
   npm install express
   ```

### Mongoose
- Description: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- Installation:
   ```bash
   npm install mongoose
   ```

### JSON Web Token (jsonwebtoken)
- Description: JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
- Installation:
   ```bash
   npm install jsonwebtoken
   ```

## Using React

If you want to use React for the frontend, you can follow these steps:

1. Install Vite using npm:
   ```bash
   npm create vite@latest
   ```

2. Provide the project name (e.g., "ABC"), choose React as the framework, and select JavaScript as the variant.

3. Change into the project directory:
   ```bash
   cd ABC
   ```

4. Optionally, you can install dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Once the server is running, you can open your web browser and access the development environment.
```


This `README.md` should make it easy for anyone to get started with the project and collaborate effectively.
```
