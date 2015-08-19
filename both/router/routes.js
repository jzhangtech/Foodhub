Router.route('/', {
  name: 'home',
  controller: 'restaurantController'
});

Router.route('/checkout', {
  name: 'checkout'
});



Router.route('/menu', {
  name: 'menu'
});
Router.route('/restaurant', {
  name: 'restaurant'
});



Router.plugin('ensureSignedIn', {
  only: ['restaurant']
});