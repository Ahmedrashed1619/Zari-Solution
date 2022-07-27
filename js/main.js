
// for change activity

let btn = document.querySelector('.inputs-list button');

let options = Array.from(document.querySelectorAll('.dropdown-menu a'));

options.forEach(option => {
    option.addEventListener('click' , function(){
        btn.innerHTML = option.innerHTML;
    })
});


// define inputs

let nameUser = document.getElementById('name');
let phoneUser = document.getElementById('phone');
let emailUser = document.getElementById('email');


// validation ...

$('#register').click(()=>{
    if(nameUser.Value != "" && phoneUser.value != "" && emailUser.value != "" && btn.innerHTML != "\n                        "){
        $('#alertRegister').html('تم إرسال طلبك . سيتم التواصل معك قريبا');
        $('#alertRegister').addClass('text-success');
        $('#alertRegister').removeClass('text-danger');
    }
    else {
        $('#alertRegister').html('هناك حقل أو أكثر غير صالح , يجب التأكد من ملئ كل الحقول بالطريقة الصحيحة');
        $('#alertRegister').addClass('text-danger');
        $('#alertRegister').removeClass('text-success');
    }
})


// to get inputs values

function Activity(Value){
    document.getElementById("Activity").value = Value;
    document.getElementById("activity").innerHTML = Value;
}

// to send order

function SubmitForm(){
    var Name = document.getElementById("name").value;
    var Phone = document.getElementById("phone").value;
    var ClientEmail = document.getElementById("email").value;
    var Activity = document.getElementById("Activity").value;
    $.ajax({
        url: 'https://zarisolution.com/custom/index_form_submit.php',
        type: 'POST',
        data:{Name:Name,Phone:Phone,ClientEmail:ClientEmail,Activity:Activity, _token: '{{csrf_token()}}' },
        dataType:"json",
        success: function() {
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        },
        error: function (xhr, ajaxOptions, thrownError) {
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        }
    });
}


// for get dynamic year

let date = new Date;
let year = date.getFullYear();

$('#year').html(year);