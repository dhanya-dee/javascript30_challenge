// 3. Filter the list of inventors for those who were born in the 1500's
// Array.prototype.filter()

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

var buttonElement3 = document.getElementById("filter-button");
let inventorsTable = document.getElementById("inventorsTable");
inventorsRendering = (arr, tableName) => {
  for (let j = 0; j < arr.length; j++) {
    let row = tableName.insertRow(j + 1);
    for (let k = 0; k < 4; k++) {
      let cell = "cell" + `${k}`;
      cell = row.insertCell(k);
      switch (k) {
        case 0:
          {
            cell.innerHTML = j;
          }
          break;
        case 1:
          {
            cell.innerHTML = arr[j].first + " " + arr[j].last;
          }
          break;
        case 2:
          {
            cell.innerHTML = arr[j].year;
          }
          break;
        case 3:
          {
            cell.innerHTML = arr[j].passed;
          }
          break;
      }
    }
  }
};
inventorsRendering(inventors, inventorsTable);

filter = () => {
  inventors.sort((a, b) => a.year - b.year);
  if (document.getElementById("array-filtered").style.display === "none") {
    for (let l = inventors.length; l > 0; l--) {
      inventorsTable.deleteRow(l); // removing all original arrays rows ,
      //till l+1 is deleted as heading should still be present
    }
    let result = inventors.filter(
      (inventor) => inventor.year > 1500 && inventor.year < 1599
    );
    inventorsRendering(result, inventorsTable);
  }
  document.getElementById("array-filtered").style.display = "block";
};

// Array.prototype.map()
// 4. Give us an array of the inventors first and last names

var buttonElement4 = document.getElementById("map-button");
let mapTable = document.getElementById("mapTable");

inventorsRendering(inventors, mapTable); // adding a second parameter called mapTable -> change
// and use the same function inventorsRendering for both filter and map tabs -> targets two seperate tables
map = () => {
  let newMappedArray = inventors.map((inventor) => {
    return " " + inventor.first + " " + inventor.last + " ";
  });
  if (document.getElementById("map-filtered").style.display === "none") {
    document.getElementById("map-filtered").innerHTML =
      document.getElementById("map-filtered").innerHTML +
      ` [${newMappedArray}]`;
  }
  document.getElementById("map-filtered").style.display = "block";
};
