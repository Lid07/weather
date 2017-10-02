$(function () {        
    $('#search').click(function () {
        var place = $('#place').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=74574a5514bf56731ffe89fe0b462698";
        $.get(url, function (data) {
                                
            
            var historyRow = "<tr><td>"+
            "<strong>"+data['name']+"</strong></td><td>"+
            "<img src='http://openweathermap.org/img/w/"+data['weather'][0]['icon']+".png'></td><td>"+
            (data['main']['temp']*0.1).toFixed(2)+"</td><td>"+
            data['weather'][0]['main']+"</td><td>"+
            data['weather'][0]['description']+"</td><td>"+            
            "</tr>";

            $('#searchhistory').append(historyRow);                   

            $('#place').val("");
        });        
    });
})
