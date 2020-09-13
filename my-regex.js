function checkLength(input){
    if(input.value.length > 0 && input.value.length < 30) {
        input.classList.replace("is-invalid", "is-valid");
        return true;
    }
    input.classList.replace("is-valid", "is-invalid");
    return false;
}
function checkTime(input){
    let regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]-([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if(regex.test(input.value)){
        input.classList.replace("is-invalid", "is-valid");
        return true
    }else{
        input.classList.replace("is-valid", "is-invalid");
        return false
    }
}
function checkDayOfWeek(input){
    if(Number(input.value) >= 2 && Number(input.value) <= 8){
        input.classList.replace("is-invalid", "is-valid");
        return true;
    }else{
        input.classList.replace("is-valid", "is-invalid");
        return false
    }
}
function checkLength2(input){
    if(input.value.length < 10) {
        input.classList.replace("is-invalid", "is-valid");
        return true;
    }
    input.classList.replace("is-valid", "is-invalid");
    return false;
}

// chưa làm xong regex cho weekInput thay if(true) thành regex
function checkWeek(input){
    if(true) {
        input.classList.replace("is-invalid", "is-valid");
        return true;
    }
    input.classList.replace("is-valid", "is-invalid");
    return false;
}