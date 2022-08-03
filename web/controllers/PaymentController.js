var regExPrice = /^[0-9]{1,10}(.)[0-9]{2}$/;
var regExDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExDistance = /^[0-9]{1,5}$/;

$("#paymentDate").keyup(function (event) {
    let date = $("#paymentDate").val();
    if (regExDate.test(date)) {
        $("#paymentDate").css('border', '2px solid #31d2f2');
        $("#errorDriverUsername").text("");
        if (event.key == "Enter") {
            $("#driverPassword").focus();
        }
    } else {
        $("#paymentDate").css('border', '2px solid red');
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