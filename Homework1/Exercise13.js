//Ex.13

// Given the list of the following readers:
// [
//  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
//  { book: "Animal Farm", readStatus: true, percent: 20 },
//  { book: "Solaris", readStatus: false, percent: 90 },
//  { book: "The Fall", readStatus: true, percent: 50 },
//  { book: "White Nights", readStatus: false, percent: 60 },
//  { book: "After Dark", readStatus: true, percent: 70 },
// ];
// Output the books sorted by the percent in descending order which readStatus is true.



let readers = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
   ];
   
   let percentages = [];
   
   for (let i in readers) {
     if (readers[i].readStatus) {
       percentages.push(readers[i].percent);
     }
   }
   
   percentages.sort((a, b) => b - a);

   let sortedBooks = [];

   for  (let j in percentages){
    for (let k in readers){
        if (readers[k].percent === percentages[j] && readers[k].readStatus){
            sortedBooks.push(readers[k])
        }
    }
   }

   let output = "";

   for (let l in sortedBooks){
    output += sortedBooks[l].book + ": " + sortedBooks[l].percent + "%\n"
   }

   console.log(output);
   