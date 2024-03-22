const User = require('./models/User'); // Import your User model
const User = mongoose.model('User', usermodel);
// Create a new admin user
const admin = new User({
  username: 'admin',
  password: 'your_password', // Make sure to hash this password before saving
  isAdmin: true // Set isAdmin to true for admin user
});

// Save the admin user to the database
admin.save()
  .then(() => {
    console.log('Admin user created successfully');
  })
  .catch((error) => {
    console.error('Error creating admin user:', error);
  });
