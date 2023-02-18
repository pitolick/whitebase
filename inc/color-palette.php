<?php
/* カラーパレットに色を追加 */
function editor_color_palette() {
	add_theme_support( 'editor-color-palette', array(
		array(
				'name'  => '黒',
				'slug'  => 'color-text-main',
				'color' => '#252526',
		),
	) );
}

add_action( 'after_setup_theme', 'editor_color_palette' );

/* カラーパレットにグラデーションを追加 */
function editor_gradient_presets() {
	add_theme_support(
		'editor-gradient-presets',
		array(
				array(
						'name'     => '黄からオレンジからの赤',
						'gradient' => 'linear-gradient(100deg,#ffe241 0%,#cd7538 60%,#ac3838 100%)',
						'slug'     => 'gradient-yellow-orange-red'
				),
		)
	);
}
add_action( 'after_setup_theme', 'editor_gradient_presets' );
