// 1. sort Exercise
// Sort the vehicles alphabetically and group them
const vehicles = [
  "car",
  "bike",
  "car",
  "truck",
  "truck",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
let table = document.getElementById("customerTable");
document.getElementById("array-sorted").style.display = "none";
document.getElementById("array-reduce").style.display = "none";
document.getElementById("array-filtered").style.display = "none";
document.getElementById("map-filtered").style.display = "none";

for (let i = 0; i < vehicles.length; i++) {
  var row = table.insertRow(i + 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = i;
  cell2.innerHTML = vehicles[i];
}

//let vehiclesSorted = vehicles;
//vehiclesSorted  (points to the copy of vehicles in memory, new variable not present in memory)=> vehicles (is stored in memory)
let vehiclesSorted = [...vehicles]; // Shallow copy
//vehiclesSorted, vehicles (stored in memory) (both holding two different values)

var buttonElement = document.getElementById("sort-button");
sort = () => {
  vehiclesSorted.sort();
  for (let i = vehiclesSorted.length; i > 0; i--) {
    table.deleteRow(i); // removing all original arrays rows , i+1 is deleted as heading should be present
  }

  for (let i = 0; i < vehiclesSorted.length; i++) {
    var row = table.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = i;
    cell2.innerHTML = vehiclesSorted[i];
  }
  document.getElementById("array-sorted").style.display = "block";
};