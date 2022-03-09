const fname = document.getElementById("fname");
const femail = document.getElementById("femail");
const fpassword = document.getElementById("fpassword");
const frepassword = document.getElementById("frepassword");
const fsubmit = document.getElementById("fsubmit");
let validatedFname, validatedFemail, validatedFpassword, validatedFrepassword;

const fnamePattern = /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;
const femailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const fpasswordUpperPattern = /[A-Z]/;
const fpasswordLowerPattern = /[a-z]/;

fname.addEventListener("change", fnameValidate);
femail.addEventListener("change", femailValidate);
fpassword.addEventListener("change", fpasswordValidate);
frepassword.addEventListener("change", frepasswordValidate);



function formValidate(){
  if (validatedFname && validatedFemail && validatedFpassword && validatedFrepassword) {
    alert("Đăng ký tài khoản thành công!");
    return true;
  }
}

function fnameValidate(){
  if (!this.value) {
    fname.nextElementSibling.innerHTML = "Vui lòng không bỏ trống trường này";
    fname.nextElementSibling.setAttribute("class", "wrong-input");
    fname.setAttribute("class", "wrong-input");
    validatedFname = false;
    fsubmit.setAttribute("disabled", "");
  }
  else {
    if (!fnamePattern.test(this.value)) {
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

function femailValidate(){
  if (!this.value) {
    femail.nextElementSibling.innerHTML = "Vui lòng không bỏ trống trường này";
    femail.nextElementSibling.setAttribute("class", "wrong-input");
    femail.setAttribute("class", "wrong-input");
    fsubmit.setAttribute("disabled", "");
    validatedFemail = false;
  }
  else {
    if (!femailPattern.test(this.value)) {
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

function fpasswordValidate(){
  if (!this.value) {
    fpassword.nextElementSibling.innerHTML = "Vui lòng không bỏ trống trường này";
    fpassword.nextElementSibling.setAttribute("class", "wrong-input");
    fpassword.setAttribute("class", "wrong-input");
    fsubmit.setAttribute("disabled", "");
    validatedFpassword = false;
  }
  else {
    if (!fpasswordUpperPattern.test(this.value) || !fpasswordLowerPattern.test(this.value) || (this.value.length < 8 && this.value.length > 32))
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

function frepasswordValidate(){
  if (this.value !== fpassword.value) {
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