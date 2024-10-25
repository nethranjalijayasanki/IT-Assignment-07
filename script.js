// customer array
let customer_array = [];


const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    customer_array.map((item, index) => {
        console.log(item);
        let data = `<tr><td>${item.first_name}</td><td>${item.last_name}</td><td>${item.mobile}</td><td>${item.email}</td><td>${item.address}</td></tr>`
        $("#customerTableBody").append(data);
    })
}

// Add Customer Button
$("#customer_add_btn").on("click", function() {
    let first_name = $('#firstName').val();
    let last_name = $('#lastName').val();
    let mobile = $('#mobile').val();
    let email = $('#email').val();
    let address = $('#address').val();

    console.log("first_name: ", first_name);
    console.log("last_name: ", last_name);
    console.log("mobile: ", mobile);
    console.log("email: ", email);
    console.log("address: ", address);

    let customer = {
        id: customer_array.length + 1,
        first_name: first_name,
        last_name: last_name,
        mobile: mobile,
        email: email,
        address: address
    };

    customer_array.push(customer);

    loadCustomerTable();

    // // create table row
    // let data = `<tr><td>${first_name}</td><td>${last_name}</td><td>${mobile}</td><td>${email}</td><td>${address}</td></tr>`
    // $("#customerTableBody").append(data);
});

