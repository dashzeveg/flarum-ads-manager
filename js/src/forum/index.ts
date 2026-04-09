import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('dashzeveg-ads-manager', () => {
  console.log('[dashzeveg/flarum-ads-manager] Hello, forum!');
});
