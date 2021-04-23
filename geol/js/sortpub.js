var options = {
  valueNames: ['author', 'year', 'pub-title', 'journal']
};
var userList = new List('pub-list', options);
userList.on('searchComplete', function(a) {
  $("#hits").html('Papers: ' + a.matchingItems.length + '/');
  $("#total-count").html(userList.size);
});
