function equalsTrimmed() {
  var args = Array.prototype.slice.call(arguments);
  args[0] = args[0].replace(/( {2,})/g, ' ').replace(/\n/g, '').trim();
  equal.apply(window, args);
}

function contains(text, find, msg) {
  if (!text) {
    return ok(false, '"' + find + '" not found in "' + text + '": ' + msg);
  }
  if (text.indexOf(find) > -1) {
    ok(true, msg);
  } else {
    ok(false, '"' + find + '" not found in "' + text + '": ' + msg);
  }
}

function doesNotContain(text, find, msg) {
  if (text.indexOf(find) <= -1) {
    ok(true, msg);
  } else {
    ok(false, '"' + find + '"found in "' + text + '" expected outcome: ' + msg);
  }
}
