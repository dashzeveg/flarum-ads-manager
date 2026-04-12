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
      setting: 'dashzeveg-ads-manager.ad_header_top_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_show_on_index_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_on_index_page_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_show_on_discussion_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_on_discussion_page_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_show_on_tags_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_on_tags_page_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_show_on_user_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_on_user_page_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_top_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_top_show_mobile_ad_on_mobile_devices_label'),
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
      setting: 'dashzeveg-ads-manager.ad_header_bottom_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_show_on_index_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_show_on_index_page_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_show_on_discussion_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_show_on_discussion_page_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_show_on_tags_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_show_on_tags_page_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_header_bottom_show_on_user_page',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_header_bottom_show_on_user_page_label'),
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
      setting: 'dashzeveg-ads-manager.ad_discussion_list_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.admin.admin.ad_discussion_list_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_show_ad_every_x_discussions',
      type: 'number',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_show_ad_every_x_discussions_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_show_ad_every_x_discussions_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_desktop1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_mobile1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_desktop2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_mobile2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_desktop3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_mobile3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_desktop4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_mobile4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_desktop5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_desktop_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_discussion_list_mobile5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_discussion_list_mobile_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_left_side_nav_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_left_side_nav_show_mobile_ad_on_mobile_devices_label'),
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
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_desktop1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_mobile1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_desktop2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_mobile2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_desktop3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_mobile3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_desktop4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_mobile4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_desktop5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_desktop_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_right_side_nav_mobile5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_right_side_nav_mobile_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_desktop1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_mobile1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_desktop2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_mobile2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_desktop3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_mobile3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_desktop4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_mobile4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_desktop5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_desktop_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_first_discussion_end_mobile5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_first_discussion_end_mobile_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_enabled',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_enabled_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.admin.ad_tags_page_show_mobile_ad_on_mobile_devices',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_show_mobile_ad_on_mobile_devices_label'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_random',
      type: 'boolean',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_random_label'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_random_help'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_desktop1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_mobile1',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_label1'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_help1'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_desktop2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_mobile2',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_label2'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_help2'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_desktop3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_mobile3',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_label3'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_help3'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_desktop4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_mobile4',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_label4'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_help4'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_desktop5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_desktop_help5'),
    })
    .registerSetting({
      setting: 'dashzeveg-ads-manager.ad_tags_page_mobile5',
      type: 'textarea',
      label: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_label5'),
      help: app.translator.trans('dashzeveg-ads-manager.admin.ad_tags_page_mobile_help5'),
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
      formBody.insertBefore(separator, children[18]);
    }

    // Insert "Left Side Nav Ad" title after top section
    // After first separator insertion: 1 separator + 2 toggles + 10 textareas = 13
    if (!formBody.querySelector('.ads-manager-separator-left-side-nav')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-left-side-nav';
      separator.innerHTML = '<hr><h3>Left Side Nav Ad</h3>';
      formBody.insertBefore(separator, children[36]);
    }

    // Insert "Right Side Nav Ad" title after top section
    // After first separator insertion: 1 separator + 2 toggles + 10 textareas = 13
    if (!formBody.querySelector('.ads-manager-separator-right-side-nav')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-right-side-nav';
      separator.innerHTML = '<hr><h3>Right Side Nav Ad</h3>';
      formBody.insertBefore(separator, children[50]);
    }

    // Insert "First Discussion End Ad" title after top section
    // After first separator insertion: 1 separator + 2 toggles + 10 textareas = 13
    if (!formBody.querySelector('.ads-manager-separator-first-discussion-end')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-first-discussion-end';
      separator.innerHTML = '<hr><h3>First Discussion End Ad</h3>';
      formBody.insertBefore(separator, children[64]);
    }

    // Insert "Tags Page Ad" title after top section
    // After first separator insertion: 1 separator + 2 toggles + 10 textareas = 13
    if (!formBody.querySelector('.ads-manager-separator-tags-page')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-tags-page';
      separator.innerHTML = '<hr><h3>Tags Page Ad</h3>';
      formBody.insertBefore(separator, children[78]);
    }

    // Insert "Discussion List Ad" title after top section
    // After first separator insertion: 1 separator + 2 toggles + 10 textareas = 13
    if (!formBody.querySelector('.ads-manager-separator-discussion-list')) {
      const separator = document.createElement('div');
      separator.className = 'ads-manager-separator ads-manager-separator-discussion-list';
      separator.innerHTML = '<hr><h3>Discussion List Ad</h3>';
      formBody.insertBefore(separator, children[92]);
    }
  });
});