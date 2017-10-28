//MODEL

//Get an API

function getInformation(){

    var getAPI = new XMLHttpRequest();
    getAPI.open('GET', "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"");
    getAPI.onload = function() {
    
        var apiData = JSON.parse(getAPI.responseText);
        
        const author = document.getElementById('author');
        author.innerHTML = apiData.author;
    
        const quote = document.getElementById('quote');
        quote.innerHTML = apiData.quote;
    
    
    }
    
    getAPI.send();

}


function getTwitter() {
    alert('Under Construction');
}



//VIEW

//Initialization
getInformation();

