window.seedBackend = function () {
  stop();
  $.get('/api/seed', function (content) {
    window.venuesSeeded = content.venues;
    window.groupsSeeded = content.groups;
    start();
  });
};
