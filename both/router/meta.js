if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Foodies',
        suffix: 'All your local Menu in one place'
      }
  });
}
