const inpUrl = document.getElementById("inpUrl");
const defaultData = document.getElementById("defaultData");
const pbFetch = document.getElementById("pbFetch");
const pbClear = document.getElementById("pbClear");
const text = document.getElementById("txt");
const defaultApiUrl = "https://api.dataforsyningen.dk/kommuner/0530";


function defaultInput() {
    inpUrl.value = defaultApiUrl;
}

function clearField() {
    text.value = "";
}

async function getApi() {
    const response = await fetch(inpUrl.value)
    let data = await response.json()
    text.value = JSON.stringify(data, null, 2);
}


defaultData.addEventListener("click", defaultInput);
pbFetch.addEventListener("click", getApi);
pbClear.addEventListener("click", clearField);
