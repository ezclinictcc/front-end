export function getBaseURL(): string {
  return process.env.REACT_APP_SERVICES_URL || "";
}
