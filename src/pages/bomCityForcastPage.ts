import { Page } from 'playwright';
import { Days } from '../testHelpers/enums';


export class BomCityForcastPage {
    readonly page : Page;
    readonly lblRainForecasts = ".forecast .rain em";

    /**
     * @param {import('@playwright/test').Page} page
     */
    
    constructor(page : Page) {
        this.page = page;
    }

    async getRainForcast(day : Days):Promise<number> {
        
        const rainForecasts = this.page.locator(this.lblRainForecasts);
        
        const rainForecastText =  await rainForecasts.nth(day).textContent();
        return parseInt(rainForecastText);
    }

};