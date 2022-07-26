/*--------validation start--------------*/

var regExUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExFullName = /^[A-Z|a-z\s]{3,20}$/;
var regExContact = /^(071-|077-|075-|078-|)[0-9]{7}$/;
var regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
var regExEmail = /^[0-9A-Z a-z$&#]{3,10}(@gmail.com)|(@yahoo.com)$/;
var regExNIC = /^[0-9]{9}(v)$/;
var regExDrivingLNO = /^[1-9]{1,10}$/;

$("#username").keyup(function (event) {
    let username = $("#username").val();
    if (regExUserName.test(username)) {
        $("#username").css('border', '2px solid #31d2f2');
        $("#errorUsername").text("");
        if (event.key == "Enter") {
            $("#password").focus();
        }
    } else {
        $("#username").css('border', '2px solid red');
        $("#errorUsername").text("Check this field whether correct !");
    }
});

$("#password").keyup(function (event) {
    let password = $("#password").val();
    if (regExPassword.test(password)) {
        $("#password").css('border', '2px solid #31d2f2');
        $("#errorPassword").text("");
        if (event.key == "Enter") {
            $("#customername").focus();
        }
    } else {
        $("#password").css('border', '2px solid red');
        $("#errorPassword").text("Check this field whether correct !");
    }
});

$("#customername").keyup(function (event) {
    let name = $("#customername").val();
    if (regExFullName.test(name)) {
        $("#customername").css('border', '2px solid #31d2f2');
        $("#errorFullName").text("");
        if (event.key == "Enter") {
            $("#contactnumber").focus();
        }
    } else {
        $("#customername").css('border', '2px solid red');
        $("#errorFullName").text("Check this field whether correct !");
    }
});

$("#contactnumber").keyup(function (event) {
    let contact = $("#contactnumber").val();
    if (regExContact.test(contact)) {
        $("#contactnumber").css('border', '2px solid #31d2f2');
        $("#errorContact").text("");
        if (event.key == "Enter") {
            $("#customeraddress").focus();
        }
    } else {
        $("#contactnumber").css('border', '2px solid red');
        $("#errorContact").text("Check this field whether correct !");
    }
});

$("#customeraddress").keyup(function (event) {
    let address = $("#customeraddress").val();
    if (regExAddress.test(address)) {
        $("#customeraddress").css('border', '2px solid #31d2f2');
        $("#errorAddress").text("");
        if (event.key == "Enter") {
            $("#email").focus();
        }
    } else {
        $("#customeraddress").css('border', '2px solid red');
        $("#errorAddress").text("Check this field whether correct !");
    }
});

$("#email").keyup(function (event) {
    let email = $("#email").val();
    if (regExEmail.test(email)) {
        $("#email").css('border', '2px solid #31d2f2');
        $("#errorEmail").text("");
        if (event.key == "Enter") {
            $("#nic").focus();
        }
    } else {
        $("#email").css('border', '2px solid red');
        $("#errorEmail").text("Check this field whether correct !");
    }
});

$("#nic").keyup(function (event) {
    let nic = $("#nic").val();
    if (regExNIC.test(nic)) {
        $("#nic").css('border', '2px solid #31d2f2');
        $("#errorNIC").text("");
        if (event.key == "Enter") {
            $("#drivinglicense").focus();
        }
    } else {
        $("#nic").css('border', '2px solid red');
        $("#errorNIC").text("Check this field whether correct !");
    }
});

$("#drivinglicense").keyup(function (event) {
    let dl = $("#drivinglicense").val();
    if (regExDrivingLNO.test(dl)) {
        $("#drivinglicense").css('border', '2px solid #31d2f2');
        $("#errorDrivingLicense").text("");
        if (event.key == "Enter") {
            $('#btnRegister').prop('disabled', false);
        }
    } else {
        $("#drivinglicense").css('border', '2px solid red');
        $("#errorDrivingLicense").text("Check this field whether correct !");
    }
});

/*--------validation end--------------*/

/*---------------date--------------*/
var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);

/*-----------generate register id--------------*/

function generateRegisterIds() {
    $("#generateCusId").text("C00-0001");
    var test = "id";

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/customer?test="+test,
        method: "GET",
        success: function (response) {
            var customerId = response.data;
            var tempId = parseInt(customerId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#generateCusId").text("C00-000" + tempId);
            } else if (tempId <= 99) {
                $("#generateCusId").text("C00-00" + tempId);
            } else if (tempId <= 999) {
                $("#generateCusId").text("C00-0" + tempId);
            } else {
                $("#generateCusId").text("C00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }

    });
}

$("#btnRegister").click(function () {
    if ($("#username").val() == "" || $("#password").val() == "" || $("#customername").val() == "" || $("#customeraddress").val() == "" ||
        $("#contactnumber").val() == "" || $("#email").val() == "" || $("#nic").val() == "" || $("#drivinglicense").val() == ""){
        alert("All Fields Are Required !");
    }else {
        if ($('#loginCheck').is(':checked')){
            if ($('#uploadmyimage').get(0).files.length === 0 || $('#uploadnicimage').get(0).files.length === 0 || $('#uploaddrivinglicence').get(0).files.length === 0) {
                alert("No files selected.");
            }else {
                $('#btnRegister').prop('disabled', false);
                register();
            }
        }else {
            alert("You Must Accept Our Terms And Conditions Before Register");
        }
    }
});

function register() {
    var cusDetail = {
        customerId: $("#generateCusId").text(),
        customerName: $("#customername").val(),
        username: $("#username").val(),
        password: $("#password").val(),
        registeredDate: today,
        customerAddress: $("#customeraddress").val(),
        customerContact: $("#contactnumber").val(),
        customerEmail: $("#email").val(),
        customerNicNo: $("#nic").val(),
        customerDrivingLicenseNo: $("#drivinglicense").val()
    }

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/customer",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(cusDetail),
        success: function (response) {
            console.log("successs");
            if (response.code == 200){
                alert($("#customername").val() + " "+ response.message);
            }
            registerToSystem();
            generateRegisterIds();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });

}



