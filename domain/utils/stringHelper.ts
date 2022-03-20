export const textEllipsis = (text: string, maxLength = 25) => {
  if (text.length > maxLength) return text.slice(0, maxLength) + "...";
  return text;
};
