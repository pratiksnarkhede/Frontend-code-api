var employeeProfiles = [];

function addEmployee() {
    var empId = $('#empid').val();
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var empAge = $('#empage').val();
    var designation = $('#designation').val();

    var profile = {
        empId: empId,
        fname: fname,
        lname: lname,
        empAge: empAge,
        designation: designation
    };

    // Simulate API call to add employee
    simulateApiCall('POST', 'https://oy8xmu4u5i.execute-api.us-east-1.amazonaws.com/dev', profile)
        .then(response => {
            employeeProfiles.push(response);
            $('#profileSaved').text('Employee profile saved successfully.');
        })
        .catch(error => {
            console.error('Error adding employee:', error);
        });
}

function getAllEmployees() {
    // Simulate API call to retrieve all employees
    simulateApiCall('GET', 'https://oy8xmu4u5i.execute-api.us-east-1.amazonaws.com/dev')
        .then(response => {
            displayEmployeeList(response);
        })
        .catch(error => {
            console.error('Error retrieving employees:', error);
        });
}

function displayEmployeeList(employees) {
    var tableBody = $('#employeeProfile tbody');
    tableBody.empty();

    employees.forEach(function(profile) {
        var row = '<tr><td>' + profile.empId + '</td><td>' + profile.fname + '</td><td>' + profile.lname + '</td><td>' + profile.empAge + '</td><td>' + profile.designation + '</td></tr>';
        tableBody.append(row);
    });
}

// Simulate API call function
function simulateApiCall(method, url, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (method === 'GET') {
                // Simulate GET request
                resolve(employeeProfiles);
            } else if (method === 'POST') {
                // Simulate POST request
                resolve(data);
            } else {
                reject('Invalid HTTP method');
            }
        }, 500); // Simulating a delay to simulate an asynchronous request
    });
}
