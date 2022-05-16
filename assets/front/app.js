require('./app.scss');

const $ = require('jquery');
require('bootstrap');

$(document).ready(function() {
  const json = require('./data/data.json');
  const whoami = json.jobs;

  $.each(whoami, function(index, jobs) {
    $('#whoami').append("<option name=" + index + ">" + jobs.value + "</option>");
  });

  $('#whoami').change(function() {
    var current = $(this).children("option:selected").attr("name");

    if (null == current) {
      $('#incentive-text').empty();
      $('#want').find('option:not(:first)').remove().end();
      return;
    }

    var choices = whoami[current].choices;

    $('#want').find('option:not(:first)').remove().end();
    $('#incentive-text').empty();

    $.each(choices, function(current, choice) {
      var help = json.choices[choice];
      $('#want').append("<option name=" + help.key +">" + help.value + "</option>");
    });
  });

  $('#want').change(function () {
    var whoami = $('#whoami').children("option:selected").attr("name");
    var want = $(this).children("option:selected").attr("name");
    var text = whoami + "-" + want;
    var content = json.text;

    if (null == want) {
      $('#incentive-text').empty();
      return;
    }

    if ('formation' === want) {
      $('#incentive-text').html("<p>" + content[text] +" Plus d'informations sur <a href=\"https://formation.vanoix.com\">notre site dédié !</a></p>");
      return;
    }

    $('#incentive-text').html("<p>" + content[text] +" <a href=\"mailto:hello@vanoix.com?subject=[Prise de contact]\">Contactez-nous !</a></p>");
  });
});
