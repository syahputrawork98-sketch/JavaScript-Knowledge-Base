// C27 - with Statement

const settings = { theme: 'dark', lang: 'id' };

// Simulasi alternatif aman (bukan with):
const { theme, lang } = settings;
console.log('theme:', theme, '| lang:', lang);

console.log('with statement dihindari pada code modern');
