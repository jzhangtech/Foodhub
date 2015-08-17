Router.route('/', {
  name: 'home',
  controller: 'DashboardController'
});

Router.route('/checkout', {
  name: 'checkout'
});



Router.route('/menu', {
  name: 'menu'
});
Router.route('/dashboard', {
  name: 'dashboard'
});



Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});