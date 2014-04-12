Meteor.startup(function(){
  if(Articles.find().count() === 0) {
    Articles.insert({
      author: "Matt Burns",
      bookmarked: false,
      timestamp: new Date("08/04/2014"),
      content: '4K TV is here. Sort of. Netflix is now streaming the second season of House of Cards and some nature documentaries in 4K/Ultra HD format. But of course, your TV has to support the higher resolution to take advantage of the extra pixel count.<br><br>Programs available for viewing in 4K will appear with the Ultra HD 4K label. Netflix confirmed to Multichannel News that the company is now streaming some titles in the higher resolution. Currently, Netflix is limiting 4k streaming to only TVs with Netflix and HEVC/H.265 decoding capabilities built in.<br><br>HDTVtest.com notes that the higher resolution stream really shines with “bright, colorful scenes” adding that the images were “rendered with greater sharpness and smoother gradients.”<br><br>Still, the bitrate of these streams are only around 15 Mbps so while the picture will be superior to HD Netflix, this flavor of 4K is not a true demonstration of the higher resolution. HDTVtest.com adds that to their trained eyes, some Blu-ray titles still offer a cleaner image.<br><br>The best is yet to come.',
      excerpt: "4K TV is here. Sort of. Netflix is now streaming the second season of House of Cards and some nature documentaries in 4K/Ultra HD format. But of course, your TV has to support the higher resolution to take advantage of the extra pixel count. Programs available for viewing in 4K will appear with the Ultra HD 4K label.",
      source: "Tech Crunch",
      slug: "netflix-is-now-streaming-in-4k",
      title: "Netflix Is Now Streaming In 4K"
    });
    Articles.insert({
      author: "Ingrid Lunden",
      bookmarked: false,
      timestamp: new Date("11/04/2014"),
      content: "Salesforce unveiled plans for a new, 61-story Salesforce Tower at 415 Mission Street in San Francisco to expand its worldwide headquarters, and as part of that it’s filed an 8-K form with the SEC with the details of how much it will be investing to do so.<br><br>The CRM giant will pay $560 million over a period of 15 years starting 2018 to lease space, with an additional $130 million on top of that for for leasehold improvements, amounting to a total of outlay of $680 million.",
      excerpt: "Salesforce unveiled plans for a new, 61-story Salesforce Tower at 415 Mission Street in San Francisco to expand its worldwide headquarters, and as part of that it's filed an 8-K form with the SEC with the details of how much it will be investing to do so.",
      source: "Tech Crunch",
      slug: "salesforce-will-pay-680m-to-expand-its-sf-hq-into-the-new-salesforce-tower",
      title: "Salesforce Will Pay $680M To Expand Its SF HQ Into The New Salesforce Tower"
    });
    Articles.insert({
      author: "Daniel Ethenrington",
      bookmarked: false,
      timestamp: new Date("11/04/2014"),
      content: "Apple’s 2014 roadmap was laid out in pretty considerable detail by KGI Securities analyst Ming-Chi Kuo earlier this week in an investor note, and while ordinarily analyst predictions aren’t worth the paper they’re printed on, Kuo has a solid track record of actually getting things right. Among Kuo’s predictions are larger iPhones, a Retina MacBook Air, improved Apple TV, iPad with Touch ID and iWatch launch later this year. But one small detail could have more potential impact than all the rest: NFC inclusion in iWatch and iPhone devices.<br><br>Apple has never thought much of NFC, at least when it comes to its own devices, and has avoided building the communication tech into its gadgets for years while the Android competition turned it into a device default. NFC had a lot of early buzz, but for the most part, its usefulness for the average person comes in its ability to act as a handshake tech to ease the process of Bluetooth pairing. It still has some utility as a mobile payments transfer tech, but even with mobile payment options built into Android phones that support it, it hasn’t taken off in that regard.",
      excerpt: "Apple’s 2014 roadmap was laid out in pretty considerable detail by KGI Securities analyst Ming-Chi Kuo earlier this week in an investor note, and while ordinarily analyst predictions aren’t worth the paper they’re printed on, Kuo has a solid track record of actually getting things right.",
      source: "Tech Crunch",
      slug: "apple-could-finally-adopt-nfc-on-iphone-for-mobile-payment-plans-and-touch-id",
      title: "Apple Could Finally Adopt NFC On iPhone For Mobile Payment Plans And Touch ID"
    });
    Articles.insert({
      author: "Matt Burns",
      bookmarked: false,
      timestamp: new Date("08/04/2014"),
      content: '4K TV is here. Sort of. Netflix is now streaming the second season of House of Cards and some nature documentaries in 4K/Ultra HD format. But of course, your TV has to support the higher resolution to take advantage of the extra pixel count.<br><br>Programs available for viewing in 4K will appear with the Ultra HD 4K label. Netflix confirmed to Multichannel News that the company is now streaming some titles in the higher resolution. Currently, Netflix is limiting 4k streaming to only TVs with Netflix and HEVC/H.265 decoding capabilities built in.<br><br>HDTVtest.com notes that the higher resolution stream really shines with “bright, colorful scenes” adding that the images were “rendered with greater sharpness and smoother gradients.”<br><br>Still, the bitrate of these streams are only around 15 Mbps so while the picture will be superior to HD Netflix, this flavor of 4K is not a true demonstration of the higher resolution. HDTVtest.com adds that to their trained eyes, some Blu-ray titles still offer a cleaner image.<br><br>The best is yet to come.',
      excerpt: "4K TV is here. Sort of. Netflix is now streaming the second season of House of Cards and some nature documentaries in 4K/Ultra HD format. But of course, your TV has to support the higher resolution to take advantage of the extra pixel count. Programs available for viewing in 4K will appear with the Ultra HD 4K label.",
      source: "Tech Crunch",
      slug: "netflix-is-now-streaming-in-4k",
      title: "Netflix Is Now Streaming In 4K"
    });
    Articles.insert({
      author: "Ingrid Lunden",
      bookmarked: false,
      timestamp: new Date("11/04/2014"),
      content: "Salesforce unveiled plans for a new, 61-story Salesforce Tower at 415 Mission Street in San Francisco to expand its worldwide headquarters, and as part of that it’s filed an 8-K form with the SEC with the details of how much it will be investing to do so.<br><br>The CRM giant will pay $560 million over a period of 15 years starting 2018 to lease space, with an additional $130 million on top of that for for leasehold improvements, amounting to a total of outlay of $680 million.",
      excerpt: "Salesforce unveiled plans for a new, 61-story Salesforce Tower at 415 Mission Street in San Francisco to expand its worldwide headquarters, and as part of that it's filed an 8-K form with the SEC with the details of how much it will be investing to do so.",
      source: "Tech Crunch",
      slug: "salesforce-will-pay-680m-to-expand-its-sf-hq-into-the-new-salesforce-tower",
      title: "Salesforce Will Pay $680M To Expand Its SF HQ Into The New Salesforce Tower"
    });
    Articles.insert({
      author: "Daniel Ethenrington",
      bookmarked: false,
      timestamp: new Date("11/04/2014"),
      content: "Apple’s 2014 roadmap was laid out in pretty considerable detail by KGI Securities analyst Ming-Chi Kuo earlier this week in an investor note, and while ordinarily analyst predictions aren’t worth the paper they’re printed on, Kuo has a solid track record of actually getting things right. Among Kuo’s predictions are larger iPhones, a Retina MacBook Air, improved Apple TV, iPad with Touch ID and iWatch launch later this year. But one small detail could have more potential impact than all the rest: NFC inclusion in iWatch and iPhone devices.<br><br>Apple has never thought much of NFC, at least when it comes to its own devices, and has avoided building the communication tech into its gadgets for years while the Android competition turned it into a device default. NFC had a lot of early buzz, but for the most part, its usefulness for the average person comes in its ability to act as a handshake tech to ease the process of Bluetooth pairing. It still has some utility as a mobile payments transfer tech, but even with mobile payment options built into Android phones that support it, it hasn’t taken off in that regard.",
      excerpt: "Apple’s 2014 roadmap was laid out in pretty considerable detail by KGI Securities analyst Ming-Chi Kuo earlier this week in an investor note, and while ordinarily analyst predictions aren’t worth the paper they’re printed on, Kuo has a solid track record of actually getting things right.",
      source: "Tech Crunch",
      slug: "apple-could-finally-adopt-nfc-on-iphone-for-mobile-payment-plans-and-touch-id",
      title: "Apple Could Finally Adopt NFC On iPhone For Mobile Payment Plans And Touch ID"
    });
  }
});