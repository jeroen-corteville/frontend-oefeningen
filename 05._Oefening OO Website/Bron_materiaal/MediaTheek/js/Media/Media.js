/** {"ID":1,"Title":"Alcatraz","Description":"Prison in San Francisco", "URL":"images/alcatraz.jpg","Category":"Travel","Type":"Photo", "Tags": ["SF", "Prison", "Al Capone"]}, **/

//var o = {
//    "ID": 1,
//    "Title": "Alcatraz",
//    "Description": "Prison in San Francisco",
//    "URL": "images/alcatraz.jpg",
//    "Category": "Travel",
//    "Type": "Photo",
//    "Tags": ["SF", "Prison", "Al Capone"]
//};

//var m = new Media(...);

function Media(title, description, url, category) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.category = category;
}

Media.prototype = {
    //properties
    //IE8 --> ECMASCRIPT 3
    getTitle: function () { return this.title; },
    setTitle: function (y) { this.title = y },

    //IE9 --> ES5
    get Description() { return this.description },
    set Description(y) { this.description = y },

    get Title() { return this.title },
    set Title(y) { this.title = y },

    get Url() { return this.url },
    set Url(y) { this.url = y },

    get Category() { return this.category },
    set Category(y) { this.category = y },

    toString: function () {return this.title;}




    //methods
}

function initToggleSlideSearch() {
    $("#searchSection").toggle();

    console.log("SearchSection Hidden");
    $("#ShowQueryButton").click(function () {
        console.log("Query Button Clicked");
        $("#searchSection").slideToggle("slow", function () {
            console.log("SeachSection Toggled");
            
        });
    });

    $("#SearchButton").click(function () {
        console.log("Search Button Clicked");

        if ('#SearchTerms').find()  ;

        var HtmlBuilder;
        var searchText = $("#SearchField").val();
        //console.log(searchText);
        HtmlBuilder = "<button class='btn btn-default' id='" + searchText.toString() + "'><i class='glyphicon glyphicon-remove'></i>" + searchText.toString() + "</button>"


        $("#SearchTerms").append(HtmlBuilder);
        searchButtonClicked();
    })
}


function searchButtonClicked() {
//    $("#SearchTerms").
}

function 
$(document).ready(initToggleSlideSearch);