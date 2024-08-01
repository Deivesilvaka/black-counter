async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);

  alert("Texto copiado para a área de transferência");
}
