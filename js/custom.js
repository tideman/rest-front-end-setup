/**
 * Created by tkroon on 11/12/14.
 */
(function() {
    $('#getcustomer').on('click', function () {
        $.getJSON('/json/show_customer.json', function(data) {
            var template, html;
            template = $('#customer-form').html();
            html = Mustache.render(template, data.customerAccountDto);
            $('#content-section').html(html);
        });
    });

    $('#getinvoice').on('click', function () {
        $.getJSON('/json/show_invoice2.json', function(data) {
            var template, html;
            template = $('#invoice-form').html();
            html = Mustache.render(template, data.CustomerInvoiceDtoList[0]);
            $('#content-section').html(html);
        });
    });

})();