import app from 'flarum/forum/app';
import AdHeaderTop from './components/AdHeaderTop';
import AdHeaderBottom from './components/AdHeaderBottom';
import AdLeftSideNav from './components/AdLeftSideNav';
import AdRightSideNav from './components/AdRightSideNav';
import AdFirstDiscussionEnd from './components/AdFirstDiscussionEnd';
import AdTagsPage from './components/AdTagsPage';

export { default as extend } from './extend';

app.initializers.add('dashzeveg-ads-manager', () => {
  document.addEventListener('DOMContentLoaded', () => {
    const injectAds = () => {
      // Header Top Ad - after #drawer
      const drawer = document.getElementById('drawer');
      if (drawer && drawer.parentNode && !document.getElementById('ad-header-top')) {
        const container = document.createElement('div');
        container.id = 'ad-header-top';
        drawer.parentNode.insertBefore(container, drawer.nextSibling);
        m.mount(container, { view: () => m(AdHeaderTop) });
      }

      // Header Bottom Ad - before .Page-container
      const pageContainer = document.querySelector('.Page-container.container');
      if (pageContainer && pageContainer.parentNode && !document.getElementById('ad-header-bottom')) {
        const container = document.createElement('div');
        container.id = 'ad-header-bottom';
        pageContainer.parentNode.insertBefore(container, pageContainer);
        m.mount(container, { view: () => m(AdHeaderBottom) });
      }

      // Left Side Nav Ad - after .item-tags (only on IndexPage)
      const indexPage = document.querySelector('.IndexPage');
      const tagsItem = indexPage ? indexPage.querySelector('.item-tags') : null;
      if (tagsItem && tagsItem.parentNode && !document.querySelector('.item-adLeftSideNav')) {
        const container = document.createElement('li');
        container.className = 'item-adLeftSideNav';
        tagsItem.parentNode.insertBefore(container, tagsItem.nextSibling);
        m.mount(container, { view: () => m(AdLeftSideNav) });
      }

      // Right Side Nav Ad - before .item-scrubber
      const scrubberItem = document.querySelector('.item-scrubber');
      if (scrubberItem && scrubberItem.parentNode && !document.querySelector('.item-adRightSideNav')) {
        const container = document.createElement('li');
        container.className = 'item-adRightSideNav';
        scrubberItem.parentNode.insertBefore(container, scrubberItem);
        m.mount(container, { view: () => m(AdRightSideNav) });
      }

      // First Discussion End Ad - after first post
      const firstPost = document.querySelector('.PostStream-item:first-child');
      if (firstPost && firstPost.parentNode && !document.querySelector('.AdFirstDiscussionEnd')) {
        const container = document.createElement('div');
        container.className = 'AdFirstDiscussionEnd';
        firstPost.parentNode.insertBefore(container, firstPost.nextSibling);
        m.mount(container, { view: () => m(AdFirstDiscussionEnd) });
      }

      // Tags Page Ad - before .Page-content inside .TagsPage
      const tagsPage = document.querySelector('.TagsPage');
      if (tagsPage && !tagsPage.querySelector('.ad-tags-page')) {
        const pageContent = tagsPage.querySelector('.Page-content');
        if (pageContent && pageContent.parentNode) {
          const container = document.createElement('div');
          container.className = 'ad-tags-page';
          pageContent.parentNode.insertBefore(container, pageContent);
          m.mount(container, { view: () => m(AdTagsPage) });
        }
      }
    };

    // Run immediately for initial page load
    injectAds();

    // Observe for SPA navigation and dynamic content
    const observer = new MutationObserver(injectAds);
    observer.observe(document.body, { childList: true, subtree: true });
  });
});