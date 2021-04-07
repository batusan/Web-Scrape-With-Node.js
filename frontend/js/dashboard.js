var successNotify = function (message) {
    $.notify({
        icon: 'fas fa-check-square',
        message: message
    }, {
        type: "primary",
        allow_dismiss: false
    });
}

var warningNotify = function (message) {
    $.notify({
        icon: 'fas fa-exclamation-triangle',
        message: message
    }, {
        type: "danger",
        allow_dismiss: false
    });
}

var Spinner = function (bool) {
    var btn = document.getElementById("inputbtn");
    if(bool){
        btn.disabled = true; 
        btn.innerHTML = '<div class="spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div>';
    }else{
        btn.disabled = false;
        btn.innerHTML = 'Add';
    }
}