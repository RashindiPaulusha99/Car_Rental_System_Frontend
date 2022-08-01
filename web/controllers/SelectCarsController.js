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

$("#noResult").css('display','none');

countAvailableCars();
function countAvailableCars() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/AVAILABLECOUNT/" + "Available",
        method: "GET",
        success: function (response) {
            $("#availableCars").text(response.data);
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

var tblSelectCarRow = -1;
loadAllCarsToSee();
function loadAllCarsToSee() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car",
        method: "GET",
        success: function (response) {
            if (response.data.length == 0){
                $("#noResult").css('display','block');
            }else {
                $("#noResult").css('display','none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td class="td">
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
                        </td>
                        <td class="td">
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td class="td">
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td class="td">
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td class="td">
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0 btnRent" id="btnRent">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            $(".btnRent").click(function () {
                $("#tblShowCars tbody > tr").off("click");
                $("#tblSelectedCars tbody > tr").off("click");

                let text = "Do you want to Rent this car ?";

                if (confirm(text) == true) {

                    $("#tblShowCars tbody > tr").click(function () {
                        tblSelectCarRow = $(this).children();

                        console.log(tblSelectCarRow.children()[1].innerText);
                        //openBookingPage();
                        pasteDataToReservationFields();
                        getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                        loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                    });

                }
            });

        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function pasteDataToReservationFields(){
    $("#BPickupDate").val($("#pickUpDateEdit").val());
    $("#BPickupTime").val($("#pickUpTimeEdit").val());
    $("#BReturnDate").val($("#returnDateEdit").val());
    $("#BReturnTime").val($("#returnTimeEdit").val());
    $("#BPickupLocation").val($("#pickUpLocationEdit").val());
    $("#BReturnLocation").val($("#returnLocationEdit").val());
    $("#BDestination").val($("#destinationEdit").val());
    $("#BDuration").val($("#durationEdit").val());
}

var lossPayment=0;
function getLoseDWPayment(carId){
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/" + carId,
        method: "GET",
        success: function (response) {
            if (response.data.type == "General"){
                lossPayment+=10000.00;
            }else if (response.data.type == "Premium"){
                lossPayment+=15000.00;
            }else if (response.data.type == "Luxury"){
                lossPayment+=20000.00;
            }
            $("#loseDamagePayment").val(lossPayment);

        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function loadSelectedCars(carId){
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/" + carId,
        method: "GET",
        success: function (response) {
            console.log($("#tblSelectedCars tbody tr .id").children()[1].text());

            for (var i = 0; i < $("#tblSelectedCars tbody tr").length; i++) {
                if (carId == $("#tblSelectedCars tbody tr .id").text()) {
                    alert("You Selected This Car Earlier. Choose Another One !");
                } else {
                    let raw = ` <tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <img src="assets/images/1200x-1.jpg" alt="" style="width: 200px; height: 200px" class=""/>
                            </div>
                           <h6 class="id text-white">${response.data.carId}</h6>
                        </td>
                        <td>
                        <h3>${response.data.brand}</h3>
                            <p class="mt-3 text-muted"><i class="fas fa-palette text-warning me-2"></i>${response.data.colour}</p>
                            <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${response.data.noOfPassengers}<span class="ms-1">Seats</span></p>
                            <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${response.data.transmissionType}</p>
                            <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${response.data.fuelType}</p>
                        </td>
                        <td>
                            <h3 class="mt-5 ">Rs.<span>${response.data.dailyRatePrice}</span><span>/day</span></h3>
                        </td>
                    </tr>`;
                    $("#tblSelectedCars tbody").append(raw);
                }
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });

}

$("#sort").click(function () {
    if ($("#sort option:selected").text() == "Passengers - Ascending"){
        findPassengersAsc($("#sort option:selected").text());
    }else if ($("#sort option:selected").text() == "Passengers - Descending"){
        findPassengersDsc($("#sort option:selected").text());
    }else if ($("#sort option:selected").text() == "Daily Rate Price - Ascending"){
        findDailyRateAsc($("#sort option:selected").text());
    }else if ($("#sort option:selected").text() == "Daily Rate Price - Descending"){
        findDailyRateDsc($("#sort option:selected").text());
    }else if ($("#sort option:selected").text() == "Monthly Rate Price - Ascending"){
        findMonthlyRateAsc($("#sort option:selected").text());
    }else if ($("#sort option:selected").text() == "Monthly Rate Price - Descending"){
        findMonthlyRateDsc($("#sort option:selected").text());
    }else if($("#sort option:selected").text() == "Recommended"){
        loadAllCarsToSee();
    }
});

function findPassengersAsc(passengerAsc) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/SORTPA/" + passengerAsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
        }
    });
}

