import fetch from 'unfetch';

// determines if the current session is a signed in user
export const isUser = () => {
  return new Promise((resolve) => {
    fetch('/api/get-user?', {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json().then(user => resolve(user)));
  });
};