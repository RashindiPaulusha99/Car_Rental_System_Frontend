function pasteDate(){
    $("#pickUpDateEdit").val($("#pickUpDate").val());
    $("#pickUpTimeEdit").val($("#pickUpTime").val());
    $("#returnDateEdit").val($("#returnDate").val());
    $("#returnTimeEdit").val($("#returnTime").val());
    $("#pickUpLocationEdit").val($("#pickUpLocation").val());
    $("#returnLocationEdit").val($("#returnLocation").val());
    $("#destinationEdit").val($("#destination").val());
    $("#durationEdit").val($("#duration").val());

    $("#pickUpDateEdit").prop("disabled", true);
    $("#pickUpTimeEdit").prop("disabled", true);
    $("#returnDateEdit").prop("disabled", true);
    $("#returnTimeEdit").prop("disabled", true);
    $("#pickUpLocationEdit").prop("disabled", true);
    $("#returnLocationEdit").prop("disabled", true);
    $("#destinationEdit").prop("disabled", true);
    $("#durationEdit").prop("disabled", true);
}

$("#pickUpDateEdit").keyup(function (event) {
    let pickupDate = $("#pickUpDateEdit").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDateEdit").css('border', '2px solid #31d2f2');
        $("#errorPickupDateAgain").text("");
    } else {
        $("#pickUpDateEdit").css('border', '2px solid red');
        $("#errorPickupDateAgain").text("Check this field whether correct !");
    }
});

$("#pickUpTimeEdit").keyup(function (event) {
    let pickupTime = $("#pickUpTimeEdit").val();
    if (regExPickupTime.test(pickupTime)) {
        $("#pickUpTimeEdit").css('border', '2px solid #31d2f2');
        $("#errorPickupTimeAgain").text("");
    } else {
        $("#pickUpTimeEdit").css('border', '2px solid red');
        $("#errorPickupTimeAgain").text("Check this field whether correct !");
    }
});

$("#returnDateEdit").keyup(function (event) {
    let returnDate = $("#returnDateEdit").val();
    if (regExReturnDate.test(returnDate)) {
        $("#returnDateEdit").css('border', '2px solid #31d2f2');
        $("#errorDropDateAgain").text("");
    } else {
        $("#returnDateEdit").css('border', '2px solid red');
        $("#errorDropDateAgain").text("Check this field whether correct !");
    }
});

$("#returnTimeEdit").keyup(function (event) {
    let returnTime = $("#returnTimeEdit").val();
    if (regExReturnTime.test(returnTime)) {
        $("#returnTimeEdit").css('border', '2px solid #31d2f2');
        $("#errorDroTimeAgain").text("");
    } else {
        $("#returnTimeEdit").css('border', '2px solid red');
        $("#errorDroTimeAgain").text("Check this field whether correct !");
    }
});

$("#pickUpLocationEdit").keyup(function (event) {
    let pickupLocation = $("#pickUpLocationEdit").val();
    if (regExPickupLocation.test(pickupLocation)) {
        $("#pickUpLocationEdit").css('border', '2px solid #31d2f2');
        $("#errorPickupLocationAgain").text("");
    } else {
        $("#pickUpLocationEdit").css('border', '2px solid red');
        $("#errorPickupLocationAgain").text("Check this field whether correct !");
    }
});

$("#returnLocationEdit").keyup(function (event) {
    let returnLocation = $("#returnLocationEdit").val();
    if (regExReturnLocation.test(returnLocation)) {
        $("#returnLocationEdit").css('border', '2px solid #31d2f2');
        $("#errorDropLocationAgain").text("");
    } else {
        $("#returnLocationEdit").css('border', '2px solid red');
        $("#errorDropLocationAgain").text("Check this field whether correct !");
    }
});

$("#destinationEdit").keyup(function (event) {
    let destination = $("#destinationEdit").val();
    if (regExDestination.test(destination)) {
        $("#destinationEdit").css('border', '2px solid #31d2f2');
        $("#errorDestinationAgain").text("");
    } else {
        $("#destinationEdit").css('border', '2px solid red');
        $("#errorDestinationAgain").text("Check this field whether correct !");
    }
});

$("#durationEdit").keyup(function (event) {
    let duration = $("#durationEdit").val();
    if (regExDuration.test(duration)) {
        $("#durationEdit").css('border', '2px solid #31d2f2');
        $("#errorDurationAgain").text("");
    } else {
        $("#durationEdit").css('border', '2px solid red');
        $("#errorDurationAgain").text("Check this field whether correct !");
    }
});

$("#editRentData").click(function () {
    let text = "Do you want to Edit Data?";

    if (confirm(text) == true) {
        $("#pickUpDateEdit").prop("disabled", false);
        $("#pickUpTimeEdit").prop("disabled", false);
        $("#returnDateEdit").prop("disabled", false);
        $("#returnTimeEdit").prop("disabled", false);
        $("#pickUpLocationEdit").prop("disabled", false);
        $("#returnLocationEdit").prop("disabled", false);
        $("#destinationEdit").prop("disabled", false);
        $("#durationEdit").prop("disabled", false);
    }
});

