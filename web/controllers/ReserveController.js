function loadAllReserve(){
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve",
        method: "GET",
        success: function (response) {

            $("#tblReserve tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.reserveDate} </td><td> ${responseKey.reserveId} </td><td> ${responseKey.customer.customerId} </td>
                               <td> ${responseKey.pickUpDate} </td><td> ${responseKey.pickUpTime} </td><td> ${responseKey.pickUpVenue} </td> 
                                <td>${responseKey.returnDate} </td><td> ${responseKey.returnTime} </td><td>${responseKey.returnVenue}</td>
                                <td>${responseKey.destination}</td><td>${responseKey.duration}</td><td><span class="badge badge-success rounded-pill d-inline">${responseKey.wantDriverOrNot}</span></td>
                                <td><span class="badge badge-success rounded-pill d-inline">${responseKey.requestAcceptOrDeny}</span></td><td>
                                <button type="button" class="btn btn-info btn-sm px-3" data-ripple-color="dark">
                                    <i class="fas fa-eye"></i>
                                </button>
                                </td></tr>`;
                $("#tblReserve tbody").append(raw);
            }
            clickReserveTableRow();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

var tblReserveRow =-1;

function clickReserveTableRow() {
    $("#tblReserve tbody > tr").click(function () {

        tblReserveRow = $(this);

        $('#ReserveDetailsPage').css('transform','scale(1)');
        loadCarIds($.trim(tblReserveRow.children(':nth-child(2)').text()));
        $("#viewReserveId").val($.trim(tblReserveRow.children(':nth-child(2)').text()));
        clearReFields();
    });
}

function loadCarIds(reserveId) {
    $("#viewCarId").empty();
    $("#viewCarId").append($("<option></option>").attr("value", 0).text("Select ID"));

    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/"+reserveId,
        method: "GET",
        success: function (response) {
            for (let i = 0; i <response.data.reserveDetails.length ; i++) {
                $("#viewCarId").append($("<option></option>").attr("value", i+1).text(response.data.reserveDetails[i].carId));
            }

        },
        error: function (ob) {
        }
    });
}

$("#viewCarId").click(function () {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/" + $.trim(tblReserveRow.children(':nth-child(2)').text()),
        method: "GET",
        success: function (response) {
            for (let i = 0; i < response.data.reserveDetails.length; i++) {
                if ($("#viewCarId option:selected").text() == response.data.reserveDetails[i].carId){
                    $("#viewBrand").val(response.data.reserveDetails[i].brand);
                    $("#viewColour").val(response.data.reserveDetails[i].colour);
                    $("#viewType").val(response.data.reserveDetails[i].type);
                    $("#viewDriverId").val(response.data.reserveDetails[i].driverId);
                    $("#viewDriverName").val(response.data.reserveDetails[i].driverName);
                    $("#viewDriverContact").val(response.data.reserveDetails[i].driverContact);
                    $("#viewLoseDamagePayment").val(response.data.reserveDetails[i].loseDamageWaiverPayment);
                }
            }
        },
        error: function (ob) {
        }
    });
});

function clearReFields(){
    $("#viewBrand").val("");
    $("#viewColour").val("");
    $("#viewType").val("");
    $("#viewDriverId").val("");
    $("#viewDriverName").val("");
    $("#viewDriverContact").val("");
    $("#viewLoseDamagePayment").val("");

    $("#viewBrand").css('border', '1px solid #e9ecef');
    $("#viewColour").css('border', '1px solid #e9ecef');
    $("#viewType").css('border', '1px solid #e9ecef');
    $("#viewDriverId").css('border', '1px solid #e9ecef');
    $("#viewDriverName").css('border', '1px solid #e9ecef');
    $("#viewDriverContact").css('border', '1px solid #e9ecef');
    $("#viewLoseDamagePayment").css('border', '1px solid #e9ecef');
}

function relevantReservations() {
    $("#chooseReservationIds").empty();
    $("#chooseReservationIds").append($("<option></option>").attr("value", 0).text("Select ID"));

    var countReIds = 1;
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve",
        method: "GET",
        success: function (response) {
            for (var ids of response.data) {
                $("#chooseReservationIds").append($("<option></option>").attr("value", countReIds).text(ids.reserveId));
                countReIds++;
            }
        },
        error: function (ob) {
        }
    });
}

$("#chooseReservationIds").click(function () {
    $("#CarIds").empty();
    $("#CarIds").append($("<option></option>").attr("value", 0).text("Select ID"));


    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/" + $("#chooseReservationIds option:selected").text(),
        method: "GET",
        success: function (response) {
            for (let i = 0; i <response.data.reserveDetails.length ; i++) {
                $("#CarIds").append($("<option></option>").attr("value", i+1).text(response.data.reserveDetails[i].carId));
            }
        },
        error: function (ob) {
        }
    });
});

$("#CarIds").click(function () {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/" + $("#chooseReservationIds option:selected").text(),
        method: "GET",
        success: function (response) {
            for (let i = 0; i < response.data.reserveDetails.length; i++) {
                if ($("#CarIds option:selected").text() == response.data.reserveDetails[i].carId){
                    $("#selectedDriverId").val(response.data.reserveDetails[i].driverId);
                    $("#selectedDriverName").val(response.data.reserveDetails[i].driverName);
                }
            }
        },
        error: function (ob) {
        }
    });
});

function chooseDriverIds() {
    $("#chooseNewDriverIds").empty();
    $("#chooseNewDriverIds").append($("<option></option>").attr("value", 0).text("Select ID"));

    var countReIds = 1;
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/driver/RELEASE/"+"Release",
        method: "GET",
        success: function (response) {
            for (var ids of response.data) {
                $("#chooseNewDriverIds").append($("<option></option>").attr("value", countReIds).text(ids.driverId));
                countReIds++;
            }
        },
        error: function (ob) {
        }
    });
}

$("#chooseNewDriverIds").click(function () {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/driver/" + $("#chooseNewDriverIds option:selected").text(),
        method: "GET",
        success: function (response) {
            $("#changedNewDriverName").val(response.data.driverName);
            $("#changedNewDriverContact").val(response.data.driverContact);
        },
        error: function (ob) {
        }
    });
});
