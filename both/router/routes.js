Router.route('/', {
  name: 'home',
  controller: 'DashboardController'
});

Router.route('/checkout', {
  name: 'checkout'
});

Router.route('/admin', {
  name: 'admin'
});






Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
