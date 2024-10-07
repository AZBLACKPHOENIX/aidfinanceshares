function logout() {
    // Clear session storage
    sessionStorage.clear(); // or localStorage.clear(); if using local storage

    // Redirect to login or home page
    window.location.href = '../index.html'; // Change to your login page
    
    // Prevent going back to the previous page
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.pushState(null, null, location.href);
    };
}
