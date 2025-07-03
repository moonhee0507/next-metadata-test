const fs = require('fs');
const path = require('path');

const pkg = require('@next/env');
const { loadEnvConfig } = pkg;

loadEnvConfig(process.cwd())

const baseUrl = (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
process.env.host ||
`http://localhost:${process.env.PORT}`;

const content = `
User-Agent: *
Allow: /
Disallow: /private/
Sitemap: ${baseUrl}/sitemap.xml
`.trimStart();

const outputPath = path.join(__dirname, '../public/robots.txt');
fs.writeFileSync(outputPath, content);

console.log(`[robots.txt] generated: ${outputPath}`);