export default function generateHEX() {
  const chart = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chart[Math.floor(Math.random() * 16)];
  }
  return hex;
}
