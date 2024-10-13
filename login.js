window.onload = function() {
    alert(`For demo purposes, use following username and password provided:\n
        Therapist > username :therapist1, password: pass123\n
        Clinical Supervisor > username: super1, password: super123\n
        Case Supervisor > username: case1, password: case123`);
};

// Dummy user data
const users = {
    therapist: [
        { username: 'therapist1', password: 'pass123' },
        { username: 'therapist2', password: 'pass456' }
    ],
    clinicalSupervisor: [
        { username: 'super1', password: 'super123' },
        { username: 'super2', password: 'super456' }
    ],
    caseSupervisor: [
        { username: 'case1', password: 'case123' },
        { username: 'case2', password: 'case456' }
    ]
};

// Function to validate user credentials
function validateUser(username, password, userType) {
    if (!users[userType]) {
        return false;
    }

    const user = users[userType].find(user => user.username === username && user.password === password);
    return user !== undefined;
}

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        const userType = document.querySelector('select').value;
        
        if (validateUser(username, password, userType)) {
            // alert('Login successful!');
            // Redirect to a different page or perform further actions here
            if(userType === 'therapist'){window.location.href = 'therapist.html';}
            else if (userType === 'clinicalSupervisor'){window.location.href = 'clinicalSupervisor.html';}
            else if (userType === 'caseSupervisor'){window.location.href = 'caseSupervisor.html';}
        } else {
            alert('Invalid username or password');
        }
    });
});
