$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/checkLogged/'+ $('#username').attr('placeholder'),
    success: function(data){
        if(data){

        }
        else window.location.replace('http://localhost:3000/login');
    },
    error: function(data){
        console.log(data)
    }
})
function logOut(id){
    
    $(document).ready(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/checkLogged/'+ $('#username').attr('placeholder'),
            success: function(data){
                if(data){
                    $.ajax({
                        type:'GET',
                        url: 'http://localhost:3000/logOut/'+ $('#username').attr('placeholder'),
                        success: function(data){
                            if(data){
                                window.location.replace('http://localhost:3000/login');
                            }
                            else{
                                alert('username or password incorrect');
                            }
                        },
                        error: function(data){
                            console.log(data);
                        }
                    })
                }
                else window.location.replace('http://localhost:3000/login');
            },
            error: function(data){
                console.log(data)
            }
        })

    })
}
function mySubmitFunction(){
    return false;
}
function edit(){
    $(document).ready(function(){
        $("input").prop("disabled", false);
        $('#username').prop('disabled',true);
    })
}
let user = function(username, email, password, gender ){
    this.username = username;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.isLoggedIn = false;
}

function apply(){
    $(document).ready(function(){

        let username = $('#username').attr('placeholder');
        let email = $('#email').val();
        let password = $('#pass').val();
        let passwordCom = $('#passCom').val();
        if(password === passwordCom){
            let a = new user(username, email, password, $('#gender').val());
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/checkLogged/'+ $('#username').attr('placeholder'),
                success: function(data){
                    if(data){
                        $.ajax({
                            type:'POST',
                            url: "http://localhost:3000/update",
                            data: a,
                            success: function(data){
                                console.log(a);
                                window.location.replace("http://localhost:3000/login");
                                console.log('hello');
                            },
                            error: function(data){
                                console.log(data);
                                
                            }
                        })
                    }
                    else window.location.replace('http://localhost:3000/login');
                },
                error: function(data){
                    console.log(data)
                }
            })

        }
        else alert('password not match');
        $('input').prop(disabled, true);
    }) 
          
}