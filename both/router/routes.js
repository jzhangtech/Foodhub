Router.route('/', {
  name: 'home'
});

Router.route('/checkout', {
  name: 'checkout'
});

Router.route('/admin', {
  name: 'admin'
});

Router.route('/list', {
  name: 'list'
});


Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});



Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
