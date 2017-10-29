
$(document).ready(function(){

    init();

    function init() {

        const URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
        
            $.getJSON(URL, data => {
                
                $('#quote').html(data.quoteText);
                if(data.quoteText === ''){
                    
                    $('#author').html('Anonymous');
                }else{
                    $('#author').html(data.quoteAuthor);
                }


            });}

    $('#newQuote').click(function(){
        init();
    });

    $('#newQuote2').click(function(){

    // https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text=
        alert('Under Construction!');
    });


});




