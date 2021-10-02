import servicesAsset3 from "../cdn/images/servicesAsset3.png"
import servicesAsset4 from "../cdn/images/servicesAsset4.png"
import servicesAsset5 from "../cdn/images/servicesAsset5.png"
import servicesAsset6 from "../cdn/images/servicesAsset6.png"
import servicesAsset7 from "../cdn/images/servicesAsset7.png"
import servicesAsset8 from "../cdn/images/servicesAsset8.png"
import servicesAsset9 from "../cdn/images/servicesAsset9.png"
import PCBuild from "../cdn/images/PCBuild.png"

export const servicesData = [
    {
        displayImg: servicesAsset3,
        title: "Windows Installations",
        price: 149,
        details: {
            title: "Windows Installations",
            description: "Get any version of Microsoft Windows OS installed on your system. Note that, we are strictly against piracy and understand the risks of illegal activations. Windows here can be activated only through genuine OEM or Retail keys, which are sold separately. See below plans for more info",
            plans: [
                {plan: "Windows free essentials add-on", price: 49},
                {plan: "Windows 8.1 and lower (non-activated)", price: 99},
                {plan: "Windows 10 Home/Pro (non-activated)", price: 149},
                {plan: "Windows 10 Home (activated OEM)", price: 2499},
                {plan: "Windows 10 Pro (activated OEM)", price: 2999},
            ],
            important: "All paid products are sourced from G2A. Prices mentioned here are just an upper limit calculated based on the payment taxes and our service charges. Actual prices may be a bit lower"
        }
    },
    {
        displayImg: servicesAsset4,
        title: "Antivirus Installations",
        price: 49,
        details: {
            title: "Antivirus Installations",
            description: "Do you know, Windows 10 and higher doesnot actually required an Antivirus Software? The built-in Windows Defender does a pretty good job keeping you away from malware and ransomware. We can still install an AVS if you insist. See below for prices",
            plans: [
                {plan: "Avira Free Antivirus", price: 49},
                {plan: "Windows 10 Security Patch Updates", price: 99},
                {plan: "McAfee Antivirus 1 Device 1 Year", price: 399},
                {plan: "Kaspersky Antivirus 1 Device 1 Year", price: 599},
                {plan: "Norton Security 1 Device 1 Year", price: 1499},
                {plan: "McAfee Livesafe Unlimited Devices 1 Year", price: 1299}
            ],
            important: "We have choosen some of the best AVS out there. You can rely on our decision. All paid products are sourced either from the brand's online store or from G2A. Prices mentioned here are just an upper limit calculated based on the payment taxes and our service charges. Actual prices may be a bit lower"
        }
    },
    {
        displayImg: servicesAsset5,
        title: "Office Installations",
        price: 99,
        details: {
            title: "Office Installations",
            description: "Do you know that Microsoft's been very keen with their Office Prodcts lately. This is done to keep you safe. Illegal or Pirated Microsoft Office installations can steal your data and put you at a risk. We do not provide illegal office installations or activations and are strictly against such actions. We have taken the oath to keep security risks at bay to keep you safe. We however, provide a cheaper WPS alternative and other paid Office Installations. See prices below",
            plans: [
                {plan: "WPS Office Free version", price: 99},
                {plan: "Microsoft Office 2016 Professional, Home/Student/Business", price: 2499},
                {plan: "Microsoft Office Home & Student/Business 2019", price: 2999},
                {plan: "Microsoft Office 2019 Professional Plus", price: 4999},
            ],
            important: "The paid products are sourced from G2A. Prices mentioned here are just an upper limit calculated based on the payment taxes and our service charges. Actual prices may be a bit lower"
        }
    },
    {
        displayImg: servicesAsset7,
        title: "Troubleshooting and Clean-up",
        price: 49,
        details: {
            title: "Troubleshooting and Clean-up",
            description: "We offer generic computer (Laptop/ Desktop) troubleshooting both for Hardware and Software issues. Initially, we provide only the below mentioned services and plan to extend to many more in the future. See plans below",
            amazon: 1,
            plans: [
                {plan: "All Fixes/ Installations (Affliate purchases)", price: 0},
                {plan: "Software Installations (Free/non-activated)", price: 49},
                {plan: "Software Updates", price: 49},
                {plan: "Simple Software Troubleshooting", price: 49},
                {plan: "Hardware Installations", price: 99},
                {plan: "Software Fixes", price: 99},
                {plan: "Windows Updates", price: 99},
                {plan: "Software Tweaks and Clean-up", price: 99},
                {plan: "Complex Software Troubleshooting", price: 99},
                {plan: "Full Hardware Cleaning", price: 299},
                {plan: "Desktop Cooling Fan Replacement", price: 499},
                {plan: "Laptop Hinge Replacement", price: 799},
                {plan: "Laptop Cooling Fan Replacement", price: 999},
                {plan: "Laptop Touchpad Replacement", price: 999},
                {plan: "Laptop Keyboard Replacement", price: 1999},
                {plan: "Laptop Battery Upgrades", price: 3999},
            ],
            important: "Prices mentioned here are just an estimate calculated based on the payment taxes and our service charges. Actual prices may vary. And yes, the affiliate Link benefits are legit"
        }
    },
    {
        displayImg: servicesAsset8,
        title: "Thermal Optimizations",
        price: 299,
        details: {
            title: "Thermal Optimizations",
            description: "Having an issue where your PC acts like a room heater? Umm, worry not now, we might have the perfect fix for your PC. Our thermal Optimization plans will give your computer enough breating room to rejuvinate. Hence increasing performance and efficiency",
            plans: [
                {plan: "Basic Rejuvination (~1.5W/mK Paste)", price: 299},
                {plan: "Regular Optimization (~5W/mK Paste)", price: 499},
                {plan: "Recommended Optimization (~9W/mK Paste)", price: 799},
                {plan: "High Optimization (11W/mK Paste + 6W/mK Pads)", price: 1499},
                {plan: "Extreme Optimization (15W/mK Paste + 15w/mK Pad)", price: 2999},
            ],
            important: "The temperature decrease depends on a couple of factors and will vary depending on the PC. Generally, expect a 5-20 deg temperature difference based on the Plan chosen above"
        }
    },
    {
        displayImg: servicesAsset9,
        title: "Speed Optimizations",
        price: 99,
        details: {
            title: "Speed Optimizations",
            description: "Having a problem where your computer slows down, worry not! We have your back. A simple SSD will fix your problem. We will install additional memory and clean your system up if needed. See prices below",
            amazon: 1,
            plans: [
                {plan: "SSD or Memory Installations (Affiliate purchases)", price: 0},
                {plan: "SSD or Memory Installations", price: 99},
                {plan: "SSD or Memory Installations + OS Installation/ Migration (Affiliate purchases)", price: 149},
                {plan: "SSD or Memory Installations + OS Installation/ Migration", price: 249},
                {plan: "Basic 120GB SSD installation + OS install/Migration", price: 1999},
                {plan: "Recommended 120GB SSD installation + OS install/Migration", price: 2499},
            ],
            important: "The prices are bound to change at any time base on the market. The service will be done professionally and we will provide support for stuff going wrong and back you up"
        }
    },
    {
        displayImg: PCBuild,
        title: "Computer Builds and Assembly",
        price: 5999,
        details: {
            title: "Computer Builds and Assembly",
            description: "Want a new PC, or probably need a Refurbished One? Even might need some consultation to get the best components for your budget? Let us do the working. We are enthusiasts, but also care for the best performance for the buck. Check the below Prices for more info",
            amazon: 1,
            plans: [
                {plan: "Any PC Assembly (Affiliate purchases)", price: 0},
                {plan: "Product Consultation", price: 49},
                {plan: "Generic PC Assembly", price: 499},
                {plan: "Gaming PC Assembly", price: 999},
                {plan: "Refurbished Video Card Addons", price: 1499},
                {plan: "Monitor + UPS + Accessories", price: 3999},
                {plan: "Refurbished Dual Core PC + 4GB RAM + 320GB HDD", price: 5999},
                {plan: "Refurbished Quad Core/ Thread PC + 8GB RAM + 120GB SSD", price: 8999},
            ],
            important: "We know how much you love shopping from Amazon. So, if your get your Products from Amazon (using our affiliate links) and give us to install/Assemble, we will do it for free. The services will be done professionally and we will provide support for stuff going wrong and back you up"
        }
    },
]