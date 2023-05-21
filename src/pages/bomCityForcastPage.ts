import { Page} from '@playwright/test';
import { Days } from '../testHelpers/enums';


export class BomCityForcastPage {
    readonly page : Page;

    /**
     * @param {import('@playwright/test').Page} page
     */
    
    constructor(page : Page) {
        this.page = page;
    }

    async getRainForcast(day : Days):Promise<number> {
        
        const rainForcasts = this.page.locator(".forecast .rain em");
        
        const rainForcastText =  await rainForcasts.nth(day).textContent();
        return parseInt(rainForcastText);
    }

};