import fs from 'node:fs/promises';
import sharp from 'sharp';

const width = 1080;
const height = 1350;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbb0b5"/>
      <stop offset="50%" stop-color="#fdf2f8"/>
      <stop offset="100%" stop-color="#b0faea"/>
    </linearGradient>
    <linearGradient id="logo-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#fb7185"/>
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="20%">
      <stop offset="0%" stop-color="#fbe6f0" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ffe4e6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="50%" cy="80%">
      <stop offset="0%" stop-color="#17f4c4" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#17eabc" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Main background - soft pastel gradient -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#bg)"/>
  
  <!-- Dreamy glow effects like hero section -->
  <ellipse cx="800" cy="200" rx="400" ry="400" fill="url(#glow1)"/>
  <ellipse cx="300" cy="1100" rx="350" ry="350" fill="url(#glow2)"/>

  <!-- Soft overlay card -->
  <rect x="70" y="70" width="940" height="1210" rx="40" fill="rgba(255, 220, 236, 0.32)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2"/>

  <!-- Logo circle -->
  <circle cx="540" cy="200" r="85" fill="url(#logo-bg)" opacity="0.95"/>
  <text x="540" y="230" text-anchor="middle" font-family="'DM Serif Display', Georgia, serif" font-size="96" font-weight="700" fill="#ffffff" style="font-style: italic;">R</text>

  <!-- Main heading -->
  <text x="540" y="390" text-anchor="middle" font-family="'Quicksand', Arial, sans-serif" font-size="68" font-weight="700" fill="#ffffff" letter-spacing="2">WEBSITE</text>
  <text x="540" y="475" text-anchor="middle" font-family="'Quicksand', Arial, sans-serif" font-size="68" font-weight="700" fill="#ffffff" letter-spacing="2">COMING SOON</text>

  <!-- Decorative line -->
  <line x1="300" y1="540" x2="780" y2="540" stroke="rgba(255, 255, 255, 0.75)" stroke-width="2"/>

  <!-- Subheading -->
  <text x="540" y="640" text-anchor="middle" font-family="'Quicksand', Arial, sans-serif" font-size="38" font-weight="600" fill="#ffffff">Handmade Crochet Bags</text>
  <text x="540" y="695" text-anchor="middle" font-family="'Quicksand', Arial, sans-serif" font-size="38" font-weight="500" fill="rgba(255,255,255,0.95)">crafted with love</text>

  <!-- CTA -->
  <text x="540" y="830" text-anchor="middle" font-family="'Quicksand', Arial, sans-serif" font-size="32" font-weight="600" fill="#ffffff">Follow us for launch updates ✨</text>

  <!-- Social handle box -->
  <rect x="320" y="910" width="440" height="80" rx="40" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <text x="540" y="960" text-anchor="middle" font-family="'Quicksand', Arial, sans-serif" font-size="28" font-weight="700" fill="#f893be">@rukaiya_crochet_bags</text>

  <!-- Website URL -->
</svg>
`;

await fs.mkdir('public', { recursive: true });

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, quality: 100 })
  .toFile('public/instagram-coming-soon.png');

console.log('Generated: public/instagram-coming-soon.png');
