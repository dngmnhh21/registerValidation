var checkValidate = function () {
  var valid = true;

  valid =
    kiemTraRong("firstName", "error_firstName") &
    kiemTraRong("lastName", "error_lastName") &
    kiemTraRong("password", "error_password") &
    kiemTraRong("confirmPassword", "error_confirmPassword") &
    kiemTraRong("email", "error_email") &
    kiemTraRong("phone", "error_phone");

    valid &= kiemTraChu('#firstName', '#error_firstName_all_letter') & kiemTraChu('#lastName', '#error_lastName_all_letter')
    valid &= kiemTraSo('#phone','#error_phone')
    valid &= kiemTraEmail('#email', '#error_email')
    
    if(!valid){
        return false;
    }
    return true;
}

var kiemTraRong = function (idValue, idError) {
  var inputText = document.getElementById(idValue);
  if (inputText.value.trim() === "") {
    document.getElementById(idError).innerHTML = inputText.name + " không được bỏ trống!";
      document.getElementById(idError).style.display = 'block';
    return false;
  } else {
    document.getElementById(idError).innerHTML = "";
    document.getElementById(idError).style.display = 'none';
    return true;
  }
}

var kiemTraChu = function(selectorValue, selectorError){
    //lấy giá trị người dùng nhập vào từ selector
    var inputText = document.querySelector(selectorValue);
    var regexChu = /^[A-Za-z ]+$/;
    if(regexChu.test(inputText.value)){
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.display = 'none'; 
        return true;
    }else{
        document.querySelector(selectorError).innerHTML = inputText.name + " phải là chữ!";
        document.querySelector(selectorError).style.display = 'block'; 
        return false;
    }
}

var kiemTraSo = function(selectorValue, selectorError){
    var inputText = document.querySelector(selectorValue);
    var regexSo = /^[0-9]+$/;
    if(regexSo.test(inputText.value)){
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.display = 'none'; 
        return true;
    }else{
        document.querySelector(selectorError).innerHTML = inputText.name + " phải là số!";
        document.querySelector(selectorError).style.display = 'block'; 
        return false;
    }

}

var kiemTraEmail = function(selectorValue, selectorError){
    var inputText = document.querySelector(selectorValue);
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regexEmail.test(inputText.value)){
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.display = 'none'; 
        return true;
    }else{
        document.querySelector(selectorError).innerHTML = inputText.name + " không hợp lệ!";
        document.querySelector(selectorError).style.display = 'block'; 
        return false;
    }
}

document.getElementById("firstName").onblur = checkValidate;
document.getElementById("lastName").onblur = checkValidate;
// document.getElementById("password").onblur = checkValidate;
// document.getElementById("confirmPassword").onblur = checkValidate;
// document.getElementById("email").onblur = checkValidate;
document.getElementById("btnDangKy").onclick = checkValidate;
