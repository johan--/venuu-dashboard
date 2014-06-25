function fillFields(object) {
  Object.keys(object).forEach(function (key) {
    fillIn('#' + key, object[key]);
  });
}

function select(id, value) {
  andThen(function () {
    find('#' + id).val(value).change();
  });
}
