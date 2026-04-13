import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import activateScripts from '../utils/activateScripts';

export default class AdDiscussionList extends Component {
  view() {
    const enabled = app.forum.attribute('dashzeveg-ads-manager.ad_discussion_list_enabled');

    if (!enabled) return null;

    const random = app.forum.attribute('dashzeveg-ads-manager.ad_discussion_list_random');
    const showMobileAd = app.forum.attribute('dashzeveg-ads-manager.ad_discussion_list_show_mobile_ad');
    const desktopAds: string[] = [];
    const mobileAds: string[] = [];

    for (let i = 1; i <= 5; i++) {
      const desktop = app.forum.attribute<string>(`dashzeveg-ads-manager.ad_discussion_list_desktop${i}`);
      const mobile = app.forum.attribute<string>(`dashzeveg-ads-manager.ad_discussion_list_mobile${i}`);
      if (desktop && desktop.trim()) desktopAds.push(desktop);
      if (mobile && mobile.trim()) mobileAds.push(mobile);
    }

    let desktopHtml = '';
    let mobileHtml = '';

    if (random) {
      if (desktopAds.length) desktopHtml = desktopAds[Math.floor(Math.random() * desktopAds.length)];
      if (mobileAds.length) mobileHtml = mobileAds[Math.floor(Math.random() * mobileAds.length)];
    } else {
      desktopHtml = desktopAds[0] || '';
      mobileHtml = mobileAds[0] || '';
    }

    const children = [
      m('div', {
        className: 'AdDiscussionList-desktop',
        oncreate: (vnode: any) => {
          vnode.dom.innerHTML = desktopHtml;
          activateScripts(vnode.dom);
        },
        onupdate: (vnode: any) => {
          vnode.dom.innerHTML = desktopHtml;
          activateScripts(vnode.dom);
        },
      }),
    ];

    if (showMobileAd) {
      children.push(
        m('div', {
          className: 'AdDiscussionList-mobile',
          oncreate: (vnode: any) => {
            vnode.dom.innerHTML = mobileHtml;
            activateScripts(vnode.dom);
          },
          onupdate: (vnode: any) => {
            vnode.dom.innerHTML = mobileHtml;
            activateScripts(vnode.dom);
          },
        })
      );
    }

    return m('div', { className: 'AdDiscussionList' }, children);
  }
}