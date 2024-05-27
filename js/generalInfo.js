document.addEventListener('DOMContentLoaded', function (){
    var stringaStorage = localStorage.getItem('generalInfo');
    var jsonGeneralInfo = JSON.parse(stringaStorage);
    var tabellaFazioni = document.getElementById('tabellaFazione');
    var tabellaJob = document.getElementById('tabellaJob');
    let infoFazione = jsonGeneralInfo.faction;
    let infoJob = jsonGeneralInfo.job;
    Object.entries(infoFazione).forEach(([key, value],
    index) => {
        console.log(infoFazione);
        var row = `<tr>
            <th scope="row">${index + 1}</th>
            <td>${key}</td>
            <td>${value}</td>
            </tr>`;
        tabellaFazioni.innerHTML += row;
    })
    Object.entries(infoJob).forEach(([key, value], index) => {
        console.log(infoJob);
        var row = `<tr>
            <th scope="row">${index + 1}</th>
            <td>${key}</td>
            <td>${value}</td>
            </tr>`;
        tabellaJob.innerHTML += row;
    })
})