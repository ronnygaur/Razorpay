# 🚀 My MERN Project with Razorpay Payment API Integration


![Razorpay Logo](https://media.licdn.com/dms/image/C4D34AQHUjodJWY_isw/ugc-proxy-shrink_1280_800/0/1604260863360?e=2147483647&v=beta&t=qyJ4DQ0Y72JLB2cfZFFCq5kOQfPWi-8R44UgT9iNYi0)


This is a MERN (MongoDB, Express.js, React.js, Node.js) project that demonstrates integration with the Razorpay payment gateway for processing payments in an e-commerce application.

## Features

- User authentication using JWT (JSON Web Tokens)
- Product management (CRUD operations)
- Shopping cart functionality
- Checkout process with Razorpay payment integration
- Order management
- Responsive design

## Installation

1. Clone the repository:

git clone https://github.com/your-username/your-project.git


2. Navigate to the project directory:

cd your-project

markdown
Copy code

3. Install server dependencies:

npm install

css
Copy code

4. Navigate to the client directory and install client dependencies:

cd client
npm install

css
Copy code

5. Navigate back to the project root:

cd ..

javascript
Copy code

6. Set up environment variables:

   Create a `.env` file in the root directory and provide the following variables:

PORT=3001
MONGODB_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
RAZORPAY_KEY_ID=<Your Razorpay Key ID>
RAZORPAY_KEY_SECRET=<Your Razorpay Key Secret>

markdown
Copy code

7. Start the development server:

npm run dev

markdown
Copy code

8. Navigate to `http://localhost:3000` in your browser to view the application.

## Usage

- Register a new user or login with existing credentials.
- Browse through products, add them to the cart.
- Proceed to checkout.
- Enter shipping details and select the payment method.
- Complete the payment using Razorpay integration.
- View orders in the order history.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Razorpay API
- JWT for authentication
- Bootstrap (for styling)
- Axios (for making HTTP requests)

## Folder Structure

├── client
│ ├── public
│ └── src
│ ├── components
│ ├── pages
│ ├── App.js
│ └── index.js
├── controllers
├── models
├── routes
├── utils
├── .env
└── server.js

css
Copy code

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or want to suggest improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
