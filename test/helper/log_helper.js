window.fakeLog = [];
window.realConsole = console;

Ember.imports.console = {
  log: fakeLogger('log'),
  error: fakeLogger('error')
};

function fakeLogContains(regex) {
  function fakeLogContainsCallback(value) {
    return value.match(regex);
  }
  return window.fakeLog.some(fakeLogContainsCallback);
}

function fakeLogger(type) {
  return function () {
    window.fakeLog.push(Array.prototype.slice.apply(arguments).join(' '));
    if (!insidePhantom()) {
      window.realConsole[type].apply(window.realConsole, arguments);
    }
  };
}

function insidePhantom() {
  return '_phantom' in window;
}
