window.seedBackend = function () {
  stop();
  $.get('http://localhost:3000/seed', function () {
    start();
  });
};
