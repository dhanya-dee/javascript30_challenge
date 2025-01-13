// 2. Reduce Exercise
// Sum up the instances of each of these
reduce = () => {
  let sum = vehiclesSorted.reduce(sumCalc);

  document.getElementById("array-reduce").style.display = "block";
  if (!document.getElementById("array-reduce").innerHTML.includes(`${sum}`)) {
    document.getElementById("array-reduce").innerHTML =
      document.getElementById("array-reduce").innerHTML + ` ${sum}`;
  }
};

sumCalc = () => {
  return vehiclesSorted.length;
};