
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

// allow & deny

// publish

// methods

