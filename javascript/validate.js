window.onload=function(){
    // variables from form
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    const form = document.getElementById("myForm");
    const confirm = document.getElementById("confirm");
    let alerts = [];

    //email format check
    var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    //once user clicks submit, validating occurs
    form.addEventListener('submit', (e) => {
        console.log("hello world");

        if( fname.value == "" ||
        !/^[a-zA-Z]*$/g.test(fname.value) ||
        fname.value.length <= 1) 
        {
            alerts.push( "Please provide your first name\n" );
        }

        if( lname.value == "" ||
        !/^[a-zA-Z]*$/g.test(lname.value) ||
        lname.value.length <= 1) 
        {
            alerts.push( "Please provide your last name\n" );
        }

        if( address.value == "" ||
        address.value.length <= 1) 
        {
            alerts.push( "Please provide your address\n" );
        }

        if( city.value == "" ||
        !/^[a-zA-Z]*$/g.test(city.value)||
        city.value.length <= 1) 
        {
            alerts.push( "Please provide your city\n" );
        }

        if( state.value == "" ||
        state.value.length == -1) 
        {
            alerts.push( "Please choose your state\n" );
        }

        if( zip.value == "" ||
        isNaN( zip.value ) ||
        zip.value.length <= 1) 
        {
            alerts.push( "Please provide a zip in the format #####\n" );
        }

        if( phone.value == "" ||
        isNaN( phone.value ) ||
        phone.value.length != 10) 
        {
            alerts.push( "Please provide your phone number in the format ##########\n" );
        }

       if( email.value == "" ||
        email.value.length <= 1) 
        {
            alerts.push( "Please provide your email\n" );
        }
        else if (re.test(email.value) == false){
            alerts.push("Please enter correct email ID")
        }

        //checks for alerts and if there are any, the client will be alerted.
        if(alerts.length > 0) {
            alert(alerts);
            alerts = [];
            e.preventDefault();
        }
    })
}