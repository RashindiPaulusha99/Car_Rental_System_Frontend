var regExPickupDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExPickupTime = /^\d{2,}:(?:[0-5]\d)$/;
var regExPickupLocation = /^[0-9A-Z a-z,/:]{4,100}$/;
var regExReturnDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExReturnTime = /^\d{2,}:(?:[0-5]\d)$/;
var regExReturnLocation = /^[0-9A-Z a-z,/:]{4,100}$/;
var regExDestination = /^[0-9A-Z a-z,/:]{4,100}$/;
var regExDuration = /^[1-9]{1,10}$/;

$("#pickUpDate").keyup(function (event) {
    let pickupDate = $("#pickUpDate").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDate").css('border', '2px solid green');
        $("#errorPickupDate").text("");
        if (event.key == "Enter") {
            $("#pickUpTime").focus();
        }
    } else {
        $("#pickUpDate").css('border', '2px solid red');
        $("#errorPickupDate").text("PickUp Date is a required field!");
    }
});

$("#pickUpTime").keyup(function (event) {
    let pickupTime = $("#pickUpTime").val();
    if (regExPickupTime.test(pickupTime)) {
        $("#pickUpTime").css('border', '2px solid green');
        $("#errorPickupTime").text("");
        if (event.key == "Enter") {
            $("#returnDate").focus();
        }
    } else {
        $("#pickUpTime").css('border', '2px solid red');
        $("#errorPickupTime").text("PickUp Date is a required field!");
    }
});

$("#returnDate").keyup(function (event) {
    let returnDate = $("#returnDate").val();
    if (regExReturnDate.test(returnDate)) {
        $("#returnDate").css('border', '2px solid green');
        $("#errorReturnDate").text("");
        if (event.key == "Enter") {
            $("#returnTime").focus();
        }
    } else {
        $("#returnDate").css('border', '2px solid red');
        $("#errorReturnDate").text("PickUp Date is a required field!");
    }
});

$("#pickUpDate").keyup(function (event) {
    let pickupDate = $("#pickUpDate").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDate").css('border', '2px solid green');
        $("#errorName").text("");
        if (event.key == "Enter") {
            $("#pickUpTime").focus();
        }
    } else {
        $("#pickUpDate").css('border', '2px solid red');
        $("#errorPickupDate").text("PickUp Date is a required field!");
    }
});

$("#pickUpDate").keyup(function (event) {
    let pickupDate = $("#pickUpDate").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDate").css('border', '2px solid green');
        $("#errorName").text("");
        if (event.key == "Enter") {
            $("#pickUpTime").focus();
        }
    } else {
        $("#pickUpDate").css('border', '2px solid red');
        $("#errorPickupDate").text("PickUp Date is a required field!");
    }
});

$("#pickUpDate").keyup(function (event) {
    let pickupDate = $("#pickUpDate").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDate").css('border', '2px solid green');
        $("#errorName").text("");
        if (event.key == "Enter") {
            $("#pickUpTime").focus();
        }
    } else {
        $("#pickUpDate").css('border', '2px solid red');
        $("#errorPickupDate").text("PickUp Date is a required field!");
    }
});

$("#pickUpDate").keyup(function (event) {
    let pickupDate = $("#pickUpDate").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDate").css('border', '2px solid green');
        $("#errorName").text("");
        if (event.key == "Enter") {
            $("#pickUpTime").focus();
        }
    } else {
        $("#pickUpDate").css('border', '2px solid red');
        $("#errorPickupDate").text("PickUp Date is a required field!");
    }
});

$("#pickUpDate").keyup(function (event) {
    let pickupDate = $("#pickUpDate").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDate").css('border', '2px solid green');
        $("#errorName").text("");
    } else {
        $("#pickUpDate").css('border', '2px solid red');
        $("#errorPickupDate").text("PickUp Date is a required field!");
    }
});

$("#btnSearchForRent").click(function () {
    if ($("#pickUpDate").val() == "" || $("#pickUpTime").val() == "" || $("#pickUpLocation").val() == "" || $("#returnDate").val() == "" ||
        $("#returnTime").val() == "" || $("#returnLocation").val() == "" || $("#duration").val() == "" || $("#destination").val() == ""){
        /*alert("All Fields Are Required !");
        $("#btnSearchForRent").disable();*/
    }else {
        searchCars();
    }
});

