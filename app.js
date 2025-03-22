var button=document.getElementById("button");
var make=document.getElementById("make");
var model=document.getElementById("model");
var year=document.getElementById("year");
var feature=document.getElementById("feature");
let i=0;

button.onclick=()=>{
    axios.get('https://www.freetestapi.com/api/v1/cars')
    .then(function(response)
    {
        button.textContent="Click Here";
        make.textContent=response.data[i].make;
        model.textContent=response.data[i].model;
        year.textContent=response.data[i].year;
        feature.textContent=response.data[i].features;
        i++;
    })
};