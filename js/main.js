
// for change activity

let btn = document.querySelector('.inputs-list button');

let options = Array.from(document.querySelectorAll('.dropdown-menu a'));

options.forEach(option => {
    option.addEventListener('click' , function(){
        btn.innerHTML = option.innerHTML;
    })
});


// validation ...

$('#register').click(()=>{
    if(checkName == true && checkPhone == true && checkEmail == true && btn.innerHTML != "\n                        "){
        $('#alertRegister').html('مرحبا بكم');
        $('#alertRegister').addClass('text-success');
        $('#alertRegister').removeClass('text-danger');
    }
    else {
        $('#alertRegister').html('هناك حقل أو أكثر غير صالح , يجب التأكد من ملئ كل الحقول بالطريقة الصحيحة');
        $('#alertRegister').addClass('text-danger');
        $('#alertRegister').removeClass('text-success');
    }
})


// for name 

let checkName;
function validUserName(){
    let regexName = /^([أ-ي_ ]|[A-Za-z_ ]){2,}$/;
    checkName = (regexName.test($('#name').val()));
    if(checkName == true)
    {
        $('#name').addClass('is-valid');
        $('#name').removeClass('is-invalid');
        $('#alertName').css('display' , 'none');
    }
    else
    {
        $('#name').addClass('is-invalid');
        $('#name').removeClass('is-valid');
        $('#alertName').css('display' , 'block');
    }
}

$('#name').on('input' , function(){
    validUserName();
})

// for phone 

let checkPhone;
function validUserPhone(){
    let regexPhone = /^(00|\+)(966)[0-9]{9}$/;
    checkPhone = regexPhone.test($('#phone').val());
    if(checkPhone == true)
    {
        $('#phone').addClass('is-valid');
        $('#phone').removeClass('is-invalid');
        $('#alertPhone').css('display' , 'none');
    }
    else
    {
        $('#phone').addClass('is-invalid');
        $('#phone').removeClass('is-valid');
        $('#alertPhone').css('display' , 'block');
    }
}

$('#phone').on('input' , function(){
    validUserPhone();
})

// for email 

let checkEmail;
function validUserEmail(){
    let regexEmail = /^[a-zA-Z0-9_]{3,15}(@gmail\.com)$/;
    checkEmail = regexEmail.test($('#email').val());
    if(checkEmail == true)
    {
        $('#email').addClass('is-valid');
        $('#email').removeClass('is-invalid');
        $('#alertEmail').css('display' , 'none');
    }
    else
    {
        $('#email').addClass('is-invalid');
        $('#email').removeClass('is-valid');
        $('#alertEmail').css('display' , 'block');
    }
}

$('#email').on('input' , function(){
    validUserEmail();
})


// for get dynamic year

let date = new Date;
let year = date.getFullYear();

$('#year').html(year);