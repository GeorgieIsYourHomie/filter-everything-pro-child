<?php
/*
Plugin Name: Filter Everything Customizations
Description: Customizations for the Filter Everything plugin.
Version: 1.0
Author: Georgio Harris
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue custom scripts
function enqueue_custom_filter_scripts() {
    wp_enqueue_script('custom-filter-scripts', plugin_dir_url(__FILE__) . 'build/app.js', array('react', 'react-dom', 'jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_filter_scripts');
