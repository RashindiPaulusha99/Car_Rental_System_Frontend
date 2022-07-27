function loadAllReserve(){
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/reserve",
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
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}