import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  //globalSetup: require.resolve('./src/specs/warmup.spec.ts'),
  projects: [
    
    {
      name: 'Chrome Stable',
    
      use: {
        baseURL : "http://www.bom.gov.au",
        browserName: 'chromium',
        
        //set the page view size
        viewport: { width: 1800, height: 1000 },

        // Test against Chrome Stable channel.
        channel: 'chrome',
        video: 'on-first-retry',
        trace: 'retain-on-failure',

        // Run browser in headless mode.
        headless: false,
        isMobile : false,
        screenshot: 'only-on-failure',
        actionTimeout: 30 * 1000,
        navigationTimeout: 30 * 1000,
      }
    }
    // ignored all other broser setup 
    
  ],
  
  // ignored all other setup 
  
};
export default config;

