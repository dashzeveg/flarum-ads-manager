export default function activateScripts(container: HTMLElement) {
  const scripts = container.querySelectorAll('script');
  scripts.forEach((oldScript) => {
    const newScript = document.createElement('script');
    Array.from(oldScript.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.textContent = oldScript.textContent;

    // Handle scripts that use document.write (like Google DCM ads)
    if (oldScript.src) {
      const originalWrite = document.write.bind(document);
      document.write = (html: string) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        while (temp.firstChild) {
          container.appendChild(temp.firstChild);
        }
      };
      newScript.onload = () => {
        document.write = originalWrite;
      };
      newScript.onerror = () => {
        document.write = originalWrite;
      };
    }

    oldScript.parentNode!.replaceChild(newScript, oldScript);
  });
}