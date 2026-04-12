import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

export default class AdHeaderBottom extends Component {
  view() {
    const enabled = app.forum.attribute('dashzeveg-ads-manager.ad_header_bottom_enabled');

    if (!enabled) return null;

    const random = app.forum.attribute('dashzeveg-ads-manager.ad_header_bottom_random');
    const desktopAds: string[] = [];
    const mobileAds: string[] = [];

    for (let i = 1; i <= 5; i++) {
      const desktop = app.forum.attribute<string>(`dashzeveg-ads-manager.ad_header_bottom_desktop${i}`);
      const mobile = app.forum.attribute<string>(`dashzeveg-ads-manager.ad_header_bottom_mobile${i}`);
      if (desktop && desktop.trim()) desktopAds.push(desktop);
      if (mobile && mobile.trim()) mobileAds.push(mobile);
    }

    let desktopHtml = '';
    let mobileHtml = '';

    if (random) {
      if (desktopAds.length) desktopHtml = desktopAds[Math.floor(Math.random() * desktopAds.length)];
      if (mobileAds.length) mobileHtml = mobileAds[Math.floor(Math.random() * mobileAds.length)];
    } else {
      desktopHtml = desktopAds[0];
      mobileHtml = mobileAds[0];
    }

    return m('div', { className: 'AdHeaderBottom' }, [
      m('div', {
        className: 'AdHeaderBottom-desktop',
        oncreate: (vnode: any) => { vnode.dom.innerHTML = desktopHtml; },
        onupdate: (vnode: any) => { vnode.dom.innerHTML = desktopHtml; },
      }),
      m('div', {
        className: 'AdHeaderBottom-mobile',
        oncreate: (vnode: any) => { vnode.dom.innerHTML = mobileHtml; },
        onupdate: (vnode: any) => { vnode.dom.innerHTML = mobileHtml; },
      }),
    ]);
  }
}