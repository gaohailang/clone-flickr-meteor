
// collection
/*
  Profile:
    userId, email, nickname, formatted_name, photo_url, description
    has n: albums, photos through albums, comments, followers through relationshiips

  Album:
    name, description, cover_image
    Method:

  Photos:

  Annotations:

  Comments:
 */
Albums = new Mongo.Collection('albums');
Photos = new Mongo.Collection('photos');
Anotations = new Mongo.Collection('anotations');
Comments = new Mongo.Collection('comments');
// Friends = new Mongo.Collection('friends'); ?
Images = new FS.Collection('images',{
  stores: [new FS.Store.GridFS('original')]
});

// schema
Schema = {};
Schema.Profile = new SimpleSchema({
  nickname: {
    type: String,
    label: 'Nick Name',
    max: 30,
    optional: false,
    autoform: {
      placeholder: 'Nick Name'
    }
  },
  description: {
    type: String,
    optional: true,
    max: 200,
    autoform: {
      type: 'textarea',
      rows: 5
    }
  },
  avatar: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Upload Avatar'
      }
    }
  }
});
Schema.User = new SimpleSchema({
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Schema.Profile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
});
Meteor.users.attachSchema(Schema.User);

Schema.Album = new SimpleSchema({
  name: {
    type: String,
    label: 'Album Name',
    max: 30,
    optional: false,
    autoform: {
      placeholder: 'Album Name'
    }
  },
  description: {
    type: String,
    optional: true,
    max: 200,
    autoform: {
      type: 'textarea',
      rows: 5
    }
  },
  cover: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Upload Cover'
      }
    }
  },
  owner: {
    // optional: false,
    type: String,
    autoValue: function() {
      var self = this;
      if (self.isInsert) {
        return self.userId;
      } else {
        self.unset();
      }
    },
    autoform: {
      type: 'hidden',
      label: false
    }
  },
  createdAt: {
    type: Date,
    autoValue: ()=>{
      return new Date();
    },
    autoform: {
      type: 'hidden',
      label: false
    }
  }
});
Albums.attachSchema(Schema.Album);

// allow & deny

// publish

// methods

