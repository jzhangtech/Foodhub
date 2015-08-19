Template.restaurant.rendered = function() {

};

Template.restaurant.helpers ({
    restaurants: function() {
    return Restaurants.find({});
    }
});

Template.restaurant.events({
  'click .order': function() {

  Router.go('/menu');

  }
});



