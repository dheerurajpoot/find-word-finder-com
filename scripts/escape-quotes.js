const fs = require('fs');
const path = require('path');

function escapeQuotesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace unescaped " in JSX text nodes with &quot;
  content = content.replace(/>([^<]*)</g, (match) =>
    match
      .replace(/"(?=[^<]*<)/g, '&quot;')
      .replace(/'(?=[^<]*<)/g, '&apos;')
  );
  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file === 'page.tsx') {
      escapeQuotesInFile(fullPath);
      console.log('Escaped quotes in:', fullPath);
    }
  });
}

walk(path.join(__dirname, '../src/app/spelling')); 