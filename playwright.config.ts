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
    // ,
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     baseURL : "http://www.bom.gov.au",
    //     channel: 'msedge',
    //     headless: false,
    //   },
    // },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     browserName: 'webkit',
    //     viewport: { width: 1200, height: 800 },
    //   }
    // },
    // {
    //     name: 'Desktop Firefox',
    //     use: {
    //       browserName: 'firefox',
    //       viewport: { width: 1200, height: 800 },
    //     }
    // },
    // // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    // },
    // {
      
    //   name: 'Mobile Safari',
    //   use: devices ['iPhone 12']
      
    // },
    
  ],
  
  // ignored all other setup 
  
//   // Run all tests in parallel.
//   fullyParallel: true,

//   // Fail the build on CI if you accidentally left test.only in the source code.
//   forbidOnly: !!process.env.CI,

//   testDir: './src/specs',
//   // One retries for each test
//   retries: process.env.CI ? 1 : 0,

//   timeout: 9 * 60 * 1000,
//   // Limit the number of workers on CI, use default locally
//   workers: process.env.CI ? 4 : 2,
//   //reporter: [ ['html', { outputFolder: 'test-report'}] ],
//   use : {
//     screenshot: 'only-on-failure',
//     trace: 'retain-on-failure',
//     video: 'on-first-retry',
//     actionTimeout: 30 * 1000,
//     navigationTimeout: 30 * 1000,
//   },
  
};
export default config;

