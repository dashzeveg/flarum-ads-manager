import app from 'flarum/forum/app';
import AdHeaderTop from './components/AdHeaderTop';
import AdHeaderBottom from './components/AdHeaderBottom';
import AdLeftSideNav from './components/AdLeftSideNav';

export { default as extend } from './extend';

app.initializers.add('dashzeveg-ads-manager', () => {
  document.addEventListener('DOMContentLoaded', () => {
    const interval = setInterval(() => {
      const drawer = document.getElementById('drawer');
      const pageContainer = document.querySelector('.Page-container.container');
      const tagsItem = document.querySelector('.item-tags');

      if (drawer && drawer.parentNode && pageContainer && pageContainer.parentNode && tagsItem && tagsItem.parentNode) {
        clearInterval(interval);

        // Header Top Ad - after #drawer
        const topContainer = document.createElement('div');
        topContainer.id = 'ad-header-top';
        drawer.parentNode.insertBefore(topContainer, drawer.nextSibling);
        m.mount(topContainer, { view: () => m(AdHeaderTop) });

        // Header Bottom Ad - before .Page-container
        const bottomContainer = document.createElement('div');
        bottomContainer.id = 'ad-header-bottom';
        pageContainer.parentNode.insertBefore(bottomContainer, pageContainer);
        m.mount(bottomContainer, { view: () => m(AdHeaderBottom) });

        // Left Side Nav Ad - after .item-tags
        const navContainer = document.createElement('li');
        navContainer.className = 'item-adLeftSideNav';
        tagsItem.parentNode.insertBefore(navContainer, tagsItem.nextSibling);
        m.mount(navContainer, { view: () => m(AdLeftSideNav) });
      }
    }, 100);
  });
});