export default function checkSuccessfulStatus(status: number) {
  return status >= 200 && status <= 299;
}
