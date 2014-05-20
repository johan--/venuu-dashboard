(function () {
  'use strict';

  VenuuDashboard.Venue = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string')
  });

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

})();