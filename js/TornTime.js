document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('userIdInsert').addEventListener('input', checkApiInput);
    document.getElementById('apiKeySlot').addEventListener('input', checkApiInput);
    function checkApiInput(){
        var textUserId= document.getElementById('userIdInsert').value;
        var textApiKey=document.getElementById('apiKeySlot').value;
        var buttonInvia=document.getElementById('abilitaChiamata');
        if(textUserId && textApiKey){
            buttonInvia.disabled = false;
        } else {
            buttonInvia.disabled = true;
        }
    }
})

function componiUrl(){
    var userId = document.getElementById('userIdInsert').value;
    var apiKey = document.getElementById('apiKeySlot').value;
    if(userId && apiKey){
        var url= 'https://api.torn.com/user/' + userId + '?key=' + apiKey + '&comment=TornInfoPlayer&selections=profile';
    }
    return url;
}

function chiamaApi(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('generalInfo', JSON.stringify(data));
            console.log(data);
            document.getElementById('nomePlayer').textContent = data.name;
            document.getElementById('livelloPlayerNumero').textContent = data.level;
            document.getElementById('statusContenuto').textContent = data.status.description;
            document.getElementById('stat1Valore').textContent = data.last_action.relative;
            document.getElementById('stat2Valore').textContent = data.faction.faction_name;
            document.getElementById('stat3Valore').textContent = data.job.job;
            document.getElementById('stat4Valore').textContent = data.property;
        })
        .catch(error => console.log(error));
}
