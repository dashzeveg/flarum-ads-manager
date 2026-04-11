import app from 'flarum/forum/app';
import AdHeaderTop from './components/AdHeaderTop';

export { default as extend } from './extend';

app.initializers.add('dashzeveg-ads-manager', () => {
  document.addEventListener('DOMContentLoaded', () => {
    const interval = setInterval(() => {
      const header = document.getElementById('header');
      if (header && header.parentNode) {
        clearInterval(interval);
        const container = document.createElement('div');
        container.id = 'ad-header-top';
        header.parentNode.insertBefore(container, header);
        m.mount(container, { view: () => m(AdHeaderTop) });
      }
    }, 100);
  });
});