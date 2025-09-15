export const sanitizeInput = (value) => {
  if (typeof value !== "string") return value;

  return value
    .trim()
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};
