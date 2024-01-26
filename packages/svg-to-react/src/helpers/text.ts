export const titleCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const camelCase = (text: string, separator = ' ') => text.split(separator).map((word, key) => {
  if (key === 0) {
    return word;
  }

  return titleCase(word);
}).join('');
