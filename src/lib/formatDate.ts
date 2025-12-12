export function formatTime(isoString: string, local = false): string {
  const date = new Date(isoString);

  if (local) {
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else {
    // UTC time
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
}

export function getMinute(isoString: string, local = false): string {
  const date = new Date(isoString);

  if (local) {
    return date.getMinutes().toString().padStart(2, "0");
  } else {
    return date.getUTCMinutes().toString().padStart(2, "0");
  }
}
