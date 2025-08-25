#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distPublicPath = path.resolve(projectRoot, 'dist', 'public');
const distPath = path.resolve(projectRoot, 'dist');

// Function to copy files recursively
function copyRecursive(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      copyRecursive(srcPath, destPath);
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Move files from dist/public to dist
if (fs.existsSync(distPublicPath)) {
  console.log('Moving files from dist/public to dist...');
  
  const files = fs.readdirSync(distPublicPath);
  files.forEach(file => {
    const srcPath = path.join(distPublicPath, file);
    const destPath = path.join(distPath, file);
    
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true, force: true });
    }
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
  
  // Remove the public directory
  fs.rmSync(distPublicPath, { recursive: true, force: true });
  console.log('Files moved successfully!');
} else {
  console.log('No dist/public directory found, skipping file move.');
}