/*--------validation start--------------*/

var regExLoginUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;

$("#loginusername").keyup(function (event) {
    let username = $("#loginusername").val();
    if (regExLoginUserName.test(username)) {
        $("#loginusername").css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#loginpassword").focus();
        }
    } else {
        $("#loginusername").css('border', '2px solid red');
    }
});

$("#loginpassword").keyup(function (event) {
    let password = $("#loginpassword").val();
    if (regExLoginPassword.test(password)) {
        $("#loginpassword").css('border', '2px solid #31d2f2');
        $('#btnLogToSystem').prop('disabled', false);
    } else {
        $("#loginpassword").css('border', '2px solid red');
    }
});

/*--------validation end--------------*/

$("#btnLogToSystem").click(function () {

    if ($("#loginusername").val() == "" || $("#loginpassword").val() == ""){
        alert("All Fields Are Required !");
    }else {
        isExistsInAdminDB($("#loginusername").val(),$("#loginpassword").val());
        isExistsInCustomerDB($("#loginusername").val(),$("#loginpassword").val());
        isExistsInDriverDB($("#loginusername").val(),$("#loginpassword").val());
        logToSystem();
    }

});

function isExistsInAdminDB( username, password) {
    $.ajax({
        url: "http://localhost:8081/Maven_POS_war/admin/" + $("#customerId").val(),
        method: "GET",
        success: function (response) {
            if (response.data.customerId == $("#customerId").val()) {
                search = true;
            }
        },
        error: function (ob) {
            search = false;
            alert(ob.responseJSON.message);
            loadAllCustomer();
        }
    });
}