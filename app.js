let onSuccess = function (data) {
    console.log(data);
    let day = data.date.split("-")[2];
    let month = data.date.split("-")[1];
    let year = data.date.split("-")[0];
    let weekday = data.weekday;


    $(".day").text(day);
    $(".month").text(month);
    $(".year").text(year);
    $(".weekday").text(weekday);

    let santo = data.celebrations[0];
    $(".santo").text(santo.title)
}


let onFail = function() {
    console.log("Qualcosa è andato storto...");
}

let getToday = function() {
    let url = "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-it/today"
    $.getJSON(url)
    .done(onSuccess)
    .fail(onFail);
}

let getTomorrow = function() {
    let url = "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-it/tomorrow"
    $.getJSON(url)
    .done(onSuccess)
    .fail(onFail);

}