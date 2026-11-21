// Render page.html (1024x1024) to a PNG with headless Chromium.
// Usage: node shot.mjs [input.html] [output.png]
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire('/home/hatch/workspace/makefun/shot-tools/package.json');
const puppeteer = require('puppeteer');

const input = process.argv[2] ?? 'page.html';
const output = process.argv[3] ?? 'entry.png';
const abs = path.resolve(input);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--force-device-scale-factor=1'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto('file://' + abs, { waitUntil: 'load' });
  await page.waitForFunction('window.__shotReady === true', { timeout: 15000 });
  await page.screenshot({ path: output, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
  console.log('wrote', output);
} finally {
  await browser.close();
}
