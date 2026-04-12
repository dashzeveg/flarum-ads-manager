<?php

/*
 * This file is part of dashzeveg/flarum-ads-manager.
 *
 * Copyright (c) 2026 Dashzeveg Galbadrakh.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Dashzeveg\Adsmanager;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less')
        ->css(__DIR__ . '/less/Ad.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less')
        ->css(__DIR__ . '/less/AdsManager.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new \Flarum\Extend\Settings())
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_enabled', 'dashzeveg-ads-manager.ad_header_top_enabled', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_show_mobile_ad_on_mobile_devices', 'dashzeveg-ads-manager.ad_header_top_show_mobile_ad_on_mobile_devices', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_random', 'dashzeveg-ads-manager.ad_header_top_random', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_show_on_index_page', 'dashzeveg-ads-manager.ad_header_top_show_on_index_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_show_on_discussion_page', 'dashzeveg-ads-manager.ad_header_top_show_on_discussion_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_show_on_tags_page', 'dashzeveg-ads-manager.ad_header_top_show_on_tags_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_show_on_user_page', 'dashzeveg-ads-manager.ad_header_top_show_on_user_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_desktop1', 'dashzeveg-ads-manager.ad_header_top_desktop1')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_desktop2', 'dashzeveg-ads-manager.ad_header_top_desktop2')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_desktop3', 'dashzeveg-ads-manager.ad_header_top_desktop3')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_desktop4', 'dashzeveg-ads-manager.ad_header_top_desktop4')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_desktop5', 'dashzeveg-ads-manager.ad_header_top_desktop5')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_mobile1', 'dashzeveg-ads-manager.ad_header_top_mobile1')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_mobile2', 'dashzeveg-ads-manager.ad_header_top_mobile2')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_mobile3', 'dashzeveg-ads-manager.ad_header_top_mobile3')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_mobile4', 'dashzeveg-ads-manager.ad_header_top_mobile4')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_top_mobile5', 'dashzeveg-ads-manager.ad_header_top_mobile5')

        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_enabled', 'dashzeveg-ads-manager.ad_header_bottom_enabled', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_show_mobile_ad_on_mobile_devices', 'dashzeveg-ads-manager.ad_header_bottom_show_mobile_ad_on_mobile_devices', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_random', 'dashzeveg-ads-manager.ad_header_bottom_random', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_show_on_index_page', 'dashzeveg-ads-manager.ad_header_bottom_show_on_index_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_show_on_discussion_page', 'dashzeveg-ads-manager.ad_header_bottom_show_on_discussion_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_show_on_tags_page', 'dashzeveg-ads-manager.ad_header_bottom_show_on_tags_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_show_on_user_page', 'dashzeveg-ads-manager.ad_header_bottom_show_on_user_page', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_desktop1', 'dashzeveg-ads-manager.ad_header_bottom_desktop1')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_desktop2', 'dashzeveg-ads-manager.ad_header_bottom_desktop2')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_desktop3', 'dashzeveg-ads-manager.ad_header_bottom_desktop3')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_desktop4', 'dashzeveg-ads-manager.ad_header_bottom_desktop4')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_desktop5', 'dashzeveg-ads-manager.ad_header_bottom_desktop5')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_mobile1', 'dashzeveg-ads-manager.ad_header_bottom_mobile1')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_mobile2', 'dashzeveg-ads-manager.ad_header_bottom_mobile2')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_mobile3', 'dashzeveg-ads-manager.ad_header_bottom_mobile3')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_mobile4', 'dashzeveg-ads-manager.ad_header_bottom_mobile4')
        ->serializeToForum('dashzeveg-ads-manager.ad_header_bottom_mobile5', 'dashzeveg-ads-manager.ad_header_bottom_mobile5')

        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_enabled', 'dashzeveg-ads-manager.ad_discussion_list_enabled', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_show_mobile_ad_on_mobile_devices', 'dashzeveg-ads-manager.ad_discussion_list_show_mobile_ad_on_mobile_devices', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_random', 'dashzeveg-ads-manager.ad_discussion_list_random', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_show_ad_every_x_discussions', 'dashzeveg-ads-manager.ad_discussion_list_show_ad_every_x_discussions', 'intval')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_desktop1', 'dashzeveg-ads-manager.ad_discussion_list_desktop1')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_mobile1', 'dashzeveg-ads-manager.ad_discussion_list_mobile1')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_desktop2', 'dashzeveg-ads-manager.ad_discussion_list_desktop2')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_mobile2', 'dashzeveg-ads-manager.ad_discussion_list_mobile2')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_desktop3', 'dashzeveg-ads-manager.ad_discussion_list_desktop3')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_mobile3', 'dashzeveg-ads-manager.ad_discussion_list_mobile3')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_desktop4', 'dashzeveg-ads-manager.ad_discussion_list_desktop4')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_mobile4', 'dashzeveg-ads-manager.ad_discussion_list_mobile4')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_desktop5', 'dashzeveg-ads-manager.ad_discussion_list_desktop5')
        ->serializeToForum('dashzeveg-ads-manager.ad_discussion_list_mobile5', 'dashzeveg-ads-manager.ad_discussion_list_mobile5')

        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_enabled', 'dashzeveg-ads-manager.ad_left_side_nav_enabled', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_show_mobile_ad_on_mobile_devices', 'dashzeveg-ads-manager.ad_left_side_nav_show_mobile_ad_on_mobile_devices', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_random', 'dashzeveg-ads-manager.ad_left_side_nav_random', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_desktop1', 'dashzeveg-ads-manager.ad_left_side_nav_desktop1')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_mobile1', 'dashzeveg-ads-manager.ad_left_side_nav_mobile1')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_desktop2', 'dashzeveg-ads-manager.ad_left_side_nav_desktop2')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_mobile2', 'dashzeveg-ads-manager.ad_left_side_nav_mobile2')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_desktop3', 'dashzeveg-ads-manager.ad_left_side_nav_desktop3')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_mobile3', 'dashzeveg-ads-manager.ad_left_side_nav_mobile3')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_desktop4', 'dashzeveg-ads-manager.ad_left_side_nav_desktop4')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_mobile4', 'dashzeveg-ads-manager.ad_left_side_nav_mobile4')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_desktop5', 'dashzeveg-ads-manager.ad_left_side_nav_desktop5')
        ->serializeToForum('dashzeveg-ads-manager.ad_left_side_nav_mobile5', 'dashzeveg-ads-manager.ad_left_side_nav_mobile5')
        
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_enabled', 'dashzeveg-ads-manager.ad_right_side_nav_enabled', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_show_mobile_ad_on_mobile_devices', 'dashzeveg-ads-manager.ad_right_side_nav_show_mobile_ad_on_mobile_devices', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_random', 'dashzeveg-ads-manager.ad_right_side_nav_random', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_desktop1', 'dashzeveg-ads-manager.ad_right_side_nav_desktop1')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_mobile1', 'dashzeveg-ads-manager.ad_right_side_nav_mobile1')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_desktop2', 'dashzeveg-ads-manager.ad_right_side_nav_desktop2')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_mobile2', 'dashzeveg-ads-manager.ad_right_side_nav_mobile2')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_desktop3', 'dashzeveg-ads-manager.ad_right_side_nav_desktop3')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_mobile3', 'dashzeveg-ads-manager.ad_right_side_nav_mobile3')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_desktop4', 'dashzeveg-ads-manager.ad_right_side_nav_desktop4')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_mobile4', 'dashzeveg-ads-manager.ad_right_side_nav_mobile4')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_desktop5', 'dashzeveg-ads-manager.ad_right_side_nav_desktop5')
        ->serializeToForum('dashzeveg-ads-manager.ad_right_side_nav_mobile5', 'dashzeveg-ads-manager.ad_right_side_nav_mobile5')
        
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_enabled', 'dashzeveg-ads-manager.ad_first_discussion_end_enabled', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_show_mobile_ad_on_mobile_devices', 'dashzeveg-ads-manager.ad_first_discussion_end_show_mobile_ad_on_mobile_devices', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_random', 'dashzeveg-ads-manager.ad_first_discussion_end_random', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_desktop1', 'dashzeveg-ads-manager.ad_first_discussion_end_desktop1')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_mobile1', 'dashzeveg-ads-manager.ad_first_discussion_end_mobile1')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_desktop2', 'dashzeveg-ads-manager.ad_first_discussion_end_desktop2')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_mobile2', 'dashzeveg-ads-manager.ad_first_discussion_end_mobile2')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_desktop3', 'dashzeveg-ads-manager.ad_first_discussion_end_desktop3')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_mobile3', 'dashzeveg-ads-manager.ad_first_discussion_end_mobile3')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_desktop4', 'dashzeveg-ads-manager.ad_first_discussion_end_desktop4')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_mobile4', 'dashzeveg-ads-manager.ad_first_discussion_end_mobile4')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_desktop5', 'dashzeveg-ads-manager.ad_first_discussion_end_desktop5')
        ->serializeToForum('dashzeveg-ads-manager.ad_first_discussion_end_mobile5', 'dashzeveg-ads-manager.ad_first_discussion_end_mobile5')
        
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_enabled', 'dashzeveg-ads-manager.ad_tags_page_enabled', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_show_mobile_ad_on_mobile_devices', 'dashzeveg-ads-manager.ad_tags_page_show_mobile_ad_on_mobile_devices', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_random', 'dashzeveg-ads-manager.ad_tags_page_random', 'boolval')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_desktop1', 'dashzeveg-ads-manager.ad_tags_page_desktop1')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_mobile1', 'dashzeveg-ads-manager.ad_tags_page_mobile1')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_desktop2', 'dashzeveg-ads-manager.ad_tags_page_desktop2')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_mobile2', 'dashzeveg-ads-manager.ad_tags_page_mobile2')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_desktop3', 'dashzeveg-ads-manager.ad_tags_page_desktop3')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_mobile3', 'dashzeveg-ads-manager.ad_tags_page_mobile3')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_desktop4', 'dashzeveg-ads-manager.ad_tags_page_desktop4')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_mobile4', 'dashzeveg-ads-manager.ad_tags_page_mobile4')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_desktop5', 'dashzeveg-ads-manager.ad_tags_page_desktop5')
        ->serializeToForum('dashzeveg-ads-manager.ad_tags_page_mobile5', 'dashzeveg-ads-manager.ad_tags_page_mobile5'),
];
