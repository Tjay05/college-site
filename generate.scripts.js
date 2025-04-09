// File: generate.scripts.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively scan directories
function scanDirectory(dir, baseDir) {
    const files = [];
    try {
        const items = fs.readdirSync(dir);

        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                files.push(...scanDirectory(fullPath, baseDir));
            } else {
                // Create a relative path from the base directory
                const relativePath = fullPath.replace(baseDir, '').replace(/\\/g, '/');
                files.push(relativePath);
            }
        });
    } catch (error) {
        console.error(`Error scanning directory ${dir}:`, error.message);
    }

    return files;
}

// Determine correct public directory path
// Try multiple possible locations
const projectRoot = path.resolve(__dirname);
let publicDir;
let courseUploadDir;

// List of possible paths to check
const possiblePaths = [
    // Option 1: public dir directly in project root
    path.join(projectRoot, 'public'),
    // Option 2: public dir in parent directory
    path.join(projectRoot, '..', 'public'),
    // Option 3: directly in project root
    projectRoot
];

// Find the first path that has a 'course upload' or similar directory
for (const dir of possiblePaths) {
    if (fs.existsSync(dir)) {
        console.log(`Found directory: ${dir}`);
        // Check for course upload directory
        const courseDir = path.join(dir, 'course upload');
        if (fs.existsSync(courseDir)) {
            publicDir = dir;
            courseUploadDir = courseDir;
            console.log(`Found course upload directory: ${courseUploadDir}`);
            break;
        } else {
            // Try alternate names
            const items = fs.readdirSync(dir);
            for (const item of items) {
                const itemPath = path.join(dir, item);
                if (fs.statSync(itemPath).isDirectory() &&
                    (item.toLowerCase().includes('course') || item.toLowerCase().includes('upload'))) {
                    publicDir = dir;
                    courseUploadDir = itemPath;
                    console.log(`Found alternative course directory: ${courseUploadDir}`);
                    break;
                }
            }
            if (courseUploadDir) break;
        }
    }
}

if (!courseUploadDir) {
    console.error('Could not find course upload directory!');
    console.log('Please specify the exact path to your course directory:');
    process.exit(1);
}

// Scan the course upload directory
const files = scanDirectory(courseUploadDir, publicDir);

// Create mapping for the file structure with renamed properties
const courseFiles = files.map(filePath => {
    // Extract folder and file name
    const parts = filePath.split('/').filter(part => part);
    let folder = parts.length > 1 ? parts[parts.length - 2] : ''; // Second to last part should be the folder
    const fileName = parts[parts.length - 1]; // Last part is the file name

    return {
        path: filePath.startsWith('/') ? filePath : '/' + filePath, // Changed from filePath
        level: folder, // Changed from folder
        fileName      // Kept as is
    };
});

// Write the manifest to a JSON file
const manifestPath = path.join(publicDir, 'course-manifest.json');
fs.writeFileSync(
    manifestPath,
    JSON.stringify({ courseFiles }, null, 2)
);

console.log(`Generated course manifest with ${courseFiles.length} files at ${manifestPath}`);