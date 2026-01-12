import pkg from 'next';
console.log('Default export keys:', Object.keys(pkg || {}));

// Try direct import
try {
  const { Config } = await import('next');
  console.log('Config exported:', !!Config);
} catch (e) {
  console.log('Config import error:', e.message);
}

try {
  const { NextConfig } = await import('next');
  console.log('NextConfig exported:', !!NextConfig);
} catch (e) {
  console.log('NextConfig import error:', e.message);
}
