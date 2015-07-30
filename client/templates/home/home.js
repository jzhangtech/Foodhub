Template.home.rendered = function() {

	 $("#geolocation").click(function (event) {
        event.preventDefault();
        $(this).html('');
        navigator.geolocation.getCurrentPosition(function (position) {
            var geocoder = new google.maps.Geocoder();
            var latLng   = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            geocoder.geocode({
                'latLng': latLng
            }, function (results, status) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                    var address = results[0].address_components[i];
                    if (address.types[0] == "postal_code") {
                        $('#zipcode').html(address.long_name);

                         Session.set("zipcode",address.long_name);
                         


                        $('#location').val(results[0].formatted_address);
                          
                        
                    }
                }
            });
        });
        return false;
    }); 
    $('.carousel').carousel({
    interval: 2000
});

    $('.carousel2').carousel({
    interval: 2000
});

};

Template.home.events({
    'click #search': function(){
        event.preventDefault();
        
       }
    });


Template.home.events({
    'click #homebtn': function() {
        document.getElementById('home2').style.display = 'block';
        document.getElementById('restaurant').style.display = 'none';
      
    },
    'click #restaurantbtn': function() {
        document.getElementById('home2').style.display = 'none';
        document.getElementById('restaurant').style.display = 'block';
      
    }
});



Template.home.events({
    'click #search': function() {
    var ele =document.getElementById('location').value;
   
      
        Session.set("name","Pizza Pizza");
        Session.set("name2","China King");
       
       
      
       document.getElementById('home2').style.display = 'none';
       document.getElementById('restaurant').style.display = 'block';

       }
    });



Template.dashboard.helpers ({
     restaurants: function() {

/*
    var ele  = document.getElementById('search');
    console.log(rsg);
    */

      console.log(Session.get("zipcode"));
      return Restaurants.find({zipcode:Session.get("zipcode")});

    }
});