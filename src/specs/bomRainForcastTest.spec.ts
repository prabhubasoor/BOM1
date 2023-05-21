import { test, expect } from "@playwright/test";
import { BomCityForcastPage } from '../pages/bomCityForcastPage';
import { BomMainPage } from '../pages/bomMainPage';
import {CityNames, Days } from '../testHelpers/enums';
import { getDDMMMFormatedDate } from '../testHelpers/dateUtils';

test.describe('Australian Government Bureau of Meteorology web system Test.', function () {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("Verify rain forcast for the Sydney city, 3rd day from today.", async ({page}) => {
        //Arrange
        const mainPage = new BomMainPage(page);
        const cityForcastPage = new BomCityForcastPage(page);
       
        //Act
        await mainPage.selectCityName(CityNames.Sydney);
               
        const rainForcast = await cityForcastPage.getRainForcast(Days.ThirdDay);
        const formatedDayMonth = getDDMMMFormatedDate(Days.ThirdDay);
        
        //Assert
        expect(rainForcast, `Looks like it will a rainy day on ${formatedDayMonth}.`).not.toBeGreaterThan(50);

        //There is no built-in functionality to display a Pass message. 
        console.log('\n',"Pass.");
    });

});
