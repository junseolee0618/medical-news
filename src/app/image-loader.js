export default function imageLoader({ src, width, quality }) {
  if (src.startsWith('https://')) {
    return src;
  }
  return `/medical-news${src}?w=${width}&q=${quality || 75}`;
} 