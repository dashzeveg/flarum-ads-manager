// js/src/forum/utils/renderAdInFrame.ts

export function renderAdInFrame(container: HTMLElement, adHtml: string): void {
  // Avoid re-rendering if the ad is already loaded
  if (container.dataset.adLoaded === adHtml) return;
  container.dataset.adLoaded = adHtml;

  container.innerHTML = '';

  if (!adHtml.trim()) return;

  const iframe = document.createElement('iframe');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', '0');
  iframe.style.border = 'none';
  iframe.style.overflow = 'hidden';
  iframe.style.display = 'block';

  // Try to read dimensions from an <ins> tag in the ad HTML so the
  // iframe is sized correctly without needing hardcoded values
  const match = adHtml.match(/width:\s*(\d+)px.*?height:\s*(\d+)px/);
  if (match) {
    iframe.style.width  = match[1] + 'px';
    iframe.style.height = match[2] + 'px';
  } else {
    iframe.style.width  = '100%';
    iframe.style.height = '100%';
  }

  container.appendChild(iframe);

  const doc = iframe.contentDocument ?? iframe.contentWindow?.document;
  if (!doc) return;

  doc.open();
  doc.write(adHtml);  // scripts inside adHtml execute normally here
  doc.close();
}