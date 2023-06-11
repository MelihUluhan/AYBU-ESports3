$(document).ready(function () {
  $(".game-button").click(function (event) {
    event.preventDefault();

    var gameTitle = $(this).data("title");

/*Here, I sent a GET request to pull the title and first two paragraphs of the Dota 2 page from the 
  Wikipedia API and processed the incoming data and placed it in the relevant fields on the page.*/
    if (gameTitle === "Dota-2") {
      var url = "https://en.wikipedia.org/w/api.php?action=parse&page=Dota_2&format=json&callback=?";

      $(".ajax_image img").attr("src", "https://pbs.twimg.com/profile_images/1478893871199186945/1mA6tezL_400x400.jpg");
      $("#p1").empty();

      $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=parse&page=Dota_2&format=json&callback=?",
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
          var title = data.parse.title;
          var intro = data.parse.text["*"];
          var paragraphs = $(intro).find("p").slice(0, 2);

          var game_Html = '<h2>' + title + '</h2>';
          paragraphs.each(function () {
            game_Html += $(this).html();
          });

          $("#p1").html(game_Html);
        }
      });
    } 
    /*In this part, I pulled data from json and updated the necessary places by sending an ajax request.*/
    else {
      var jsonFile = "json_files/" + gameTitle + ".json";

      $(".ajax_image img").attr("src", "");
      $("#p1").empty();

      $.getJSON(jsonFile, function (data) {
        var game = data.games[0];
        var game_Html = '<h2>' + game.title + '</h2>';
        game_Html += '<p>' + game.text + '</p>';

        $("#p1").html(game_Html);
        $(".ajax_image img").attr("src", game.image);
      });
    }
  });
});
