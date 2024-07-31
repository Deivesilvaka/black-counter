async function copyToClipboard() {
  const output = calculate();

  await navigator.clipboard.writeText(output);

  alert("Texto copiado para a área de transferência");
}
