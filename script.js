// Task 2
function calculateSumAndAverage(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    const average = total / numbers.length;
    return { total, average };
  }
  
  const numbers = [10, 20, 30, 40,50,60,70,80,90,100];
  const result = calculateSumAndAverage(numbers);
  console.log("Total:", result.total, "Average:", result.average);
  
//  Task 3
  function removeDuplicates(array1) {
    return Array.from(new Set(array1));
  }
  
  const strings = ["apple", "banana", "apple", "orange", "banana" ,"banana","lemon","orange","fig"];
  const uniqueStrings = removeDuplicates(strings);
  console.log("Unique strings is :", uniqueStrings);
  