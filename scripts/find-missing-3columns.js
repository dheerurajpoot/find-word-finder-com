const fs = require("fs");
const path = require("path");

const spellingDir = path.join(__dirname, "../src/app/spelling");

// Get all subdirectories in spellingDir
const folders = fs
  .readdirSync(spellingDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)
  .sort();

// Filter for folders starting with 'a' (case insensitive)
const aFolders = folders.filter(folder => 
  folder.toLowerCase().startsWith('a')
);

console.log(`Found ${aFolders.length} folders starting with 'A':`);

const missingThreeColumns = [];

// Check each folder for missing 3-column layout
aFolders.forEach(folder => {
  const pagePath = path.join(spellingDir, folder, "page.tsx");
  
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, "utf8");
    
    // Check if the page has the 3-column layout
    if (!content.includes("Three Column Layout") && 
        !content.includes("grid md:grid-cols-3") &&
        !content.includes("Featured Misspellings") &&
        !content.includes("Related Misspellings") &&
        !content.includes("Learned Grammar")) {
      
      missingThreeColumns.push(folder);
      console.log(`❌ Missing 3-column layout: ${folder}`);
    } else {
      console.log(`✅ Has 3-column layout: ${folder}`);
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`Total A-folders: ${aFolders.length}`);
console.log(`Missing 3-column layout: ${missingThreeColumns.length}`);
console.log(`Has 3-column layout: ${aFolders.length - missingThreeColumns.length}`);

if (missingThreeColumns.length > 0) {
  console.log(`\n📝 Folders missing 3-column layout:`);
  missingThreeColumns.forEach(folder => {
    console.log(`  - ${folder}`);
  });
}
