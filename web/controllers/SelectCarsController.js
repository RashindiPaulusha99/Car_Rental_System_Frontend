var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);

$("#PName").keyup(function (event) {
    let name = $("#PName").val();
    if (regExFullName.test(name)) {
        $("#PName").css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#PContact").focus();
        }
    } else {
        $("#PName").css('border', '2px solid red');
    }
});

$("#PContact").keyup(function (event) {
    let contact = $("#PContact").val();
    if (regExContact.test(contact)) {
        $("#PContact").css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#PNIC").focus();
        }
    } else {
        $("#PContact").css('border', '2px solid red');
    }
});

$("#PNIC").keyup(function (event) {
    let nic = $("#PNIC").val();
    if (regExNIC.test(nic)) {
        $("#PNIC").css('border', '2px solid #31d2f2');
    } else {
        $("#PNIC").css('border', '2px solid red');
    }
});

function generateVReserveIds() {
    $("#reserveId").val("RE00-0001");
    var test = "id";

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/reserve?test=" + test,
        method: "GET",
        success: function (response) {
            var reserveId = response.data;
            var tempId = parseInt(reserveId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#reserveId").val("RE00-000" + tempId);
            } else if (tempId <= 99) {
                $("#reserveId").val("RE00-00" + tempId);
            } else if (tempId <= 999) {
                $("#reserveId").val("RE00-0" + tempId);
            } else {
                $("#reserveId").val("RE00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }

    });
}

function generateScheduleIds() {
    $("#scheduleId").val("S00-0001");
    var test = "id";

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/schedule?test=" + test,
        method: "GET",
        success: function (response) {
            var scheduleId = response.data;
            var tempId = parseInt(scheduleId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#scheduleId").val("S00-000" + tempId);
            } else if (tempId <= 99) {
                $("#scheduleId").val("S00-00" + tempId);
            } else if (tempId <= 999) {
                $("#scheduleId").val("S00-0" + tempId);
            } else {
                $("#scheduleId").val("S00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }

    });
}

function pasteDate() {
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

$("#noResult").css('display', 'none');

countAvailableCars();

function countAvailableCars() {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/AVAILABLECOUNT/" + "Available",
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
        url: "http://localhost:8081/Car_Rental_System_war/car",
        method: "GET",
        success: function (response) {
            if (response.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    $("#tblShowCars tbody > tr").click(function () {
                        tblSelectCarRow = $(this).children();

                        if (tblSelectCarRow.children()[4].innerText == "Not Available"){
                            alert("This car is not available now! Choose another one!...");
                        }else {
                            pasteDataToReservationFields();
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        }
                    });
                } else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function pasteDataToReservationFields() {
    $("#BPickupDate").val($("#pickUpDateEdit").val());
    $("#BPickupTime").val($("#pickUpTimeEdit").val());
    $("#BReturnDate").val($("#returnDateEdit").val());
    $("#BReturnTime").val($("#returnTimeEdit").val());
    $("#BPickupLocation").val($("#pickUpLocationEdit").val());
    $("#BReturnLocation").val($("#returnLocationEdit").val());
    $("#BDestination").val($("#destinationEdit").val());
    $("#BDuration").val($("#durationEdit").val());
}

var lossPayment = 0;
var tblRow = -1;
var count = 1;
var click="1";

function loadSelectedCars(carId) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/" + carId,
        method: "GET",
        success: function (response) {

            if (response.data.type == "General") {
                lossPayment += 10000.00;
            } else if (response.data.type == "Premium") {
                lossPayment += 15000.00;
            } else if (response.data.type == "Luxury") {
                lossPayment += 20000.00;
            }

            let raw = `<tr>
                                    <td id="scope">
                                        ${count}
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/images/1200x-1.jpg" alt="" style="width: 50px; height: 50px" class=""/>
                                        </div>
                                        <h6  id="id" class="id text-white">${response.data.carId}</h6>
                                    </td>
                                    <td>
                                       ${response.data.brand}
                                    </td>
                                    <td>
                                        ${response.data.colour}
                                    </td>
                                    <td>
                                        ${response.data.type}
                                    </td>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input checkDriverIfWant" type="checkbox" value="" id="checkDriverIfWant" />
                                            <label class="form-check-label fs-4" for="checkDriverIfWant">If you want a driver please click</label>
                                        </div>
                                    </td>
                                     <td id="did" class="text-white" style="font-size: 2px">
                                        ${click}
                                    </td>
                                    <td id="dname">
                                        
                                    </td>
                                    <td id="dcontact">
                                        
                                    </td>
                                    <td>
                                        ${lossPayment}
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm px-3 btnCancelCar" data-ripple-color="dark" id="btnCancelCar">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </td>
                                </tr>`;
            $("#tblSelectedCars tbody").append(raw);
            count += 1;

           /* for (let i = 0; i < $("#tblSelectedCars tbody tr").lengh; i++) {
                if (carId == $("#tblSelectedCars tbody tr").children(':nth-child(2)')[i].innerText){
                    alert("You choosed this car ealier! Select another car!...");
                    $(this).remove();
                }
            }*/

            openBookingPage();

            $(".checkDriverIfWant").off("click");

            findDriverData();

            $("#tblSelectedCars tbody").on('click', '#btnCancelCar', function () {
                $("#tblSelectedCars tbody > tr").off("click");

                $("#tblSelectedCars tbody > tr").click(function () {
                    let text = "Do you want to remove this car ?";

                    if (confirm(text) == true) {
                        tblRow = $(this);
                        tblRow.remove();
                    }else {

                    }
                });
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findDriverData() {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/driver/ASSIGN/" + "Release",
        method: "GET",
        success: function (response) {
            load(response.data.driverId,response.data.driverName, response.data.driverContact);
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

var dname;
var dcontact;
var did;

function load(id,name, contact) {
    dname = name;
    dcontact = contact;
    did = id;
    $(".checkDriverIfWant").click(function () {
        $("#tblSelectedCars tbody > tr").click(function () {
            if ($('.checkDriverIfWant').is(':checked')) {
                if ($(this).find(".checkDriverIfWant").is(":checked")) {
                    $(this).find("td:eq(6)").text(did);
                    $(this).find("td:eq(7)").text(dname);
                    $(this).find("td:eq(8)").text(dcontact);
                }else {
                    $(this).find("td:eq(6)").text("1");
                    $(this).find("td:eq(7)").text("none");
                    $(this).find("td:eq(8)").text("none");
                }
            }
        });
    });
}

$("#sort").click(function () {
    if ($("#sort option:selected").text() == "Passengers - Ascending") {
        findPassengersAsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Passengers - Descending") {
        findPassengersDsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Daily Rate Price - Ascending") {
        findDailyRateAsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Daily Rate Price - Descending") {
        findDailyRateDsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Monthly Rate Price - Ascending") {
        findMonthlyRateAsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Monthly Rate Price - Descending") {
        findMonthlyRateDsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Recommended") {
        loadAllCarsToSee();
    }
});

function findPassengersAsc(passengerAsc) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/SORTPA/" + passengerAsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
        }
    });
}

function findPassengersDsc(passengerDsc) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/SORTPD/" + passengerDsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
        }
    });
}

function findDailyRateAsc(dailyRateAsc) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/SORTDA/" + dailyRateAsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
        }
    });
}

