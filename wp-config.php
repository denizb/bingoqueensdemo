<?php

define('FS_METHOD', 'direct');

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db825028162' );

/** MySQL database username */
define( 'DB_USER', 'dbo825028162' );

/** MySQL database password */
define( 'DB_PASSWORD', 'FAlRYbwTzWWdQTfknAkO' );

/** MySQL hostname */
define( 'DB_HOST', 'db825028162.hosting-data.io' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'wjlF2(7/c!z!Zmlsq +vJ}^5p|j#&P8zx%<U,3D^On~!l,p_`~+~.uf$t-8?O?(f' );
define( 'SECURE_AUTH_KEY',   '7YqQ%eG,7;6LgF]}9YHb{pl:_d!h;T1v*j9E3T~gLV/5B0ifAIa^r5_3nN#*RkOb' );
define( 'LOGGED_IN_KEY',     'Wero?Zh5, z[Id],iz:PR;KT]OS63rVCW!a|CiQz+gn5 UV|,F0j&eeN:m=wPC-(' );
define( 'NONCE_KEY',         'I!(jU z|C_M%<Cq<`L<QKH.Iz~GTR a?|n?av0GQobO0LK[Zi?lHX:2[8k% V%^6' );
define( 'AUTH_SALT',         'ks9;]3.5OEOYHw{%CxRddMj=o/PDja/0Xq@$~3rTk*gD&SpLIL}j|T73.Ev%*D]c' );
define( 'SECURE_AUTH_SALT',  '?V4$@k7@CefrO/s65QSj|0[R?eLSB>Fd87c|0[})zAL99F~vXqZEI/fF?.}3Jqm1' );
define( 'LOGGED_IN_SALT',    ');?QGrHk>`*poxh,U&:;C3;|o8h.}x=D|ifx`cbD+~I17G1*: GB?QHs#d#RO/%^' );
define( 'NONCE_SALT',        ',9pVundK5hR5i#xW0NqWrbjI@.Qh:1&Fz(1PNqALoJ*Kz=,$`9CMM]ru5Oai6CvY' );
define( 'WP_CACHE_KEY_SALT', '`VHNPq%wSKtN|N0ye3` [ZqO%kiqV8Q9qP]tH/K*;GBvcry0k=&!6*XDZqugEdSr' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'lSvofUpb';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
