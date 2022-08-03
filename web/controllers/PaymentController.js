var regExPrice = /^[0-9]{1,10}(.)[0-9]{2}$/;
var regExDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExDistance = /^[0-9]{1,5}$/;

$("#paymentDate").keyup(function (event) {
    let date = $("#paymentDate").val();
    if (regExDate.test(date)) {
        $("#paymentDate").css('border', '2px solid #31d2f2');
        $("#errorPaymentDate").text("");
        if (event.key == "Enter") {
            $("#rentFee").focus();
        }
    } else {
        $("#paymentDate").css('border', '2px solid red');
        $("#errorPaymentDate").text("Check this field whether correct !");
    }
});

$("#rentFee").keyup(function (event) {
    let rentFee = $("#rentFee").val();
    if (regExPrice.test(rentFee)) {
        $("#rentFee").css('border', '2px solid #31d2f2');
        $("#errorRentFee").text("");
        if (event.key == "Enter") {
            $("#driverFee").focus();
        }
    } else {
        $("#rentFee").css('border', '2px solid red');
        $("#errorRentFee").text("Check this field whether correct !");
    }
});

$("#driverFee").keyup(function (event) {
    let driverFee = $("#driverFee").val();
    if (regExPrice.test(driverFee)) {
        $("#driverFee").css('border', '2px solid #31d2f2');
        $("#errorDriverFee").text("");
        if (event.key == "Enter") {
            $("#loseDamageWaiverPayment").focus();
        }
    } else {
        $("#driverFee").css('border', '2px solid red');
        $("#errorDriverFee").text("Check this field whether correct !");
    }
});

$("#loseDamageWaiverPayment").keyup(function (event) {
    let damage = $("#loseDamageWaiverPayment").val();
    if (regExPrice.test(damage)) {
        $("#loseDamageWaiverPayment").css('border', '2px solid #31d2f2');
        $("#errorDamagePayment").text("");
        if (event.key == "Enter") {
            $("#reducedLoseDamageWaiverPayment").focus();
        }
    } else {
        $("#loseDamageWaiverPayment").css('border', '2px solid red');
        $("#errorDamagePayment").text("Check this field whether correct !");
    }
});

$("#reducedLoseDamageWaiverPayment").keyup(function (event) {
    let damage = $("#reducedLoseDamageWaiverPayment").val();
    if (regExPrice.test(damage)) {
        $("#reducedLoseDamageWaiverPayment").css('border', '2px solid #31d2f2');
        $("#errorReduceDamagePayment").text("");
        if (event.key == "Enter") {
            $("#travelledDistance").focus();
        }
    } else {
        $("#reducedLoseDamageWaiverPayment").css('border', '2px solid red');
        $("#errorReduceDamagePayment").text("Check this field whether correct !");
    }
});

$("#travelledDistance").keyup(function (event) {
    let distance = $("#travelledDistance").val();
    if (regExDistance.test(distance)) {
        $("#travelledDistance").css('border', '2px solid #31d2f2');
        $("#errorTravelledDistance").text("");
        if (event.key == "Enter") {
            $("#extraKm").focus();
        }
    } else {
        $("#travelledDistance").css('border', '2px solid red');
        $("#errorTravelledDistance").text("Check this field whether correct !");
    }
});

$("#extraKm").keyup(function (event) {
    let extra = $("#extraKm").val();
    if (regExDistance.test(extra)) {
        $("#extraKm").css('border', '2px solid #31d2f2');
        $("#errorTravelledExtraKM").text("");
        if (event.key == "Enter") {
            $("#priceForTravelledExtraKm").focus();
        }
    } else {
        $("#extraKm").css('border', '2px solid red');
        $("#errorTravelledExtraKM").text("Check this field whether correct !");
    }
});

$("#priceForTravelledExtraKm").keyup(function (event) {
    let price = $("#priceForTravelledExtraKm").val();
    if (regExPrice.test(price)) {
        $("#priceForTravelledExtraKm").css('border', '2px solid #31d2f2');
        $("#errorPriceExtraKM").text("");
    } else {
        $("#priceForTravelledExtraKm").css('border', '2px solid red');
        $("#errorPriceExtraKM").text("Check this field whether correct !");
    }
});



$("#tblPayment tbody > tr").off("click");

function loadPayments() {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/payment",
        method: "GET",
        success: function (response) {

            $("#tblPayment tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.paymentId} </td><td> ${responseKey.paymentDate} </td><td> ${responseKey.rentFee} </td><td> ${responseKey.driverFee} </td>
                               <td> ${responseKey.loseDamagePayment} </td><td> ${responseKey.reduceLoseDamagePayment} </td><td>
                                <span class="badge badge-success rounded-pill d-inline">${responseKey.harmOrNot}</span></td> 
                                <td>${responseKey.travelledDistance} </td><td> ${responseKey.extraKm} </td><td>${responseKey.extraKmPrice}</td><td>${responseKey.fullPayment}</td>
                                <td><button type="button" class="btn btn-warning btn-sm px-3" data-ripple-color="dark">
                                    <i class="fas fa-pen-alt"></i>
                                </button></td></tr>`;
                $("#tblPayment tbody").append(raw);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}