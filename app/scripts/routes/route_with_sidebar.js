var RouteWithSidebar = Ember.Route.extend({
  sidebarTemplate: 'index_sidebar',
  renderTemplate: function(controller, model) {
    this.render();
    this.render(sidebarTemplate, {
      into: 'application',
      outlet: 'sidebar'
    });
 }
});
