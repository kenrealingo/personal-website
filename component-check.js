// Diagnostic script to check component health
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function checkComponentHealth() {
  console.log('🔍 Checking component health...\n');
  
  try {
    // Check TypeScript
    console.log('📝 TypeScript check...');
    await execAsync('npx tsc --noEmit');
    console.log('✅ TypeScript: No errors\n');
    
    // Check ESLint
    console.log('🔧 ESLint check...');
    await execAsync('npx eslint components/');
    console.log('✅ ESLint: No errors\n');
    
    // Check Next.js build
    console.log('🏗️ Next.js build check...');
    await execAsync('npx next build --dry-run');
    console.log('✅ Next.js: Build successful\n');
    
    console.log('🎉 All components are healthy!');
    
  } catch (error) {
    console.error('❌ Found issues:', error.message);
  }
}

checkComponentHealth();