function findDailyRateDsc(dailyRateDsc) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/SORTDD/" + dailyRateDsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
        }
    });
}

function findMonthlyRateAsc(monthlyRateAsc) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/SORTMA/" + monthlyRateAsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
        }
    });
}

function findMonthlyRateDsc(monthlyRateDsc) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/SORTMD/" + monthlyRateDsc,
        method: "GET",
        success: function (response) {
            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
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
        url: "http://localhost:8081/Car_Rental_System_war/car/TYPETR/" + type,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findType(type) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/TYPET/" + type,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findBrand(type) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/TYPEB/" + type,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findFuelType(type) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/TYPEF/" + type,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findColour(type) {
    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/car/TYPEC/" + type,
        method: "GET",
        success: function (response) {
            if (response.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeeDay;
            var rentFeeMonth;

            $("#tblShowCars tbody").empty();
            for (var responseKey of response.data) {

                if (responseKey.type == "Luxury") {
                    rentFeeDay = 8000.00;
                    rentFeeMonth = 25000.00;
                } else if (responseKey.type = "premium") {
                    rentFeeDay = 5000.00;
                    rentFeeMonth = 20000.00;
                } else if (responseKey.type = "General") {
                    rentFeeDay = 3000.00;
                    rentFeeMonth = 10000.00;
                }

                let raw = ` <tr class="rounded rounded-6 nr">
                        <td>
                            <div class="d-flex ">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 250px; height: 200px" class="center-block"/>
                            </div>
                            <p class="text-white" id="idOfCar">${responseKey.carId}</p>
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
                        <td >
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
                        <td id="tdLast">
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

                let text = "Do you want to rent this car ?";

                if (confirm(text) == true) {

                    let text = "Do you want to rent another car ?";

                    if (confirm(text) == true) {
                        alert("Choose a car you like!...");
                    } else {
                        $("#tblShowCars tbody > tr").click(function () {
                            tblSelectCarRow = $(this).children();

                            pasteDataToReservationFields();
                            getLoseDWPayment(tblSelectCarRow.children()[1].innerText);
                            loadSelectedCars(tblSelectCarRow.children()[1].innerText);
                        });
                    }
                } else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

var denyOrAccept;
$("#btnBook").click(function () {

    if ($("#PName").val() == "" || $("#PContact").val() == "" || $("#PNIC").val() == "") {
        alert("Some personal detail fields are not filled. So your booking is deny!..");
        denyOrAccept = "Deny";
    } else if (!regExFullName.test($("#PName").val()) || !regExContact.test($("#PContact").val()) || !regExNIC.test($("#PNIC").val())) {
        alert("Some fields are not in correct format. So your booking is deny!..");
        denyOrAccept = "Deny";
    } else if ($("#BPickupDate").val() == "" || $("#BPickupTime").val() == "" || $("#BPickupLocation").val() == "" || $("#BReturnDate").val() == "" || $("#BReturnTime").val() == "" || $("#BReturnLocation").val() == "" || $("#BDestination").val() == "" || $("#BDuration").val() == "") {
        alert("Some booking detail fields are not filled. So your booking is deny!..");
        denyOrAccept = "Deny";
    } else if ($("#tblSelectedCars tbody tr").length == 0) {
        alert("Table is empty. So your booking is deny!..");
        denyOrAccept = "Deny";
    } else {
        denyOrAccept = "Accept";
    }

    findCustomerToReserve(denyOrAccept)
});

function findCustomerToReserve(denyOrAccept) {

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/customer/FIND/" + $("#PNIC").val(),
        method: "GET",
        success: function (response) {
            reserve(response.data,denyOrAccept);
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

var driverWantOrNot;
function reserve(customer,denyOrAccept) {

    var details = new Array();
    for (var i = 0; i < $("#tblSelectedCars tbody tr").length; i++) {

        if ($('#checkDriverIfWant').is(':checked')) {
            driverWantOrNot = "Want";
        } else {
            driverWantOrNot = "Not Want";
        }

        var reserveItems = {
            reserveId: $("#reserveId").val(),
            carId: $("#tblSelectedCars tbody tr").children(':nth-child(2)')[i].innerText,
            driverId: $("#tblSelectedCars tbody tr").children(':nth-child(7)')[i].innerText,
            type: $("#tblSelectedCars tbody tr").children(':nth-child(5)')[i].innerText,
            colour: $("#tblSelectedCars tbody tr").children(':nth-child(4)')[i].innerText,
            brand: $("#tblSelectedCars tbody tr").children(':nth-child(3)')[i].innerText,
            driverWantOrNot:driverWantOrNot,
            driverName: $("#tblSelectedCars tbody tr").children(':nth-child(8)')[i].innerText,
            driverContact: $("#tblSelectedCars tbody tr").children(':nth-child(9)')[i].innerText,
            loseDamageWaiverPayment: $("#tblSelectedCars tbody tr").children(':nth-child(10)')[i].innerText
        }
        details.push(reserveItems);
    }

    var reserveDetail = {
        reserveId: $("#reserveId").val(),
        customer: customer,
        pickUpDate: $("#BPickupDate").val(),
        reserveDate: today,
        pickUpTime: $("#BPickupTime").val(),
        destination: $("#BDestination").val(),
        duration: $("#BDuration").val(),
        pickUpVenue: $("#BPickupLocation").val(),
        returnVenue: $("#BReturnLocation").val(),
        returnDate: $("#BReturnDate").val(),
        returnTime: $("#BReturnTime").val(),
        requestAcceptOrDeny: denyOrAccept,
        reserveDetails: details
    }

    $.ajax({
        url: "http://localhost:8081/Car_Rental_System_war/reserve",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(reserveDetail),
        success: function (response) {
            //loadSchedule();
            alert(response.message);
            //gotoHome();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}












