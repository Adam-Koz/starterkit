sap.ui.define([
    "stk/starterkit/model/formatter"
], function (formatter) {
    "use-strict";

    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
        //Act
        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);

        //Assert
        oOptions.assert.strictEqual(sName, oOptions.expected, "The name was correctly formated: " + sName);

    }

    QUnit.test("Should format 'Adam Kozlowski to 'A.Kozlowski'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Adam",
            lastName: "Kozlowski",
            expected: "A. Kozlowski"
        });
    });

    QUnit.test("Should format 'Grzegorz Malczewski to 'G.Malczewski'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Grzegorz",
            lastName: "Malczewski",
            expected: "G. Malczewski"
        });
    });
});