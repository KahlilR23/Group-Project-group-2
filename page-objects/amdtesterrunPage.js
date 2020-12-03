var amdTesterRunCommands = {
    ifIsPresent: function(elementInQuestion){
        this    
            this.api.elements(elementInQuestion, results =>{
                if (results.value.length > 0) {
                    this.click(elementInQuestion)
                }
                else {
                    console.log("Pop Up Close Selector does NOT Exist, continuing test...")}
            return this
        });
    },                   // NOT IN USE //
    ifNotPresent: function(elementInQuestion){
        this
            this.api.elements(elementInQuestion, results =>{
                if (results.value.length === 0) {
                    this.back()
                }
                else {
                    console.log("Intended Element does Exist, continuing test...")}
            return this
        });
    
    },
    clickAndAssertVisible: function(elementInQuestion){
        this
            this.assert.visible(elementInQuestion)
            this.click(elementInQuestion)
        return this
    },
    mouseOverAssertVisible: function(elementInQuestion){
        this
            this.assert.visible(elementInQuestion)
            this.moveToElement(elementInQuestion, 10, 10)
            this.pause(200)
        return this
    }
}



module.exports = {
    url: 'https://www.amd.com/en',
    commands: [ amdTesterRunCommands ],
    elements: {

        popUpClose: 'button[class="fsrInvite__closeWrapper fsrAbandonButton"]',

        searchBar: 'input[id="edit-keyword"]',

        pageHeader: 'h1[class="page-title"]',

        homepageButton: 'a[class="site-logo"]',

        languageDropdown: '.block-languageswitcher',

        proRenderSuiteHeader: 'p[class="elementor-icon-box-description"]',

        processorsDropdown: {
            selector: '(//li[@class="dropdown"])[1]',
            locateStrategy: 'xpath'
        },
        graphicsDropdown: {
            selector: '(//li[@class="dropdown"])[2]',
            locateStrategy: 'xpath'
        },
        gamingDropdown: {
            selector: '(//li[@class="dropdown"])[3]',
            locateStrategy: 'xpath',
        },
        businessSolutionsDropdown: {
            selector: '(//li[@class="dropdown"])[4]',
            locateStrategy: 'xpath',
        },
        shopDropdown: {
            selector: '(//li[@class="dropdown"])[5]',
            locateStrategy: 'xpath',
        // DROPDOWN OPTIONS: PROCESSORS
        },
        desktopDDSelector: {
            selector: '//a[@href="/en/products/processors-desktop"]',
            locateStrategy: 'xpath',
        },
        laptopDDSelector: {
            selector: '//a[@href="/en/products/processors-laptop"]',
            locateStrategy: 'xpath',
        },
        workstationDDSelector: {
            selector: '//a[@href="/en/processors/workstation"]',
            locateStrategy: 'xpath',
        },
        serverDDSelector: {
            selector: '//a[@href="/en/products/epyc-server"]',
            locateStrategy: 'xpath',
        
        },
        embeddedDDSelector: {
            selector: '//a[@href="/en/products/embedded"]',
            locateStrategy: 'xpath',
        },
        semiCustomDDSelector: {
            selector: '//a[@href="/en/products/semi-custom-solutions"]',
            locateStrategy: 'xpath',
        },
        productSpecsDDSelector: {
            selector: '//a[@href="/en/products/specifications"]',
            locateStrategy: 'xpath',
        },
        technologiesDDSelector: {
            selector: '//a[@href="/en/technologies-processors"]',
            locateStrategy: 'xpath',
        
        // GRAPHICS DROPDOWN OPTIONS
        },
        radeonGraphicsDDSelector: {
            selector: '//a[@href="/en/graphics/radeon-rx-graphics"]',
            locateStrategy: 'xpath',
        },
        radeonPoweredDDSelector: {
            selector: '//a[@href="/en/graphics/radeon-systems"]',
            locateStrategy: 'xpath',
        },
        radeonPrographicsDDSelector: {
            selector: '//a[@href="/en/graphics/workstations"]',
            locateStrategy: 'xpath',
        },
        radeonServerSolutionsDDSelector: {
            selector: '//a[@href="/en/graphics/servers-solutions"]',
            locateStrategy: 'xpath',
        },
        radeonSoftwareDDSelector: {
            selector: '//a[@href="/en/technologies/radeon-software"]',
            locateStrategy: 'xpath',
        },
        radeonProSoftwareDDSelector: {
            selector: '//a[@href="/en/technologies/radeon-pro-software"]',
            locateStrategy: 'xpath',
        },
        radeonProRenderDDSelector: {
            selector: '//a[@href="/en/technologies/radeon-prorender"]',
            locateStrategy: 'xpath',
        },
        graphicsEmbeddedDDSelector: {
            selector: '(//a[@href="/en/products/embedded-graphics"])[1]',
            locateStrategy: 'xpath',
        },
        graphicsSemiCustomDDSelector: {
            selector: '(//a[@href="/en/products/semi-custom-solutions"])[2]',
            locateStrategy: 'xpath',
        },
        graphicsProductSpecsDDSelector: {
            selector: '(//a[@href="/en/products/specifications"])[2]',
            locateStrategy: 'xpath',
        },
        graphicsTechnologiesDDSelector: {
            selector: '(//a[@href="/en/technologies-graphics"])[1]',
            locateStrategy: 'xpath'
    
        // GAMING DROPDOWN OPTIONS
        },
        featuredGamesDDSelector: {
            selector: '//a[@href="/en/gaming/featured-games"]',
            locateStrategy: 'xpath',
        },
        gamingLaptopsDDSelector: {
            selector: '//a[@href="/en/gaming/gaming-laptops"]',
            locateStrategy: 'xpath',
        },
        gamingProductsDDSelector: {
            selector: '(//a[@href="/en/gaming/products"])[1]',
            locateStrategy: 'xpath',
        },
        redTeamHubDDSelector: {
            selector: '//a[@href="/en/gaming/community"]',
            locateStrategy: 'xpath',
        },
        robotCacheDDSelector: {
            selector: '//a[@href="/en/gaming/robot-cache"]',
            locateStrategy: 'xpath',
        },
        eSportsDDSelector: {
            selector: '//a[@href="/en/gaming/esports"]',
            locateStrategy: 'xpath',
        },
        gamingTechnologiesDDSelector: {
            selector: '//a[@href="/en/technologies-gaming"]',
            locateStrategy: 'xpath',
        
        //Business Solution Selectors
        },
        notebookAndDesktopDDSelector: {
            selector: '//a[@href="/en/campaigns/why-amd"]',
            locateStrategy: 'xpath',
        },
        professionalGraphicsDDSelector: {
            selector: '(//a[@href="/en/graphics/workstations"])[2]',
            locateStrategy: 'xpath',
        },
        busProcessorsDDSelector: {
            selector: '(//a[@href="/en/products/epyc-server"])[2]',
            locateStrategy: 'xpath',
        },
        buAcceleratorsDDSelector: {
            selector: '(//a[@href="/en/graphics/servers-radeon-instinct-mi"])[2]',
            locateStrategy: 'xpath',
        
        //SUB DROPDOWN SELECTORS - PROCESSORS/DESKTOP
        },
        desktopSubRyzenThreadripper: {
            selector: '//a[@href="/en/products/ryzen-threadripper"]',
            locateStrategy: 'xpath',

        },
        desktopSubRyzen: {
            selector: '//a[@href="/en/processors/ryzen"]',
            locateStrategy: 'xpath',
        },
        desktopSubRyzenWithGraphics: {
            selector: '//a[@href="/en/processors/ryzen-with-graphics"]',
            locateStrategy: 'xpath',
        },
        desktopSubAthlonWithGraphics: {
            selector: '//a[@href="/en/processors/athlon-desktop"]',
            locateStrategy: 'xpath',
        },
        desktopSubBuRyzenPro: {
            selector: '//a[@href="/en/ryzen-pro"]',
            locateStrategy: 'xpath',
        },
        desktopSubBuAthlonPro: {
            selector: '//a[@href="/en/processors/athlon-pro"]',
            locateStrategy: 'xpath',
        },
        desktopSubBuAmdProTechnologies: {
            selector: '//a[@href="/en/technologies/pro-technologies"]',
            locateStrategy: 'xpath',
        },
        desktopSubBuBusinessPcs: {
            selector: '(//a[@href="/en/where-to-buy/commercial-systems"])[1]',
            locateStrategy: 'xpath',
        
        //SUB DROPDOWNS: PROCESSORS / LAPTOPS
        },
        laptopSubRyzen: {
            selector: '//a[@href="/en/products/ryzen-processors-laptop"]',
            locateStrategy: 'xpath',
        },
        laptopSubAthlon: {
            selector: '//a[@href="/en/processors/athlon-mobile"]',
            locateStrategy: 'xpath',
        },
        laptopSubChromebook: {
            selector: '//a[@href="/en/processors/chromebook"]',
            locateStrategy: 'xpath',
        },
        laptopSubBuRyzen: {
            selector: '//a[@href="/en/processors/laptop-processors-for-business"]',
            locateStrategy: 'xpath',
        },
        laptopSubBuAmdProTechnologies: {
            selector: '(//a[@href="/en/technologies/pro-technologies"])[2]',
            locateStrategy: 'xpath',
        },
        laptopSubBusinessPcs: {
            selector: '(//a[@href="/en/where-to-buy/commercial-systems"])[2]',
            locateStrategy: 'xpath',
        
        // SUB DROPDOWNS: PROCESSORS/ WORKSTATIONS
        },
        workstationSubArchitecture: {
            selector: '//a[@href="/en/processors/workstation-architecture-solutions"]',
            locateStrategy: 'xpath',
        },
        workstationSubDesignManufacturing: {
            selector: '//a[@href="/en/processors/workstation-design-manufacturing"]',
            locateStrategy: 'xpath',
        },
        workstationSubMediaEntertainment: {
            selector: '//a[@href="/en/processors/workstation-media-entertainment"]',
            locateStrategy: 'xpath',
        },
        workstationSubSoftwareSciences: {
            selector: '//a[@href="/en/processors/workstation-software-sciences"]',
            locateStrategy: 'xpath',
        },
        workstationSubWhereToBuy: {
            selector: '//a[@href="https://www.amd.com/en/where-to-buy/workstations-cpu"]',
            locateStrategy: 'xpath',
        },
        workstationSubRyzenThreadripperPro: {
            selector: '//a[@href="/en/processors/ryzen-threadripper-pro"]',
            locateStrategy: 'xpath',
        },
        workstationSubRyzenThreadripper: {
            selector: '//a[@href="/en/processors/threadripper-creators"]',
            locateStrategy: 'xpath',
        },
        workstationSubRyzen: {
            selector: '//a[@href="/en/processors/ryzen-for-creators"]',
            locateStrategy: 'xpath',
        
        
        //SUB DROPDOWNS: Processors/Embedded
        },
        pEmbeddedSubEpyc: {
            selector: '//a[@href="/en/processors/embedded-epyc-series"]',
            locateStrategy: 'xpath',
        },
        pEmbeddedSubRyzen: {
            selector: '//a[@href="/en/products/embedded-ryzen-series"]',
            locateStrategy: 'xpath',
        },
        pEmbeddedSubGSeries: {
            selector: '//a[@href="/en/products/embedded-g-series"]',
            locateStrategy: 'xpath',
        },
        pEmbeddedSubRSeries: {
            selector: '//a[@href="/en/products/embedded-r-series"]',
            locateStrategy: 'xpath',
        },
        pEmbeddedSubAppSpecSolutions: {
            selector: '//a[@href="/en/products/embedded-industry-solutions"]',
            locateStrategy: 'xpath',
        
        
        //SUB DROPDOWNS: GRAPHICS / RADEON PRO GRAPHICS
        
        },
        proGraphicsSubArchitectureEngineeringConstruction: {
        selector: '//a[@href="/en/graphics/workstation-architecture-engineering-construction-solutions"]',
        locateStrategy: 'xpath',
        },
        proGraphicsSubDesignManufacturing: {
            selector: '//a[@href="/en/graphics/workstation-design-and-manufacturing-solutions"]',
            locateStrategy: 'xpath',
        },
        proGraphicsSubMediaEntertainment: {
            selector: '//a[@href="/en/graphics/workstation-media-and-entertainment-solutions"]',
            locateStrategy: 'xpath',
        },
        proGraphicsSubPartners: {
            selector: '(//a[@href="/en/graphics/pro-partners"])[1]',
            locateStrategy: 'xpath',
        },
        proGraphicsSubRadeonProWorkstationGraphicsSelector: {
            selector: '//a[@href="/en/graphics/pro-gpu-selector"]',
            locateStrategy: 'xpath',
        
        
        // SUB DROPDOWNS: GRAPHICS / RADEON SERVER SOLUTIONS
        },
        gServerSolutionsSubRadeonInstinctAccelerators: {
            selector: '//a[@href="/en/graphics/servers-radeon-instinct-mi"]',
            locateStrategy: 'xpath',
        },
        gServerSolutionsSubRocM: {
            selector: '//a[@href="/en/graphics/servers-solutions-rocm"]',
            locateStrategy: 'xpath',
        },
        gServerSolutionsSubDeepLearning: {
            selector: '//a[@href="/en/graphics/servers-radeon-instinct-deep-learning"]',
            locateStrategy: 'xpath',
        },
        gServerSolutionsSubGpuCompute: {
            selector: '//a[@href="/en/graphics/servers-radeon-instinct-mi-powered-servers"]',
            locateStrategy: 'xpath',
        },
        gServerSolutionsSubVirtualGraphics: {
            selector: '//a[@href="/en/graphics/workstation-virtual-graphics"]',
            locateStrategy: 'xpath',
        },
        gServerSolutionsSubPartners: {
            selector: '(//a[@href="/en/graphics/pro-partners"])[2]',
            locateStrategy: 'xpath',
       
       //SUB DROPWDOWNS: GRAPHICS / RADEON SOFTWARE
        },
        gRadeonSoftwareSubGaming: {
            selector: '//a[@href="/en/technologies/radeon-software-gaming"]',
            locateStrategy: 'xpath',
        },
        gRadeonSoftwareSubStreaming: {
            selector: '//a[@href="/en/technologies/radeon-software-streaming"]',
            locateStrategy: 'xpath',
        },
        gRadeonSoftwareSubPerformance: {
            selector: '//a[@href="/en/technologies/radeon-software-performance"]',
            locateStrategy: 'xpath',
        },
        gRadeonSoftwareSubApu: {
            selector: '//a[@href="/en/technologies/radeon-software-apu"]',
            locateStrategy: 'xpath',
        },
        gRadeonSoftwareSubVanguardBetaTesters: {
            selector: '//a[@href="/en/technologies/radeon-software-testers"]',
            locateStrategy: 'xpath',
        
        // SUB DROPDOWNS: GRAPHICS / RADEON PRO SOFTWARE
        },
        gRadeonProSoftSubImageQuality: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-image-quality"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubQuality: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-quality"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubPerformance: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-performance"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubDayZeroCertification: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-certifications"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubRemoteWorkstation: {
            selector: '//a[@href="/en/technologies/remote-workstation"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubRadeonProRelive: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-relive"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubWirelessProVr: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-wireless-vr"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubRadeonProSettings: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-settings"]',
            locateStrategy: 'xpath',
        },
        gRadeonProSoftSubHowToVideos: {
            selector: '//a[@href="/en/technologies/radeon-pro-software-howtovideos"]',
            locateStrategy: 'xpath',
        
        // SUB DROPDOWNS: GRAPHICS / RADEON PRO RENDER
        },
        gRadeonProRenderSubForDevs: {
            selector: '//a[@href="https://gpuopen.com/radeon-prorender-suite"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubHowToVideos: {
            selector: '//a[@href="/en/technologies/radeon-prorender-howtovideos"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubDownloads: {
            selector: '//a[@href="/en/technologies/radeon-prorender-downloads"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubAccaEdifus: {
            selector: '//a[@href="/en/graphics/workstation-architecture-engineering-construction-solutions-aec-acca-edificius"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSub3dsMax: {
            selector: '//a[@href="/en/technologies/radeon-prorender-autodesk3dsmax"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubMaya: {
            selector: '//a[@href="/en/technologies/radeon-prorender-autodeskmaya"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubBlender: {
            selector: '//a[@href="/en/technologies/radeon-prorender-blender"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubCinema4D: {
            selector: '//a[@href="/en/graphics/workstation-media-and-entertainment-solutions-media-maxon-cinema-4d"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubHoudini: {
            selector: '//a[@href="/en/technologies/radeon-prorender-houdini"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubModo: {
            selector: '//a[@href="/en/graphics/workstation-media-and-entertainment-solutions-media-foundry-modo"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubSolidWorks: {
            selector: '//a[@href="/en/graphics/workstation-design-and-manufacturing-solutions-solidworks"]',
            locateStrategy: 'xpath',
        },
        gRadeonProRenderSubUnrealEngine: {
            selector: '//a[@href="/en/technologies/radeon-prorender-unreal"]',
            locateStrategy: 'xpath',
        
        // SUB DROPDOWNS: GRAPHICS / EMBEDDED
        },
        gEmbeddedSubRadeonHighPerformance: {
            selector: '//a[@href="/en/products/embedded-graphics-high-performance"]',
            locateStrategy: 'xpath',
        },
        gEmbeddedSubRadeonPowerEfficient: {
            selector: '//a[@href="/en/products/embedded-graphics-power-efficient"]',
            locateStrategy: 'xpath',
        },
        gEmbeddedSubRadeonUltraHighPerformance: {
            selector: '//a[@href="/en/products/embedded-graphics-ultra-high"]',
            locateStrategy: 'xpath',
        },
        gEmbeddedSubAppSpecSolutions: {
            selector: '(//a[@href="/en/products/embedded-industry-solutions"])[2]',
            locateStrategy: 'xpath',
        },
        shop: 'a[class="shop-menu-item dropdown-toggle"]',
        dsKtop: 'a[href="/en/shop/us/Desktops"]',
        shDskh: 'a[href="/en/shop/us/Desktops?f[0]=audience:Home"]',
        shDskg: 'a[href="/en/shop/us/Desktops?f[0]=audience:Gaming"]',
        shDskb: 'a[href="/en/shop/us/Desktops?f[0]=audience:Business"]',
        shopLap: 'a[href="/en/shop/us/Laptops"]',
        shLaph: 'a[href="/en/shop/us/Laptops?f[0]=audience:Home"]',
        shLapg: 'a[href="/en/shop/us/Laptops?f[0]=audience:Gaming"]',
        shLapb: 'a[href="/en/shop/us/Laptops?f[0]=audience:Business"]',
        shProcdsk: 'a[href="/en/shop/us/Desktop%20Processors"]',
        shProcser: 'a[href="/en/shop/us/Server%20Processors"]',
        shGcs: 'a[href="/en/shop/us/Graphics%20Cards"]',
        shGcpga: 'a[href="/en/shop/us/Pro%20Graphics%20%26%20Accelerators"]',
        shopMb: 'a[href="/en/shop/us/Motherboards"]',
        shopFm: 'a[href="/en/shop/us/Freesync%20Monitors"]',
        searchIcon: 'i[class="fa fa-search-toggle"]',
        searchBar: 'input[id="edit-keyword"]',
        heaDer: 'h1[class="page-title"]',
        auDckb: 'ul[data-drupal-facet-id="audience"]',
        
        shopNowbtn: {
            selector: '//a[@class="btn-transparent-black"]',
            locateStrategy: 'xpath',
        },
        seePrice: {
            selector: '(//a[@href="/en/shop-product-prices-reviews/100415171/us"])[2]',
            locateStrategy: 'xpath',
        },
        gamingDropdown: {
            selector: '(//li[@class="dropdown"])[3]',
            locateStrategy: 'xpath',
        },
        laptopGsub: {
            selector: '(//a[@href="/en/gaming/gaming-laptops"])[1]',
            locateStrategy: 'xpath',
        },
        dellshopNowbtn: {
            selector: '(//a[@class="btn-transparent-white"])[3]',
            locateStrategy: 'xpath',
        },
        shopProc: {
            selector: '(//a[@href="#"])[1]',
            locateStrategy: 'xpath',
        },
        shopGc: {
            selector: '(//a[@href="#"])[2]',
            locateStrategy: 'xpath',
        },
        shopFan: {
            selector: '(//a[@href="https://amdfanstore.com/"])[2]',
            locateStrategy: 'xpath',
        },
         // search bar test selectors
        loadSearchBar: 'i[class="fa fa-search-toggle"]',
        searchBar: 'input[id="edit-keyword"]',
        search: 'input[id="edit-submit-acquia-search"]',
        homepageButton: 'a[class="site-logo"]',
        graphicsResults: 'a[href="/en/partner/graphics"]',
        invalidResult: 'div[class="view-empty"]',
        // learn more test selectors
        learnMoreResult: 'div[class="block block-core block-page-title-block col-sm-9"]',
        learnMore1: 'a[href="/en/graphics/amd-radeon-rx-6000-series"]',
        learnMore2: 'a[href="/en/products/server-accelerators/instinct-mi100"]',
        learnMore3: 'a[href="/en/technologies/cdna"]',
        learnMore4: 'a[intpromo="IP5"]',
        learnMore5: 'a[href="/en/campaigns/high-performance-computing"]',
        learnMore6: 'a[intpromo="IP9"]',
        learnMore7: 'a[href="/en/processors/embedded-ryzen-v2000-series"]',
        learnMore8: 'a[href="/en/technologies/rdna-2"]',
        learnMore9: 'a[href="/en/gaming/amd-fortnite-island-for-fans-with-fans"]',
        learnMore10: 'a[href="/en/gaming/ultimate-gaming-desktop-platform"]',
        learnMore11: 'a[intpromo="IP14"]',
        learnMore12: 'a[intpromo="IP15"]',
        learnMore13: 'a[intpromo="IP16"]',
        learnMore14: 'a[intpromo="IP17"]',
        learnMore15: 'a[intpromo="IP18"]',
        learnMore16: 'a[intpromo="IP19"]',
        learnMore17: 'a[intpromo="IP20"]',
        learnMore18: 'a[intpromo="IP21"]',
        learnMore19: 'a[intpromo="IP22"]',
    //  learnMore20: ,
        
    } 

}