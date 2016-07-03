/// <reference path="jquery-3.0.0.js" />

(function () {

    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;
        
    ns.initialize = function() {        
        var calculator = new ns.Calculator();
        $('button[id^="btnNumber"]').on('click', calculator.numberClick);
        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnClearEntry').on('click', calculator.clearEntryClick);
        $('#btnClear').on('click', calculator.clearClick);
        calculator.clearClick();
    }

    ns.Calculator = (function() {

        function Calculator() {
        }

        Calculator.prototype.numberClick = function () {
            $('#txtInput').val($('#txtInput').val() == '0' ? $(this).text() : $('#txtInput').val() + $(this).text());            
        };

        Calculator.prototype.plusClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) + Number($('#txtInput').val()));
            Calculator.prototype.clearEntryClick();            
        };

        Calculator.prototype.minusClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));
            Calculator.prototype.clearEntryClick();            
        };

        Calculator.prototype.clearEntryClick = function () {
            $('#txtInput').val('0');
        };

        Calculator.prototype.clearClick = function () {
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        };

        return Calculator;
    }());

})();


