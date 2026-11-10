export function safeUrl(value) {
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null
  } catch { return null }
}

export function externalAction(gift) {
  const url = safeUrl(gift.type === 'product' ? gift.productUrl : gift.type === 'open' ? gift.pinterestUrl : gift.experienceUrl)
  if (!url) return null
  return { url, label: gift.type === 'product' ? 'Ver produto' : gift.type === 'open' ? 'Abrir no Pinterest' : 'Ver experiência' }
}
