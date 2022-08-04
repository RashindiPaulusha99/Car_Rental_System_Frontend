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

/*$("#tblReserve tbody > tr").off("click");*/
function clickReserveTableRow() {
    $("#tblReserve tbody > tr").click(function () {

        tblReserveRow = $(this);

        $('#ReserveDetailsPage').css('transform','scale(1)');
        loadCarIds();
        $("#viewReserveId").val($.trim(tblReserveRow.children(':nth-child(2)').text()));
        clearReFields();
        /*var driverId = $.trim(tblDriverRow.children(':nth-child(1)').text());
        var driverName = $.trim(tblDriverRow.children(':nth-child(2)').text());
        var driverAddress = $.trim(tblDriverRow.children(':nth-child(3)').text());
        var driverAge = $.trim(tblDriverRow.children(':nth-child(4)').text());
        var driverContact = $.trim(tblDriverRow.children(':nth-child(5)').text());

        $("#driverReleaseOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblDriverRow.children(':nth-child(6)').text())));

        $("#driverId").val(driverId);
        $("#driverName").val(driverName);
        $("#driverAddress").val(driverAddress);
        $("#driverAge").val(driverAge);
        $("#driverContact").val(driverContact);*/
    });
}

function loadCarIds() {
    $("#viewCarId").empty();
    $("#viewCarId").append($("<option></option>").attr("value", 0).text("Select ID"));

    var countCarIds = 1;

    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/"+$.trim(tblReserveRow.children(':nth-child(2)').text()),
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

    var countCarIds = 1;

    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/"+$.trim(tblReserveRow.children(':nth-child(2)').text()),
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
