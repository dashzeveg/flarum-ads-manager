import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

export { default as extend } from './extend';

app.initializers.add('dashzeveg-ads-manager', () => {
  // Register all settings
  app.registry
    .for('dashzeveg-ads-manager')
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_desktop1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_mobile1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_desktop2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_mobile2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_desktop3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_mobile3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_desktop4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_mobile4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_desktop5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_desktop_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_mobile5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_mobile_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_desktop1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_mobile1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_desktop2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_mobile2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_desktop3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_mobile3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_desktop4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_mobile4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_desktop5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_desktop_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_mobile5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_mobile_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_desktop1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_mobile1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_desktop2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_mobile2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_desktop3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_mobile3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_desktop4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_mobile4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_desktop5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_desktop_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_mobile5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_mobile_help5'),
    });

  extend(ExtensionPage.prototype, 'oncreate', function () {
    if (!this.extension || this.extension.id !== 'dashzeveg-ads-manager') return;

    const formBody = this.element.querySelector('.ExtensionPage-settings .Form-body');
    if (!formBody) return;

    const children = formBody.children;

    // Insert "Header Top Ad" title at the top
    if (!formBody.querySelector('.ads-manager-separator-top')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-top';
      separator.innerHTML = '<h3>Header Top Ad</h3>';
      formBody.insertBefore(separator, children[0]);
    }

    // Insert "Header Bottom Ad" title after top section
    // After first separator insertion: 1 separator + 2 toggles + 10 textareas = 13
    if (!formBody.querySelector('.ads-manager-separator-bottom')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-bottom';
      separator.innerHTML = '<hr><h3>Header Bottom Ad</h3>';
      formBody.insertBefore(separator, children[13]);
    }

    // Insert "Left Side Nax Ad" title after top section
    // After first separator insertion: 1 separator + 2 toggles + 10 textareas = 13
    if (!formBody.querySelector('.ads-manager-separator-left-side-nav')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-left-side-nav';
      separator.innerHTML = '<hr><h3>Left Side Nav Ad</h3>';
      formBody.insertBefore(separator, children[26]);
    }
  });
});