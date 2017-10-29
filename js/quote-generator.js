//MODEL

//Get an API

function getInformation(){

    var getAPI = new XMLHttpRequest();
    getAPI.open('GET', "http://quotes.stormconsultancy.co.uk/random.json");
    getAPI.onload = function() {
    
        var apiData = JSON.parse(getAPI.responseText);
        
        const author = document.getElementById('author');
        author.innerHTML = apiData.author;
    
        const quote = document.getElementById('quote');
        quote.innerHTML = apiData.quote;
    
    
    }
    
    getAPI.send(null);

}


function getTwitter() {
    alert('Under Construction');
}



//VIEW

//Initialization
getInformation();

