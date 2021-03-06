import Vue from 'vue'

import wp_circle from "./src/components/base/wp_circle.vue";
import wp_area from "./src/components/base/wp_area";
import wp_icon from "./src/components/base/wp_icon";
import wp_img from "./src/components/base/wp_img";
import wp_hr from "./src/components/base/wp_hr";
import wp_button from "./src/components/base/wp_button";
import wp_ad_text from "./src/components/base/wp_ad_text";
import wp_points from "./src/components/base/wp_points";
import wp_button_progress from "./src/components/base/wp_button_progress";

import wp_app_info from "./src/components/ext/wp_app_info";
import wp_cell_gift from "./src/components/ext/wp_cell_gift";
import wp_cell from './src/components/ext/wp_cell.vue'
import wp_cell_flex from './src/components/ext/wp_cell_flex.vue'
import wp_cell_ad from './src/components/ext/wp_cell_ad.vue'

import wp_info_app from './src/components/ext/wp_info_app.vue'
import wp_info_top from "./src/components/ext/wp_info_top.vue";
import wp_info_imglist from "./src/components/ext/wp_info_imglist.vue";

import wp_pop from "./src/components/ext/wp_pop";

import wp_card from "./src/components/base/wp_card";
import wp_card_sm from "./src/components/ext/wp_card_sm";

import wp_float from "./src/components/ext/wp_float.vue";
import wp_banner from "./src/components/ext/wp_banner";

import wp_user_info_card from "./src/components/ext/wp_user_info_card";
import wp_user_info_banner from './src/components/ext/wp_user_info_banner.vue'

import wp_game from "./src/components/ext/wp_game.vue";
import wp_iframe from "./src/components/ext/wp_iframe.vue";

import wp_login_form from "./src/components/service/wp_login_form.vue";

import sdk from './src/js/common.js'     //引入公用js
Vue.prototype.$sdk = sdk;         //添加到vue属性中

const Components = {
    wp_app_info,
    wp_ad_text,
    wp_points,
    wp_button_progress,
    wp_game,
    wp_iframe,
    wp_circle,
    wp_cell,
    wp_cell_ad,
    wp_cell_flex,
    wp_cell_gift,
    wp_login_form,
    wp_info_app,
    wp_pop,
    wp_hr,
    wp_area,
    wp_img,
    wp_icon,
    wp_card,
    wp_card_sm,
    wp_float,
    wp_banner,
    wp_user_info_card,
    wp_user_info_banner,
    wp_button,
    wp_info_top,
    wp_info_imglist
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export default Components