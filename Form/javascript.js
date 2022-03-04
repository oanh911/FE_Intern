let fname = document.getElementById("fname");
let femail = document.getElementById("femail");
let fpassword = document.getElementById("fpassword");
let frepassword = document.getElementById("frepassword");
let fsubmit = document.getElementById("fsubmit");
let validatedFname, validatedFemail, validatedFpassword, validatedFrepassword;

let fnamePattern = /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;
let femailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let fpasswordUpperPattern = /[A-Z]/;
let fpasswordLowerPattern = /[a-z]/;

function formValidate(){
  if (validatedFname === true || validatedFemail === true || validatedFpassword === true || validatedFrepassword === true) {
    alert("Đăng ký tài khoản thành công!");
    return true;
  }
  else {
    return false;
  }
}

function fnameValidate(fnameInput){
  if (fnameInput.value === "") {
    fname.nextElementSibling.innerHTML = "Vui lòng không bỏ trống trường này";
    fname.nextElementSibling.setAttribute("class", "wrong-input");
    fname.setAttribute("class", "wrong-input");
    validatedFname = false;
    fsubmit.setAttribute("disabled", "");
  }
  else {
    if (fnamePattern.test(fnameInput.value) === false) {
    fname.nextElementSibling.innerHTML = "Vui lòng không sử dụng ký tự đặc biệt";
    fname.nextElementSibling.setAttribute("class", "wrong-input");
    fname.setAttribute("class", "wrong-input");
    fsubmit.setAttribute("disabled", "");
    validatedFname = false;
    }
    else {
      fname.nextElementSibling.setAttribute("class", "right-input");
      fname.removeAttribute("class");
      fsubmit.removeAttribute("disabled");
      validatedFname = true;
    }
  }
}

function femailValidate(femailInput){
  if (femailInput.value === "") {
    femail.nextElementSibling.innerHTML = "Vui lòng không bỏ trống trường này";
    femail.nextElementSibling.setAttribute("class", "wrong-input");
    femail.setAttribute("class", "wrong-input");
    fsubmit.setAttribute("disabled", "");
    validatedFemail = false;
  }
  else {
    if (femailPattern.test(femailInput.value) === false) {
      femail.nextElementSibling.innerHTML = "Vui lòng nhập đúng định dạng email";
      femail.nextElementSibling.setAttribute("class", "wrong-input");
      femail.setAttribute("class", "wrong-input");
      fsubmit.setAttribute("disabled", "");
      validatedFemail = false;
    }
    else {
      femail.nextElementSibling.setAttribute("class", "right-input");
      femail.removeAttribute("class");
      fsubmit.removeAttribute("disabled");
      validatedFemail = true;
    }
  }
}

function fpasswordValidate(fpasswordInput){
  if (fpasswordInput.value === "") {
    fpassword.nextElementSibling.innerHTML = "Vui lòng không bỏ trống trường này";
    fpassword.nextElementSibling.setAttribute("class", "wrong-input");
    fpassword.setAttribute("class", "wrong-input");
    fsubmit.setAttribute("disabled", "");
    validatedFpassword = false;
  }
  else {
    if (fpasswordUpperPattern.test(fpasswordInput.value) === false || fpasswordLowerPattern.test(fpasswordInput.value) === false || (fpasswordInput.value.length < 8 && fpasswordInput.value.length > 32))
    {
      fpassword.nextElementSibling.innerHTML = "Vui lòng sử dụng 8-32 kí tự, ít nhất 1 chữ hoa và 1 chữ thường";
      fpassword.nextElementSibling.setAttribute("class", "wrong-input");
      fpassword.setAttribute("class", "wrong-input");
      fsubmit.setAttribute("disabled", "");
      validatedFpassword = false;
    }
    else {
      fpassword.nextElementSibling.setAttribute("class", "right-input");
      fpassword.removeAttribute("class");
      fsubmit.removeAttribute("disabled");
      validatedFpassword = true;
    }
  }
}

function frepasswordValidate(frepasswordInput){
  if (frepasswordInput.value !== fpassword.value) {
    frepassword.nextElementSibling.innerHTML = "Vui lòng nhập khớp mật khẩu trên";
    frepassword.nextElementSibling.setAttribute("class", "wrong-input");
    frepassword.setAttribute("class", "wrong-input");
    fsubmit.setAttribute("disabled", "");
    validatedFrepassword = false;
  }
  else {
      frepassword.nextElementSibling.setAttribute("class", "right-input");
      frepassword.removeAttribute("class");
      fsubmit.removeAttribute("disabled");
      validatedFrepassword = true;
    }
}