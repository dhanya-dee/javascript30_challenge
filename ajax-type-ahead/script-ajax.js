const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// cities.json is obtained from the endpoint

const cities = [];
  
  let ele =  document.querySelector('#enterInput');
  let dropdownItems =  document.getElementsByClassName('.dropdownItem');
  let suggestions =  document.getElementById('suggestions');


  ele.addEventListener("change", searchText);

  function searchText(){
    if(!this.value){
        fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data));
    }
    else{
        let searchTextFound = cities.filter((e) => {
            if(e.city === String(this.value) || e.state === String(this.value)){
                return cities;
            }
        });
        if(dropdownItems.length < searchTextFound.length){
            let i = 1;
            while(i <= searchTextFound.length){
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(""));
                li.setAttribute("class", "dropdownItem");
                suggestions.appendChild(li);
            }
            i++;
        }
        console.log(dropdownItems.length , searchTextFound.length);
        if(dropdownItems.length == searchTextFound.length){
            displayCityName();
        }
    }
  }

  function displayCityName(){
    dropdownItems?.forEach( function updateValue(item){
        searchTextFound.forEach( (value) => {
            item.innerText = value.city;
        });
    });
  }
  searchText();

