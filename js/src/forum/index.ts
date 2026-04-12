import app from 'flarum/forum/app';
import AdHeaderTop from './components/AdHeaderTop';
import AdHeaderBottom from './components/AdHeaderBottom';
import AdLeftSideNav from './components/AdLeftSideNav';
import AdRightSideNav from './components/AdRightSideNav';
import AdFirstDiscussionEnd from './components/AdFirstDiscussionEnd';
import AdTagsPage from './components/AdTagsPage';
import AdDiscussionList from './components/AdDiscussionList';

export { default as extend } from './extend';

app.initializers.add('dashzeveg-ads-manager', () => {
  document.addEventListener('DOMContentLoaded', () => {
    const injectAds = () => {
      // Header Top Ad - after #drawer
      const drawer = document.getElementById('drawer');
      if (drawer && drawer.parentNode) {
        const showOnIndex = app.forum.attribute('dashzeveg-ads-manager.ad_header_top_show_on_index_page');
        const showOnDiscussion = app.forum.attribute('dashzeveg-ads-manager.ad_header_top_show_on_discussion_page');
        const showOnTags = app.forum.attribute('dashzeveg-ads-manager.ad_header_top_show_on_tags_page');
        const showOnUser = app.forum.attribute('dashzeveg-ads-manager.ad_header_top_show_on_user_page');

        const isIndex = !!document.querySelector('.IndexPage');
        const isDiscussion = !!document.querySelector('.DiscussionPage');
        const isTags = !!document.querySelector('.TagsPage');
        const isUser = !!document.querySelector('.UserPage');

        const shouldShow =
          (isIndex && showOnIndex) ||
          (isDiscussion && showOnDiscussion) ||
          (isTags && showOnTags) ||
          (isUser && showOnUser);

        const existing = document.getElementById('ad-header-top');

        if (shouldShow && !existing) {
          const container = document.createElement('div');
          container.id = 'ad-header-top';
          drawer.parentNode.insertBefore(container, drawer.nextSibling);
          m.mount(container, { view: () => m(AdHeaderTop) });
        } else if (!shouldShow && existing) {
          m.mount(existing, null);
          existing.remove();
        }
      }

      // Header Bottom Ad - before .Page-container
      const pageContainer = document.querySelector('.Page-container.container');
      if (pageContainer && pageContainer.parentNode) {
        const showOnIndex = app.forum.attribute('dashzeveg-ads-manager.ad_header_bottom_show_on_index_page');
        const showOnDiscussion = app.forum.attribute('dashzeveg-ads-manager.ad_header_bottom_show_on_discussion_page');
        const showOnTags = app.forum.attribute('dashzeveg-ads-manager.ad_header_bottom_show_on_tags_page');
        const showOnUser = app.forum.attribute('dashzeveg-ads-manager.ad_header_bottom_show_on_user_page');

        const isIndex = !!document.querySelector('.IndexPage');
        const isDiscussion = !!document.querySelector('.DiscussionPage');
        const isTags = !!document.querySelector('.TagsPage');
        const isUser = !!document.querySelector('.UserPage');

        const shouldShow =
          (isIndex && showOnIndex) ||
          (isDiscussion && showOnDiscussion) ||
          (isTags && showOnTags) ||
          (isUser && showOnUser);

        const existing = document.getElementById('ad-header-bottom');

        if (shouldShow && !existing) {
          const container = document.createElement('div');
          container.id = 'ad-header-bottom';
          pageContainer.parentNode.insertBefore(container, pageContainer);
          m.mount(container, { view: () => m(AdHeaderBottom) });
        } else if (!shouldShow && existing) {
          m.mount(existing, null);
          existing.remove();
        }
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

      // Discussion List Ad
      const discussionList = document.querySelector('.DiscussionList-discussions');
      if (discussionList) {
        const everyX = parseInt(app.forum.attribute('dashzeveg-ads-manager.ad_discussion_list_show_ad_every_x_discussions') || '0', 10);
        const discussions = discussionList.querySelectorAll(':scope > li:not(.ad-discussion-list)');

        if (everyX === 0) {
          // Show only one ad after the 5th discussion (or after last if fewer than 5)
          const targetIndex = Math.min(4, discussions.length - 1);
          if (targetIndex >= 0 && !document.querySelector('.ad-discussion-list')) {
            const targetItem = discussions[targetIndex];
            const container = document.createElement('li');
            container.className = 'ad-discussion-list';
            targetItem.parentNode!.insertBefore(container, targetItem.nextSibling);
            m.mount(container, { view: () => m(AdDiscussionList) });
          }
        } else {
          // Show ad every X discussions
          discussions.forEach((item, index) => {
            if ((index + 1) % everyX === 0) {
              const nextEl = item.nextElementSibling;
              if (!nextEl || !nextEl.classList.contains('ad-discussion-list')) {
                const container = document.createElement('li');
                container.className = 'ad-discussion-list';
                item.parentNode!.insertBefore(container, item.nextSibling);
                m.mount(container, { view: () => m(AdDiscussionList) });
              }
            }
          });

          // If fewer than X discussions, show ad after the last one
          if (discussions.length > 0 && discussions.length < everyX) {
            const lastItem = discussions[discussions.length - 1];
            const nextEl = lastItem.nextElementSibling;
            if (!nextEl || !nextEl.classList.contains('ad-discussion-list')) {
              const container = document.createElement('li');
              container.className = 'ad-discussion-list';
              lastItem.parentNode!.insertBefore(container, lastItem.nextSibling);
              m.mount(container, { view: () => m(AdDiscussionList) });
            }
          }
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