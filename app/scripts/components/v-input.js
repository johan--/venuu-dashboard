VenuuDashboard.VInputComponent = VD.FormComponent.extend({
  cols: '3:9',
  columns: function () {
    var cols = this.get('cols').split(':');
    console.log(cols);
    // Gave all columns.
    if (cols.length === 4) {
      return cols;
    // Gave just label and input columns.
    } else if (cols.length === 2) {
      cols.splice(1, 0, 0); // Add prefix and postfix sizes as 0.
      cols.push(0);
      return cols;
    } else {
      throw 'Invalid column specification';
    }
  }.property('cols'),

  labelColSize: function () {
    console.log(this.get('columns'));
    return 'small-' + this.get('columns')[0];
  }.property('cols'),

  preColSize: function () {
    return 'small-' + this.get('columns')[1];
  }.property('cols'),

  inputColSize: function () {
    return 'small-' + this.get('columns')[2];
  }.property('cols'),

  postColSize: function () {
    return 'small-' + this.get('columns')[3];
  }.property('cols')
});
