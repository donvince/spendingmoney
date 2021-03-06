"use strict";
(function () {
    var defaultCurrencySettings = {
        "format": "0,0.00",
        "language": "en-gb",
        "denominations": [
            0.01,
            0.02,
            0.05,
            0.10,
            0.20,
            0.50,
            1,
            2,
            5,
            10,
            20,
            50
        ]
    };

    var currencyIndex = [
        {
            "currency": "AUD",
            "name": "Australian Dollar",
            "format": "$0,0.00",
            "language": "en-au",
            "denominations": [
                0.01,
                0.02,
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                20,
                50,
                100
            ]
        },
        {
            "currency": "BGN",
            "name": "Bulgarian Lev",
            "format": "0,0.00$",
            "language": "bg",
            "denominations": [
                0.01,
                0.02,
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                20,
                50,
                100
            ]
        },
        {
            "currency": "BRL",
            "name": "Brazilian Real",
            "format": "$0,0.00",
            "language": "pt-br",
            "denominations": [
                0.05,
                0.10,
                0.25,
                0.50,
                1,
                5,
                10,
                20,
                50,
                100,
            ]
        },
        {
            "currency": "CAD",
            "name": "Canadian Dollar",
            "format": "$0,0.00",
            "language": "fr-CA",
            "denominations": [
                0.05,
                0.10,
                0.25,
                1,
                2,
                5,
                10,
                20,
                50,
                100
            ]
        },
        {
            "currency": "CHF",
            "name": "Swiss Franc",
            "format": "$0,0.00",
            "language": "de-ch",
            "denominations": [
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200,
                1000
            ]
        },
        {
            "currency": "CNY",
            "name": "Chinese Yuan Renminbi",
            "format": "$0,0.0",
            "language": "chs",
            "denominations": [
                0.1,
                0.5,
                1,
                5,
                10,
                20,
                50,
                100
            ]
        },
        {
            "currency": "CZK",
            "name": "",
            "format": "0,0$",
            "language": "cs",
            "denominations": [
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200,
                500,
                1000,
                2000,
                5000
            ]
        },
        {
            "currency": "DKK",
            "name": "Danish Krone",
            "format": "$0,0.00",
            "language": "da-dk",
            "denominations": [
                0.50,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200,
                500,
                1000
            ]
        },
        //TODO: EUR
        {
            "currency": "GBP",
            "name": "British Pound",
            "format": "$0,0.00",
            "language": "en-gb",
            "denominations": [
                0.01,
                0.02,
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                20,
                50
            ]
        },
        {
            "currency": "HKD",
            "name": "Hong Kong Dollar",
            "format": "0,0.0",
            "language": "chs",
            "denominations": [
                0.1,
                0.2,
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                150,
                500,
                1000
            ]
        },
        {
            "currency": "HRK",
            "name": "Croatian Kuna",
            "format": "0,0.00",
            "language": "en",
            "denominations": [
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200,
                500
            ]
        },
        {
            "currency": "HUF",
            "name": "Hungarian forint",
            "format": "0,0$",
            "language": "hu",
            "denominations": [
                5,
                10,
                20,
                50,
                100,
                200,
                500,
                1000,
                2000,
                5000,
                10000,
                20000
            ]
        },
        {
            "currency": "IDR",
            "name": "Indonesian Rupiah",
            "format": "0,0",
            "language": "en",
            "denominations": [
                100,
                200,
                500,
                1000,
                2000,
                5000,
                10000,
                20000,
                50000,
                100000
            ]
        },
        {
            "currency": "ILS",
            "name": "Israeli Shekel",
            "format": "0,0.00",
            "language": "en",
            "denominations": [
                0.1,
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200
            ]
        },
        {
            "currency": "INR",
            "name": "Indian Rupee",
            "format": "0,0.00",
            "language": "en",
            "denominations": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                500,
                1000
            ]
        },
        {
            "currency": "JPY",
            "name": "Japanese Yen",
            "format": "$0,0",
            "language": "ja",
            "denominations": [
                1,
                5,
                10,
                50,
                100,
                500,
                1000,
                5000,
                10000
            ]
        },
        {
            "currency": "KRW",
            "name": "South Korean Won",
            "format": "0,0",
            "language": "en",
            "denominations": [
                1,
                5,
                10,
                50,
                100,
                500,
                1000,
                5000,
                10000,
                50000
            ]
        },
        {
            "currency": "MXN",
            "name": "Mexican Peso",
            "format": "$0,0.00",
            "language": "es",
            "denominations": [
                0.5,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200,
                500,
                1000
            ]
        },
        {
            "currency": "MYR",
            "name": "Malaysian Ringgit",
            "format": "0,0.00",
            "language": "en",
            "denominations": [
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                5,
                10,
                50,
                100,
            ]
        },
        {
            "currency": "NOK",
            "name": "Norwegian Krone",
            "format": "0,0",
            "language": "en",
            "denominations": [
                1,
                5,
                10,
                20,
                50,
                100,
                200,
                500,
                1000
            ]
        },
        {
            "currency": "NZD",
            "name": "New Zealand Dollar",
            "format": "$0,0.00",
            "language": "en",
            "denominations": [
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                20,
                50,
                100
            ]
        },
        {
            "currency": "PHP",
            "name": "Philippine Peso",
            "format": "0,0.00",
            "language": "en",
            "denominations": [
                0.25,
                1,
                5,
                10,
                20,
                50,
                100,
                200,
                500,
                1000
            ]
        },
        {
            "currency": "PLN",
            "name": "Polish Zloty",
            "format": "$0,0.00",
            "language": "pl",
            "denominations": [
                0.01,
                0.02,
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200
            ]
        },
        {
            "currency": "RON",
            "name": "Romanian Leu",
            "format": "0,0.00",
            "language": "en",
            "denominations": [
                0.10,
                0.50,
                1,
                5,
                10,
                50,
                100
            ]
        },
        {
            "currency": "RUB",
            "name": "Russian Ruble",
            "format": "0,0.00 $",
            "language": "ru",
            "denominations": [
                0.10,
                0.50,
                1,
                2,
                5,
                10,
                50,
                100,
                500,
                1000,
                5000
            ]
        },
        {
            "currency": "SEK",
            "name": "Swedish Krona",
            "format": "0,0",
            "language": "en",
            "denominations": [
                1,
                5,
                10,
                20,
                50,
                100,
                200,
                500
            ]
        },
        {
            "currency": "SGD",
            "name": "Singapore Dollar",
            "format": "$0,0.00",
            "language": "en",
            "denominations": [
                0.05,
                0.10,
                0.20,
                0.50,
                1,
                2,
                5,
                10,
                50,
                100,
                1000
            ]
        },
        {
            "currency": "THB",
            "name": "Thai Baht",
            "format": "$0,0.00",
            "language": "th",
            "denominations": [
                20,
                50,
                100,
                500,
                1000
            ]
        },
        {
            "currency": "TRY",
            "name": "Turkish Lira",
            "format": "$0,0.00",
            "language": "tr",
            "denominations": [
                0.05,
                0.10,
                0.25,
                0.50,
                1,
                5,
                10,
                20,
                50,
                100,
                200
            ]
        },
        {
            "currency": "USD",
            "name": "US Dollar",
            "format": "$0,0.00",
            "language": "en",
            "denominations": [
                0.01,
                0.05,
                0.10,
                0.25,
                1,
                5,
                10,
                20,
                50,
                100
            ]
        },
        {
            "currency": "ZAR",
            "name": "South African Rand",
            "format": "$0,0.00",
            "language": "en-za",
            "denominations": [
                0.05,
                0.10,
                0.20,
                1,
                2,
                5,
                10,
                20,
                50,
                100,
                200
            ]
        }
    ];

    var updateTable = function () {
        var tableBody = $("#data");
        tableBody.empty();

        var leftCurrency = $("#leftSelected").text();
        var rightCurrency = $("#rightSelected").text();

        var leftCurrencySettings = defaultCurrencySettings;
        var rightCurrencySettings = defaultCurrencySettings;

        for (var currency of currencyIndex) {
            if (currency.currency === leftCurrency) {
                leftCurrencySettings = currency;
            }
            if (currency.currency === rightCurrency) {
                rightCurrencySettings = currency;
            }
        }

        for (var i = 0; i < leftCurrencySettings.denominations.length; i++) {
            var to = fx(leftCurrencySettings.denominations[i]).from(leftCurrency).to(rightCurrency).toFixed(2);

            numeral.language(leftCurrencySettings.language);
            var fromFormatted = numeral(leftCurrencySettings.denominations[i]).format(leftCurrencySettings.format);

            numeral.language(rightCurrencySettings.language);
            var toFormatted = numeral(to).format(rightCurrencySettings.format);

            tableBody.append("<tr><td>" + fromFormatted + "</td><td>" + toFormatted + "</td></tr>");
        }
    };

    var updateDropdowns = function () {
        var ul = $("<ul />");
        for (var rate in fx.rates) {
            ul.append('<li><a href="#">' + rate + '</a></li>')
        }
        $("#left,#right").empty().append(ul.contents().clone());
    };

    $("#left,#right").click(function (e) {
        e.preventDefault();

        var column = $(this).attr("id");
        var currency = e.target.text;
        var selectedId = "#" + column + "Selected";
        var headerId = "#" + column + "Header";
        $(selectedId).text(currency);
        $(headerId).text(currency);

        updateTable();
    });

    $.getJSON("http://api.fixer.io/latest", function (data) {

        console.log(data);

        fx.rates = data.rates;
        fx.base = data.base;
        updateTable();
        updateDropdowns();

        $("#updated").text("Last updated: " + data.date);
    });
} ());