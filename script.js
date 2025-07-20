//Reader info
let fullName = "Muzhda Wafa";
let month = "June";

console.log("Reader's Name: " + fullName);
console.log("Current Month: " + month); 

// Book Details 

// Book 1
let title1 = "The Brothers Karamosov";
let totalPages1 = 780;
let pagesRead1 = 780;

// Book 2
let title2 = "Atomic Habits";
let totalPages2 = 320;
let pagesRead2 = 177;

// Book 3
let title3 = "Midnight Library";
let totalPages3 = 304;
let pagesRead3 = 88;

console.log("You have read " + pagesRead1 + " pages out of " + totalPages1 + " pages from " + title1);
console.log("You have read " + pagesRead2 + " pages out of " + totalPages2 + " pages from " + title2);
console.log("You have read " + pagesRead3 + " pages out of " + totalPages3 + " pages from " + title3);

//Reading Progress

function calculateProgress(pagesRead, totalPages) {
  return Math.round((pagesRead / totalPages) * 100);
}

console.log("Book 1 Progress: " + calculateProgress(pagesRead1, totalPages1) + "%");
console.log("Book 2 Progress: " + calculateProgress(pagesRead2, totalPages2) + "%");
console.log("Book 3 Progress: " + calculateProgress(pagesRead3, totalPages3) + "%");

function getReadingStatus(progressPercent) {
    if (progressPercent === 100) {
     return "Finished!";
    }
    else if (progressPercent >= 50) {
     return "Inprogress!";
    }
    else {
     return "Just Started";
    }
}

// Print Book Summary

function printBookSummary(title, pagesRead, totalPages) {
    let progress = calculateProgress(pagesRead, totalPages);
    let status = getReadingStatus(progress);
    console.log(`${title}: ${pagesRead}/${totalPages} pages read - ${status}`);
    
}

printBookSummary("The Brothers Karamosov", 780, 780);
printBookSummary("Atomic Habits", 177, 304);
printBookSummary("The Midnight Library", 88, 320);

let bookTitles = [title1, title2, title3];
console.log(bookTitles);
let booksTotalPages = [ totalPages1, totalPages2, totalPages3]
console.log(booksTotalPages);
let booksTotalPagesRead = [pagesRead1, pagesRead2, pagesRead3]
console.log(booksTotalPagesRead);

for (let i = 0; i < bookTitles.length; i++) {
  printBookSummary(bookTitles[i], booksTotalPagesRead[i], booksTotalPages[i]);
}

function alltotalPagesRead(booksTotalPagesRead) {
  let total = 0;
  for (let i = 0; i < booksTotalPagesRead.length; i++) {
    total += booksTotalPagesRead[i];
  }
  return total;
}

console.log("Total pages read: " + alltotalPagesRead(booksTotalPagesRead));






