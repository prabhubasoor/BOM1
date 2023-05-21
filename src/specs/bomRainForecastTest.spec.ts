import { test, expect } from "@playwright/test";
import { BomCityForecastPage } from '../pages/bomCityForecastPage';
import { BomMainPage } from '../pages/bomMainPage';
import { CityNames, Days } from '../testHelpers/enums';
import { getDDMMMFormatedDate } from '../testHelpers/dateUtils';

test.describe('Australian Government Bureau of Meteorology web system Test.', function () {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("Verify rain forecast for the Sydney city, 3rd day from today.", async ({page}) => {
        //Arrange
        const mainPage = new BomMainPage(page);
        const cityForecastPage = new BomCityForecastPage(page);
        const expectedRainForecast : number = 50;

        //Act
        await mainPage.selectCityName(CityNames.Sydney);
               
        const actualRainForecast = await cityForecastPage.getRainForecast(Days.ThirdDay);
        const formatedDayMonth = getDDMMMFormatedDate(Days.ThirdDay);
        
        //Assert
        expect(actualRainForecast, `Looks like it will a rainy day on ${formatedDayMonth}.`).not.toBeGreaterThan(expectedRainForecast);

    });

});
