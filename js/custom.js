/**
 * Created by tkroon on 11/12/14.
 */
(function() {

    $('#getcustomer').on('click', function () {
        $.getJSON('/json/show_customer.json', function(data) {
            var template, html;
            template = $('#customer-form').html();
            console.log('asdas' + data);
            html = Mustache.render(template, data.customerAccountDto);
            console.log(html);
            $('#content-section').html(html);
        });


    });

})();