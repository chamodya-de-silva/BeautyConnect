const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./frontend/src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    if (content.includes('bg-gray-900')) {
        content = content.replace(/bg-gray-900/g, 'bg-gray-200');
        changed = true;
    }

    if (content.includes('text-white')) {
        content = content.replace(/text-white/g, 'text-black');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
    }
});
console.log('Colors replaced successfully.');
