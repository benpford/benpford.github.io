// Docs for the Tumblr API v1 are here: http://www.tumblr.com/docs/en/api/v1#api_read
// Requires jQuery

// Create a function that will fetch n latest Tumblr posts and format them for placement into a page
var fetchLatestTumblrPost = function() {

	// Fetch the feed with Tumblr API v1
	$.getJSON("https://benpford.tumblr.com/api/read/json?num=5&type=link&callback=?", function(data) {

		// For each post in the returned data
		$.each(data.posts, function(i, posts) {
			var post = "", postElement;

			// The post variable holds the HTML that will be placed into the page
			// Use the relevant post variables for each type from the docs
			switch (this.type) {
				case "link":
				var date = this["date"];
				date.replace(/thu/gi, '');
					post = "<p><a href='" + this["link-url"] + "' rel='external' title='" + this["link-text"] + "' alt='" + this["link-text"] + "'>" + this["link-text"] + "</a>" + "</p>";
					break;
			}

			// Append this post HTML to the container, can be any jQuery selector
			$(".container.articles").append(post);
		});
	});
	
	// Fetch the feed with Tumblr API v1
	$.getJSON("https://benpford.tumblr.com/api/read/json?num=5&type=photo&callback=?", function(data) {

		// For each post in the returned data
		$.each(data.posts, function(i, posts) {
			var post = "", postElement;

			// The post variable holds the HTML that will be placed into the page
			// Use the relevant post variables for each type from the docs
			switch (this.type) {
				case "photo":
					post = "" + this["photo-caption"] + "";
          		break;
      	}

		// Append this post HTML to the container, can be any jQuery selector
		$(".container.websites").append(post);
    	});
  	});
};