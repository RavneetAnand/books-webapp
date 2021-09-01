const API_BASE_ADDRESS = 'http://localhost:3903/'

// Auhenticate the user
export const userLogin = (username, password) => {
    const uri = API_BASE_ADDRESS + 'authenticate';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(uri, requestOptions);
}


// Load all the books available in the database
export const getAllBooks = () => {
    const uri = API_BASE_ADDRESS + 'getBooks';
    return fetch(uri, {
        method: 'GET'
    });
}