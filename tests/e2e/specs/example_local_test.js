module.exports = {
    'local testing': function (browser) {
        browser
            .url('http://localhost:5000/examples/example-page.html')
            .waitForElementVisible('body', 1000)
            .assert.title('Who is a carer? | Standard page | Queensland Government')
            .end();
    }
};