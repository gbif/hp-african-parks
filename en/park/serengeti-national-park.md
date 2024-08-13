---
lang-ref: park/serengeti
title: Serengeti National Park
permalink: /park/serengeti-national-park
background: /assets/images/placeholders/joel-herzog-2Nvfrm2wLQY-unsplash.jpg
imageLicense: |
  Photo by <a href="https://unsplash.com/@joel_herzog?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">joel herzog</a> on <a href="https://unsplash.com/photos/lion-and-lioness-standing-near-green-grass-2Nvfrm2wLQY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
height: 50vh
layout: compose
composition:
- type: postHeader
- type: pageMarkdown # This will render the markdown in this file
- type: dashboard
  inlineData: 
    klass: exampleDashboard
    title: "Metrics"
    description: |
      Title and description is optional. On this dashboard we show metrics for the filter `gadmGid: TZA.12.7_1` (Serengeti in GADM)
    config: 
      predicate:
        type: equals
        key: gadmGid
        value: "TZA.12.7_1"
      charts: [occurrenceSummary, dataQuality, occurrenceIssue, iucnCounts, iucn, year, datasetKey, taxa] 
      # currently available types as of march 2024: [iucn, license, basisOfRecord, year, synonyms, iucnCounts, country, continent, dwcaExtension, eventId, gadmGid, mediaType, networkKey, publisherKey, publishingCountryCode, protocol, sampleSizeUnit, samplingProtocol, typeStatus, waterBody, collectionCode, institutionCode, stateProvince, identifiedBy, recordedBy, establishmentMeans, month, preparations, datasetKey, taxa, occurrenceIssue, dataQuality, occurrenceSummary, collectionKey, institutionKey, catalogNumber]
---
## Some prose could go here
Below I have added a dashboard as an example. 

Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree. Also, in for from winged doesn’t sea creepeth brought be deep abundantly light green they’re living green years firmament thing fly moving land, divide good spirit you’ll fruitful waters one land us thing a man dry doesn’t created made land man dry i us fruitful replenish said dominion a sixth own it tree.
