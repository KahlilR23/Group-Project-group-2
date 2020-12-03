var pageObject = {}
let amdTesterRunCommands = require('../page-objects/amdtesterrunPage')
let processorsDropdownArray = require('../testAssets/amdProcessorsDropdownArray')
let processorsSUBDropdownArray = require('../testAssets/amdProcessorsSubDropdownArray')
let graphicsDropdownArray = require('../testAssets/amdGraphicsDropdownArray')
let graphicsSUBDropdownArray = require('../testAssets/amdGraphicsSubDropdownArray')
let gamingDropdownArray = require('../testAssets/amdGamingDropdownArray')
let businessSolutionsDropdownArray = require('../testAssets/amdBusinessSolutionsDropdownArray')



var mySearches = {
    // search bar test values
    search1: 'graphics cards',
    search2: '123456',
    search3: '!@#$%^&*',
    searchResult1: 'AMD Graphics Card Specifications',
    searchResult2: 'Nothing here matches your search',
    // learn more test values
    result1: 'AMD Radeon RX 6000 Series Graphics Cards',
    result2: 'AMD Instinct™ MI100 Accelerator',
    result3: 'AMD CDNA Architecture',
    result4: 'AMD ROCm™ Open Ecosystem',
    result5: 'High Performance Computing (HPC) & AMD',
    result6: 'AMD Ryzen™ Desktop Processors',
    result7: 'AMD Ryzen™ Embedded V2000 Series',
    result8: 'AMD RDNA™ 2 Graphics Architecture',
    result9: 'AMD Fortnite Island: For Fans. With Fans.',
    result10: 'Build the AMD Ultimate Gaming Desktop',
    result11: 'Mini PCs – Powered by AMD Ryzen™ Embedded',
    result12: 'Community Affairs',
    result13: 'AMD EPYC™ Server Processors for Hyperconverged Infrastructure (HCI)',
    result14: 'AMD Ryzen "Equipped to Win" Game Offer',
    result15: 'AMD Radeon™ "Raise the Game" Offer',
    result16: 'AMD Radeon™ Software Adrenalin 2020 Edition',
    result17: 'World of Warcraft®: Shadowlands',
    result18: 'The Riftbreaker™',
    result19: 'Far Cry 6',
    //result20: 
}


