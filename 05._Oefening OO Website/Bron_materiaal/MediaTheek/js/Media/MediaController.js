(function () {

    var media = [];

    function init() {
        loadAllMedia();
    }

    function loadAllMedia() {
        //1 .
        //var xmlHttp = new XMLHttpRequest();


        //2. 
        //$.ajax()

        //3.

        $.getJSON("http://localhost:18512/data/media.json", function (response) {
            response.forEach(function (y) {
                var m = new Media(y.Title, y.Description, y.URL, y.Category);
                media.push(m);
            });

            showMedia(media);
        })
    }

    function showMedia(mediaArray) {
        //single var pattern
        var i,
            l = mediaArray.length,
            bobTheHtmlBuilder = "";

        for (i = 0; i < l ; i++) {
            var m = mediaArray[i];
            bobTheHtmlBuilder += '<li class="box">';
            bobTheHtmlBuilder += '<figure>';
            bobTheHtmlBuilder += '<img src="' + m.Url + '" alt="' + m.Title + '" title="' + m.getTitle() + '"/>'
            bobTheHtmlBuilder += '<figcaption>' + m.getTitle() + '</figcaption>';
            bobTheHtmlBuilder += '</figure></li>'
        }

        $("#mediaList").html(bobTheHtmlBuilder);

    }



    init();
}());

