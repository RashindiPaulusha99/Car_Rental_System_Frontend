$("#tblSchedule tbody > tr").off("click");

function loadSchedule() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/schedule",
        method: "GET",
        success: function (response) {

            $(".tblSchedule tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.scheduleId} </td><td> ${responseKey.reserveId} </td><td> ${responseKey.reserveDetails.carId} </td><td> ${responseKey.reserveDetails.driverId} </td>
                               <td> ${responseKey.pickUpDate} </td><td> ${responseKey.pickUpTime} </td><td> ${responseKey.pickUpVenue} </td> 
                                <td>${responseKey.returnDate} </td><td> ${responseKey.returnTime} </td><td>${responseKey.returnVenue}</td>
                                <td><span class="badge badge-success rounded-pill d-inline">${responseKey.releaseOrNot}</span></td></tr>`;
                $(".tblSchedule tbody").append(raw);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}