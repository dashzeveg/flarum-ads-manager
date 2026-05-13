import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import { renderAdInFrame } from '../utils/renderAdInFrame';

export default class AdRightSideNav extends Component {
  view() {
    const enabled = app.forum.attribute('dashzeveg-ads-manager.ad_right_side_nav_enabled');

    if (!enabled) return null;

    const random = app.forum.attribute('dashzeveg-ads-manager.ad_right_side_nav_random');
    const showMobileAd = app.forum.attribute('dashzeveg-ads-manager.ad_right_side_nav_show_mobile_ad');
    const desktopAds: string[] = [];
    const mobileAds: string[] = [];

    for (let i = 1; i <= 5; i++) {
      const desktop = app.forum.attribute<string>(`dashzeveg-ads-manager.ad_right_side_nav_desktop${i}`);
      const mobile = app.forum.attribute<string>(`dashzeveg-ads-manager.ad_right_side_nav_mobile${i}`);
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
        className: 'AdRightSideNav-desktop',
        oncreate: (vnode: any) => renderAdInFrame(vnode.dom, desktopHtml),
        onupdate: (vnode: any) => renderAdInFrame(vnode.dom, desktopHtml),
      }),
    ];

    if (showMobileAd) {
      children.push(
        m('div', {
          className: 'AdRightSideNav-mobile',
          oncreate: (vnode: any) => renderAdInFrame(vnode.dom, mobileHtml),
          onupdate: (vnode: any) => renderAdInFrame(vnode.dom, mobileHtml),
        })
      );
    }

    return m('div', { className: 'AdRightSideNav' }, children);
  }
}