function findPassengersDsc(passengerDsc) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/SORTPD/" + passengerDsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
        }
    });
}

function findDailyRateAsc(dailyRateAsc) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/SORTDA/" + dailyRateAsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
        }
    });
}

function findDailyRateDsc(dailyRateDsc) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/SORTDD/" + dailyRateDsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
        }
    });
}

function findMonthlyRateAsc(monthlyRateAsc) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/SORTMA/" + monthlyRateAsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
        }
    });
}

function findMonthlyRateDsc(monthlyRateDsc) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/SORTMD/" + monthlyRateDsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
        }
    });
}

$("#btnSearchCarsToSort").click(function () {
    findTransmissionType($("#searchCarsToSort").val());
    findType($("#searchCarsToSort").val());
    findBrand($("#searchCarsToSort").val());
    findFuelType($("#searchCarsToSort").val());
    findColour($("#searchCarsToSort").val());
});

function findTransmissionType(type) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/TYPETR/" +type ,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0){
                $("#noResult").css('display','block');
            }else {
                $("#noResult").css('display','none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findType(type) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/TYPET/" +type ,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0){
                $("#noResult").css('display','block');
            }else {
                $("#noResult").css('display','none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findBrand(type) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/TYPEB/" +type ,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0){
                $("#noResult").css('display','block');
            }else {
                $("#noResult").css('display','none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findFuelType(type) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/TYPEF/" +type ,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0){
                $("#noResult").css('display','block');
            }else {
                $("#noResult").css('display','none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findColour(type) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/TYPEC/" +type ,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0){
                $("#noResult").css('display','block');
            }else {
                $("#noResult").css('display','none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury"){
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                }else if (responseKey.type = "premium"){
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                }else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 shadow">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                        </td>
                        <td>
                            <div class="">
                                <p class="fw-bold mb-1 mt-1 fs-1">${responseKey.type}</p>
                                <p class="mb-5 mt-1 fw-normal fs-3">${responseKey.brand}</p>
                                <div class="center-block">
                                    <p class="mt-5 text-muted"><i class="fas fa-palette text-warning me-2"></i>${responseKey.colour}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-chair text-warning me-1"></i>${responseKey.noOfPassengers}<span class="ms-1">Seats</span></p>
                                    <p class="text-muted mt-0"><i class="fab fa-adn text-warning me-2"></i>${responseKey.transmissionType}</p>
                                    <p class="text-muted mt-0"><i class="fas fa-oil-can text-warning me-2"></i>${responseKey.fuelType}</p>
                                    <p class="text-muted mt-0"><i class="far fa-snowflake text-warning me-2"></i>A/C</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="position: relative; top: 7em">
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForDay}<span class="ms-2">km free/day</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i>${responseKey.freeKmForMonth}<span class="ms-2">km free/month</span></p>
                                <p class="text-muted"><i class="fas fa-check text-success me-3"></i><span class="me-2">Rs.</span>${responseKey.pricePerExtraKM}<span class="ms-2">/extra km</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="center-block" style="position: relative;top: 127px;">
                                <span class="badge badge-warning badge-lg bg-info rounded-pill d-inline fs-1">${responseKey.availableOrNot}</span>
                            </div>
                        </td>
                        <td>
                            <h3 class="text-danger text-center mt-5">DAILY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-2">${rentFeeDay}<span>/=</span></h3>
                            <h3 class="text-danger text-center ">MONTHLY RENTAL</h3>
                            <h3 class="text-danger text-center mt-0 mb-5">${rentFeeMonth}<span>/=</span></h3>
                            <button type="button" class="btn btn-warning center-block w-100 mt-2 mb-0">RENT NOW</button>
                        </td>
                    </tr>`;
                $("#tblShowCars tbody").append(raw);
            }

            clickEvent();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}





