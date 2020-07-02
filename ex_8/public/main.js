let user = function(username, email, password, gender ){
    this.username = username;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.isLoggedIn = false;
}
function changes(){
    $(document).ready(function(){
        $('#drop').toggle;
    })
    
}
function signUp(){
    // window.location.replace("https://www.w3schools.com");
    $(document).ready(function(){
        // window.location.replace("http://localhost:3000/login");
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#pass').val();
        let passwordCom = $('#passCom').val();
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/check/" + username,
            success: function(data) {
                console.log(data);
                if(data){
                    if(password === passwordCom){
                        let gender = "";
                        if($('#male').prop('checked')){
                            gender = 'male';
                        }
                        else gender = female;
                        let a = new user(username, email, password, gender);
                        $.ajax({
                            type:'POST',
                            url: "http://localhost:3000/addUser",
                            data: a,
                            success: function(data){
                                window.location.replace("http://localhost:3000/login");
                                console.log('hello');
                            },
                            error: function(data){
                                console.log(data);
                                
                            }
                        })
                    }
                    else alert('password not match');
                }
                else alert('username already taken');
            },
            error: function(data){
                console.log(data);
            }
            
        })
    })
}
function mySubmitFunction(){
    return false;
}