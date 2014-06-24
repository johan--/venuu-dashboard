function fillFields(hash) {
  Object.keys(hash).forEach(function (x) {
    fillIn('#' + x, hash[x]);
  });
}
