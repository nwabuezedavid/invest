$(document).ready(function() {
    $('#calculateButton').on('click', function() {
        const cryptoAmount = $('#cryptoAmount').val();
        const selectedCrypto = $('#cryptoCurrency').val();

        // Check if amount is empty or crypto is not selected
        if (cryptoAmount === '' || selectedCrypto === '') {
            $('#exchangeResult').html('<h2>Error</h2><p>Please enter both amount and select a cryptocurrency.</p>');
            return; // Exit the function early if validation fails
        }

        // Perform the AJAX request if validation passes
        $.ajax({
            url: 'get_exchange_rate.php',
            type: 'GET',
            data: {
                crypto: selectedCrypto,
                amount: cryptoAmount
            },
            success: function(response) {
                $('#exchangeResult').html('<h2>Exchange Rate</h2><pre>' + response + '</pre>');
            },
            error: function() {
                $('#exchangeResult').html('<h2>Error</h2><p>Failed to fetch exchange rate. Please try again.</p>');
            }
        });
    });
});
