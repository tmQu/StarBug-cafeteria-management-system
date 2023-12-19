export default function formatCurrencyWithCommas(number) {
  const numberWithCommas = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return numberWithCommas;
}
