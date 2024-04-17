function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name,
      email,
    };
  
    const jsonData = JSON.stringify(data);
  
    // Return the fetch chain for testing purposes
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        const userId = data.id;
        // Update the DOM with the user ID
        document.getElementById('user-id').textContent = `User created successfully! ID: ${userId}`;
      })
      .catch((error) => {
        const errorMessage = error.message;
        // Update the DOM with the error message
        document.getElementById('error-message').textContent = `Error: ${errorMessage}`;
      });
  }
  