var formatter = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
});

export default function currencyFormatter(value) {
  return formatter.format(value);
}
