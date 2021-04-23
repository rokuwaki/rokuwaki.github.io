$('.twitter-feed').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function() {
  customizeTweetMedia();
});

var customizeTweetMedia = function() {
  $('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('font-size', '0.75rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('color', '#000000');
  $('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-name').css('font-size', '0.75rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-name').css('font-weight', '400');
  $('.twitter-feed').find('.twitter-timeline').contents().find('span.TweetAuthor-name').css('color', '#000000');
  $('.twitter-feed').find('.twitter-timeline').contents().find('div.timeline-Body').css('font-size', '0.75rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('a').css('color', '#000000');
  $('.twitter-feed').find('.twitter-timeline').contents().find('a:hover').css('color', '#000000');
  $('.twitter-feed').find('.twitter-timeline').contents().find('div.timeline-Tweet-retweetCredit').css('font-size', '0.75rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('div.Icon').css('font-size', '0.75rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('div.Icon--retweetBadge').css('height', '1rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('color', '#000000');
  $('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('font-size', '0.75rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('line-height', '1rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('ul.timeline-tweet-actions').css('display', 'none');
  $('.twitter-feed').find('.twitter-timeline').contents().find('a.timeline-Tweet-timestamp').css('font-size', '0.75rem');
  $('.twitter-feed').find('.twitter-timeline').contents().find('a.timeline-Tweet-timestamp').css('font-weight', '300');
  $('.twitter-feed').find('.twitter-timeline').contents().find('h2').css('font-weight', '400');
  $('.twitter-feed').find('.twitter-timeline').contents().find('head').append('<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500&display=swap" rel="stylesheet">');
  $('.twitter-feed').find('.twitter-timeline').contents().find('head').append("<style type='text/css'>p.timeline-tweet-text {font-family: 'M PLUS Rounded 1c', sans-serif}</style>");
  $('.twitter-feed').find('.twitter-timeline').contents().find('head').append("<style type='text/css'>span.TweetAuthor-screenName {font-family: 'M PLUS Rounded 1c', sans-serif}</style>");
  $('.twitter-feed').find('.twitter-timeline').contents().find('head').append("<style type='text/css'>div.timeline-Body {font-family: 'M PLUS Rounded 1c', sans-serif}</style>");
  $('.twitter-feed').find('.twitter-timeline').contents().find('head').append("<style type='text/css'>div.timeline-Tweet-retweetCredit {font-family: 'M PLUS Rounded 1c', sans-serif}</style>");
  $('.twitter-feed').find('.twitter-timeline').contents().find('head').append("<style type='text/css'>div.Icon {font-family: 'M PLUS Rounded 1c', sans-serif}</style>");
  $('.twitter-feed').find('.twitter-timeline').contents().find('head').append("<style type='text/css'>div.timeline-Tweet-metadata {font-family: 'M PLUS Rounded 1c', sans-serif}</style>");
}
