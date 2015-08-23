<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'activeminds+speakyourmind');

/** MySQL database username */
define('DB_USER', 'activeminds');

/** MySQL database password */
define('DB_PASSWORD', 'ful97toh');

/** MySQL hostname */
define('DB_HOST', 'sql.mit.edu');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'YRS8yhJ3%}Zd,HEizFhkcjI{I<H-O#Hg3,Y;K&eB?^9D4|T/g90P%x%-m3R[LMxr');
define('SECURE_AUTH_KEY',  't?O/|XbM;eqqg#7pfHr~XC~5MSI|}prHLY^u-PU$Wpp7v1S[p?u-20jdBek+Rt{%');
define('LOGGED_IN_KEY',    'eik:{}|`&*$A{vvwQ,&S:c#emcY4eN$5x>C%+e^/1wtTj+Bb+)6a=>wa&;9!-3OP');
define('NONCE_KEY',        '8=&8$!$1ed1lIZYzIX-l!pH!SCe=6d/S%|aRN bj=B?D]q d%AL8Z7$[A(TlfTji');
define('AUTH_SALT',        'NH-7+sBjNr|a&6bRHVR.|:b3@yC?Ch$f 4,*LYy-IEx($1vKDceF}$$34nG0=EF#');
define('SECURE_AUTH_SALT', '=+X6p2 U?$vX/bOlBz>{&k0HQGpbfe0{Lv9n~m8,9H!L4LI#*s2+Fl;nD!Hp/W+Q');
define('LOGGED_IN_SALT',   'th+<B!sk/Y3Ti|rt5SyePv(ss$HB=CU`m$t$nQt; uyy4H|JZC&_eydC!Qv^5{*#');
define('NONCE_SALT',       '8|gsYHeHY4:q|8[9J$^Ip&Zs[EtX|#JYZCoM|`@=K1=n69,dT2t$P+M|e$+m$XZm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
