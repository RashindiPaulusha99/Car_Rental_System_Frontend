$("#NavBar").css('display','block');
$("#WelcomePage").css('display','block');
$("#LoginPage").css('display','none');
$("#RegisterPage").css('display','none');
$("#ForgotPasswordPage").css('display','none');
$("#CarAddPage").css('display','none');
$("#CarDetailsPage").css('display','none');
$("#DriverAddPage").css('display','none');
$("#DriverDetailsPage").css('display','none');
$("#ChangeDriver").css('display','none');
$("#SchedulePage").css('display','none');
$("#ViewCustomerInformationPage").css('display','none');
$("#ViewReserveDetailsPage").css('display','none');
$("#PaymentAddPage").css('display','none');
$("#PaymentPage").css('display','none');
$("#AdminPanel").css('display','none');

$("#btnLogin").click(function () {
    $('#LoginPage').css('transform','scale(1)');
    $('#LoginPage').css('position','absolute');
    $('#LoginPage').css('display','block');
    $("#RegisterPage").css('display','none');
    $("#ForgotPasswordPage").css('display','none');
    $("#CarAddPage").css('display','none');
    $("#CarDetailsPage").css('display','none');
    $("#DriverAddPage").css('display','none');
    $("#DriverDetailsPage").css('display','none');
    $("#ChangeDriver").css('display','none');
    $("#SchedulePage").css('display','none');
    $("#ViewCustomerInformationPage").css('display','none');
    $("#ViewReserveDetailsPage").css('display','none');
    $("#PaymentAddPage").css('display','none');
    $("#PaymentPage").css('display','none');
    $("#AdminPanel").css('display','none');
});