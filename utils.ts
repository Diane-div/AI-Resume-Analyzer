function formatSize(bytes : number):string {
  if (bytes === 0) return "0 B";

  const units = ["B", "kB", "MB", "GB"];
  let index = 0;

  while (bytes >= 1024 && index < units.length - 1) {
    bytes /= 1024;
    index++;
  }

  return bytes.toFixed(2) + " " + units[index];
}
export { formatSize };
