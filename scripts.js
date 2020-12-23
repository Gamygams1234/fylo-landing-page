const emailFormOne = document.getElementById("email-check-form-1");
const emailFormTwo = document.getElementById("email-check-form-2");
const emailInputOne = document.getElementById("email-input-1");
const emailInputTwo = document.getElementById("email-input-2");
const emailCheckOne = document.getElementById("email-check-1");
const emailCheckTwo = document.getElementById("email-check-2");
const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailFormOne.addEventListener("submit", function (event) {
    event.preventDefault();
    if (emailInputOne.value === "") {
        emailCheckOne.style.display = "block";
        emailInputOne.style.borderColor = "red";
    } else if (!emailTest.test(emailInputOne.value))  {
        emailCheckOne.style.display = "block";
        emailInputOne.style.borderColor = "red";
    }else{
        alert(`Your email is ${emailInputOne.value}`);
        emailCheckOne.style.display = "none";
        emailInputOne.style.borderColor = "gainsboro";
    }

})
emailFormTwo.addEventListener("submit", function (event) {
    event.preventDefault();
    if (emailInputTwo.value === "") {
        emailCheckTwo.style.display = "block";

    } else if (!emailTest.test(emailInputTwo.value))  {
        emailCheckTwo.style.display = "block";

    }else{
        alert(`Your email is ${emailInputTwo.value}`);
        emailCheckTwo.style.display = "none";
    }
})