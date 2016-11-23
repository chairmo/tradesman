angular.module('Artisans').directive('artisanCard', function ($templateCache, $compile) {

    function createCardsHtml(current, columns) {

        var cardsHtml = '';

        for (var i = 0; i < columns; i++) {
            cardsHtml +=
                '<div class="four columns">' +
                    '<div class="artisans-business-card">' +
                        '<a href="#">' +
                            '<h5>{{artisanList[' + current +'].company}}</h5>' +
                            '<h6>{{artisanList[' + current +'].name}} {{artisanList[' + current +'].surname}}</h6>' +
                            '<div class="artisans-image">' +
                                '<img src="/img/logo.png" />' +
                            '</div>' +
                            '<p>' +
                                '{{artisanList[' + current +'].skill}}' +
                                '<br />' +
                                '<strong>Cell: </strong>{{artisanList[' + current +'].cell}}<br />' +
                                '<strong>Email: </strong>{{artisanList[' + current +'].email}}' +
                            '</p>' +
                        '</a>' +
                        '<div class="artisans-controls">' +
                            '<div class="row">' +
                                '<div class="four columns">' +
                                    '{{artisanList[' + current +'].experience}}' +
                                '</div>' +
                                '<div class="four columns">' +
                                    '{{artisanList[' + current +'].location}}' +
                                '</div>' +
                                '<div class="four columns">' +
                                    '{{artisanList[' + current +'].capacity}}' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';

            current++;
        }

        return cardsHtml;

    }

    var resolveTemplate = function (value) {

        var template = '';

        for (var i = 0; i < value.length; i += 3) {
            template +=
                '<div class="row">' +
                createCardsHtml(i, 3) +
                '</div>';
        }

        return template;

    };

    return {
        restrict: 'E',
        scope: {
            artisanList: '='
        },
        transclude: true,
        template: function (tElement, tAttrs) {
            return '{{artisanList}}';
        },
        link: function (scope, element, attrs) {
            scope.$watch('artisanList', function (newValue, oldValue) {
                if (newValue) {
                    element.html(resolveTemplate(newValue));
                    $compile(element.contents())(scope);
                }
            }, true);
        }
    };
});