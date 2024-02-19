export function formatTimeFromTimestamp(timestamp: number, timezone: number): string {
  return new Date(timestamp * 1000 + timezone * 1000).toUTCString().substr(-12, 5)
}
