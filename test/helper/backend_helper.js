window.seedBackend = function () {
  stop();
  $.get('/api/seed', function () {
    start();
  });
};
