/*--------validation start--------------*/

var regExLoginUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;

$("#loginusername").keyup(function (event) {
    let username = $("#loginusername").val();
    if (regExLoginUserName.test(username)) {
        $("#loginusername").css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#loginpassword").focus();
        }
    } else {
        $("#loginusername").css('border', '2px solid red');
    }
});

$("#loginpassword").keyup(function (event) {
    let password = $("#loginpassword").val();
    if (regExLoginPassword.test(password)) {
        $("#loginpassword").css('border', '2px solid #31d2f2');
        //$('#btnLogToSystem').prop('disabled', false);
    } else {
        $("#loginpassword").css('border', '2px solid red');
    }
});

/*--------validation end--------------*/

$("#btnLogToSystem").click(function () {

    if ($("#loginusername").val() == "" || $("#loginpassword").val() == ""){
        alert("All Fields Are Required To Log !");
    }else {
        isExists($("#loginusername").val(),$("#loginpassword").val());
        console.log($("#loginusername").val());
        console.log($("#loginpassword").val());
    }

});

function isExists( username, password) {
    console.log(username);
    console.log(password);
    console.log("come");
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/user/" + password +"/"+username,
        method: "GET",
        success: function (response) {
            if (response.data.username == $("#loginusername").val() && response.data.password == $("#loginpassword").val()) {
                console.log(response.data.userId)
                searchAdminTable(response.data.userId);
                searchCustomerTable(response.data.userId);
                searchDriverTable(response.data.userId);
            }
        },
        error: function (ob) {
            alert("Wrong Username And Password !");
        }
    });
}

function searchAdminTable(userId) {
    console.log(userId);
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/admin/USER/" + userId,
        method: "GET",
        success: function (response) {
            console.log(response);
            logToSystem();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function searchCustomerTable(userId) {
    console.log(userId);
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/customer/USER/" + userId,
        method: "GET",
        success: function (response) {
            console.log(response);
            searchCars();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function searchDriverTable(userId) {
    console.log(userId);
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/driver/USER/" + userId,
        method: "GET",
        success: function (response) {
            console.log(response);
            searchSchedule();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}