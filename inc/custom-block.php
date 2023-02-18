<?php
/**
 * ブロックスタイルカスタマイズ
 * @see https://ja.wordpress.org/team/handbook/block-editor/reference-guides/core-blocks/ Core Block
 */
register_block_style(
    'core/quote',
    array(
        'name'         => 'blue-quote',
        'label'        => __( 'Blue Quote', 'textdomain' ),
        'inline_style' => '.wp-block-quote.is-style-blue-quote { color: blue; }',
    )
);