# Ads Manager

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/dashzeveg/flarum-ads-manager.svg)](https://packagist.org/packages/dashzeveg/flarum-ads-manager) [![Total Downloads](https://img.shields.io/packagist/dt/dashzeveg/flarum-ads-manager.svg)](https://packagist.org/packages/dashzeveg/flarum-ads-manager)

A [Flarum](https://flarum.org) extension. A comprehensive ad management extension for Flarum that lets you place ads in multiple locations across your forum. Supports separate desktop and mobile ad codes, randomization, and per-page visibility controls.

## Features:

- 7 ad positions: Header Top, Header Bottom, Left Sidebar, Right Sidebar, After First Post, Tags Page, and Discussion List
- Up to 5 ad slots per position for both desktop and mobile
- Randomize ads to show a different one on each page load
- Toggle mobile ads on/off per position
- Control which pages each ad appears on (Home, Discussion, Tags, User)
- Configurable ad frequency in discussion lists (every X discussions)
- Responsive design with separate desktop and mobile ad codes
- Works with any ad network (Google AdSense, affiliate banners, custom HTML)

## Installation

Install with composer:

```sh
composer require dashzeveg/flarum-ads-manager:"*"
```
Then enable it in your admin panel.

## Updating

```sh
composer update dashzeveg/flarum-ads-manager:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/dashzeveg/flarum-ads-manager)
- [GitHub](https://github.com/dashzeveg/flarum-ads-manager)
- [Discuss](https://discuss.flarum.org/d/39072-ads-manager-place-ads-anywhere-on-your-flarum-forum)
