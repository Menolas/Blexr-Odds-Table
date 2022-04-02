<?php

/*
Plugin name: Gutenber Custom Block - Odds Table
Author: Elena Christensen
Version: 10.0
Description: After installing and activating you will get your new button for incerting table in your Gutenberg block reductor.
*/

function gutenberg_odds_tab_block()
{
	wp_register_script('custom-gutenberg-block-odds-tab', plugin_dir_url(__FILE__) . 'build/index.js',  array('wp-blocks'));

	register_block_type('odds-table/odds-table', array(
		'editor_script' => 'custom-gutenberg-block-odds-tab'
	));
}

add_action('init', 'gutenberg_odds_tab_block');

function odds_table_scripts()
{
	wp_register_script('gutenberg-block', plugin_dir_url(__FILE__) . 'build/bundler.js', [], 1, true);
   wp_enqueue_script('gutenberg-block');

}

add_action('wp_enqueue_scripts', 'odds_table_scripts');
