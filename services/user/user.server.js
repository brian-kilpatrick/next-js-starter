const { User } = require('../../data/models');

exports.authenticate = (email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({where: { email }}).then((user) => {
      if (user) {
        user.isValidPassword(password)
            .then(isValid => {
              if (isValid) {
                resolve(user);
              } else {
                reject('Email or password is incorrect.')
              }
            })
      } else {
        reject('Email or password is incorrect.');
      }
    });
  })
};

exports.getUserById = (id) => {
  return new Promise(async (resolve, reject) => {
    const user = await User.findById(id);
    if (user) {
      resolve(user);
    } else {
      reject('An error occurred...')
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