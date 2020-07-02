function filter(){
    console.log('hello');
    $(document).ready(function(){
        let value = $('#hello').val();
        let cards = document.getElementsByClassName('card');
        console.log(cards);
        
        for(let i = 0; i < cards.length; i++){
            cards[i].style.display = "block";
        }
        let classes = $('.card').map(function () {
            return $(this).attr('class');
        }).get();

        for(let i = 0; i < classes.length; i++){
            if(!classes[i].toLowerCase().includes(value)){
                console.log(true);
                cards[i].style.display = "none";
            }
            else console.log(false);
        }
    })
      
}