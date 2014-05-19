
VenuuDashboard.Venue = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});

// probably should be mixed-in...
VenuuDashboard.Venue.reopen({
  attributes: function () {
    var model = this;
    return Ember.keys(this.get('data')).map(function (key) {
      return Em.Object.create({
        model: model,
        key: key,
        valueBinding: 'model.' + key
      });
    });
  }.property()
});

// delete below here if you do not want fixtures
VenuuDashboard.Venue.FIXTURES = [
  {
    id: 0,
    name: 'Gurula',
    description: 'Laitoksen opiskelijahuone Gurula sijaitsee Exactumin pohjakerroksessa, huoneessa numero DK115. Gurula on myös TKO-älyn, tietojenkäsittelytieteen opiskelijoiden ainejärjestön, koti, päämaja ja vaelluskohde, jonne useat opiskelijat vaeltavat jostain syystä myös vapaa-aikanaan. Gurulassa voi esimerkiksi liittyä ainejärjestön jäseneksi tai ostaa TKO-äly-tuotteita, kuten haalarit, haalarimerkkejä, laulukirjan tai aina yhtä tyylikkään mustan ainejärjestön t-paidan.'
  },
  {
    id: 1,
    name: 'Venuu',
    description: 'Palvelumme tavoite on yksinkertainen: haluamme helpottaa juuri sen oikean juhla-, sauna-, kokous- tai muun tapahtumatilan löytämistä. Pyrkimyksenämme on tuoda myös ne kaikkein jännittävimmät, aiemmin kiven alla piilossa olleet tilavaihtoehdot kenen tahansa saataville. Tilojen tarjoajille Venuu on puolestaan kustannustehokas tapa löytää asiakkaita ja nostaa tilan käyttöastetta.'
  }
];