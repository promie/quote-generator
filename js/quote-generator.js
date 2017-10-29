
$(document).ready(function(){

    init();
    setInterval(init, 10000);

    function init() {

        const URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
        
            $.getJSON(URL, data => {

                var quote = data.quoteText;
                $('#quote').html(formatQuote(quote));
                
                var author = data.quoteAuthor;
                if(author === ''){
                    
                    $('#author').html('Anonymous');
                }else{
                    $('#author').html(formatAuthor(author));
                }
               
                var twitterURL = "https://twitter.com/intent/tweet?text=" + quote + " - " + author;
                $("#twitter").on('click', function(){
                    window.open(twitterURL, '_blank');
                });
            })}

    $('#newQuote').on('click', init);

//VIEW
    
    function formatQuote(quote){
        return `"<em>${quote}</em>"`;
    }

    function formatAuthor(author){
        return `- ${author}`;
    }

});



