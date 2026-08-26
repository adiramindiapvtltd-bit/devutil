var ICONS = {
  braces: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  binary: '<rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  fingerprint: '<path d="M2 12c0-4.4 3.6-8 8-8M22 12c0 4.4-3.6 8-8 8M8 4a8 8 0 0 1 8 0M16 20a8 8 0 0 1-8 0"/><circle cx="12" cy="12" r="2"/>',
  key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  hash: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM19 19h2v2h-2zM19 14h2v2h-2zM14 19h2v2h-2z"/>',
  shuffle: '<path d="m16 3 4 4-4 4"/><path d="M4 7h9"/><path d="m8 21-4-4 4-4"/><path d="M20 17h-9"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".6" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".6" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".6" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".6" fill="currentColor"/><path d="M12 2a10 10 0 1 0 0 20c1.4 0 2-1 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.3C19.9 15.2 22 13 22 10 22 5.6 17.5 2 12 2z"/>',
  type: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  align: '<line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="12" x2="3" y2="12"/><line x1="17" y1="18" x2="3" y2="18"/>',
  diff: '<rect x="3" y="3" width="8" height="18" rx="1.5"/><rect x="13" y="3" width="8" height="18" rx="1.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ruler: '<path d="m14.5 2 7.5 7.5-12.5 12.5-7.5-7.5z"/><path d="m18 6-2 2"/><path d="m14 10-2 2"/><path d="m10 14-2 2"/>',
  table: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><circle cx="8" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="14.5" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="14.5" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="14.5" r="1" fill="currentColor" stroke="none"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  shield: '<path d="M12 2 4 5v6c0 5.5 3.8 9 8 11 4.2-2 8-5.5 8-11V5z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1"/>'
};

