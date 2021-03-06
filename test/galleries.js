// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;

describe('galleries', function () {

	it('should fetch photos in a gallery', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			galleryId = "72157626831167487";

		flickrSDK
			.request()
			.galleries(galleryId)
			.media()
			.get()
			.then(function (request) {
				assert.equal(request.body['gallery_id'], galleryId);
				done();
			});

	});

});
