export function formatTemperature(value: number) {
  return value > 0 ? `+${Math.round(value)}℃` : `${Math.round(value)}℃`;
}
