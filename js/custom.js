/**
 * Created by tkroon on 11/12/14.
 */
(function() {
    var rest_request,
        json_response;

    $.ajaxSetup({
        beforeSend: function (jqXHR, settings) {
            jqXHR.setRequestHeader('Authorization', 'Basic ' + 'dXJjLWFkbWluOnVpYWIuYWRtaW4x');
            return true;
        }
    });


    $('#getcustomer').on('click', function () {
        $.getJSON('/json/show_user.json', function(data) {
            var template, html;
            template = $('#customer-form').html();
            console.log('asdas' + data);
            html = Mustache.render(template, data);
            console.log(html);
            $('#content-section').html(html);
        });


    });

})();