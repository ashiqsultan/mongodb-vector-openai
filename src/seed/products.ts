const products = [
  {
    name: 'JavaScript: The Good Parts',
    category: 'Books',
    description:
      'Authored by Douglas Crockford, this book focuses on the good parts of JavaScript, offering insights into best practices and effective usage.',
    price: 32,
  },
  {
    name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    category: 'Books',
    description:
      'Authored by Robert C. Martin (Uncle Bob), this book is a guide to writing clean, maintainable, and efficient code. It covers principles and practices of writing clean code.',
    price: 45,
  },
  {
    name: 'The Design of Everyday Things',
    category: 'Books',
    description:
      'Authored by Don Norman, this book delves into the principles of design and usability, exploring how design impacts everyday experiences and products.',
    price: 28,
  },
  {
    name: 'Cracking the Coding Interview',
    category: 'Books',
    description:
      'Authored by Gayle Laakmann McDowell, this book is a comprehensive guide to preparing for coding interviews, offering practice questions and solutions.',
    price: 38,
  },
  // Electronics
  {
    name: 'Smartphone X',
    category: 'Electronics',
    description: 'High-performance smartphone with advanced features',
    price: 799,
  },
  {
    name: 'Smartwatch Pro',
    category: 'Electronics',
    description: 'Fitness tracker with smartwatch functionalities',
    price: 249,
  },
  {
    name: 'Wireless Headphones',
    category: 'Electronics',
    description: 'Over-ear headphones with noise cancellation',
    price: 199,
  },

  // Clothing
  {
    name: "Men's Premium T-Shirt",
    category: 'Clothing',
    description: 'Comfortable and stylish cotton t-shirt for men',
    price: 29,
  },
  {
    name: "Women's Running Shoes",
    category: 'Clothing',
    description: 'Lightweight and durable shoes for running',
    price: 79,
  },
  {
    name: 'Winter Jacket',
    category: 'Clothing',
    description: 'Insulated jacket suitable for cold weather',
    price: 149,
  },

  // Home & Kitchen
  {
    name: 'Coffee Maker',
    category: 'Home & Kitchen',
    description: 'Automatic drip coffee maker for brewing fresh coffee',
    price: 89,
  },
  {
    name: 'Non-Stick Cookware Set',
    category: 'Home & Kitchen',
    description: 'Complete set of non-stick pots and pans',
    price: 179,
  },
  {
    name: 'Robot Vacuum Cleaner',
    category: 'Home & Kitchen',
    description: 'Smart vacuum cleaner for automated cleaning',
    price: 299,
  },

  // Sports & Outdoors
  {
    name: 'Camping Tent',
    category: 'Sports & Outdoors',
    description: 'Spacious tent suitable for camping trips',
    price: 199,
  },
  {
    name: 'Yoga Mat',
    category: 'Sports & Outdoors',
    description: 'Comfortable and non-slip yoga mat',
    price: 49,
  },
  {
    name: 'Outdoor Backpack',
    category: 'Sports & Outdoors',
    description: 'Durable backpack for outdoor adventures',
    price: 129,
  },

  // Books
  {
    name: "Fiction Novel: 'The Lost World'",
    category: 'Books',
    description: 'Adventure novel by Arthur Conan Doyle',
    price: 15,
  },
  {
    name: "Self-Help: 'Mindset'",
    category: 'Books',
    description: 'Book about developing a growth mindset',
    price: 12,
  },
  {
    name: "Cookbook: 'The Joy of Cooking'",
    category: 'Books',
    description: 'Comprehensive cookbook with diverse recipes',
    price: 25,
  },
];

export default products.slice(0, 4);
