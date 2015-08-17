Template.dashboard.rendered = function() {

};

Template.dashboard.helpers ({
    restaurants: function() {
    return Restaurants.find({});
    }
});

Template.dashboard.events({
  'click .order': function() {

  Router.go('/menu');

  }
});



