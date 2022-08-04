var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        datasets: [{
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#007bff",
            borderWidth: 4,
            pointBackgroundColor: "#007bff",
        }, ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                },
            }, ],
        },
        legend: {
            display: false,
        },
    },
});




var label = document.querySelector(".label");
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = 700;
var ch = c.height = 350;
var cx = cw / 2,
    cy = ch / 2;
var rad = Math.PI / 180;
var frames = 0;

ctx.lineWidth = 1;
ctx.strokeStyle = "#999";
ctx.fillStyle = "#ccc";
ctx.font = "14px monospace";

var grd = ctx.createLinearGradient(0, 0, 0, cy);
grd.addColorStop(0, "hsla(167,72%,60%,1)");
grd.addColorStop(1, "hsla(167,72%,60%,0)");

var oData = {
    "2008": 10,
    "2009": 39.9,
    "2010": 17,
    "2011": 30.0,
    "2012": 5.3,
    "2013": 38.4,
    "2014": 15.7,
    "2015": 9.0
};

var valuesRy = [];
var propsRy = [];
for (var prop in oData) {

    valuesRy.push(oData[prop]);
    propsRy.push(prop);
}


var vData = 4;
var hData = valuesRy.length;
var offset = 50.5; //offset chart axis
var chartHeight = ch - 2 * offset;
var chartWidth = cw - 2 * offset;
var t = 1 / 7; // curvature : 0 = no curvature
var speed = 2; // for the animation

var A = {
    x: offset,
    y: offset
}
var B = {
    x: offset,
    y: offset + chartHeight
}
var C = {
    x: offset + chartWidth,
    y: offset + chartHeight
}

/*
      A  ^
	    |  |
	    + 25
	    |
	    |
	    |
	    + 25
      |__|_________________________________  C
      B
*/

// CHART AXIS -------------------------
ctx.beginPath();
ctx.moveTo(A.x, A.y);
ctx.lineTo(B.x, B.y);
ctx.lineTo(C.x, C.y);
ctx.stroke();

// vertical ( A - B )
var aStep = (chartHeight - 50) / (vData);

var Max = Math.ceil(arrayMax(valuesRy) / 10) * 10;
var Min = Math.floor(arrayMin(valuesRy) / 10) * 10;
var aStepValue = (Max - Min) / (vData);
console.log("aStepValue: " + aStepValue); //8 units
var verticalUnit = aStep / aStepValue;

var a = [];
ctx.textAlign = "right";
ctx.textBaseline = "middle";
for (var i = 0; i <= vData; i++) {

    if (i == 0) {
        a[i] = {
            x: A.x,
            y: A.y + 25,
            val: Max
        }
    } else {
        a[i] = {}
        a[i].x = a[i - 1].x;
        a[i].y = a[i - 1].y + aStep;
        a[i].val = a[i - 1].val - aStepValue;
    }
    drawCoords(a[i], 3, 0);
}

//horizontal ( B - C )
var b = [];
ctx.textAlign = "center";
ctx.textBaseline = "hanging";
var bStep = chartWidth / (hData + 1);

for (var i = 0; i < hData; i++) {
    if (i == 0) {
        b[i] = {
            x: B.x + bStep,
            y: B.y,
            val: propsRy[0]
        };
    } else {
        b[i] = {}
        b[i].x = b[i - 1].x + bStep;
        b[i].y = b[i - 1].y;
        b[i].val = propsRy[i]
    }
    drawCoords(b[i], 0, 3)
}

function drawCoords(o, offX, offY) {
    ctx.beginPath();
    ctx.moveTo(o.x - offX, o.y - offY);
    ctx.lineTo(o.x + offX, o.y + offY);
    ctx.stroke();

    ctx.fillText(o.val, o.x - 2 * offX, o.y + 2 * offY);
}
//----------------------------------------------------------

// DATA
var oDots = [];
var oFlat = [];
var i = 0;

for (var prop in oData) {
    oDots[i] = {}
    oFlat[i] = {}

    oDots[i].x = b[i].x;
    oFlat[i].x = b[i].x;

    oDots[i].y = b[i].y - oData[prop] * verticalUnit - 25;
    oFlat[i].y = b[i].y - 25;

    oDots[i].val = oData[b[i].val];

    i++
}

var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);

function loadAdminDPanelData() {
    totalRegisteredUsers();
    totalNewUsers();
    TodayAllReservations();
    TodayActiveBookings();
    AvailableCars();
    ReservedCars();
    AvailableDrivers();
    OccupiedDrivers();
    MaintainedCars();
    UnderMaintainedCars();
    AllReservation();
    TotalIncome();
}

function totalRegisteredUsers() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/customer/COUNT/" + "count",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#totalRegUsers").text(0);
            }else {
                $("#totalRegUsers").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function totalNewUsers() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/customer/COUNTDAILY/" + today,
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#totalNewUsers").text(0);
            }else {
                $("#totalNewUsers").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function TodayAllReservations() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/COUNTDAILY/" + today,
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#todayReservations").text(0);
            }else {
                $("#todayReservations").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function TodayActiveBookings() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/" + today+ "/"+"Accept",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#todayActiveBookings").text(0);
            }else {
                $("#todayActiveBookings").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function AllReservation() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/reserve/COUNT/" + "all",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#allReservation").text(0);
            }else {
                $("#allReservation").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function AvailableCars() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/AVAILABLECOUNT/"+"Available",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#availableCar").text(0);
            }else {
                $("#availableCar").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function ReservedCars() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/AVAILABLECOUNT/"+"Not Available",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#reservedCars").text(0);
            }else {
                $("#reservedCars").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function AvailableDrivers() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/driver/AVAILABLE/"+"Release",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#availableDrivers").text(0);
            }else {
                $("#availableDrivers").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function OccupiedDrivers() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/driver/AVAILABLE/"+"Not Release",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#occupiedDrivers").text(0);
            }else {
                $("#occupiedDrivers").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function MaintainedCars() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/COUNTM/"+"Maintained",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#maintainedCars").text(0);
            }else {
                $("#maintainedCars").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function UnderMaintainedCars() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/car/COUNTM/"+"Under Maintained",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#underMaintainedCars").text(0);
            }else {
                $("#underMaintainedCars").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function TotalIncome() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/payment/ALLINCOME/" + "amount",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#totalIncome").text("Rs."+0);
            }else {
                $("#totalIncome").text("Rs. "+response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

