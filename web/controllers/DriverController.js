/*--------validation start--------------*/

var regExDusername = /^[A-Z|a-z\s]{3,20}$/;
var regExDPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExDName = /^[A-Z|a-z\s]{3,20}$/;
var regExContact = /^(071-|077-|075-|078-|)[0-9]{7}$/;
var regExAge = /^[1-9]{1,2}$/;
var regExDAddress = /^[0-9A-Z a-z,/:]{4,50}$/;

$("#driverUsername").keyup(function (event) {
    let username = $("#driverUsername").val();
    if (regExDusername.test(username)) {
        $("#driverUsername").css('border', '2px solid #31d2f2');
        $("#errorDriverUsername").text("");
        if (event.key == "Enter") {
            $("#driverPassword").focus();
        }
    } else {
        $("#driverUsername").css('border', '2px solid red');
        $("#errorDriverUsername").text("Check this field whether correct !");
    }
});

$("#driverPassword").keyup(function (event) {
    let password = $("#driverPassword").val();
    if (regExDPassword.test(password)) {
        $("#driverPassword").css('border', '2px solid #31d2f2');
        $("#errorDPassword").text("");
        if (event.key == "Enter") {
            $("#driverName").focus();
        }
    } else {
        $("#driverPassword").css('border', '2px solid red');
        $("#errorDPassword").text("Check this field whether correct !");
    }
});

$("#driverName").keyup(function (event) {
    let name = $("#driverName").val();
    if (regExDName.test(name)) {
        $("#driverName").css('border', '2px solid #31d2f2');
        $("#errorDName").text("");
        if (event.key == "Enter") {
            $("#driverAddress").focus();
        }
    } else {
        $("#driverName").css('border', '2px solid red');
        $("#errorDName").text("Check this field whether correct !");
    }
});

$("#driverAddress").keyup(function (event) {
    let address = $("#driverAddress").val();
    if (regExDAddress.test(address)) {
        $("#driverAddress").css('border', '2px solid #31d2f2');
        $("#errorDAddress").text("");
        if (event.key == "Enter") {
            $("#driverAge").focus();
        }
    } else {
        $("#driverAddress").css('border', '2px solid red');
        $("#errorDAddress").text("Check this field whether correct !");
    }
});

$("#driverAge").keyup(function (event) {
    let age = $("#driverAge").val();
    if (regExAge.test(age)) {
        $("#driverAge").css('border', '2px solid #31d2f2');
        $("#errorDAge").text("");
        if (event.key == "Enter") {
            $("#driverContact").focus();
        }
    } else {
        $("#driverAge").css('border', '2px solid red');
        $("#errorDAge").text("Check this field whether correct !");
    }
});

$("#driverContact").keyup(function (event) {
    let contact = $("#driverContact").val();
    if (regExContact.test(contact)) {
        $("#driverContact").css('border', '2px solid #31d2f2');
        $("#errorDContact").text("");

    } else {
        $("#driverContact").css('border', '2px solid red');
        $("#errorDContact").text("Check this field whether correct !");
    }
});

function generateDriverIds() {
    $("#driverId").val("D00-0001");
    var test = "id";

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/driver?test="+test,
        method: "GET",
        success: function (response) {
            var driverId = response.data;
            var tempId = parseInt(driverId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#driverId").val("D00-000" + tempId);
            } else if (tempId <= 99) {
                $("#driverId").val("D00-00" + tempId);
            } else if (tempId <= 999) {
                $("#driverId").val("D00-0" + tempId);
            } else {
                $("#driverId").val("D00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }

    });
}

$("#btnAddNewDriver").click(function () {
    $("#tblDriver tbody > tr").off("click");

    if ($("#driverUsername").val() == "" || $("#driverPassword").val() == "" || $("#driverName").val() == "" || $("#driverAddress").val() == "" ||
        $("#driverAge").val() == "" || $("#driverContact").val() == "" || $("#driverReleaseOrNot option:selected").val() == ""){
        alert("All Fields Are Required !");
    }else {
        if ($("#errorDriverUsername").text() != "" || $("#errorDName").text() != "" || $("#errorDPassword").text() != "" || $("#errorDAddress").text() != "" ||
            $("#errorDAge").text() != "" || $("#errorDContact").text() != ""){
            alert("Check Input Fields Whether Correct !");
        }else {
            addNewDriver();
        }
    }
});

function addNewDriver() {
    var user={
        userId:$("#generateUserId").text(),
        username:$("#driverUsername").val(),
        password: $("#driverPassword").val()
    }

    var driverDetail = {
        driverId: $("#driverId").val(),
        users:user,
        driverName: $("#driverName").val(),
        driverAddress: $("#driverAddress").val(),
        driverAge: $("#driverAge").val(),
        driverContact: $("#driverContact").val(),
        releaseOrNot: $("#driverReleaseOrNot option:selected").text()
    }

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/driver",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(driverDetail),
        success: function (response) {
            if (response.code == 200){
                registerUser(user);
                alert($("#driverId").val() + " "+ response.message);
                generateDriverIds();
                generateUserIds();
                loadAllDrivers();
                clearDriverFields();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function loadAllDrivers() {

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/driver",
        method: "GET",
        success: function (response) {

            $("#tblDriver tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.driverId} </td><td> ${responseKey.driverName} </td><td> ${responseKey.driverAddress} </td><td> ${responseKey.driverAge} </td><td> ${responseKey.driverContact} </td><td> <span class="badge badge-success rounded-pill d-inline">${responseKey.releaseOrNot}</span> </td>
                <td><button type="button" id="btnEditDriver"  class="btn btn-warning btn-sm px-3" data-ripple-color="dark">
                     <i class="fas fa-pen-alt"></i>
                </button></td></tr>`;
                $("#tblDriver tbody").append(raw);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });

}

function clearDriverFields() {
    generateDriverIds();

    $("#driverUsername").val("");
    $("#driverName").val("");
    $("#driverContact").val("");
    $("#driverAge").val("");
    $("#driverAddress").val("");
    $("#driverPassword").val("");

    $("#driverUsername").css('border', '2px solid transparent');
    $("#driverPassword").css('border', '2px solid transparent');
    $("#driverName").css('border', '2px solid transparent');
    $("#driverAddress").css('border', '2px solid transparent');
    $("#driverAge").css('border', '2px solid transparent');
    $("#driverContact").css('border', '2px solid transparent');
}

