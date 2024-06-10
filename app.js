 const celsiusField = document.querySelector("#celsius");
 const degree = document.querySelector("#degree");
 const convertBtn = document.querySelector("#convert-btn");
 const temptype = document.querySelector("#temp-type");

 window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
 })

 convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML = "<span><i class= 'fa fa-spinner fa-spin'></i>Converting...</span>" ;
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";

    }, 1000)
 })

 function convertToCelsius() {
    let inputvalue = degree.value;

    setTimeout(() =>{
        if(temptype.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputvalue -32) *(5/9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
            c`;
        }
        else if(temptype.value === "kelvin"){
                const kelvinToCelsius = inputvalue - 273.15;
                celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
                c`;
        }

    }, 1200)
 }
