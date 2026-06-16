/*
const { generateText } = require('./util');

test('To show name and age as the output', () => {
    const text = generateText('Archis', 20);
    expect(text).toBe('Archis (20 years old)');
});
*/

/*
const puppeteer = require('puppeteer');

test('Make input automatically', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('URL');
    await page.click('input#name');
    await page.type('input#name', 'Archis');
    await page.click('input#age');
    await page.type('input#age', '20');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Archis (20 years old)');
}, 1000000);
*/