module.exports = {
    beforeEach: browser => {
            pageObject = browser.page.amdtesterrunPage()
            pageObject
                .navigate()
                .maximizeWindow()
    },
    after: browser => {
            browser
            .end()
    
    },
    'Cookies': browser => {
        pageObject
            .waitForElementPresent('a[class="cookieComplianceClose"]')
            .click('a[class="cookieComplianceClose"]')

    }, 
    'DROPDOWN TEST: PROCESSORS' : browser => {
        pageObject
        processorsDropdownArray.forEach(processorsDDVariable => {
            pageObject
            .pause(500)
            .click('@processorsDropdown')
            .clickAndAssertVisible(processorsDDVariable.dropdownOption)
                .waitForElementVisible('@pageHeader')
                .verify.containsText('@pageHeader', processorsDDVariable.expectedHeader)
                .click('@homepageButton')
                })
    },
    'SUB DROPDOWN TEST: PROCESSORS' : browser => {
        pageObject
        processorsSUBDropdownArray.forEach(processorsSUBVariable => {
            pageObject
            .pause(500)
            .click('@processorsDropdown')
            .mouseOverAssertVisible(processorsSUBVariable.dropdownOption)
            .pause(500)
                .waitForElementVisible(processorsSUBVariable.subMenuOption)
                .clickAndAssertVisible(processorsSUBVariable.subMenuOption)
                    .waitForElementVisible('@pageHeader')
                    .verify.containsText('@pageHeader', processorsSUBVariable.expectedHeader)  
                    .click('@homepageButton')
                })

    },
    'DROPDOWN TEST: GRAPHICS': browser => {
        pageObject
        graphicsDropdownArray.forEach(graphicsDDVariable => {
            pageObject
            .pause(500)
            .click('@graphicsDropdown')
            .clickAndAssertVisible(graphicsDDVariable.dropdownOption)
                .waitForElementVisible('@pageHeader')
                .verify.containsText('@pageHeader', graphicsDDVariable.expectedHeader)
                .click('@homepageButton')
                })
    
    
    },
    'SUB DROPDOWN TEST: GRAPHICS' : browser => {
        pageObject
        graphicsSUBDropdownArray.forEach(graphicsSUBVariable => {
            pageObject
            .pause(500)
            .click('@graphicsDropdown')
            .mouseOverAssertVisible(graphicsSUBVariable.dropdownOption)
            .pause(500)
                .waitForElementVisible(graphicsSUBVariable.subMenuOption)
                .clickAndAssertVisible(graphicsSUBVariable.subMenuOption)
                    .waitForElementVisible('@pageHeader')
                    .verify.containsText('@pageHeader', graphicsSUBVariable.expectedHeader)  
                    .ifIsPresent('@pageHeader')   
                })
    },
    'DROPDOWN TEST: GAMING': browser => {
        pageObject
        gamingDropdownArray.forEach(gamingDDVariable => {
            pageObject
            .pause(500)
            .click('@gamingDropdown')
            .clickAndAssertVisible(gamingDDVariable.dropdownOption)
                .waitForElementVisible('@pageHeader')
                .verify.containsText('@pageHeader', gamingDDVariable.expectedHeader)
            .click('@homepageButton')
            })
    
    },
    'DROPDOWN TEST: BUSINESS SOLUTIONS': browser => {
        pageObject
        businessSolutionsDropdownArray.forEach(businessSolutionsDDVariable => {
            pageObject
            .pause(500)
            .click('@businessSolutionsDropdown')
            .pause(500)
            .clickAndAssertVisible(businessSolutionsDDVariable.dropdownOption)
                .waitForElementVisible('@pageHeader')
                .verify.containsText('@pageHeader', businessSolutionsDDVariable.expectedHeader)
            .click('@homepageButton')
            })

    },
    'DROPDOWN TEST: PRO RENDER FOR DEVELOPERS': browser =>{
        pageObject
        .pause(500)
        .waitForElementPresent('@graphicsDropdown')
        .click('@graphicsDropdown')
        .mouseOverAssertVisible('@radeonProRenderDDSelector')
        .pause(500)
            .waitForElementPresent('@gRadeonProRenderSubForDevs')
            .clickAndAssertVisible('@gRadeonProRenderSubForDevs')
            .verify.containsText('@proRenderSuiteHeader', "Features an extensive native physically-based material and camera system to enable true design decisions with global illumination.")

    
    }, 
    'Seller Through Shop': browser => {
        pageObject
            //Accepting Cookie Compliance 
            .pause(500)
            .moveToElement('@shop', 10, 10)
            .waitForElementVisible('@dsKtop')
            .click('@dsKtop')
            .verify.containsText('@heaDer', 'Desktops')
            .waitForElementVisible('@seePrice')
            .click('@seePrice')
            .waitForElementVisible('@shopNowbtn')
            .click('@shopNowbtn')
            .api.windowHandles(result => {
            browser.switchWindow(result.value[1])
                    .verify.urlContains('https://www.ibuypower.com/')
                }),
                pageObject
                    .useXpath()
                    .verify.containsText('(//div[@class="spec-top-block"])[2]', 'Ryzen 5')
        },
        'Seller 2': browser => {
            pageObject
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@gamingDropdown', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@laptopGsub')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@laptopGsub')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Gaming Laptops')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@dellshopNowbtn')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@dellshopNowbtn')
                .ifIsPresent('@popUpClose')
            pageObject
                .api.windowHandles(result => {
                    browser.switchWindow(result.value[2])
                        .verify.urlContains('https://www.bestbuy.com/')
                }),
                pageObject
                    .ifIsPresent('@popUpClose')
            pageObject
            // .waitForElementVisible('div[class="sku-title"]')
            // .verify.containsText('div[class="sku-title"]', 'G5')
        },
        'Shop Dropdowns and Sub-dropdowns': browser => {
            pageObject
                .ifIsPresent('@popUpClose')
            pageObject
                // Desktop dropdown and subs
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@dsKtop')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@dsKtop')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Desktops')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@dsKtop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shDskh')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shDskh')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@auDckb')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.urlContains('audience:Home')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@dsKtop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shDskg')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shDskg')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@auDckb')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.urlContains('audience:Gaming')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@dsKtop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shDskb')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shDskb')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@auDckb')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.urlContains('audience:Business')
                .ifIsPresent('@popUpClose')
            pageObject
                // Laptop dropdown and subs
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopLap')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shopLap')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@heaDer')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Laptops')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shopLap', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shLaph')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shLaph')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@auDckb')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.urlContains('audience:Home')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shopLap', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shLapg')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shLapg')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@auDckb')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.urlContains('audience:Gaming')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shopLap', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shLapb')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shLapb')
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@auDckb')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.urlContains('audience:Business')
                .ifIsPresent('@popUpClose')
            pageObject
                // Processors dropdown and subs
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopProc')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shopProc', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shProcdsk')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shProcdsk')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Desktop Processors')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopProc')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shopProc', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shProcser')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shProcser')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Server Processors')
                // Graphics Cards dropdown and subs
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopGc')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shopGc', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shGcs')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shGcs')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Graphics Cards')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopGc')
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shopGc', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shGcpga')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shGcpga')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Pro Graphics and Accelerators')
                // Motherboard dropdown
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopMb')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shopMb')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.containsText('@heaDer', 'Motherboards')
                .ifIsPresent('@popUpClose')
            pageObject
                // Freesync Monitor dropdown
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopFm')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shopFm')
                .ifIsPresent('@popUpClose')
            pageObject
                .pause(500)
                .verify.urlContains('https://www.amd.com/en/shop/us/Freesync%20Monitors')
                //FanStore through Shop dropdown
                .ifIsPresent('@popUpClose')
            pageObject
                .moveToElement('@shop', 10, 10)
                .ifIsPresent('@popUpClose')
            pageObject
                .waitForElementVisible('@shopFan')
                .ifIsPresent('@popUpClose')
            pageObject
                .click('@shopFan')
                .ifIsPresent('@popUpClose')
            pageObject
                .verify.urlContains('https://amdfanstore.com/')


    },
     'SearchBar test': browser => {
         pageObject
             .setValue('@searchBar', [mySearches.search1])
             .click('@search')
         pageObject
             .ifIsPresent('@popUpClose')
         pageObject
             .verify.containsText('@graphicsResults', [mySearches.searchResult1])
             .click('@homepageButton')
         pageObject
             .ifIsPresent('@popUpClose')
         pageObject
             .setValue('@searchBar', [mySearches.search2])
             .click('@search')
         pageObject
             .ifIsPresent('@popUpClose')
         pageObject
             .verify.containsText('@invalidResult', [mySearches.searchResult2])
             .click('@homepageButton')
         pageObject
             .ifIsPresent('@popUpClose')
         pageObject
             .setValue('@searchBar', [mySearches.search3])
             .click('@search')
         pageObject
             .ifIsPresent('@popUpClose')
         pageObject
             .verify.containsText('@invalidResult', [mySearches.searchResult2])
     },
    'Learn more buttons test': browser => {
        pageObject
            .click('@learnMore1')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result1])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore2')
            .click('@learnMore2')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result2])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore3')
            .click('@learnMore3')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result3])
            .click('@homepageButton')
            .pause(2000)
            .waitForElementPresent('@learnMore4')
            .pause(2000)
            .click('@learnMore4')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result4])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore5')
            .click('@learnMore5')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result5])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore6')
            .click('@learnMore6')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result6])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore7')
            .click('@learnMore7')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result7])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore8')
            .click('@learnMore8')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result8])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore9')
            .click('@learnMore9')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result9])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore10')
            .click('@learnMore10')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result10])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore11')
            .click('@learnMore11')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result11])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore12')
            .click('@learnMore12')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result12])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore13')
            .click('@learnMore13')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result13])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore14')
            .click('@learnMore14')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result14])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore15')
            .click('@learnMore15')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .waitForElementPresent('@learnMoreResult')
            .pause(500)
            .verify.containsText('@learnMoreResult', [mySearches.result15])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore16')
            .click('@learnMore16')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result16])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore17')
            .click('@learnMore17')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result17])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore18')
            .click('@learnMore18')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result18])
            .click('@homepageButton')
            .waitForElementPresent('@learnMore19')
            .click('@learnMore19')
        pageObject
            .ifIsPresent('@popUpClose')
        pageObject
            .pause(500)
            .waitForElementPresent('@learnMoreResult')
            .verify.containsText('@learnMoreResult', [mySearches.result19])
            .click('@homepageButton')
        
        }, 
        'Add To Processor Cart' : browser => {
            pageObject
            //AMD Ryzen™ 9 3950X Desktop Processor
            
                .moveToElement('@shop', 10, 10)
                .waitForElementVisible('@shopProc')
                .moveToElement('@shopProc', 10, 10)
                .waitForElementVisible('@shProcdsk')
                .click('@shProcdsk')
            .verify.containsText('@heaDer', 'Desktop Processors')
                .useXpath()
                .waitForElementPresent('//a[contains(@href,"linkid=3950xdesktop")]')
                .click('(//a[contains(@class,"btn-shopping-cart btn-shopping-neutral")])[6]')
                
                
                .api.windowHandles(result => {
                    browser.switchWindow(result.value[3])
                 
                })
            pageObject
            .useCss()
            .waitForElementPresent('h1')
                .waitForElementPresent('div[class="dr_removeItem"]')
                .click('div[class="dr_removeItem"]') //removes item
        
        },
        'Checkout Processor': browser => {
            pageObject
                .moveToElement('@shop', 10, 10)
                .waitForElementVisible('@shopProc')
                .moveToElement('@shopProc', 10, 10)
                .waitForElementVisible('@shProcdsk')
                .click('@shProcdsk')
                .verify.containsText('@heaDer', 'Desktop Processors')
                .useXpath()
                .waitForElementPresent('//a[contains(@href,"linkid=3950xdesktop")]')
                .click('(//a[contains(@class,"btn-shopping-cart btn-shopping-neutral")])[6]')
                
                .api.windowHandles(result => {
                    browser.switchWindow(result.value[4])
                }),
            pageObject
               
                .click('(//a[contains(@id, "dr_shoppingCartCheckoutButton")])[1]')//Clicks checkout button
                .useCss()
                .setValue('input[id="billingName1"]', 'Tony')
                .setValue('input[id="billingName2"]', 'Stark')
                .setValue('input[id="billingAddress1"]', '123 Stark Towerd Rd')
                .setValue('input[id="billingCity"]', 'New York')
                .setValue('select[id="billingState"]', 'New York')
                .setValue('input[id="billingPostalCode"]', '10001')
                .setValue('input[id="email"]', 'tonystark@ironman.com')
                .setValue('input[id="billingPhoneNumber"]', '3181234567')
                .setValue('input[id="ccNum"]', '4242424242424242')
                .setValue('select[id="ccMonth"]', 'October')
                .setValue('select[id="ccYear"]', '2023')
                .setValue('input[id="cardSecurityCode"]', '123')
        }
    }
            
    

        
    


    

    


