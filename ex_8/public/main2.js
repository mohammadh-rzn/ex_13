function login(){
    $(document).ready(function(){
        $.ajax({
            type:'POST',
            url: 'http://localhost:3000/loginCheck',
            data: {
                username: $('#username').val(),
                password: $('#pass').val()
            },
            success: function(data){
                if(data){
                    window.location.replace('http://localhost:3000/profile');
                }
                else{
                    alert('username or password incorrect');
                }
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