var TOOLS = [
  { slug: 'json-formatter', name: 'JSON Formatter & Validator', shortName: 'JSON Formatter', description: 'Beautify, minify, and validate JSON instantly.', category: 'Formatting', icon: 'braces' },
  { slug: 'xml-formatter', name: 'XML Formatter & Validator', shortName: 'XML Formatter', description: 'Beautify and validate XML documents.', category: 'Formatting', icon: 'code' },
  { slug: 'yaml-formatter', name: 'YAML Formatter & Validator', shortName: 'YAML Formatter', description: 'Validate YAML and convert it to JSON.', category: 'Formatting', icon: 'braces' },
  { slug: 'sql-formatter', name: 'SQL Formatter', shortName: 'SQL Formatter', description: 'Beautify messy SQL queries for readability.', category: 'Formatting', icon: 'database' },
  { slug: 'css-formatter', name: 'CSS Formatter & Minifier', shortName: 'CSS Formatter', description: 'Beautify or minify CSS stylesheets.', category: 'Formatting', icon: 'code' },
  { slug: 'html-formatter', name: 'HTML Formatter & Minifier', shortName: 'HTML Formatter', description: 'Beautify or minify HTML markup.', category: 'Formatting', icon: 'code' },
  { slug: 'markdown-previewer', name: 'Markdown Previewer', shortName: 'Markdown Previewer', description: 'Write Markdown and preview the rendered HTML live.', category: 'Formatting', icon: 'file' },

  { slug: 'base64', name: 'Base64 Encoder & Decoder', shortName: 'Base64', description: 'Convert text to and from Base64 in one click.', category: 'Encoding', icon: 'binary' },
  { slug: 'url-encoder', name: 'URL Encoder & Decoder', shortName: 'URL Encoder', description: 'Percent-encode or decode URLs and query strings.', category: 'Encoding', icon: 'link' },
  { slug: 'html-entities', name: 'HTML Entity Encoder & Decoder', shortName: 'HTML Entities', description: 'Convert special characters to and from HTML entities.', category: 'Encoding', icon: 'code' },
  { slug: 'jwt-decoder', name: 'JWT Decoder', shortName: 'JWT Decoder', description: 'Decode a JSON Web Token to inspect its header and payload.', category: 'Encoding', icon: 'key' },
  { slug: 'hex-converter', name: 'Hex Encoder & Decoder', shortName: 'Hex Converter', description: 'Convert text to and from hexadecimal.', category: 'Encoding', icon: 'binary' },
  { slug: 'unicode-escape', name: 'Unicode Escape Converter', shortName: 'Unicode Escape', description: 'Convert text to \\uXXXX escapes and back.', category: 'Encoding', icon: 'binary' },
  { slug: 'base32', name: 'Base32 Encoder & Decoder', shortName: 'Base32', description: 'Convert text to and from Base32.', category: 'Encoding', icon: 'binary' },

  { slug: 'uuid-generator', name: 'UUID Generator', shortName: 'UUID Generator', description: 'Generate random UUID v4 identifiers instantly.', category: 'Generators', icon: 'fingerprint' },
  { slug: 'password-generator', name: 'Password Generator', shortName: 'Password Generator', description: 'Generate strong random passwords with custom rules.', category: 'Generators', icon: 'key' },
  { slug: 'lorem-ipsum', name: 'Lorem Ipsum Generator', shortName: 'Lorem Ipsum', description: 'Generate placeholder text by paragraphs, words, or sentences.', category: 'Generators', icon: 'type' },
  { slug: 'hash-generator', name: 'Hash Generator', shortName: 'Hash Generator', description: 'Generate MD5, SHA-1, and SHA-256 hashes of text.', category: 'Generators', icon: 'hash' },
  { slug: 'qr-code-generator', name: 'QR Code Generator', shortName: 'QR Code Generator', description: 'Turn text or a URL into a downloadable QR code.', category: 'Generators', icon: 'qr' },
  { slug: 'random-number', name: 'Random Number Generator', shortName: 'Random Number', description: 'Generate random integers in a range, with no repeats option.', category: 'Generators', icon: 'shuffle' },
  { slug: 'slug-generator', name: 'Slug Generator', shortName: 'Slug Generator', description: 'Turn any text into a clean URL slug.', category: 'Generators', icon: 'link' },
  { slug: 'ulid-generator', name: 'ULID Generator', shortName: 'ULID Generator', description: 'Generate sortable, unique ULID identifiers.', category: 'Generators', icon: 'fingerprint' },
  { slug: 'color-palette-generator', name: 'Color Palette Generator', shortName: 'Color Palette', description: 'Generate a random harmonious color palette.', category: 'Generators', icon: 'palette' },
  { slug: 'password-strength-checker', name: 'Password Strength Checker', shortName: 'Password Strength', description: 'Check how strong a password is and why.', category: 'Generators', icon: 'shield' },

  { slug: 'case-converter', name: 'Case Converter', shortName: 'Case Converter', description: 'Convert text between UPPER, lower, Title, camelCase and more.', category: 'Text', icon: 'type' },
  { slug: 'word-counter', name: 'Word & Character Counter', shortName: 'Word Counter', description: 'Count words, characters, sentences, and reading time.', category: 'Text', icon: 'align' },
  { slug: 'text-diff', name: 'Text Diff Checker', shortName: 'Text Diff', description: 'Compare two blocks of text and highlight the differences.', category: 'Text', icon: 'diff' },
  { slug: 'dedupe-lines', name: 'Duplicate Line Remover', shortName: 'Dedupe Lines', description: 'Remove duplicate lines from a list of text.', category: 'Text', icon: 'align' },
  { slug: 'line-sorter', name: 'Line Sorter', shortName: 'Line Sorter', description: 'Sort lines alphabetically, numerically, or randomly.', category: 'Text', icon: 'align' },
  { slug: 'trim-whitespace', name: 'Whitespace Trimmer', shortName: 'Trim Whitespace', description: 'Strip extra spaces, tabs, and blank lines from text.', category: 'Text', icon: 'align' },
  { slug: 'find-replace', name: 'Find & Replace', shortName: 'Find & Replace', description: 'Find and replace text, with optional regex support.', category: 'Text', icon: 'search' },
  { slug: 'reverse-text', name: 'Text Reverser', shortName: 'Reverse Text', description: 'Reverse text by character, word, or line.', category: 'Text', icon: 'shuffle' },
  { slug: 'remove-line-breaks', name: 'Remove Line Breaks', shortName: 'Remove Line Breaks', description: 'Join multi-line text into a single line or paragraph.', category: 'Text', icon: 'align' },

  { slug: 'regex-tester', name: 'Regex Tester', shortName: 'Regex Tester', description: 'Test a regular expression against sample text with live matches.', category: 'Web', icon: 'search' },
  { slug: 'css-gradient-generator', name: 'CSS Gradient Generator', shortName: 'CSS Gradient', description: 'Build a linear or radial gradient and copy the CSS.', category: 'Web', icon: 'palette' },
  { slug: 'box-shadow-generator', name: 'Box Shadow Generator', shortName: 'Box Shadow', description: 'Design a CSS box-shadow visually.', category: 'Web', icon: 'ruler' },
  { slug: 'color-converter', name: 'Color Converter', shortName: 'Color Converter', description: 'Convert colors between HEX, RGB, and HSL.', category: 'Web', icon: 'palette' },
  { slug: 'css-unit-converter', name: 'CSS Unit Converter', shortName: 'CSS Unit Converter', description: 'Convert between px, rem, em, and pt.', category: 'Web', icon: 'ruler' },
  { slug: 'http-status-codes', name: 'HTTP Status Code Lookup', shortName: 'HTTP Status Codes', description: 'Search HTTP status codes and what they mean.', category: 'Web', icon: 'search' },
  { slug: 'meta-tag-generator', name: 'Meta Tag Generator', shortName: 'Meta Tags', description: 'Generate SEO and Open Graph meta tags for a page.', category: 'Web', icon: 'code' },
  { slug: 'css-clamp-calculator', name: 'CSS Clamp() Calculator', shortName: 'CSS Clamp', description: 'Generate a fluid clamp() value for responsive type.', category: 'Web', icon: 'ruler' },
  { slug: 'contrast-checker', name: 'Contrast Checker', shortName: 'Contrast Checker', description: 'Check WCAG color contrast between two colors.', category: 'Web', icon: 'shield' },
  { slug: 'favicon-generator', name: 'Favicon Generator', shortName: 'Favicon Generator', description: 'Resize an uploaded image into standard favicon sizes.', category: 'Web', icon: 'image' },

  { slug: 'csv-to-json', name: 'CSV to JSON', shortName: 'CSV to JSON', description: 'Convert CSV data into a JSON array of objects.', category: 'Converters', icon: 'table' },
  { slug: 'json-to-csv', name: 'JSON to CSV', shortName: 'JSON to CSV', description: 'Convert a JSON array of objects into CSV.', category: 'Converters', icon: 'table' },
  { slug: 'timestamp-converter', name: 'Timestamp / Epoch Converter', shortName: 'Timestamp Converter', description: 'Convert between Unix timestamps and readable dates.', category: 'Converters', icon: 'clock' },
  { slug: 'number-base-converter', name: 'Number Base Converter', shortName: 'Number Base', description: 'Convert numbers between binary, octal, decimal, and hex.', category: 'Converters', icon: 'calculator' },
  { slug: 'markdown-to-html', name: 'Markdown to HTML', shortName: 'Markdown to HTML', description: 'Convert Markdown source into raw HTML.', category: 'Converters', icon: 'file' },
  { slug: 'yaml-json-converter', name: 'YAML ↔ JSON Converter', shortName: 'YAML ↔ JSON', description: 'Convert between YAML and JSON in either direction.', category: 'Converters', icon: 'braces' },
  { slug: 'byte-converter', name: 'Byte Size Converter', shortName: 'Byte Converter', description: 'Convert between bits, bytes, KB, MB, and GB.', category: 'Converters', icon: 'calculator' },
  { slug: 'roman-numeral-converter', name: 'Roman Numeral Converter', shortName: 'Roman Numerals', description: 'Convert between numbers and Roman numerals.', category: 'Converters', icon: 'calculator' },
  { slug: 'csv-to-markdown', name: 'CSV to Markdown Table', shortName: 'CSV to Markdown', description: 'Convert CSV data into a Markdown table.', category: 'Converters', icon: 'table' },
  { slug: 'text-to-binary', name: 'Text to Binary/ASCII', shortName: 'Text to Binary', description: 'Convert text to binary or ASCII codes and back.', category: 'Converters', icon: 'binary' }
];

var CATEGORY_ORDER = ['Formatting', 'Encoding', 'Generators', 'Text', 'Web', 'Converters'];
var CATEGORY_LABEL = { Formatting: 'Formatting', Encoding: 'Encoding', Generators: 'Generators', Text: 'Text Tools', Web: 'Web & CSS', Converters: 'Converters' };
var CATEGORY_TAGLINE = {
  Formatting: 'Beautify and validate data formats',
  Encoding: 'Convert text between formats',
  Generators: 'Create IDs and random values',
  Text: 'Clean up and transform text',
  Web: 'CSS and web development helpers',
  Converters: 'Convert between data formats'
};
var POPULAR_SLUGS = ['json-formatter', 'base64', 'uuid-generator', 'password-generator', 'regex-tester', 'timestamp-converter'];

function iconSvg(key, extraAttrs) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extraAttrs || '') + '>' + (ICONS[key] || ICONS.code) + '</svg>';
}
