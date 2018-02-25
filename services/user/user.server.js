const FormData = require('form-data');
const testUser = {
  currentEmployee: true,
  email: "bk@test.com",
  firstName: "Brian",
  lastName: "Kilpatrick",
  id: 7573,
  username: "highnotes83",
  password: 'test'
};

exports.authenticate = (email, password) => {
  return new Promise((resolve, reject) => {
    if ( email === testUser.email && password === testUser.password) {
      resolve(testUser)
    } else {
      reject('Email or password is incorrect.')
    }
  })
};

exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (testUser.id === id) {
      resolve(testUser)
    }
  })
};

exports.isUser = (req) => {
  return () => {
    return new Promise(resolve => {
      resolve(!!req.user)
    });
  };
};