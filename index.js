function betterThanAverage(classPoints, yourPoints) {
  var allStudents = [...classPoints , yourPoints]
  var sum = 0
  allStudents.forEach(function(num) { sum += num });
  const average = sum / allStudents.length;
  
  if (yourPoints > average){
    return true;
  }
  else{
    return false;
  }
}
