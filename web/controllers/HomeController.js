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
        $("#pickUpDate").css('border', '2px solid #31d2f2');
        $("#errorPickupDate").text("");
        if (event.key == "Enter") {
            $("#pickUpTime").focus();
        }
    } else {
        $("#pickUpDate").css('border', '2px solid red');
        $("#errorPickupDate").text("Check this field whether correct !");
    }
});

$("#pickUpTime").keyup(function (event) {
    let pickupTime = $("#pickUpTime").val();
    if (regExPickupTime.test(pickupTime)) {
        $("#pickUpTime").css('border', '2px solid #31d2f2');
        $("#errorPickupTime").text("");
        if (event.key == "Enter") {
            $("#returnDate").focus();
        }
    } else {
        $("#pickUpTime").css('border', '2px solid red');
        $("#errorPickupTime").text("Check this field whether correct !");
    }
});

$("#returnDate").keyup(function (event) {
    let returnDate = $("#returnDate").val();
    if (regExReturnDate.test(returnDate)) {
        $("#returnDate").css('border', '2px solid #31d2f2');
        $("#errorReturnDate").text("");
        if (event.key == "Enter") {
            $("#returnTime").focus();
        }
    } else {
        $("#returnDate").css('border', '2px solid red');
        $("#errorReturnDate").text("Check this field whether correct !");
    }
});

$("#returnTime").keyup(function (event) {
    let returnTime = $("#returnTime").val();
    if (regExReturnTime.test(returnTime)) {
        $("#returnTime").css('border', '2px solid #31d2f2');
        $("#errorReturnTime").text("");
        if (event.key == "Enter") {
            $("#pickUpLocation").focus();
        }
    } else {
        $("#returnTime").css('border', '2px solid red');
        $("#errorReturnTime").text("Check this field whether correct !");
    }
});

$("#pickUpLocation").keyup(function (event) {
    let pickupLocation = $("#pickUpLocation").val();
    if (regExPickupLocation.test(pickupLocation)) {
        $("#pickUpLocation").css('border', '2px solid #31d2f2');
        $("#errorPickupLocation").text("");
        if (event.key == "Enter") {
            $("#returnLocation").focus();
        }
    } else {
        $("#pickUpLocation").css('border', '2px solid red');
        $("#errorPickupLocation").text("Check this field whether correct !");
    }
});

$("#returnLocation").keyup(function (event) {
    let returnLocation = $("#returnLocation").val();
    if (regExReturnLocation.test(returnLocation)) {
        $("#returnLocation").css('border', '2px solid #31d2f2');
        $("#errorReturnLocation").text("");
        if (event.key == "Enter") {
            $("#destination").focus();
        }
    } else {
        $("#returnLocation").css('border', '2px solid red');
        $("#errorReturnLocation").text("Check this field whether correct !");
    }
});

$("#destination").keyup(function (event) {
    let destination = $("#destination").val();
    if (regExDestination.test(destination)) {
        $("#destination").css('border', '2px solid #31d2f2');
        $("#errorDestination").text("");
        if (event.key == "Enter") {
            $("#duration").focus();
        }
    } else {
        $("#destination").css('border', '2px solid red');
        $("#errorDestination").text("Check this field whether correct !");
    }
});

$("#duration").keyup(function (event) {
    let duration = $("#duration").val();
    if (regExDuration.test(duration)) {
        $("#duration").css('border', '2px solid #31d2f2');
        $("#errorDuration").text("");
        $('#btnSearchForRent').prop('disabled', false);
    } else {
        $("#duration").css('border', '2px solid red');
        $("#errorDuration").text("Check this field whether correct !");
    }
});

$("#btnSearchForRent").click(function () {
    if ($("#pickUpDate").val() == "" || $("#pickUpTime").val() == "" || $("#pickUpLocation").val() == "" || $("#returnDate").val() == "" ||
        $("#returnTime").val() == "" || $("#returnLocation").val() == "" || $("#duration").val() == "" || $("#destination").val() == ""){
        alert("All Fields Are Required !");
        $('#btnSearchForRent').prop('disabled', false);
    }else {
        searchUserAlreadyExistsToLog()
        searchCars();
    }
});

function searchUserAlreadyExistsToLog() {
   /* $.ajax({
        url: "http://localhost:8080/backend/customer?option=SEARCH&cusId=" + $("#customerId").val(),
        method: "GET",
        success: function (response) {
            if (response.id == $("#customerId").val()) {
                search = true;
            }
        },
        error: function (ob, statusText, error) {
            search = false;
            alert("No Such Customer");
            loadAllCustomer();
        }
    });*/

}

