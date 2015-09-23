if (Meteor.isClient) {

    Template.video.rendered = function () {
        var video = Popcorn.youtube('#youtube-video', 
          'https://www.youtube.com/embed/CBYhVcO4WgI',
          autoplay=true);
    }

    Template.gists.helpers({
      gists: function () {
        return Gists.find({source: this._id});
      }
    });

    Template.input.events({
      'submit .gist-input': function (e) {
        e.preventDefault();

        console.log(e.target.gist.value);
      }
    });

}

Gists = new Mongo.Collection('gists');

