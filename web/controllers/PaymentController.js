function loadPayments() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/payment",
        method: "GET",
        success: function (response) {

            $("#tblPayment tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.scheduleId} </td><td> ${responseKey.reserveId} </td><td> ${responseKey.reserveDetails.carId} </td><td> ${responseKey.reserveDetails.driverId} </td>
                               <td> ${responseKey.pickUpDate} </td><td> ${responseKey.pickUpTime} </td><td> ${responseKey.pickUpVenue} </td> 
                                <td>${responseKey.returnDate} </td><td> ${responseKey.returnTime} </td><td>${responseKey.returnVenue}</td>
                                <td><span class="badge badge-success rounded-pill d-inline">${responseKey.releaseOrNot}</span></td></tr>`;
                $("#tblPayment tbody").append(raw);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}