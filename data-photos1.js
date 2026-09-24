/*
  Bill France WWII Journal — consolidated photograph data
  Updated journal-photo assignments: 20 September 2026.
*/
const photoData = [
  [
    "photos/153.jpg",
    {
      "photoId": "P00001",
      "filename": "153.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Sydney",
      "date": "1945",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Africa.PNG",
    {
      "photoId": "P00002",
      "filename": "Africa.PNG",
      "status": "Deleted",
      "sortingBox": "Deleted Photos",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Durban.PNG",
    {
      "photoId": "P00003",
      "filename": "Durban.PNG",
      "status": "Deleted",
      "sortingBox": "Deleted Photos",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image1.JPG",
    {
      "photoId": "P00004",
      "filename": "Image1.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "1942",
      "albumComment": "My three brothers",
      "caption": "Harry - Taken 42",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Harry France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Friday, 26 September 1941",
          "caption": "Harry France"
        }
      ]
    }
  ],
  [
    "photos/Image2.JPG",
    {
      "photoId": "P00005",
      "filename": "Image2.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1944 April",
      "albumComment": "",
      "caption": "",
      "reverseText": "April 1944\nI am getting a large\none done for you",
      "keywords": [],
      "description": "",
      "people": [
        "Joan"
      ],
      "faceCount": 1,
      "companionPhotos": [
        "Image2b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Monday, 22 September 1941",
          "caption": "Joan"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image2b.JPG",
      "backText": "April 1944\nI am getting a large\none done for you",
      "reverseSide": {
        "photoId": "P00006",
        "filename": "Image2b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Cornwall",
        "date": "1944 April",
        "albumComment": "",
        "caption": "",
        "reverseText": "April 1944\nI am getting a large\none done for you",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image2.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image2b.JPG",
    {
      "photoId": "P00006",
      "filename": "Image2b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1944 April",
      "albumComment": "",
      "caption": "",
      "reverseText": "April 1944\nI am getting a large\none done for you",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image2.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image2.JPG",
      "frontSrc": "photos/Image2.JPG"
    }
  ],
  [
    "photos/Image3.JPG",
    {
      "photoId": "P00007",
      "filename": "Image3.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "Nancy Jefferies\nDurban\nSouth Africa",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image3b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image3b.JPG",
      "backText": "Nancy Jefferies\nDurban\nSouth Africa",
      "reverseSide": {
        "photoId": "P00008",
        "filename": "Image3b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "",
        "date": "",
        "albumComment": "",
        "caption": "",
        "reverseText": "Nancy Jefferies\nDurban\nSouth Africa",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image3.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image3b.JPG",
    {
      "photoId": "P00008",
      "filename": "Image3b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "Nancy Jefferies\nDurban\nSouth Africa",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image3.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image3.JPG",
      "frontSrc": "photos/Image3.JPG"
    }
  ],
  [
    "photos/Image4.JPG",
    {
      "photoId": "P00009",
      "filename": "Image4.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "october 1941",
      "albumComment": "",
      "caption": "Joan - Cornwall, England\nOctober 41",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Joan"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Sunday, 12 October 1941",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image5.JPG",
    {
      "photoId": "P00010",
      "filename": "Image5.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Atlantic Ocean",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "Empress of Australia\nAtlantic Ocean",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image5b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image5b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00011",
        "filename": "Image5b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Atlantic Ocean",
        "date": "1941-04",
        "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
        "caption": "Empress of Australia\nAtlantic Ocean",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image5.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image5b.JPG",
    {
      "photoId": "P00011",
      "filename": "Image5b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Atlantic Ocean",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "Empress of Australia\nAtlantic Ocean",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image5.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image5.JPG",
      "frontSrc": "photos/Image5.JPG"
    }
  ],
  [
    "photos/Image6.JPG",
    {
      "photoId": "P00284",
      "filename": "Image6.JPG",
      "status": "Active",
      "sortingBox": "Working Master / Unsorted",
      "location": "",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "",
      "reverseText": "Ele-De-France\nQueen Elizabeth",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image6b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image6b.JPG",
      "backText": "Ele-De-France\nQueen Elizabeth",
      "reverseSide": {
        "photoId": "P00013",
        "filename": "Image6b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "",
        "date": "1941-04",
        "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
        "caption": "",
        "reverseText": "Ele-De-France\nQueen Elizabeth",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image6.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image6b.JPG",
    {
      "photoId": "P00013",
      "filename": "Image6b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "",
      "reverseText": "Ele-De-France\nQueen Elizabeth",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image6.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image6.JPG",
      "frontSrc": "photos/Image6.JPG"
    }
  ],
  [
    "photos/Image7.jpg",
    {
      "photoId": "P00014",
      "filename": "Image7.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image8.JPG",
    {
      "photoId": "P00015",
      "filename": "Image8.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Suez Canal",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "Queen Mary\nGreat Australian Bight",
      "reverseText": "Queen Mary\n- near Suez 1941",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image8b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image8b.JPG",
      "backText": "Queen Mary\n- near Suez 1941",
      "reverseSide": {
        "photoId": "P00016",
        "filename": "Image8b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Suez Canal",
        "date": "1941-04",
        "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
        "caption": "Queen Mary\nGreat Australian Bight",
        "reverseText": "Queen Mary\n- near Suez 1941",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image8.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image8b.JPG",
    {
      "photoId": "P00016",
      "filename": "Image8b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Suez Canal",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "Queen Mary\nGreat Australian Bight",
      "reverseText": "Queen Mary\n- near Suez 1941",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image8.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image8.JPG",
      "frontSrc": "photos/Image8.JPG"
    }
  ],
  [
    "photos/Image9.JPG",
    {
      "photoId": "P00285",
      "filename": "Image9.JPG",
      "status": "Active",
      "sortingBox": "Working Master / Unsorted",
      "location": "Suez Canal",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt.",
      "caption": "Anzac troops disembarking",
      "reverseText": "Troops going ashore at Suez",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image9b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image9b.JPG",
      "backText": "Troops going ashore at Suez",
      "reverseSide": {
        "photoId": "P00018",
        "filename": "Image9b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Suez Canal",
        "date": "1941-04",
        "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt.",
        "caption": "Anzac troops disembarking",
        "reverseText": "Troops going ashore at Suez",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image9.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image9b.JPG",
    {
      "photoId": "P00018",
      "filename": "Image9b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Suez Canal",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt.",
      "caption": "Anzac troops disembarking",
      "reverseText": "Troops going ashore at Suez",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image9.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image9.JPG",
      "frontSrc": "photos/Image9.JPG"
    }
  ],
  [
    "photos/Image10.JPG",
    {
      "photoId": "P00019",
      "filename": "Image10.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Suez Canal",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "Aquitania, Suez Canal",
      "reverseText": "Aquitania\nand Ele-De-France",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image10b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image10b.JPG",
      "backText": "Aquitania\nand Ele-De-France",
      "reverseSide": {
        "photoId": "P00020",
        "filename": "Image10b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Suez Canal",
        "date": "1941-04",
        "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
        "caption": "Aquitania, Suez Canal",
        "reverseText": "Aquitania\nand Ele-De-France",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image10.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image10b.JPG",
    {
      "photoId": "P00020",
      "filename": "Image10b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Suez Canal",
      "date": "1941-04",
      "albumComment": "Ships of New Zealand convoy.\nApril 1941 to Egypt",
      "caption": "Aquitania, Suez Canal",
      "reverseText": "Aquitania\nand Ele-De-France",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image10.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image10.JPG",
      "frontSrc": "photos/Image10.JPG"
    }
  ],
  [
    "photos/Image11.JPG",
    {
      "photoId": "P00021",
      "filename": "Image11.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Ceylonese, Dhow",
      "reverseText": "second port of call on the\ntrip over",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image11b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image11b.JPG",
      "backText": "second port of call on the\ntrip over",
      "reverseSide": {
        "photoId": "P00022",
        "filename": "Image11b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Colombo, Ceylon",
        "date": "1941",
        "albumComment": "What a place! \nHot as hell!",
        "caption": "Ceylonese, Dhow",
        "reverseText": "second port of call on the\ntrip over",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image11.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image11b.JPG",
    {
      "photoId": "P00022",
      "filename": "Image11b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Ceylonese, Dhow",
      "reverseText": "second port of call on the\ntrip over",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image11.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image11.JPG",
      "frontSrc": "photos/Image11.JPG"
    }
  ],
  [
    "photos/Image12.JPG",
    {
      "photoId": "P00023",
      "filename": "Image12.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Snake Charmer\nColombo, Ceylon 41",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image12b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image12b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00024",
        "filename": "Image12b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Colombo, Ceylon",
        "date": "1941",
        "albumComment": "What a place! \nHot as hell!",
        "caption": "Snake Charmer\nColombo, Ceylon 41",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image12.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image12b.JPG",
    {
      "photoId": "P00024",
      "filename": "Image12b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Snake Charmer\nColombo, Ceylon 41",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image12.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image12.JPG",
      "frontSrc": "photos/Image12.JPG"
    }
  ],
  [
    "photos/Image13.JPG",
    {
      "photoId": "P00025",
      "filename": "Image13.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Sacred animals\nColombo, Ceylon 41",
      "reverseText": "Colombo, Ceylon",
      "keywords": [
        "Colombo",
        "Ceylon",
        "Sri Lanka",
        "1941",
        "Municipal Fire Brigade",
        "fire station",
        "bullock cart",
        "bullocks",
        "oxen",
        "sacred animals",
        "animal-drawn transport",
        "street scene",
        "pedestrians",
        "local people",
        "colonial architecture",
        "brick building",
        "wartime Colombo",
        "Second World War",
        "WWII"
      ],
      "description": "Street scene in Colombo, Ceylon, in 1941, showing a bullock cart loaded with goods passing the Municipal Fire Brigade building. Several pedestrians stand on the pavement outside the brick fire station, providing a glimpse of everyday life in wartime Colombo.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image13b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image13b.JPG",
      "backText": "Colombo, Ceylon",
      "reverseSide": {
        "photoId": "P00026",
        "filename": "Image13b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Colombo, Ceylon",
        "date": "1941",
        "albumComment": "What a place! \nHot as hell!",
        "caption": "Sacred animals\nColombo, Ceylon 41",
        "reverseText": "Colombo, Ceylon",
        "keywords": [
          "Colombo",
          "Ceylon",
          "Sri Lanka",
          "1941",
          "Municipal Fire Brigade",
          "fire station",
          "bullock cart",
          "bullocks",
          "oxen",
          "sacred animals",
          "animal-drawn transport",
          "street scene",
          "pedestrians",
          "local people",
          "colonial architecture",
          "brick building",
          "wartime Colombo",
          "Second World War",
          "WWII"
        ],
        "description": "Street scene in Colombo, Ceylon, in 1941, showing a bullock cart loaded with goods passing the Municipal Fire Brigade building. Several pedestrians stand on the pavement outside the brick fire station, providing a glimpse of everyday life in wartime Colombo.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image13.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image13b.JPG",
    {
      "photoId": "P00026",
      "filename": "Image13b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Sacred animals\nColombo, Ceylon 41",
      "reverseText": "Colombo, Ceylon",
      "keywords": [
        "Colombo",
        "Ceylon",
        "Sri Lanka",
        "1941",
        "Municipal Fire Brigade",
        "fire station",
        "bullock cart",
        "bullocks",
        "oxen",
        "sacred animals",
        "animal-drawn transport",
        "street scene",
        "pedestrians",
        "local people",
        "colonial architecture",
        "brick building",
        "wartime Colombo",
        "Second World War",
        "WWII"
      ],
      "description": "Street scene in Colombo, Ceylon, in 1941, showing a bullock cart loaded with goods passing the Municipal Fire Brigade building. Several pedestrians stand on the pavement outside the brick fire station, providing a glimpse of everyday life in wartime Colombo.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image13.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image13.JPG",
      "frontSrc": "photos/Image13.JPG"
    }
  ],
  [
    "photos/Image14.JPG",
    {
      "photoId": "P00027",
      "filename": "Image14.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Scene of Ceylon",
      "reverseText": "A very beautiful park\nringed right round\nwith palms",
      "keywords": [
        "Colombo",
        "Ceylon",
        "Sri Lanka",
        "1941",
        "palm trees",
        "coconut palms",
        "palm-lined road",
        "landscaped grounds",
        "gardens",
        "benches",
        "pedestrians",
        "motor vehicle",
        "temple",
        "temple tower",
        "religious building",
        "tropical landscape",
        "wartime Colombo",
        "WWII"
      ],
      "description": "Broad palm-lined roadway curving around landscaped grounds in Colombo, Ceylon, in 1941. White roadside posts and ornamental benches border the open space, with pedestrians and a motor vehicle visible in the distance. A tall temple-like tower rises above the trees in the background, partially obscured by the palms.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image14b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image14b.JPG",
      "backText": "A very beautiful park\nringed right round\nwith palms",
      "reverseSide": {
        "photoId": "P00028",
        "filename": "Image14b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Colombo, Ceylon",
        "date": "1941",
        "albumComment": "What a place! \nHot as hell!",
        "caption": "Scene of Ceylon",
        "reverseText": "A very beautiful park\nringed right round\nwith palms",
        "keywords": [
          "Colombo",
          "Ceylon",
          "Sri Lanka",
          "1941",
          "palm trees",
          "coconut palms",
          "palm-lined road",
          "landscaped grounds",
          "gardens",
          "benches",
          "pedestrians",
          "motor vehicle",
          "temple",
          "temple tower",
          "religious building",
          "tropical landscape",
          "wartime Colombo",
          "WWII"
        ],
        "description": "Broad palm-lined roadway curving around landscaped grounds in Colombo, Ceylon, in 1941. White roadside posts and ornamental benches border the open space, with pedestrians and a motor vehicle visible in the distance. A tall temple-like tower rises above the trees in the background, partially obscured by the palms.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image14.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image14b.JPG",
    {
      "photoId": "P00028",
      "filename": "Image14b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Colombo, Ceylon",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "Scene of Ceylon",
      "reverseText": "A very beautiful park\nringed right round\nwith palms",
      "keywords": [
        "Colombo",
        "Ceylon",
        "Sri Lanka",
        "1941",
        "palm trees",
        "coconut palms",
        "palm-lined road",
        "landscaped grounds",
        "gardens",
        "benches",
        "pedestrians",
        "motor vehicle",
        "temple",
        "temple tower",
        "religious building",
        "tropical landscape",
        "wartime Colombo",
        "WWII"
      ],
      "description": "Broad palm-lined roadway curving around landscaped grounds in Colombo, Ceylon, in 1941. White roadside posts and ornamental benches border the open space, with pedestrians and a motor vehicle visible in the distance. A tall temple-like tower rises above the trees in the background, partially obscured by the palms.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image14.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image14.JPG",
      "frontSrc": "photos/Image14.JPG"
    }
  ],
  [
    "photos/Image15.JPG",
    {
      "photoId": "P00029",
      "filename": "Image15.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Australia",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "Elevated view across the Swan River towards Fremantle",
        "Western Australia. Buildings of Fremantle can be seen along the opposite bank",
        "with trees and vegetation framing the river in the foreground. The photograph was taken from a high vantage point overlooking the water."
      ],
      "description": "Elevated view across the Swan River towards Fremantle, Western Australia. Buildings of Fremantle can be seen along the opposite bank, with trees and vegetation framing the river in the foreground. The photograph was taken from a high vantage point overlooking the water.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image15b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image15b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00030",
        "filename": "Image15b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Australia",
        "date": "1941",
        "albumComment": "What a place! \nHot as hell!",
        "caption": "",
        "reverseText": "",
        "keywords": [
          "Elevated view across the Swan River towards Fremantle",
          "Western Australia. Buildings of Fremantle can be seen along the opposite bank",
          "with trees and vegetation framing the river in the foreground. The photograph was taken from a high vantage point overlooking the water."
        ],
        "description": "Elevated view across the Swan River towards Fremantle, Western Australia. Buildings of Fremantle can be seen along the opposite bank, with trees and vegetation framing the river in the foreground. The photograph was taken from a high vantage point overlooking the water.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image15.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image15b.JPG",
    {
      "photoId": "P00030",
      "filename": "Image15b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Australia",
      "date": "1941",
      "albumComment": "What a place! \nHot as hell!",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "Elevated view across the Swan River towards Fremantle",
        "Western Australia. Buildings of Fremantle can be seen along the opposite bank",
        "with trees and vegetation framing the river in the foreground. The photograph was taken from a high vantage point overlooking the water."
      ],
      "description": "Elevated view across the Swan River towards Fremantle, Western Australia. Buildings of Fremantle can be seen along the opposite bank, with trees and vegetation framing the river in the foreground. The photograph was taken from a high vantage point overlooking the water.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image15.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image15.JPG",
      "frontSrc": "photos/Image15.JPG"
    }
  ],
  [
    "photos/Image16.JPG",
    {
      "photoId": "P00031",
      "filename": "Image16.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Durban",
      "date": "1941-06-24",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "",
      "reverseText": "Taken 24 June 1941\nAt sunken garden\nDurban\nS. Africa",
      "keywords": [
        "Durban",
        "South Africa",
        "24 June 1941",
        "Sunken Gardens",
        "sailors",
        "naval ratings",
        "naval uniform",
        "Royal New Zealand Navy",
        "RNZN",
        "New Zealand sailors",
        "gardens",
        "formal gardens",
        "flower beds",
        "stone path",
        "shore leave",
        "WWII",
        "Second World War",
        "1941"
      ],
      "description": "Three sailors pose together beside a planted flower bed in Durban’s Sunken Gardens on 24 June 1941. The men are dressed in naval uniforms and caps and are seated on a stone-paved path surrounded by formal garden beds and subtropical vegetation.",
      "people": [
        "Bert France",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [
        "Image16b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image16b.JPG",
      "backText": "Taken 24 June 1941\nAt sunken garden\nDurban\nS. Africa",
      "reverseSide": {
        "photoId": "P00032",
        "filename": "Image16b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Durban",
        "date": "1941-06-24",
        "albumComment": "South Africa\nA swell place\nJune 41",
        "caption": "",
        "reverseText": "Taken 24 June 1941\nAt sunken garden\nDurban\nS. Africa",
        "keywords": [
          "Durban",
          "South Africa",
          "24 June 1941",
          "Sunken Gardens",
          "sailors",
          "naval ratings",
          "naval uniform",
          "Royal New Zealand Navy",
          "RNZN",
          "New Zealand sailors",
          "gardens",
          "formal gardens",
          "flower beds",
          "stone path",
          "shore leave",
          "WWII",
          "Second World War",
          "1941"
        ],
        "description": "Three sailors pose together beside a planted flower bed in Durban’s Sunken Gardens on 24 June 1941. The men are dressed in naval uniforms and caps and are seated on a stone-paved path surrounded by formal garden beds and subtropical vegetation.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image16.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image16b.JPG",
    {
      "photoId": "P00032",
      "filename": "Image16b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Durban",
      "date": "1941-06-24",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "",
      "reverseText": "Taken 24 June 1941\nAt sunken garden\nDurban\nS. Africa",
      "keywords": [
        "Durban",
        "South Africa",
        "24 June 1941",
        "Sunken Gardens",
        "sailors",
        "naval ratings",
        "naval uniform",
        "Royal New Zealand Navy",
        "RNZN",
        "New Zealand sailors",
        "gardens",
        "formal gardens",
        "flower beds",
        "stone path",
        "shore leave",
        "WWII",
        "Second World War",
        "1941"
      ],
      "description": "Three sailors pose together beside a planted flower bed in Durban’s Sunken Gardens on 24 June 1941. The men are dressed in naval uniforms and caps and are seated on a stone-paved path surrounded by formal garden beds and subtropical vegetation.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image16.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image16.JPG",
      "frontSrc": "photos/Image16.JPG"
    }
  ],
  [
    "photos/Image17.JPG",
    {
      "photoId": "P00033",
      "filename": "Image17.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Durban",
      "date": "1941-06-15",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "A great day on the island, in Durban harbour.",
      "reverseText": "Taken Sunday 15th June 1941\nIsland in middle of harbour\nDurban, S Africa",
      "keywords": [
        "Durban",
        "South Africa",
        "Durban Harbour",
        "harbour island",
        "15 June 1941",
        "sailors",
        "New Zealand sailors",
        "naval ratings",
        "naval uniform",
        "women",
        "group portrait",
        "friends",
        "shore leave",
        "recreation",
        "sandy path",
        "trees",
        "wartime Durban",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "Group of seven people photographed on Salisbury Island in Durban Harbour on 15 June 1941. Three women pose with sailors on a sandy track beneath dense vegetation, with one sailor partially obscured in the shadows at the far right. At the time, Salisbury Island was still a largely undeveloped, tree-covered recreation and picnic area within the harbour. The photograph is particularly significant because it captures the island shortly before its landscape was fundamentally altered by wartime naval development, including extensive reclamation and construction of a major naval establishment",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [
        "Image17b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image17b.JPG",
      "backText": "Taken Sunday 15th June 1941\nIsland in middle of harbour\nDurban, S Africa",
      "reverseSide": {
        "photoId": "P00034",
        "filename": "Image17b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Durban",
        "date": "1941-06-15",
        "albumComment": "South Africa\nA swell place\nJune 41",
        "caption": "A great day on the island, in Durban harbour.",
        "reverseText": "Taken Sunday 15th June 1941\nIsland in middle of harbour\nDurban, S Africa",
        "keywords": [
          "Durban",
          "South Africa",
          "Durban Harbour",
          "harbour island",
          "15 June 1941",
          "sailors",
          "New Zealand sailors",
          "naval ratings",
          "naval uniform",
          "women",
          "group portrait",
          "friends",
          "shore leave",
          "recreation",
          "sandy path",
          "trees",
          "wartime Durban",
          "1941",
          "WWII",
          "Second World War"
        ],
        "description": "Group of seven people photographed on Salisbury Island in Durban Harbour on 15 June 1941. Three women pose with sailors on a sandy track beneath dense vegetation, with one sailor partially obscured in the shadows at the far right. At the time, Salisbury Island was still a largely undeveloped, tree-covered recreation and picnic area within the harbour. The photograph is particularly significant because it captures the island shortly before its landscape was fundamentally altered by wartime naval development, including extensive reclamation and construction of a major naval establishment",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image17.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image17b.JPG",
    {
      "photoId": "P00034",
      "filename": "Image17b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Durban",
      "date": "1941-06-15",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "A great day on the island, in Durban harbour.",
      "reverseText": "Taken Sunday 15th June 1941\nIsland in middle of harbour\nDurban, S Africa",
      "keywords": [
        "Durban",
        "South Africa",
        "Durban Harbour",
        "harbour island",
        "15 June 1941",
        "sailors",
        "New Zealand sailors",
        "naval ratings",
        "naval uniform",
        "women",
        "group portrait",
        "friends",
        "shore leave",
        "recreation",
        "sandy path",
        "trees",
        "wartime Durban",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "Group of seven people photographed on Salisbury Island in Durban Harbour on 15 June 1941. Three women pose with sailors on a sandy track beneath dense vegetation, with one sailor partially obscured in the shadows at the far right. At the time, Salisbury Island was still a largely undeveloped, tree-covered recreation and picnic area within the harbour. The photograph is particularly significant because it captures the island shortly before its landscape was fundamentally altered by wartime naval development, including extensive reclamation and construction of a major naval establishment",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image17.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image17.JPG",
      "frontSrc": "photos/Image17.JPG"
    }
  ],
  [
    "photos/Image18.JPG",
    {
      "photoId": "P00035",
      "filename": "Image18.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Durban",
      "date": "1941-06-27",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "Durban College\nFootball team",
      "reverseText": "Taken 27th June 1941\nOpposing football team\nMarist high school, No1\nDurban",
      "keywords": [
        "Durban",
        "South Africa",
        "27 June 1941",
        "Marist High School",
        "football",
        "soccer",
        "football team",
        "team portrait",
        "New Zealand naval team",
        "New Zealand sailors",
        "wartime sport",
        "WWII",
        "1941"
      ],
      "description": "The opposing football team photographed at Marist High School No. 1 in Durban on 27 June 1941. Thirteen players pose before a wartime match against the visiting New Zealand naval team. The team is wearing distinctive horizontally banded jerseys; contemporary records identify the Marist Brothers’ sporting colours as navy blue and gold/yellow, making it likely that the dark jerseys were navy with a broad gold/yellow band across the chest. The photograph therefore preserves not only the team but probably the appearance of Marist’s pre-war sporting colours.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image18b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image18b.JPG",
      "backText": "Taken 27th June 1941\nOpposing football team\nMarist high school, No1\nDurban",
      "reverseSide": {
        "photoId": "P00036",
        "filename": "Image18b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Durban",
        "date": "1941-06-27",
        "albumComment": "South Africa\nA swell place\nJune 41",
        "caption": "Durban College\nFootball team",
        "reverseText": "Taken 27th June 1941\nOpposing football team\nMarist high school, No1\nDurban",
        "keywords": [
          "Durban",
          "South Africa",
          "27 June 1941",
          "Marist High School",
          "football",
          "soccer",
          "football team",
          "team portrait",
          "New Zealand naval team",
          "New Zealand sailors",
          "wartime sport",
          "WWII",
          "1941"
        ],
        "description": "The opposing football team photographed at Marist High School No. 1 in Durban on 27 June 1941. Thirteen players pose before a wartime match against the visiting New Zealand naval team. The team is wearing distinctive horizontally banded jerseys; contemporary records identify the Marist Brothers’ sporting colours as navy blue and gold/yellow, making it likely that the dark jerseys were navy with a broad gold/yellow band across the chest. The photograph therefore preserves not only the team but probably the appearance of Marist’s pre-war sporting colours.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image18.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image18b.JPG",
    {
      "photoId": "P00036",
      "filename": "Image18b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Durban",
      "date": "1941-06-27",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "Durban College\nFootball team",
      "reverseText": "Taken 27th June 1941\nOpposing football team\nMarist high school, No1\nDurban",
      "keywords": [
        "Durban",
        "South Africa",
        "27 June 1941",
        "Marist High School",
        "football",
        "soccer",
        "football team",
        "team portrait",
        "New Zealand naval team",
        "New Zealand sailors",
        "wartime sport",
        "WWII",
        "1941"
      ],
      "description": "The opposing football team photographed at Marist High School No. 1 in Durban on 27 June 1941. Thirteen players pose before a wartime match against the visiting New Zealand naval team. The team is wearing distinctive horizontally banded jerseys; contemporary records identify the Marist Brothers’ sporting colours as navy blue and gold/yellow, making it likely that the dark jerseys were navy with a broad gold/yellow band across the chest. The photograph therefore preserves not only the team but probably the appearance of Marist’s pre-war sporting colours.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image18.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image18.JPG",
      "frontSrc": "photos/Image18.JPG"
    }
  ],
  [
    "photos/Image19.JPG",
    {
      "photoId": "P00037",
      "filename": "Image19.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Durban",
      "date": "1941-06-21",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "NZ Naval team\nat Durban",
      "reverseText": "Taken 27th June 1941. \nN.Z. draft football team\nat Durban\nLost 14-0",
      "keywords": [
        "Durban",
        "South Africa",
        "27 June 1941",
        "New Zealand Draft",
        "New Zealand football team",
        "Marist High School",
        "football",
        "soccer",
        "sailors",
        "New Zealand servicemen",
        "naval football",
        "team photograph",
        "sports match",
        "14–0",
        "shore leave",
        "wartime sport",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "The New Zealand Draft football team photographed with their opponents and officials in Durban on 27 June 1941. The handwritten caption records that the New Zealand team lost 14–0. The photograph was taken on the same day as the team portrait at Marist High School No. 1, and appears to record the players together after the match. The result gives an unusually specific record of organised sport played by New Zealand servicemen during their wartime journey overseas.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image19b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image19b.JPG",
      "backText": "Taken 27th June 1941. \nN.Z. draft football team\nat Durban\nLost 14-0",
      "reverseSide": {
        "photoId": "P00038",
        "filename": "Image19b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "Durban",
        "date": "1941-06-21",
        "albumComment": "South Africa\nA swell place\nJune 41",
        "caption": "NZ Naval team\nat Durban",
        "reverseText": "Taken 27th June 1941. \nN.Z. draft football team\nat Durban\nLost 14-0",
        "keywords": [
          "Durban",
          "South Africa",
          "27 June 1941",
          "New Zealand Draft",
          "New Zealand football team",
          "Marist High School",
          "football",
          "soccer",
          "sailors",
          "New Zealand servicemen",
          "naval football",
          "team photograph",
          "sports match",
          "14–0",
          "shore leave",
          "wartime sport",
          "1941",
          "WWII",
          "Second World War"
        ],
        "description": "The New Zealand Draft football team photographed with their opponents and officials in Durban on 27 June 1941. The handwritten caption records that the New Zealand team lost 14–0. The photograph was taken on the same day as the team portrait at Marist High School No. 1, and appears to record the players together after the match. The result gives an unusually specific record of organised sport played by New Zealand servicemen during their wartime journey overseas.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image19.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image19b.JPG",
    {
      "photoId": "P00038",
      "filename": "Image19b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Durban",
      "date": "1941-06-21",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "NZ Naval team\nat Durban",
      "reverseText": "Taken 27th June 1941. \nN.Z. draft football team\nat Durban\nLost 14-0",
      "keywords": [
        "Durban",
        "South Africa",
        "27 June 1941",
        "New Zealand Draft",
        "New Zealand football team",
        "Marist High School",
        "football",
        "soccer",
        "sailors",
        "New Zealand servicemen",
        "naval football",
        "team photograph",
        "sports match",
        "14–0",
        "shore leave",
        "wartime sport",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "The New Zealand Draft football team photographed with their opponents and officials in Durban on 27 June 1941. The handwritten caption records that the New Zealand team lost 14–0. The photograph was taken on the same day as the team portrait at Marist High School No. 1, and appears to record the players together after the match. The result gives an unusually specific record of organised sport played by New Zealand servicemen during their wartime journey overseas.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image19.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image19.JPG",
      "frontSrc": "photos/Image19.JPG"
    }
  ],
  [
    "photos/Image20.JPG",
    {
      "photoId": "P00039",
      "filename": "Image20.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Durban",
      "date": "1941-06-27",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "German and Italian\nprisoners, Durban",
      "reverseText": "Taken 27th June 1941\nAt Durban\nGerman Prisoners\ncoming aboard.",
      "keywords": [
        "Durban",
        "South Africa",
        "27 June 1941",
        "German prisoners",
        "Italian prisoners",
        "German POWs",
        "Italian POWs",
        "Axis prisoners",
        "prisoners of war",
        "POW",
        "North African Campaign",
        "East African Campaign",
        "military prisoners",
        "troop transport",
        "Durban harbour",
        "wartime Durban",
        "WWII",
        "Second World War",
        "1941"
      ],
      "description": "German and Italian prisoners of war photographed at Durban on 27 June 1941, apparently preparing to come aboard a ship. The prisoners are gathered on the dock under military supervision, some wearing tropical-style helmets. Durban was a major Allied port and wartime transport hub, and large numbers of Axis prisoners captured in the North and East African campaigns were transported by sea to camps in South Africa and elsewhere. The photograph provides a personal record of that much larger wartime movement of German and Italian POWs.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image20b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image20b.JPG",
      "backText": "Taken 27th June 1941\nAt Durban\nGerman Prisoners\ncoming aboard.",
      "reverseSide": {
        "photoId": "P00040",
        "filename": "Image20b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Durban",
        "date": "1941-06-27",
        "albumComment": "South Africa\nA swell place\nJune 41",
        "caption": "German and Italian\nprisoners, Durban",
        "reverseText": "Taken 27th June 1941\nAt Durban\nGerman Prisoners\ncoming aboard.",
        "keywords": [
          "Durban",
          "South Africa",
          "27 June 1941",
          "German prisoners",
          "Italian prisoners",
          "German POWs",
          "Italian POWs",
          "Axis prisoners",
          "prisoners of war",
          "POW",
          "North African Campaign",
          "East African Campaign",
          "military prisoners",
          "troop transport",
          "Durban harbour",
          "wartime Durban",
          "WWII",
          "Second World War",
          "1941"
        ],
        "description": "German and Italian prisoners of war photographed at Durban on 27 June 1941, apparently preparing to come aboard a ship. The prisoners are gathered on the dock under military supervision, some wearing tropical-style helmets. Durban was a major Allied port and wartime transport hub, and large numbers of Axis prisoners captured in the North and East African campaigns were transported by sea to camps in South Africa and elsewhere. The photograph provides a personal record of that much larger wartime movement of German and Italian POWs.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image20.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image20b.JPG",
    {
      "photoId": "P00040",
      "filename": "Image20b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Durban",
      "date": "1941-06-27",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "German and Italian\nprisoners, Durban",
      "reverseText": "Taken 27th June 1941\nAt Durban\nGerman Prisoners\ncoming aboard.",
      "keywords": [
        "Durban",
        "South Africa",
        "27 June 1941",
        "German prisoners",
        "Italian prisoners",
        "German POWs",
        "Italian POWs",
        "Axis prisoners",
        "prisoners of war",
        "POW",
        "North African Campaign",
        "East African Campaign",
        "military prisoners",
        "troop transport",
        "Durban harbour",
        "wartime Durban",
        "WWII",
        "Second World War",
        "1941"
      ],
      "description": "German and Italian prisoners of war photographed at Durban on 27 June 1941, apparently preparing to come aboard a ship. The prisoners are gathered on the dock under military supervision, some wearing tropical-style helmets. Durban was a major Allied port and wartime transport hub, and large numbers of Axis prisoners captured in the North and East African campaigns were transported by sea to camps in South Africa and elsewhere. The photograph provides a personal record of that much larger wartime movement of German and Italian POWs.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image20.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image20.JPG",
      "frontSrc": "photos/Image20.JPG"
    }
  ],
  [
    "photos/Image21.JPG",
    {
      "photoId": "P00041",
      "filename": "Image21.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Durban",
      "date": "1941-06",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "Three cronies, at Durban",
      "reverseText": "",
      "keywords": [],
      "description": "Three New Zealand sailors pose on a beach during shore leave, probably on Salisbury Island in Durban Harbour in June 1941. Their sleeve badges provide an interesting record of specialist naval qualifications. The middle sailor appears to wear a 3rd Class gunnery badge — a single horizontal gun with a star above, part of the gunnery system introduced immediately before the Second World War. The sailor on the right appears to wear the crossed Indian clubs associated with naval Physical Training Instructors, although the photograph is not sufficiently sharp to confirm the complete badge. These small uniform details record the specialised roles held by individual New Zealand sailors at the time",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image22.JPG",
    {
      "photoId": "P00042",
      "filename": "Image22.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Capetown",
      "date": "1941-06-01",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "Signal Hill\nCapetown",
      "reverseText": "Taken 1st July 1941\nTable Mountain and\nharbour",
      "keywords": [
        "Cape Town; South Africa; Table Mountain; Lion’s Head; Cape Town Harbour; harbour; coastline; mountains; shipboard view; lifebuoy; haze; 1 July 1941; WWII"
      ],
      "description": "View across Cape Town harbour towards Table Mountain, photographed from aboard ship on 1 July 1941. The mountain is partly obscured by haze or low cloud, with the distinctive peak of Lion’s Head visible to the right. Part of the ship’s structure and a lifebuoy can be seen at the left edge of the photograph.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image22b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image22b.JPG",
      "backText": "Taken 1st July 1941\nTable Mountain and\nharbour",
      "reverseSide": {
        "photoId": "P00043",
        "filename": "Image22b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Capetown",
        "date": "1941-06-01",
        "albumComment": "South Africa\nA swell place\nJune 41",
        "caption": "Signal Hill\nCapetown",
        "reverseText": "Taken 1st July 1941\nTable Mountain and\nharbour",
        "keywords": [
          "Cape Town; South Africa; Table Mountain; Lion’s Head; Cape Town Harbour; harbour; coastline; mountains; shipboard view; lifebuoy; haze; 1 July 1941; WWII"
        ],
        "description": "View across Cape Town harbour towards Table Mountain, photographed from aboard ship on 1 July 1941. The mountain is partly obscured by haze or low cloud, with the distinctive peak of Lion’s Head visible to the right. Part of the ship’s structure and a lifebuoy can be seen at the left edge of the photograph.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image22.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image22b.JPG",
    {
      "photoId": "P00043",
      "filename": "Image22b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Capetown",
      "date": "1941-06-01",
      "albumComment": "South Africa\nA swell place\nJune 41",
      "caption": "Signal Hill\nCapetown",
      "reverseText": "Taken 1st July 1941\nTable Mountain and\nharbour",
      "keywords": [
        "Cape Town; South Africa; Table Mountain; Lion’s Head; Cape Town Harbour; harbour; coastline; mountains; shipboard view; lifebuoy; haze; 1 July 1941; WWII"
      ],
      "description": "View across Cape Town harbour towards Table Mountain, photographed from aboard ship on 1 July 1941. The mountain is partly obscured by haze or low cloud, with the distinctive peak of Lion’s Head visible to the right. Part of the ship’s structure and a lifebuoy can be seen at the left edge of the photograph.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image22.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image22.JPG",
      "frontSrc": "photos/Image22.JPG"
    }
  ],
  [
    "photos/Image23.JPG",
    {
      "photoId": "P00044",
      "filename": "Image23.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "Ben, one of the best",
      "reverseText": "",
      "keywords": [
        "New Zealand sailor",
        "naval rating",
        "Royal New Zealand Navy",
        "RNZN",
        "naval uniform",
        "square rig",
        "dark naval cap",
        "navy blue cap",
        "sailor portrait",
        "naval barracks",
        "shore establishment",
        "wartime accommodation",
        "1940s",
        "WWII",
        "Second World War"
      ],
      "description": "Portrait of a New Zealand sailor in dark naval square-rig uniform, photographed outside a timber building during the Second World War. He is wearing the dark navy-blue version of the naval rating’s cap, which appears almost black in the photograph. Dark caps were associated with standard temperate naval dress, in contrast to the conspicuous white-topped caps seen in his photographs from warmer climates such as Durban.",
      "people": [
        "Ben"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 15 October 1941",
          "caption": "Ben, one of the best"
        }
      ]
    }
  ],
  [
    "photos/Image24.JPG",
    {
      "photoId": "P00045",
      "filename": "Image24.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "Ben, one of the best",
      "reverseText": "Taken 22nd August 1941 \nwhile on patrol. \nBert & myself.",
      "keywords": [
        "William France",
        "Bert France",
        "brothers",
        "New Zealand sailors",
        "naval ratings",
        "Royal New Zealand Navy",
        "RNZN",
        "22 August 1941",
        "patrol",
        "naval uniform",
        "square rig",
        "dark naval caps",
        "navy blue caps",
        "sailor brothers",
        "wartime portrait",
        "Britain",
        "1941",
        "WWII",
        "Second World War",
        "Trevol"
      ],
      "description": "Brothers William and Bert France photographed together while on patrol on 22 August 1941. Both are wearing dark naval square-rig uniforms with dark navy-blue caps, appropriate to temperate service and contrasting with the white-topped caps worn earlier in warmer climates such as Durban. Their trousers are noticeably rolled or turned up above their naval boots, suggesting practical working or patrol dress rather than a formal portrait. The photograph is particularly significant as a wartime portrait of the two brothers serving together overseas.",
      "people": [
        "Bert France",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [
        "Image24b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 15 October 1941",
          "caption": "Ben, one of the best"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image24b.JPG",
      "backText": "Taken 22nd August 1941 \nwhile on patrol. \nBert & myself.",
      "reverseSide": {
        "photoId": "P00046",
        "filename": "Image24b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Cornwall",
        "date": "1941",
        "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
        "caption": "Ben, one of the best",
        "reverseText": "Taken 22nd August 1941 \nwhile on patrol. \nBert & myself.",
        "keywords": [
          "William France",
          "Bert France",
          "brothers",
          "New Zealand sailors",
          "naval ratings",
          "Royal New Zealand Navy",
          "RNZN",
          "22 August 1941",
          "patrol",
          "naval uniform",
          "square rig",
          "dark naval caps",
          "navy blue caps",
          "sailor brothers",
          "wartime portrait",
          "Britain",
          "1941",
          "WWII",
          "Second World War",
          "Trevol"
        ],
        "description": "Brothers William and Bert France photographed together while on patrol on 22 August 1941. Both are wearing dark naval square-rig uniforms with dark navy-blue caps, appropriate to temperate service and contrasting with the white-topped caps worn earlier in warmer climates such as Durban. Their trousers are noticeably rolled or turned up above their naval boots, suggesting practical working or patrol dress rather than a formal portrait. The photograph is particularly significant as a wartime portrait of the two brothers serving together overseas.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image24.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image24b.JPG",
    {
      "photoId": "P00046",
      "filename": "Image24b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "Ben, one of the best",
      "reverseText": "Taken 22nd August 1941 \nwhile on patrol. \nBert & myself.",
      "keywords": [
        "William France",
        "Bert France",
        "brothers",
        "New Zealand sailors",
        "naval ratings",
        "Royal New Zealand Navy",
        "RNZN",
        "22 August 1941",
        "patrol",
        "naval uniform",
        "square rig",
        "dark naval caps",
        "navy blue caps",
        "sailor brothers",
        "wartime portrait",
        "Britain",
        "1941",
        "WWII",
        "Second World War",
        "Trevol"
      ],
      "description": "Brothers William and Bert France photographed together while on patrol on 22 August 1941. Both are wearing dark naval square-rig uniforms with dark navy-blue caps, appropriate to temperate service and contrasting with the white-topped caps worn earlier in warmer climates such as Durban. Their trousers are noticeably rolled or turned up above their naval boots, suggesting practical working or patrol dress rather than a formal portrait. The photograph is particularly significant as a wartime portrait of the two brothers serving together overseas.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image24.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image24.JPG",
      "frontSrc": "photos/Image24.JPG"
    }
  ],
  [
    "photos/Image25.JPG",
    {
      "photoId": "P00047",
      "filename": "Image25.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "Trevol",
        "naval cooks",
        "catering staff",
        "naval personnel",
        "Royal Navy",
        "Petty Officer",
        "Chief Petty Officer",
        "senior rating",
        "naval cook uniform",
        "cooks whites",
        "naval tunic",
        "peaked cap",
        "dog",
        "group portrait",
        "naval establishment",
        "WWII",
        "Second World War",
        "1940s"
      ],
      "description": "Five members of the naval catering staff at Trevol pose with a dog during the Second World War. Four wear white cooks’ working dress, while the man in the centre wears a dark buttoned naval tunic with shirt, tie and peaked cap, indicating that he was probably a senior rating such as a Petty Officer or Chief Petty Officer. He may therefore have been the senior member of the catering staff pictured. The photograph gives an informal glimpse of the men responsible for feeding personnel at the establishment, complete with their dog.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image25b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 15 October 1941",
          "caption": "Photograph"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image25b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00048",
        "filename": "Image25b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "Cornwall",
        "date": "1941",
        "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
        "caption": "",
        "reverseText": "",
        "keywords": [
          "Trevol",
          "naval cooks",
          "catering staff",
          "naval personnel",
          "Royal Navy",
          "Petty Officer",
          "Chief Petty Officer",
          "senior rating",
          "naval cook uniform",
          "cooks whites",
          "naval tunic",
          "peaked cap",
          "dog",
          "group portrait",
          "naval establishment",
          "WWII",
          "Second World War",
          "1940s"
        ],
        "description": "Five members of the naval catering staff at Trevol pose with a dog during the Second World War. Four wear white cooks’ working dress, while the man in the centre wears a dark buttoned naval tunic with shirt, tie and peaked cap, indicating that he was probably a senior rating such as a Petty Officer or Chief Petty Officer. He may therefore have been the senior member of the catering staff pictured. The photograph gives an informal glimpse of the men responsible for feeding personnel at the establishment, complete with their dog.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image25.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image25b.JPG",
    {
      "photoId": "P00048",
      "filename": "Image25b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "Trevol",
        "naval cooks",
        "catering staff",
        "naval personnel",
        "Royal Navy",
        "Petty Officer",
        "Chief Petty Officer",
        "senior rating",
        "naval cook uniform",
        "cooks whites",
        "naval tunic",
        "peaked cap",
        "dog",
        "group portrait",
        "naval establishment",
        "WWII",
        "Second World War",
        "1940s"
      ],
      "description": "Five members of the naval catering staff at Trevol pose with a dog during the Second World War. Four wear white cooks’ working dress, while the man in the centre wears a dark buttoned naval tunic with shirt, tie and peaked cap, indicating that he was probably a senior rating such as a Petty Officer or Chief Petty Officer. He may therefore have been the senior member of the catering staff pictured. The photograph gives an informal glimpse of the men responsible for feeding personnel at the establishment, complete with their dog.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image25.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image25.JPG",
      "frontSrc": "photos/Image25.JPG"
    }
  ],
  [
    "photos/Image26.JPG",
    {
      "photoId": "P00049",
      "filename": "Image26.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "The only N.Z.’s",
      "reverseText": "",
      "keywords": [
        "Trevol",
        "Cornwall",
        "England",
        "1941",
        "New Zealand sailors",
        "New Zealanders",
        "NZ sailors",
        "naval ratings",
        "Royal New Zealand Navy",
        "RNZN",
        "Royal Navy",
        "naval establishment",
        "naval uniform",
        "square rig",
        "New Zealand contingent",
        "overseas service",
        "Britain",
        "WWII",
        "Second World War"
      ],
      "description": "The five New Zealand sailors at Trevol in 1941, photographed together during their service in Britain. Three wear standard dark naval square-rig, while two are in lighter working or physical-training dress. The original caption, “The only N.Z.’s,” indicates that these five men were the only New Zealanders serving at Trevol at the time, making the photograph a particularly useful record of the small New Zealand contingent within the much larger British naval establishment.",
      "people": [
        "Bert France",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 15 October 1941",
          "caption": "The only N.Z.’s"
        }
      ]
    }
  ],
  [
    "photos/Image27.JPG",
    {
      "photoId": "P00050",
      "filename": "Image27.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "The padre and I",
      "reverseText": "",
      "keywords": [
        "William France",
        "padre",
        "naval chaplain",
        "Trevol",
        "Cornwall",
        "England",
        "22 August 1941",
        "Trevol training camp",
        "naval training",
        "New Zealand sailor",
        "RNZN",
        "Royal Navy",
        "chaplain",
        "naval uniform",
        "WWII",
        "Second World War",
        "1941"
      ],
      "description": "William France with the naval padre at Trevol training camp, Cornwall, on 22 August 1941. The padre wears the dark double-breasted uniform and peaked cap of a naval officer, while William is in naval square rig. Naval chaplains were commonly known simply as “the padre” and played an important pastoral and welfare role for servicemen, extending well beyond conducting religious services. Their relaxed pose together suggests William knew him personally during his time at Trevol.",
      "people": [
        "Person 004",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [
        "Image27b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 15 October 1941",
          "caption": "The padre and I"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image27b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00051",
        "filename": "Image27b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Cornwall",
        "date": "1941",
        "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
        "caption": "The padre and I",
        "reverseText": "",
        "keywords": [
          "William France",
          "padre",
          "naval chaplain",
          "Trevol",
          "Cornwall",
          "England",
          "22 August 1941",
          "Trevol training camp",
          "naval training",
          "New Zealand sailor",
          "RNZN",
          "Royal Navy",
          "chaplain",
          "naval uniform",
          "WWII",
          "Second World War",
          "1941"
        ],
        "description": "William France with the naval padre at Trevol training camp, Cornwall, on 22 August 1941. The padre wears the dark double-breasted uniform and peaked cap of a naval officer, while William is in naval square rig. Naval chaplains were commonly known simply as “the padre” and played an important pastoral and welfare role for servicemen, extending well beyond conducting religious services. Their relaxed pose together suggests William knew him personally during his time at Trevol.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image27.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image27b.JPG",
    {
      "photoId": "P00051",
      "filename": "Image27b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941",
      "albumComment": "Trevol training camp\nScene of many\na good time\n1941",
      "caption": "The padre and I",
      "reverseText": "",
      "keywords": [
        "William France",
        "padre",
        "naval chaplain",
        "Trevol",
        "Cornwall",
        "England",
        "22 August 1941",
        "Trevol training camp",
        "naval training",
        "New Zealand sailor",
        "RNZN",
        "Royal Navy",
        "chaplain",
        "naval uniform",
        "WWII",
        "Second World War",
        "1941"
      ],
      "description": "William France with the naval padre at Trevol training camp, Cornwall, on 22 August 1941. The padre wears the dark double-breasted uniform and peaked cap of a naval officer, while William is in naval square rig. Naval chaplains were commonly known simply as “the padre” and played an important pastoral and welfare role for servicemen, extending well beyond conducting religious services. Their relaxed pose together suggests William knew him personally during his time at Trevol.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image27.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image27.JPG",
      "frontSrc": "photos/Image27.JPG"
    }
  ],
  [
    "photos/Image28.JPG",
    {
      "photoId": "P00052",
      "filename": "Image28.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 028",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image29.JPG",
    {
      "photoId": "P00053",
      "filename": "Image29.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 027",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image30.JPG",
    {
      "photoId": "P00054",
      "filename": "Image30.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Leon France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Friday, 31 October 1941",
          "caption": "Leon"
        }
      ]
    }
  ],
  [
    "photos/Image31.JPG",
    {
      "photoId": "P00055",
      "filename": "Image31.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 027",
        "Person 028",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image32.JPG",
    {
      "photoId": "P00056",
      "filename": "Image32.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Trinidad",
      "date": "1941-07-19",
      "albumComment": "",
      "caption": "Trinidad - July 41",
      "reverseText": "Taken 19th July 1941\nAt Trinidad",
      "keywords": [
        "Trinidad",
        "19 June 1941",
        "Trinidad harbour",
        "harbour launch",
        "naval launch",
        "tender",
        "British ensign",
        "Royal Navy",
        "harbour transport",
        "naval transport",
        "Caribbean",
        "wartime shipping",
        "WWII",
        "Second World War",
        "William France",
        "1941"
      ],
      "description": "A small harbour launch or tender flying the British ensign crosses the water off Trinidad, with the mountainous coastline visible beyond. Such craft were used extensively to carry naval personnel, stores and messages between ships, shore establishments and anchorages. The photograph was taken during William France’s wartime voyage through Trinidad in June 1941 and gives a useful view of the harbour traffic supporting British naval operations there.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image32b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image32b.JPG",
      "backText": "Taken 19th July 1941\nAt Trinidad",
      "reverseSide": {
        "photoId": "P00057",
        "filename": "Image32b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Trinidad",
        "date": "1941-07-19",
        "albumComment": "",
        "caption": "Trinidad - July 41",
        "reverseText": "Taken 19th July 1941\nAt Trinidad",
        "keywords": [
          "Trinidad",
          "19 June 1941",
          "Trinidad harbour",
          "harbour launch",
          "naval launch",
          "tender",
          "British ensign",
          "Royal Navy",
          "harbour transport",
          "naval transport",
          "Caribbean",
          "wartime shipping",
          "WWII",
          "Second World War",
          "William France",
          "1941"
        ],
        "description": "A small harbour launch or tender flying the British ensign crosses the water off Trinidad, with the mountainous coastline visible beyond. Such craft were used extensively to carry naval personnel, stores and messages between ships, shore establishments and anchorages. The photograph was taken during William France’s wartime voyage through Trinidad in June 1941 and gives a useful view of the harbour traffic supporting British naval operations there.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image32.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image32b.JPG",
    {
      "photoId": "P00057",
      "filename": "Image32b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Trinidad",
      "date": "1941-07-19",
      "albumComment": "",
      "caption": "Trinidad - July 41",
      "reverseText": "Taken 19th July 1941\nAt Trinidad",
      "keywords": [
        "Trinidad",
        "19 June 1941",
        "Trinidad harbour",
        "harbour launch",
        "naval launch",
        "tender",
        "British ensign",
        "Royal Navy",
        "harbour transport",
        "naval transport",
        "Caribbean",
        "wartime shipping",
        "WWII",
        "Second World War",
        "William France",
        "1941"
      ],
      "description": "A small harbour launch or tender flying the British ensign crosses the water off Trinidad, with the mountainous coastline visible beyond. Such craft were used extensively to carry naval personnel, stores and messages between ships, shore establishments and anchorages. The photograph was taken during William France’s wartime voyage through Trinidad in June 1941 and gives a useful view of the harbour traffic supporting British naval operations there.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image32.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image32.JPG",
      "frontSrc": "photos/Image32.JPG"
    }
  ],
  [
    "photos/Image33.jpg",
    {
      "photoId": "P00058",
      "filename": "Image33.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Jamaica",
      "date": "1942",
      "albumComment": "",
      "caption": "Jamaica 42",
      "reverseText": "",
      "keywords": [
        "Jamaica",
        "1942",
        "Jamaican people",
        "local life",
        "street scene",
        "everyday life",
        "Caribbean",
        "wartime Jamaica",
        "WWII",
        "Second World War",
        "civilians",
        "William France",
        "naval voyage"
      ],
      "description": "A candid street or doorway scene in Jamaica showing several local people, including a woman carrying a large patterned bundle or basket. The photograph is particularly interesting as an informal glimpse of everyday Jamaican life during the Second World War, rather than the naval and tourist subjects that dominate many servicemen’s photographs from overseas ports.",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Tuesday, 28 April 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image34.JPG",
    {
      "photoId": "P00059",
      "filename": "Image34.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Jamaica",
      "date": "1942-05-03",
      "albumComment": "",
      "caption": "Yes we have no bananas...\nJamaica 42",
      "reverseText": "",
      "keywords": [
        "Jamaica",
        "1942",
        "HMNZS Inchkeith",
        "T155",
        "Isles-class trawler",
        "Royal New Zealand Navy",
        "RNZN",
        "bananas",
        "naval supply",
        "provisions",
        "sailor",
        "deck",
        "minesweeper",
        "HMNZS Tui",
        "Caribbean",
        "Second World War",
        "WWII"
      ],
      "description": "Large bunches of bananas are stored along the deck of a New Zealand naval vessel in Jamaica in 1942, with a sailor seated beside them. In the background is HMNZS Inchkeith (T155), one of the Isles-class minesweeping trawlers travelling with HMNZS Tui.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 29 April 1942",
          "caption": "Photograph"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image34b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00060",
        "filename": "Image34b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Trinidad",
        "date": "1941-07-19",
        "albumComment": "Trinidad 1941",
        "caption": "Leisure onboard\nOrontes - Trinidad",
        "reverseText": "",
        "keywords": [
          "**Keywords:**\nOrontes",
          "SS Orontes",
          "HMT Orontes",
          "Trinidad",
          "19 July 1941",
          "Jock",
          "Bert France",
          "William France",
          "Bill France",
          "Sue",
          "New Zealand sailors",
          "New Zealand naval ratings",
          "troopship",
          "troop transport",
          "Orient Line",
          "Caribbean",
          "South African route",
          "Indian Ocean route",
          "voyage to Britain",
          "Clyde",
          "Convoy WS.11",
          "wartime voyage",
          "shipboard life",
          "Royal New Zealand Navy",
          "RNZN",
          "1941",
          "WWII",
          "Second World War"
        ],
        "description": "**Description:**\nFour New Zealand sailors — Jock, Bert, Sue and Bill — aboard the troopship **Orontes** at **Trinidad on 19 July 1941**. At this time, *Orontes* was making her way back towards Britain after operating on the South African and Indian Ocean troopship routes. Within about six weeks she was back in the Clyde, Scotland, where she subsequently sailed on 31 August 1941 with **Convoy WS.11**. The photograph records part of William and Bert's wartime journey to Britain aboard the requisitioned Orient Line passenger liner.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image35.jpg"
        ]
      }
    }
  ],
  [
    "photos/Image34b.JPG",
    {
      "photoId": "P00060",
      "filename": "Image34b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Trinidad",
      "date": "1941-07-19",
      "albumComment": "Trinidad 1941",
      "caption": "Leisure onboard\nOrontes - Trinidad",
      "reverseText": "",
      "keywords": [
        "**Keywords:**\nOrontes",
        "SS Orontes",
        "HMT Orontes",
        "Trinidad",
        "19 July 1941",
        "Jock",
        "Bert France",
        "William France",
        "Bill France",
        "Sue",
        "New Zealand sailors",
        "New Zealand naval ratings",
        "troopship",
        "troop transport",
        "Orient Line",
        "Caribbean",
        "South African route",
        "Indian Ocean route",
        "voyage to Britain",
        "Clyde",
        "Convoy WS.11",
        "wartime voyage",
        "shipboard life",
        "Royal New Zealand Navy",
        "RNZN",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "**Description:**\nFour New Zealand sailors — Jock, Bert, Sue and Bill — aboard the troopship **Orontes** at **Trinidad on 19 July 1941**. At this time, *Orontes* was making her way back towards Britain after operating on the South African and Indian Ocean troopship routes. Within about six weeks she was back in the Clyde, Scotland, where she subsequently sailed on 31 August 1941 with **Convoy WS.11**. The photograph records part of William and Bert's wartime journey to Britain aboard the requisitioned Orient Line passenger liner.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image35.jpg"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image34.JPG",
      "frontSrc": "photos/Image34.JPG"
    }
  ],
  [
    "photos/Image35.jpg",
    {
      "photoId": "P00061",
      "filename": "Image35.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Trinidad",
      "date": "1941-07-19",
      "albumComment": "Trinidad 1941",
      "caption": "Leisure onboard\nOrontes - Trinidad",
      "reverseText": "",
      "keywords": [
        "**Keywords:**\nOrontes",
        "SS Orontes",
        "HMT Orontes",
        "Trinidad",
        "19 July 1941",
        "Jock",
        "Bert France",
        "William France",
        "Bill France",
        "Sue",
        "New Zealand sailors",
        "New Zealand naval ratings",
        "troopship",
        "troop transport",
        "Orient Line",
        "Caribbean",
        "South African route",
        "Indian Ocean route",
        "voyage to Britain",
        "Clyde",
        "Convoy WS.11",
        "wartime voyage",
        "shipboard life",
        "Royal New Zealand Navy",
        "RNZN",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "**Description:**\nFour New Zealand sailors — Jock, Bert, Sue and Bill — aboard the troopship **Orontes** at **Trinidad on 19 July 1941**. At this time, *Orontes* was making her way back towards Britain after operating on the South African and Indian Ocean troopship routes. Within about six weeks she was back in the Clyde, Scotland, where she subsequently sailed on 31 August 1941 with **Convoy WS.11**. The photograph records part of William and Bert's wartime journey to Britain aboard the requisitioned Orient Line passenger liner.",
      "people": [
        "Bert France",
        "Jock",
        "Sue",
        "William France"
      ],
      "faceCount": 4,
      "companionPhotos": [
        "Image34b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 1 October 1941",
          "caption": "Sue"
        }
      ]
    }
  ],
  [
    "photos/Image36.JPG",
    {
      "photoId": "P00062",
      "filename": "Image36.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Scotland",
      "date": "1941",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Ruby, Edingburgh",
      "reverseText": "From Margaret to Ruby\nFrom Ruby",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image36b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image36b.JPG",
      "backText": "From Margaret to Ruby\nFrom Ruby",
      "reverseSide": {
        "photoId": "P00063",
        "filename": "Image36b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "Scotland",
        "date": "1941",
        "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
        "caption": "Ruby, Edingburgh",
        "reverseText": "From Margaret to Ruby\nFrom Ruby",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image36.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image36b.JPG",
    {
      "photoId": "P00063",
      "filename": "Image36b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Scotland",
      "date": "1941",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Ruby, Edingburgh",
      "reverseText": "From Margaret to Ruby\nFrom Ruby",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image36.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image36.JPG",
      "frontSrc": "photos/Image36.JPG"
    }
  ],
  [
    "photos/Image37.JPG",
    {
      "photoId": "P00064",
      "filename": "Image37.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Scotland",
      "date": "1941",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Margaret, Edinburgh",
      "reverseText": "From Margaret",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image37b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image37b.JPG",
      "backText": "From Margaret",
      "reverseSide": {
        "photoId": "P00065",
        "filename": "Image37b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "Scotland",
        "date": "1941",
        "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
        "caption": "Margaret, Edinburgh",
        "reverseText": "From Margaret",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image37.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image37b.JPG",
    {
      "photoId": "P00065",
      "filename": "Image37b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Scotland",
      "date": "1941",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Margaret, Edinburgh",
      "reverseText": "From Margaret",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image37.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image37.JPG",
      "frontSrc": "photos/Image37.JPG"
    }
  ],
  [
    "photos/Image38.JPG",
    {
      "photoId": "P00066",
      "filename": "Image38.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Scotland",
      "date": "1941-08-01",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Scene on the Clyde",
      "reverseText": "Taken 1st August 1941\nScene on the Clyde\nSwimming bath",
      "keywords": [
        "River Clyde",
        "Clyde",
        "Scotland",
        "1 August 1941",
        "Glasgow",
        "swimming baths",
        "waterfront",
        "William France",
        "Bill France",
        "Bert France",
        "New Zealand to Britain",
        "voyage to Britain",
        "arrival in Scotland",
        "Orontes",
        "Trinidad",
        "wartime voyage",
        "Royal New Zealand Navy",
        "RNZN",
        "1941",
        "Second World War",
        "WWII"
      ],
      "description": "A view across the River Clyde, Scotland, taken on 1 August 1941 at the end of Bill and Bert's four-month journey from New Zealand to Britain. Buildings line the opposite shore, with the handwritten caption identifying a swimming bath among the waterfront structures. The photograph provides a dated record of their arrival on the Clyde, exactly four months after leaving New Zealand on 1 April 1941.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image38b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image38b.JPG",
      "backText": "Taken 1st August 1941\nScene on the Clyde\nSwimming bath",
      "reverseSide": {
        "photoId": "P00067",
        "filename": "Image38b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Scotland",
        "date": "1941-08-01",
        "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
        "caption": "Scene on the Clyde",
        "reverseText": "Taken 1st August 1941\nScene on the Clyde\nSwimming bath",
        "keywords": [
          "River Clyde",
          "Clyde",
          "Scotland",
          "1 August 1941",
          "Glasgow",
          "swimming baths",
          "waterfront",
          "William France",
          "Bill France",
          "Bert France",
          "New Zealand to Britain",
          "voyage to Britain",
          "arrival in Scotland",
          "Orontes",
          "Trinidad",
          "wartime voyage",
          "Royal New Zealand Navy",
          "RNZN",
          "1941",
          "Second World War",
          "WWII"
        ],
        "description": "A view across the River Clyde, Scotland, taken on 1 August 1941 at the end of Bill and Bert's four-month journey from New Zealand to Britain. Buildings line the opposite shore, with the handwritten caption identifying a swimming bath among the waterfront structures. The photograph provides a dated record of their arrival on the Clyde, exactly four months after leaving New Zealand on 1 April 1941.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image38.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image38b.JPG",
    {
      "photoId": "P00067",
      "filename": "Image38b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Scotland",
      "date": "1941-08-01",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Scene on the Clyde",
      "reverseText": "Taken 1st August 1941\nScene on the Clyde\nSwimming bath",
      "keywords": [
        "River Clyde",
        "Clyde",
        "Scotland",
        "1 August 1941",
        "Glasgow",
        "swimming baths",
        "waterfront",
        "William France",
        "Bill France",
        "Bert France",
        "New Zealand to Britain",
        "voyage to Britain",
        "arrival in Scotland",
        "Orontes",
        "Trinidad",
        "wartime voyage",
        "Royal New Zealand Navy",
        "RNZN",
        "1941",
        "Second World War",
        "WWII"
      ],
      "description": "A view across the River Clyde, Scotland, taken on 1 August 1941 at the end of Bill and Bert's four-month journey from New Zealand to Britain. Buildings line the opposite shore, with the handwritten caption identifying a swimming bath among the waterfront structures. The photograph provides a dated record of their arrival on the Clyde, exactly four months after leaving New Zealand on 1 April 1941.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image38.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image38.JPG",
      "frontSrc": "photos/Image38.JPG"
    }
  ],
  [
    "photos/Image39.JPG",
    {
      "photoId": "P00068",
      "filename": "Image39.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Scotland",
      "date": "1941-08-01",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Scene on the Clyde\nGourock",
      "reverseText": "Taken 1st August 1941\nLandmark on the Clyde\nScotland",
      "keywords": [
        "**Keywords:**\nGourock",
        "Firth of Clyde",
        "River Clyde",
        "Scotland",
        "1 August 1941",
        "Gourock waterfront",
        "wooden ship",
        "wooden vessel",
        "unidentified vessel",
        "maritime landmark",
        "waterfront buildings",
        "Clyde shipping",
        "wartime Scotland",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "View of the Gourock waterfront from the Firth of Clyde on 1 August 1941. A large wooden vessel lies close to the shoreline, distinguished by an unusually tall, narrow structure rising prominently above it. Waterfront buildings stand behind the vessel, with the wooded hillside of Gourock rising in the background.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image39b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image39b.JPG",
      "backText": "Taken 1st August 1941\nLandmark on the Clyde\nScotland",
      "reverseSide": {
        "photoId": "P00069",
        "filename": "Image39b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Scotland",
        "date": "1941-08-01",
        "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
        "caption": "Scene on the Clyde\nGourock",
        "reverseText": "Taken 1st August 1941\nLandmark on the Clyde\nScotland",
        "keywords": [
          "**Keywords:**\nGourock",
          "Firth of Clyde",
          "River Clyde",
          "Scotland",
          "1 August 1941",
          "Gourock waterfront",
          "wooden ship",
          "wooden vessel",
          "unidentified vessel",
          "maritime landmark",
          "waterfront buildings",
          "Clyde shipping",
          "wartime Scotland",
          "1941",
          "WWII",
          "Second World War"
        ],
        "description": "View of the Gourock waterfront from the Firth of Clyde on 1 August 1941. A large wooden vessel lies close to the shoreline, distinguished by an unusually tall, narrow structure rising prominently above it. Waterfront buildings stand behind the vessel, with the wooded hillside of Gourock rising in the background.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image39.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image39b.JPG",
    {
      "photoId": "P00069",
      "filename": "Image39b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Scotland",
      "date": "1941-08-01",
      "albumComment": "Scotland\nOur destination\nafter four months\nof travelling\nApril 1st 41\nAugust 1st 41",
      "caption": "Scene on the Clyde\nGourock",
      "reverseText": "Taken 1st August 1941\nLandmark on the Clyde\nScotland",
      "keywords": [
        "**Keywords:**\nGourock",
        "Firth of Clyde",
        "River Clyde",
        "Scotland",
        "1 August 1941",
        "Gourock waterfront",
        "wooden ship",
        "wooden vessel",
        "unidentified vessel",
        "maritime landmark",
        "waterfront buildings",
        "Clyde shipping",
        "wartime Scotland",
        "1941",
        "WWII",
        "Second World War"
      ],
      "description": "View of the Gourock waterfront from the Firth of Clyde on 1 August 1941. A large wooden vessel lies close to the shoreline, distinguished by an unusually tall, narrow structure rising prominently above it. Waterfront buildings stand behind the vessel, with the wooded hillside of Gourock rising in the background.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image39.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image39.JPG",
      "frontSrc": "photos/Image39.JPG"
    }
  ],
  [
    "photos/Image40.JPG",
    {
      "photoId": "P00070",
      "filename": "Image40.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Colon",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 008",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [
        "Image40b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Tuesday, 5 May 1942",
          "caption": "photos/Image42.JPG"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image40b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00071",
        "filename": "Image40b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Colon",
        "date": "1942-05",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image40.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image40b.JPG",
    {
      "photoId": "P00071",
      "filename": "Image40b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Colon",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image40.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image40.JPG",
      "frontSrc": "photos/Image40.JPG"
    }
  ],
  [
    "photos/Image41.JPG",
    {
      "photoId": "P00072",
      "filename": "Image41.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 4 May 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image42.JPG",
    {
      "photoId": "P00073",
      "filename": "Image42.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Colon",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 008",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [
        "Image42b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Tuesday, 5 May 1942",
          "caption": "Photograph"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image42b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00074",
        "filename": "Image42b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Colon",
        "date": "1942-05",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image42.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image42b.JPG",
    {
      "photoId": "P00074",
      "filename": "Image42b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Colon",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image42.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image42.JPG",
      "frontSrc": "photos/Image42.JPG"
    }
  ],
  [
    "photos/Image43.JPG",
    {
      "photoId": "P00075",
      "filename": "Image43.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Bermuda",
      "date": "1942",
      "albumComment": "",
      "caption": "Myself and Mo",
      "reverseText": "",
      "keywords": [
        "Bermuda",
        "1942",
        "myself and Mo",
        "Mo",
        "sailors",
        "naval ratings",
        "Royal New Zealand Navy",
        "RNZN",
        "naval uniform",
        "working rig",
        "shipboard life",
        "ship's deck",
        "wartime service",
        "naval personnel",
        "Second World War",
        "WWII"
      ],
      "description": "Both are dressed in working rig with naval caps, white shirts and dark trousers, standing together on the open deck with the sea behind them. A depth charge and associated stern deck equipment are visible behind the two sailors.",
      "people": [
        "Mo",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 December 1941",
          "caption": "Myself and Mo"
        }
      ]
    }
  ],
  [
    "photos/Image44.JPG",
    {
      "photoId": "P00076",
      "filename": "Image44.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Bermuda",
      "date": "1942-04",
      "albumComment": "",
      "caption": "Naval dock-yard, Burmuda",
      "reverseText": "",
      "keywords": [
        "Bermuda",
        "Royal Naval Dockyard",
        "Bermuda Naval Dockyard",
        "HM Dockyard Bermuda",
        "Ireland Island",
        "1942",
        "naval base",
        "dockyard",
        "harbour",
        "naval facilities",
        "cranes",
        "Royal Navy",
        "RNZN",
        "HMNZS Tui",
        "Second World War",
        "WWII",
        "wartime Bermuda"
      ],
      "description": "View across the water towards the Royal Naval Dockyard, Bermuda, in 1942. The dockyard buildings, workshops and cranes can be seen along the shoreline, with the fortified dockyard complex extending out into the harbour.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 8 April 1942",
          "caption": "Naval dock-yard, Burmuda"
        }
      ]
    }
  ],
  [
    "photos/Image45.JPG",
    {
      "photoId": "P00077",
      "filename": "Image45.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Bermuda",
      "date": "1942-4",
      "albumComment": "",
      "caption": "On the streets of Burmuda",
      "reverseText": "",
      "keywords": [
        "sailors",
        "naval ratings",
        "group portrait",
        "Royal New Zealand Navy",
        "RNZN",
        "Royal Navy",
        "naval uniform",
        "sailor uniform",
        "ratings",
        "shipmates",
        "wartime service",
        "Second World War",
        "WWII",
        "1941",
        "1942",
        "naval personnel"
      ],
      "description": "Five sailors pose together for a group photograph. Four are wearing British/Commonwealth naval ratings’ uniforms with the traditional round sailor cap, while the sailor standing at the rear right wears the distinctive white “Dixie cup” cap of a United States Navy enlisted sailor, indicating that an American serviceman was photographed with the New Zealand sailors.",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Thursday, 9 April 1942",
          "caption": "On the streets of Burmuda"
        }
      ]
    }
  ],
  [
    "photos/Image46.JPG",
    {
      "photoId": "P00078",
      "filename": "Image46.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Bermuda",
      "date": "1942-04",
      "albumComment": "",
      "caption": "Caught in the act, Burmuda",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Jack"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image47.JPG",
    {
      "photoId": "P00079",
      "filename": "Image47.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Bermuda",
      "date": "1942-04",
      "albumComment": "",
      "caption": "A plane from the Savanah",
      "reverseText": "",
      "keywords": [
        "USS Savannah",
        "CL-42",
        "USS Savannah CL-42",
        "U.S. Navy",
        "US Navy",
        "Brooklyn-class cruiser",
        "Curtiss SOC-3 Seagull",
        "SON-1 Seagull",
        "VCS-8",
        "Cruiser Scouting Squadron 8",
        "floatplane",
        "seaplane",
        "scout aircraft",
        "observation aircraft",
        "naval aviation",
        "reconnaissance",
        "World War II",
        "WWII",
        "1941",
        "1942"
      ],
      "description": "A U.S. Navy scout-observation floatplane from USS Savannah (CL-42) flies low over the sea near Bermuda in April 1942. Savannah was at Bermuda during HMNZS Tui's stay at Somerset Dockyard from 12–20 April, and on 19 April Bill recorded meeting American sailors from Savannah whom Trapper had previously met during the cruiser's visit to Auckland in March 1941.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Sunday, 19 April 1942",
          "caption": "A plane from the Savanah"
        }
      ]
    }
  ],
  [
    "photos/Image48.jpg",
    {
      "photoId": "P00080",
      "filename": "Image48.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Bermuda",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image49.JPG",
    {
      "photoId": "P00283",
      "filename": "Image49.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Bermuda",
      "date": "1942-04",
      "albumComment": "Sight-seeing on\nthe isle of Burmuda\nA place for millionares\nVisiter April 1942",
      "caption": "On the way to Somerset",
      "reverseText": "",
      "keywords": [
        "Bermuda",
        "April 1942",
        "HMNZS Tui",
        "New Zealand sailors",
        "RNZN",
        "bicycles",
        "cycling",
        "Bermudian architecture",
        "Bermuda residence",
        "limestone roof",
        "shuttered windows",
        "wartime Bermuda",
        "Second World War",
        "WWII",
        "shore leave."
      ],
      "description": "Two New Zealand sailors pose with bicycles outside a substantial residence in Bermuda in April 1942. The building shows characteristic Bermudian construction, with pale masonry walls, shuttered windows and a stepped limestone roof designed to collect rainwater. Bicycles were a major form of civilian transport in Bermuda, where private motor cars were prohibited until after the Second World War.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Sunday, 19 April 1942",
          "caption": "On the way to Somerset"
        }
      ]
    }
  ],
  [
    "photos/Image50.JPG",
    {
      "photoId": "P00082",
      "filename": "Image50.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Bermuda",
      "date": "1942-04",
      "albumComment": "Sight-seeing on\nthe isle of Burmuda\nA place for millionares\nVisiter April 1942",
      "caption": "Too steep to ride...",
      "reverseText": "",
      "keywords": [
        "Bermuda",
        "April 1942",
        "HMNZS Tui",
        "New Zealand sailors",
        "RNZN",
        "bicycles",
        "cycling",
        "steep road",
        "Bermuda roads",
        "stone walls",
        "Bermudian architecture",
        "wartime Bermuda",
        "Second World War",
        "WWII",
        "shore leave",
        "naval ratings."
      ],
      "description": "Two New Zealand sailors push their bicycles up a steep, narrow road in Bermuda in April 1942. High walls of local stone and masonry border the roadway, with subtropical vegetation growing above them. The image shows the characteristically confined, hilly roads encountered by cyclists in Bermuda, where bicycles were one of the principal forms of civilian transport during this period.",
      "people": [
        "Person 016",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Sunday, 19 April 1942",
          "caption": "Too steep to ride..."
        }
      ]
    }
  ],
  [
    "photos/Image51.JPG",
    {
      "photoId": "P00083",
      "filename": "Image51.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "Flotilla of 5 A/S and M.S. ships\nCame from ScotD to New Zealand\nMarch - August 1942.",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "HMNZS Inchkeith",
        "T155",
        "Isles-class",
        "minesweeper",
        "anti-submarine vessel",
        "naval trawler",
        "HMNZS Tui",
        "T234",
        "HMNZS Sanda",
        "T160",
        "HMNZS Killegray",
        "T174",
        "HMNZS Scarba",
        "T175",
        "RNZN",
        "Royal New Zealand Navy",
        "1942",
        "Scotland to New Zealand",
        "wartime voyage",
        "World War II",
        "WWII",
        "minesweeping",
        "anti-submarine warfare."
      ],
      "description": "HMNZS Inchkeith (T155), an Isles-class anti-submarine and minesweeping trawler, photographed at sea during the flotilla's voyage from Scotland to New Zealand between March and August 1942. Inchkeith travelled with the sister ships Sanda (T160), Killegray (T174) and Scarba (T175), alongside HMNZS Tui (T234). Although blurred in this photograph, the vessel's T155 pennant number is visible on the bow, identifying her as Inchkeith",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Thursday, 26 March 1942",
          "caption": "Inchkeith"
        }
      ]
    }
  ],
  [
    "photos/Image52.JPG",
    {
      "photoId": "P00084",
      "filename": "Image52.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "Flotilla of 5 A/S and M.S. ships\nCame from ScotD to New Zealand\nMarch - August 1942.",
      "caption": "HMS Scarba",
      "reverseText": "",
      "keywords": [
        "HMNZS Scarba",
        "HMS Scarba",
        "T175",
        "Scarba",
        "Isles-class trawler",
        "minesweeper",
        "anti-submarine vessel",
        "RNZN",
        "Royal New Zealand Navy",
        "1942",
        "repainting",
        "grey paint",
        "incomplete painting",
        "hull painting",
        "ship maintenance",
        "naval trawler",
        "HMNZS Tui",
        "minesweeping flotilla",
        "Scotland to New Zealand",
        "Second World War",
        "WWII."
      ],
      "description": "HMNZS Scarba (T175), an Isles-class anti-submarine and minesweeping trawler, photographed during the 1942 voyage from Scotland to New Zealand. The vessel appears to have been photographed part-way through repainting, with a large section of the forward hull still noticeably lighter than the newly painted areas. The flotilla's ships underwent regular painting and maintenance during the voyage; Bill's journal specifically records Tui being painted grey in February 1942, providing contemporary evidence of this work being undertaken within the flotilla.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Thursday, 26 March 1942",
          "caption": "Scarba"
        }
      ]
    }
  ],
  [
    "photos/Image53.JPG",
    {
      "photoId": "P00085",
      "filename": "Image53.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "Flotilla of 5 A/S and M.S. ships\nCame from ScotD to New Zealand\nMarch - August 1942.",
      "caption": "H.M.S. Inchkeith",
      "reverseText": "",
      "keywords": [
        "HMNZS Inchkeith",
        "T155",
        "Isles-class",
        "minesweeper",
        "anti-submarine trawler",
        "RNZN",
        "Royal New Zealand Navy",
        "1942",
        "Scotland to New Zealand",
        "Greenock",
        "HMNZS Tui",
        "HMNZS Sanda",
        "HMNZS Killegray",
        "HMNZS Scarba",
        "naval flotilla",
        "World War II",
        "WWII",
        "wartime voyage."
      ],
      "description": "HMNZS Inchkeith (T155) underway at sea during the voyage from Scotland to New Zealand in 1942. In this photograph the T155 pennant number is clearly visible on the port bow, providing a definite identification of the vessel. Inchkeith was one of four Isles-class anti-submarine and minesweeping trawlers acquired for the Royal New Zealand Navy. She sailed from Greenock on 15 March 1942 with Sanda, Killegray, Scarba and HMNZS Tui, eventually reaching Auckland on 4 August 1942.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Saturday, 1 August 1942",
          "caption": "Inchkeith"
        }
      ]
    }
  ],
  [
    "photos/Image54.JPG",
    {
      "photoId": "P00086",
      "filename": "Image54.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "Flotilla of 5 A/S and M.S. ships\nCame from ScotD to New Zealand\nMarch - August 1942.",
      "caption": "H.M.S. Sanda",
      "reverseText": "",
      "keywords": [
        "HMNZS Sanda",
        "HMS Sanda",
        "T160",
        "Sanda",
        "Isles-class trawler",
        "naval trawler",
        "minesweeper",
        "anti-submarine vessel",
        "RNZN",
        "Royal New Zealand Navy",
        "1942",
        "Scotland to New Zealand",
        "flotilla",
        "Second World War",
        "WWII",
        "wartime grey",
        "T160 pendant number",
        "naval convoy."
      ],
      "description": "HMNZS Sanda (T160), one of the Isles-class anti-submarine and minesweeping trawlers in the flotilla travelling from Scotland to New Zealand in 1942. The pendant number T160 is clearly visible on the port bow, making the identification certain. Sanda is photographed underway at sea from another vessel in the flotilla, with her wartime grey finish, forward gun and characteristic raised bridge structure visible.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Saturday, 1 August 1942",
          "caption": "Sanda"
        }
      ]
    }
  ],
  [
    "photos/Image55.JPG",
    {
      "photoId": "P00087",
      "filename": "Image55.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "HMNZS Muritai",
        "T05",
        "auxiliary minesweeper",
        "minesweeper",
        "Royal New Zealand Navy",
        "New Zealand Naval Forces",
        "WWII",
        "Second World War",
        "1940",
        "1941",
        "naval vessel",
        "ferry",
        "Wellington",
        "Auckland",
        "at sea"
      ],
      "description": "HMNZS Muritai (T05) underway at sea, photographed from another vessel, c. 1940–41. Muritai was a former Wellington–Eastbourne passenger ferry converted for service as an auxiliary minesweeper.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image56.JPG",
    {
      "photoId": "P00088",
      "filename": "Image56.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "The best place of all\nLong Beach, California\nA place I shall never forget.\nVisited May - June 1942",
      "caption": "At the oilfields",
      "reverseText": "",
      "keywords": [
        "Signal Hill",
        "Long Beach",
        "California",
        "Alamitos No. 1",
        "Shell Oil Company",
        "Long Beach Oil Field",
        "oil derricks",
        "oil well",
        "discovery well",
        "Temple Avenue",
        "Hill Street",
        "Signal Hill oilfield",
        "petroleum industry",
        "New Zealand sailors",
        "RNZN",
        "1942",
        "Second World War",
        "WWII."
      ],
      "description": "Two New Zealand sailors visiting the Signal Hill oilfield overlooking Long Beach, California, in 1942. Behind them stand several oil derricks belonging to the densely developed Long Beach Oil Field. Signal Hill had become one of California's major oil-producing areas following the discovery of oil by Shell's Alamitos No. 1 well in 1921. The photograph was likely taken during the same visit as Bill's photograph of the historic discovery well.",
      "people": [
        "Jack",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": ""
        }
      ]
    }
  ],
  [
    "photos/Image57.JPG",
    {
      "photoId": "P00089",
      "filename": "Image57.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "The best place of all\nLong Beach, California\nA place I shall never forget.\nVisited May - June 1942",
      "caption": "Isn't she a beaut - the car",
      "reverseText": "",
      "keywords": [
        "Long Beach",
        "California",
        "United States",
        "1942",
        "New Zealand sailors",
        "RNZN",
        "Royal New Zealand Navy",
        "shore leave",
        "American car",
        "sedan",
        "motor car",
        "residential street",
        "sailors",
        "naval uniform",
        "California",
        "Second World War",
        "WWII."
      ],
      "description": "Three New Zealand sailors with an American 1941 Oldsmobile four-door sedan during their stay in the Long Beach area of California in 1942. Two sailors are seated inside the car while a third stands alongside, all wearing naval uniform. The residential surroundings contrast with the nearby industrial and oilfield photographs and show another aspect of the sailors' time ashore in southern California.",
      "people": [
        "Jack",
        "Person 016",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 27 May 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image58.JPG",
    {
      "photoId": "P00090",
      "filename": "Image58.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "The best place of all\nLong Beach, California\nA place I shall never forget.\nVisited May - June 1942",
      "caption": "The first well drilled",
      "reverseText": "",
      "keywords": [
        "Signal Hill",
        "Long Beach",
        "California",
        "Alamitos No. 1",
        "Shell Oil Company",
        "Long Beach Oil Field",
        "oil derricks",
        "oil well",
        "discovery well",
        "Temple Avenue",
        "Hill Street",
        "Signal Hill oilfield",
        "petroleum industry",
        "New Zealand sailors",
        "RNZN",
        "1942",
        "Second World War",
        "WWII."
      ],
      "description": "Shell Oil Company's Alamitos No. 1 discovery well at Signal Hill, California, photographed in 1942. Completed on 25 June 1921 at a depth of 3,114 feet, the well's successful strike initiated the development of the Long Beach Oil Field and the intensive drilling of Signal Hill.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": ""
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image58b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00091",
        "filename": "Image58b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "",
        "date": "",
        "albumComment": "The best place of all\nLong Beach, California\nA place I shall never forget.\nVisited May - June 1942",
        "caption": "The first well drilled",
        "reverseText": "",
        "keywords": [
          "Signal Hill",
          "Long Beach",
          "California",
          "Alamitos No. 1",
          "Shell Oil Company",
          "Long Beach Oil Field",
          "oil derricks",
          "oil well",
          "discovery well",
          "Temple Avenue",
          "Hill Street",
          "Signal Hill oilfield",
          "petroleum industry",
          "New Zealand sailors",
          "RNZN",
          "1942",
          "Second World War",
          "WWII."
        ],
        "description": "Shell Oil Company's Alamitos No. 1 discovery well at Signal Hill, California, photographed in 1942. Completed on 25 June 1921 at a depth of 3,114 feet, the well's successful strike initiated the development of the Long Beach Oil Field and the intensive drilling of Signal Hill.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": []
      }
    }
  ],
  [
    "photos/Image58b.JPG",
    {
      "photoId": "P00091",
      "filename": "Image58b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "The best place of all\nLong Beach, California\nA place I shall never forget.\nVisited May - June 1942",
      "caption": "The first well drilled",
      "reverseText": "",
      "keywords": [
        "Signal Hill",
        "Long Beach",
        "California",
        "Alamitos No. 1",
        "Shell Oil Company",
        "Long Beach Oil Field",
        "oil derricks",
        "oil well",
        "discovery well",
        "Temple Avenue",
        "Hill Street",
        "Signal Hill oilfield",
        "petroleum industry",
        "New Zealand sailors",
        "RNZN",
        "1942",
        "Second World War",
        "WWII."
      ],
      "description": "Shell Oil Company's Alamitos No. 1 discovery well at Signal Hill, California, photographed in 1942. Completed on 25 June 1921 at a depth of 3,114 feet, the well's successful strike initiated the development of the Long Beach Oil Field and the intensive drilling of Signal Hill.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image58.JPG",
      "frontSrc": "photos/Image58.JPG"
    }
  ],
  [
    "photos/Image59.JPG",
    {
      "photoId": "P00092",
      "filename": "Image59.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "At the Orange Groves, California",
      "caption": "Three cronies",
      "reverseText": "",
      "keywords": [
        "Royal New Zealand Navy",
        "RNZN",
        "New Zealand sailors",
        "naval ratings",
        "gunnery rating",
        "3rd Class Gunnery Rating",
        "half gun badge",
        "single gun badge",
        "naval gunnery",
        "MS badge",
        "minesweeping",
        "naval uniform",
        "citrus tree",
        "oranges",
        "group portrait",
        "Second World War",
        "WWII",
        "1940s."
      ],
      "description": "Three New Zealand naval ratings pose beneath a citrus tree. The centre sailor wears a 3rd Class Gunnery Rating badge — the single-gun or “half gun” badge — on his right sleeve, while the sailor on the right has an “MS” marking on his left sleeve associated with minesweeping service. The centre sailor holds a glass, with citrus fruit visible on the tree behind the group.",
      "people": [
        "Bert France",
        "Jack",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": ""
        }
      ]
    }
  ],
  [
    "photos/Image60.JPG",
    {
      "photoId": "P00093",
      "filename": "Image60.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "At the Orange Groves, California",
      "caption": "We three and Hinemoa",
      "reverseText": "",
      "keywords": [
        "New Zealand naval ratings",
        "Royal New Zealand Navy",
        "RNZN",
        "WWII",
        "Second World War",
        "sailors",
        "naval uniform",
        "square rig",
        "gunnery",
        "gunnery badge",
        "crossed guns badge",
        "half gun badge",
        "single gun badge",
        "qualified gunner",
        "naval gunnery",
        "shore leave",
        "group portrait",
        "citrus tree",
        "1940s."
      ],
      "description": "Three New Zealand naval ratings pose with a woman outdoors beneath a citrus tree. The sailor on the left has a clearly visible crossed-guns gunnery badge on his right upper sleeve, while the sailor on the right wears the single-gun or “half gun” gunnery badge on his right sleeve. The photograph therefore records two different levels of gunnery qualification among the sailors. All three men are wearing naval square rig, with the two sailors at the rear wearing white-topped caps.",
      "people": [
        "Bert France",
        "Hinemoa",
        "Jack",
        "William France"
      ],
      "faceCount": 4,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Hinemoa"
        }
      ]
    }
  ],
  [
    "photos/Image61.jpg",
    {
      "photoId": "P00094",
      "filename": "Image61.jpg",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image62.JPG",
    {
      "photoId": "P00095",
      "filename": "Image62.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Bert France",
        "Jack",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [
        "Image62b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": ""
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image62b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00096",
        "filename": "Image62b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "California",
        "date": "1942-05",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image62.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image62b.JPG",
    {
      "photoId": "P00096",
      "filename": "Image62b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image62.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image62.JPG",
      "frontSrc": "photos/Image62.JPG"
    }
  ],
  [
    "photos/Image63.JPG",
    {
      "photoId": "P00097",
      "filename": "Image63.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Bert France",
        "Jack",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": ""
        }
      ]
    }
  ],
  [
    "photos/Image64.JPG",
    {
      "photoId": "P00098",
      "filename": "Image64.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "Getting aquainted",
      "reverseText": "",
      "keywords": [
        "New Zealand naval ratings",
        "Royal New Zealand Navy",
        "RNZN",
        "sailors",
        "WWII",
        "Second World War",
        "gunnery",
        "naval gunner",
        "crossed guns badge",
        "half gun badge",
        "single gun badge",
        "white lanyard",
        "naval uniform",
        "square rig",
        "shore leave",
        "women",
        "group portrait",
        "palm tree",
        "garden",
        "1940s."
      ],
      "description": "Three New Zealand naval ratings pose with three women in a garden setting, with a large palm behind the group. The sailor on the left wears the clearly visible crossed-guns gunnery badge on his right upper sleeve. The sailor on the right wears the single-gun or “half gun” gunnery badge on his right sleeve and also has a white naval lanyard prominently displayed around the front of his jumper. The three sailors are in dark square-rig uniform but are not wearing their caps, suggesting an informal photograph taken while ashore.",
      "people": [
        "Bert France",
        "Betty-Lou",
        "Jack",
        "Person 014",
        "Person 015",
        "William France"
      ],
      "faceCount": 6,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": ""
        }
      ]
    }
  ],
  [
    "photos/Image65.jpg",
    {
      "photoId": "P00099",
      "filename": "Image65.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "Signing the visitor's book at an orange store.",
      "reverseText": "",
      "keywords": [
        "California",
        "United States",
        "1942",
        "orange store",
        "orange shop",
        "citrus",
        "visitors' book",
        "signing visitors' book",
        "New Zealand sailors",
        "RNZN",
        "Royal New Zealand Navy",
        "naval ratings",
        "shore leave",
        "sightseeing",
        "roadside attraction",
        "wooden wheel",
        "palm-frond awning",
        "vintage cars",
        "American cars",
        "WWII",
        "Second World War."
      ],
      "description": "New Zealand naval ratings visiting an orange store in California in 1942. One sailor is signing the store's visitors' book while another stands outside with a woman. The rustic roadside premises feature a large wooden wheel and palm-frond awning, with several contemporary American cars parked nearby. The photograph was taken during the sailors' time ashore in California while travelling back toward New Zealand.",
      "people": [
        "Bert France",
        "Hinemoa",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": "photos/Image66.jpg"
        }
      ]
    }
  ],
  [
    "photos/Image66.jpg",
    {
      "photoId": "P00100",
      "filename": "Image66.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "The first introduction",
      "reverseText": "",
      "keywords": [
        "California",
        "United States",
        "1942",
        "New Zealand sailors",
        "RNZN",
        "Royal New Zealand Navy",
        "naval ratings",
        "local family",
        "American civilians",
        "wartime hospitality",
        "shore leave",
        "group portrait",
        "private home",
        "suburban California",
        "crossed guns badge",
        "gunnery badge",
        "naval uniform",
        "WWII",
        "Second World War."
      ],
      "description": "New Zealand naval ratings photographed with a group of women and a young girl outside a private home in California in 1942. The informal group portrait appears to record local hospitality extended to the visiting sailors during their time ashore. One sailor displays the crossed-guns gunnery badge prominently on his right sleeve. The suburban house and garden provide a useful record of the sailors' contact with local Californian families during their stay.",
      "people": [
        "Bert France",
        "Betty-Lou",
        "Jack",
        "Person 014",
        "Person 015",
        "William France"
      ],
      "faceCount": 6,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "The first introduction"
        }
      ]
    }
  ],
  [
    "photos/Image67.JPG",
    {
      "photoId": "P00101",
      "filename": "Image67.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "Uncle Sam's - war effort",
      "reverseText": "",
      "keywords": [
        "California",
        "1942",
        "shipbuilding yard",
        "shipyard",
        "gantry",
        "gantry crane",
        "wartime shipbuilding",
        "American war effort",
        "industrial waterfront",
        "night work",
        "wartime industry",
        "WWII",
        "HMNZS Tui."
      ],
      "description": "Night-time view of a heavily illuminated industrial waterfront facility in California, 1942, apparently a shipbuilding yard. A large steel gantry or crane structure dominates the scene, with extensive lighting suggesting wartime work continuing through the night.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image68.JPG",
    {
      "photoId": "P00102",
      "filename": "Image68.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "Cobbers together",
      "reverseText": "",
      "keywords": [
        "California",
        "United States",
        "1942",
        "New Zealand sailors",
        "RNZN",
        "Royal New Zealand Navy",
        "naval ratings",
        "Californian family",
        "American civilians",
        "children",
        "local hospitality",
        "wartime hospitality",
        "shore leave",
        "private home",
        "group portrait",
        "naval uniform",
        "white naval cap",
        "WWII",
        "Second World War."
      ],
      "description": "New Zealand naval ratings photographed with a Californian family outside their home in 1942. Two sailors in square-rig uniform and white-topped caps are surrounded by women and children, with a man standing in the doorway behind them. The relaxed group photograph provides another record of the local hospitality and friendships formed by the visiting New Zealand sailors during their stay in California.",
      "people": [
        "Bert France",
        "Betty-Lou",
        "Gloria",
        "Joan",
        "William France"
      ],
      "faceCount": 5,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": "photos/Image70.JPG"
        }
      ]
    }
  ],
  [
    "photos/Image69.JPG",
    {
      "photoId": "P00103",
      "filename": "Image69.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "Jackie, Long Beach",
      "reverseText": "Hope you like it alright...\nJackie",
      "keywords": [
        "Jackie",
        "Long Beach"
      ],
      "description": "",
      "people": [
        "Jackie"
      ],
      "faceCount": 1,
      "companionPhotos": [
        "Image69b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Photograph"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image69b.JPG",
      "backText": "Hope you like it alright...\nJackie",
      "reverseSide": {
        "photoId": "P00104",
        "filename": "Image69b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "California",
        "date": "1942-05",
        "albumComment": "",
        "caption": "Jackie, Long Beach",
        "reverseText": "Hope you like it alright...\nJackie",
        "keywords": [
          "Jackie",
          "Long Beach"
        ],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image69.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image69b.JPG",
    {
      "photoId": "P00104",
      "filename": "Image69b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "Jackie, Long Beach",
      "reverseText": "Hope you like it alright...\nJackie",
      "keywords": [
        "Jackie",
        "Long Beach"
      ],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image69.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image69.JPG",
      "frontSrc": "photos/Image69.JPG"
    }
  ],
  [
    "photos/Image70.JPG",
    {
      "photoId": "P00105",
      "filename": "Image70.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "Cobbers aboard HMNZS Tui",
      "reverseText": "",
      "keywords": [
        "HMNZS Tui",
        "Tui",
        "California",
        "United States",
        "1942",
        "Cobbers",
        "New Zealand sailors",
        "RNZN",
        "Royal New Zealand Navy",
        "naval ratings",
        "Māori motif",
        "Māori artwork",
        "painted face",
        "shipboard art",
        "shipboard photograph",
        "women",
        "visitors aboard ship",
        "naval uniform",
        "square rig",
        "WWII",
        "Second World War."
      ],
      "description": "Two New Zealand naval ratings and three women photographed aboard HMNZS Tui in California in 1942. The original caption identifies the group as “Cobbers aboard HMNZS Tui.” Behind them is the ship's distinctive large Māori-style painted face motif, providing a particularly useful view of decorative artwork carried aboard Tui. The photograph was taken during Tui's California stop on her voyage back to New Zealand.",
      "people": [
        "Bert France",
        "Betty-Lou",
        "Hinemoa",
        "Person 039",
        "William France"
      ],
      "faceCount": 5,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Cobbers aboard HMNZS Tui"
        }
      ]
    }
  ],
  [
    "photos/Image71.jpg",
    {
      "photoId": "P00106",
      "filename": "Image71.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "Betty-Lou, Joan, Gloria",
      "reverseText": "",
      "keywords": [
        "California",
        "United States",
        "1942",
        "Californian family",
        "American family",
        "girls",
        "children",
        "sisters",
        "private home",
        "local family",
        "wartime hospitality",
        "New Zealand sailors",
        "RNZN",
        "shore leave",
        "Second World War",
        "WWII",
        "1940s."
      ],
      "description": "Three girls from the Californian family photographed outside their home in 1942. They appear to be the same children seen with the visiting New Zealand sailors in the preceding photograph, helping link the two images as part of the same visit. The photograph provides a more personal record of the local family who hosted or befriended the sailors during their stay in California.",
      "people": [
        "Betty-Lou",
        "Gloria",
        "Joan"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": "photos/Image87.JPG"
        }
      ]
    }
  ],
  [
    "photos/Image72.JPG",
    {
      "photoId": "P00107",
      "filename": "Image72.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Hawaii",
      "date": "1942-06",
      "albumComment": "Honolulu - Waikiki Beach\nJune - July, 1942",
      "caption": "Betty-Lou, Hine",
      "reverseText": "Betty-Lou & Hine",
      "keywords": [],
      "description": "",
      "people": [
        "Betty-Lou",
        "Hine"
      ],
      "faceCount": 2,
      "companionPhotos": [
        "Image72b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image72b.JPG",
      "backText": "Betty-Lou & Hine",
      "reverseSide": {
        "photoId": "P00108",
        "filename": "Image72b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Hawaii",
        "date": "1942-06",
        "albumComment": "Honolulu - Waikiki Beach\nJune - July, 1942",
        "caption": "Betty-Lou, Hine",
        "reverseText": "Betty-Lou & Hine",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image72.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image72b.JPG",
    {
      "photoId": "P00108",
      "filename": "Image72b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Hawaii",
      "date": "1942-06",
      "albumComment": "Honolulu - Waikiki Beach\nJune - July, 1942",
      "caption": "Betty-Lou, Hine",
      "reverseText": "Betty-Lou & Hine",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image72.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image72.JPG",
      "frontSrc": "photos/Image72.JPG"
    }
  ],
  [
    "photos/Image73.JPG",
    {
      "photoId": "P00109",
      "filename": "Image73.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Hawaii",
      "date": "1942-06",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Ruth"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Friday, 26 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image74.JPG",
    {
      "photoId": "P00110",
      "filename": "Image74.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Hawaii",
      "date": "1942-06",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Ruth",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Sunday, 28 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image75.JPG",
    {
      "photoId": "P00111",
      "filename": "Image75.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image75b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image75b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00112",
        "filename": "Image75b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "",
        "date": "",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image75.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image75b.JPG",
    {
      "photoId": "P00112",
      "filename": "Image75b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image75.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image75.JPG",
      "frontSrc": "photos/Image75.JPG"
    }
  ],
  [
    "photos/Image76.JPG",
    {
      "photoId": "P00113",
      "filename": "Image76.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image77.JPG",
    {
      "photoId": "P00114",
      "filename": "Image77.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image78.JPG",
    {
      "photoId": "P00115",
      "filename": "Image78.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image79.JPG",
    {
      "photoId": "P00116",
      "filename": "Image79.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image80.JPG",
    {
      "photoId": "P00117",
      "filename": "Image80.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image81.JPG",
    {
      "photoId": "P00118",
      "filename": "Image81.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image82.JPG",
    {
      "photoId": "P00119",
      "filename": "Image82.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image83.JPG",
    {
      "photoId": "P00120",
      "filename": "Image83.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image84.JPG",
    {
      "photoId": "P00121",
      "filename": "Image84.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image85.JPG",
    {
      "photoId": "P00122",
      "filename": "Image85.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image86.JPG",
    {
      "photoId": "P00123",
      "filename": "Image86.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image87.JPG",
    {
      "photoId": "P00124",
      "filename": "Image87.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Virgie"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image88.JPG",
    {
      "photoId": "P00125",
      "filename": "Image88.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image89.JPG",
    {
      "photoId": "P00126",
      "filename": "Image89.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942-05",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Betty-Lou",
        "Gloria"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image90.JPG",
    {
      "photoId": "P00127",
      "filename": "Image90.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Newfoundland",
      "date": "",
      "albumComment": "",
      "caption": "Port of Newfoundland",
      "reverseText": "",
      "keywords": [
        "St. John’s",
        "Newfoundland",
        "Canada",
        "1942",
        "St. John’s Harbour",
        "waterfront",
        "harbour",
        "port",
        "wharves",
        "merchant ships",
        "shipping",
        "wartime shipping",
        "cityscape",
        "WWII",
        "Second World War",
        "HMNZS Tui."
      ],
      "description": "View across St. John’s Harbour, Newfoundland, showing the densely built waterfront and city rising behind it. Merchant vessels and smaller craft are berthed along the wharves, while smoke rises from the waterfront area. Photographed during the wartime voyage in 1942.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image91.JPG",
    {
      "photoId": "P00128",
      "filename": "Image91.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image92.JPG",
    {
      "photoId": "P00129",
      "filename": "Image92.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "St. John’s, Newfoundland",
      "date": "",
      "albumComment": "",
      "caption": "Newfoundland Harbour",
      "reverseText": "",
      "keywords": [
        "St. John’s Harbour",
        "Newfoundland",
        "Canada",
        "Second World War",
        "WWII",
        "1942",
        "snow",
        "winter",
        "harbour",
        "Allied shipping",
        "naval vessels",
        "merchant ships",
        "convoy escorts",
        "Royal Canadian Navy",
        "North Atlantic",
        "Newfoundland Escort Force",
        "HMCS Avalon",
        "ships",
        "wartime harbour"
      ],
      "description": "View across snow-covered ships in St. John’s Harbour, Newfoundland, during the Second World War. Several vessels are moored closely together, with further ships visible in the harbour and the snow-covered hills beyond. The photograph appears to have been taken from aboard or alongside another vessel.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Saturday, 28 March 1942",
          "caption": "Newfoundland Harbour"
        }
      ]
    }
  ],
  [
    "photos/Image93.JPG",
    {
      "photoId": "P00130",
      "filename": "Image93.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "Picking up sick ratings: Pacific",
      "reverseText": "",
      "keywords": [
        "Pacific",
        "sick ratings",
        "picking up sick ratings",
        "sailors",
        "naval ratings",
        "ship’s boat",
        "pulling boat",
        "rowing",
        "oars",
        "boat crew",
        "naval uniform",
        "HMNZS Tui",
        "Royal New Zealand Navy",
        "WWII",
        "Second World War"
      ],
      "description": "Sailors in a ship’s boat picking up sick ratings in the Pacific. Several men are at the oars while others sit in the crowded boat, photographed from the deck of the larger vessel alongside.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 18 May 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image94.JPG",
    {
      "photoId": "P00131",
      "filename": "Image94.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "St Johns, Newfoundland",
      "date": "",
      "albumComment": "",
      "caption": "St Johns, Newfoundland \"Beat Jerry again\"",
      "reverseText": "",
      "keywords": [
        "St. John’s",
        "Newfoundland",
        "Beat Jerry Again",
        "Jerry",
        "Germany",
        "merchant ship",
        "wartime shipping",
        "harbour",
        "waterfront",
        "North Atlantic",
        "Atlantic convoy",
        "convoy",
        "Allied shipping",
        "WWII",
        "Second World War",
        "1942",
        "HMNZS Tui"
      ],
      "description": "View across St. John’s Harbour, Newfoundland, showing a large wartime merchant vessel at anchor with the city waterfront behind. The original album caption reads “St John’s, Newfoundland — ‘Beat Jerry Again’”, maybe referring to the Allied war effort or another successful Atlantic crossing.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Tuesday, 31 March 1942",
          "caption": "St Johns, Newfoundland \"Beat Jerry again\""
        }
      ]
    }
  ],
  [
    "photos/Image95.JPG",
    {
      "photoId": "P00132",
      "filename": "Image95.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Leith",
      "date": "1941-12-25",
      "albumComment": "",
      "caption": "Christmas Day: Port Edgar",
      "reverseText": "",
      "keywords": [
        "HMNZS Tui",
        "Christmas Day",
        "25 December 1941",
        "Christmas 1941",
        "turkey",
        "Christmas turkey",
        "Bill France",
        "sailors",
        "ship’s company",
        "New Zealand sailors",
        "Royal New Zealand Navy",
        "RNZN",
        "Leith",
        "Scotland",
        "football team",
        "shipboard life",
        "Christmas dinner",
        "WWII",
        "Second World War"
      ],
      "description": "Members of HMNZS Tui’s ship’s company pose with their Christmas turkey on 25 December 1941. The turkey had been “pinched” by members of the crew after losing a football match on 20 December, and the following day Bill France recorded that the others asked him to clean it because they did not know how. On Christmas Day he recorded simply, “had our turkey.” The photograph shows Bill holding the cooked turkey in a roasting pan surrounded by happy sailors.",
      "people": [
        "Bert France",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Thursday, 25 December 1941",
          "caption": "Christmas Day: Port Edgar"
        }
      ]
    }
  ],
  [
    "photos/Image96.JPG",
    {
      "photoId": "P00133",
      "filename": "Image96.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Gourock",
      "date": "1941",
      "albumComment": "",
      "caption": "Snow at Gourock, Scotland",
      "reverseText": "",
      "keywords": [
        "Gourock",
        "Scotland",
        "Firth of Clyde",
        "snow",
        "snow-covered hills",
        "winter",
        "winter landscape",
        "shoreline",
        "Clyde",
        "naval anchorage",
        "Tail of the Bank",
        "wartime anchorage",
        "HMNZS Tui",
        "WWII",
        "Second World War",
        "1941"
      ],
      "description": "Snow-covered shoreline and hills viewed across the Firth of Clyde at Gourock, Scotland. The photograph was taken from aboard ship, with rough winter water in the foreground. Gourock and the nearby Tail of the Bank were important wartime naval and convoy anchorages.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Saturday, 24 January 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image97.JPG",
    {
      "photoId": "P00134",
      "filename": "Image97.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "North Atlantic",
      "date": "1941",
      "albumComment": "",
      "caption": "Taking it easy: North Atlantic",
      "reverseText": "",
      "keywords": [
        "North Atlantic",
        "Taking it easy",
        "sailors",
        "naval ratings",
        "resting",
        "sleeping",
        "off watch",
        "shipboard life",
        "life at sea",
        "deck",
        "HMNZS Tui",
        "Royal New Zealand Navy",
        "RNZN",
        "Atlantic crossing",
        "WWII",
        "Second World War",
        "1942"
      ],
      "description": "Sailors resting among kit and equipment on deck during a passage across the North Atlantic. One sailor lies back against the ship’s superstructure while others sleep nearby, illustrating off-watch life aboard ship.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image98.JPG",
    {
      "photoId": "P00135",
      "filename": "Image98.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Gourock",
      "date": "1941-12",
      "albumComment": "",
      "caption": "Snowstorm: Gourock, Scotland",
      "reverseText": "",
      "keywords": [
        "HMNZS Tui",
        "snow",
        "snow-covered deck",
        "winter",
        "Scotland",
        "Gourock",
        "shipboard life",
        "deck equipment",
        "ropes",
        "lifeboat",
        "naval vessel",
        "Royal New Zealand Navy",
        "RNZN",
        "WWII",
        "Second World War",
        "1942"
      ],
      "description": "Snow-covered deck and equipment aboard HMNZS Tui, showing the vessel under wintry conditions in Scotland. Heavy snow has accumulated over the deck fittings, ropes and other equipment, with another vessel visible alongside or nearby.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image99.JPG",
    {
      "photoId": "P00136",
      "filename": "Image99.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image100.JPG",
    {
      "photoId": "P00137",
      "filename": "Image100.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image101.JPG",
    {
      "photoId": "P00138",
      "filename": "Image101.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image102.JPG",
    {
      "photoId": "P00139",
      "filename": "Image102.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image103.JPG",
    {
      "photoId": "P00140",
      "filename": "Image103.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image104.JPG",
    {
      "photoId": "P00141",
      "filename": "Image104.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image104b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image104b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00142",
        "filename": "Image104b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "",
        "date": "",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image104.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image104b.JPG",
    {
      "photoId": "P00142",
      "filename": "Image104b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image104.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image104.JPG",
      "frontSrc": "photos/Image104.JPG"
    }
  ],
  [
    "photos/Image105.JPG",
    {
      "photoId": "P00143",
      "filename": "Image105.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Hawaii",
      "date": "1942-06",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Ruth"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Tuesday, 30 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image106.JPG",
    {
      "photoId": "P00144",
      "filename": "Image106.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941-12-22",
      "albumComment": "Just a selection",
      "caption": "Joan:- England",
      "reverseText": "With all my love\nJoan\n22/12/41",
      "keywords": [
        "Joan",
        "Auxiliary Territorial Service",
        "ATS",
        "British Army",
        "servicewoman",
        "ATS uniform",
        "ATS greatcoat",
        "peaked forage cap",
        "cap badge",
        "22 December 1941",
        "Scotland",
        "WWII",
        "Second World War",
        "portrait",
        "women's military service."
      ],
      "description": "Portrait of Joan wearing Auxiliary Territorial Service (ATS) uniform, dated 22 December 1941. She wears a long double-breasted ATS greatcoat and peaked service-dress forage cap with cap badge.",
      "people": [
        "Joan"
      ],
      "faceCount": 1,
      "companionPhotos": [
        "Image106b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Wednesday, 1 October 1941",
          "caption": "Joan"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image106b.JPG",
      "backText": "With all my love\nJoan\n22/12/41",
      "reverseSide": {
        "photoId": "P00145",
        "filename": "Image106b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Cornwall",
        "date": "1941-12-22",
        "albumComment": "Just a selection",
        "caption": "Joan:- England",
        "reverseText": "With all my love\nJoan\n22/12/41",
        "keywords": [
          "Joan",
          "Auxiliary Territorial Service",
          "ATS",
          "British Army",
          "servicewoman",
          "ATS uniform",
          "ATS greatcoat",
          "peaked forage cap",
          "cap badge",
          "22 December 1941",
          "Scotland",
          "WWII",
          "Second World War",
          "portrait",
          "women's military service."
        ],
        "description": "Portrait of Joan wearing Auxiliary Territorial Service (ATS) uniform, dated 22 December 1941. She wears a long double-breasted ATS greatcoat and peaked service-dress forage cap with cap badge.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image106.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image106b.JPG",
    {
      "photoId": "P00145",
      "filename": "Image106b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "1941-12-22",
      "albumComment": "Just a selection",
      "caption": "Joan:- England",
      "reverseText": "With all my love\nJoan\n22/12/41",
      "keywords": [
        "Joan",
        "Auxiliary Territorial Service",
        "ATS",
        "British Army",
        "servicewoman",
        "ATS uniform",
        "ATS greatcoat",
        "peaked forage cap",
        "cap badge",
        "22 December 1941",
        "Scotland",
        "WWII",
        "Second World War",
        "portrait",
        "women's military service."
      ],
      "description": "Portrait of Joan wearing Auxiliary Territorial Service (ATS) uniform, dated 22 December 1941. She wears a long double-breasted ATS greatcoat and peaked service-dress forage cap with cap badge.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image106.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image106.JPG",
      "frontSrc": "photos/Image106.JPG"
    }
  ],
  [
    "photos/Image107.JPG",
    {
      "photoId": "P00146",
      "filename": "Image107.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Capetown",
      "date": "1941-06",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image107b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image107b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00147",
        "filename": "Image107b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Capetown",
        "date": "1941-06",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image107.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image107b.JPG",
    {
      "photoId": "P00147",
      "filename": "Image107b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Capetown",
      "date": "1941-06",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image107.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image107.JPG",
      "frontSrc": "photos/Image107.JPG"
    }
  ],
  [
    "photos/Image108.JPG",
    {
      "photoId": "P00148",
      "filename": "Image108.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image109.JPG",
    {
      "photoId": "P00149",
      "filename": "Image109.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Australia",
      "date": "1941-06",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image109b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image109b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00150",
        "filename": "Image109b.JPG",
        "status": "Active",
        "sortingBox": "Unconnected",
        "location": "Australia",
        "date": "1941-06",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image109.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image109b.JPG",
    {
      "photoId": "P00150",
      "filename": "Image109b.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "Australia",
      "date": "1941-06",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image109.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image109.JPG",
      "frontSrc": "photos/Image109.JPG"
    }
  ],
  [
    "photos/Image110.JPG",
    {
      "photoId": "P00151",
      "filename": "Image110.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "Action stations",
      "reverseText": "",
      "keywords": [
        "HMNZS Muritai",
        "T05",
        "4-inch naval gun",
        "gun crew",
        "gunnery",
        "gunnery practice",
        "naval artillery",
        "gun mounting",
        "gun sight",
        "training wheel",
        "sailors",
        "working rig",
        "auxiliary minesweeper",
        "New Zealand Naval Forces",
        "Royal New Zealand Navy",
        "WWII",
        "1940",
        "1941"
      ],
      "description": "Gun crew aboard HMNZS Muritai manning the ship’s forward 4-inch naval gun during gunnery practice, c. 1940–41. The photograph gives a clear view of the gun’s open mounting, training wheel, sighting equipment and crew positions. The men are dressed in working rig, with several wearing anti-flash or protective gear around the neck and head.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image111.JPG",
    {
      "photoId": "P00152",
      "filename": "Image111.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "Aden",
        "Yemen",
        "Aden Harbour",
        "Arabian Peninsula",
        "Gulf of Aden",
        "mountains",
        "volcanic landscape",
        "coastline",
        "harbour approach",
        "shipboard photograph",
        "WWII",
        "1941"
      ],
      "description": "View of Aden, photographed from offshore in 1941. The settlement lies along the shoreline beneath the steep, jagged volcanic mountains characteristic of the Aden peninsula. The photograph was likely taken from a ship approaching or lying off the port during the voyage through the Red Sea and Gulf of Aden.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image112.JPG",
    {
      "photoId": "P00153",
      "filename": "Image112.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [
        "Aden",
        "Yemen",
        "Aden Harbour",
        "Aden anchorage",
        "Arab dhow",
        "dhow",
        "merchant ships",
        "wartime shipping",
        "convoy shipping",
        "Red Sea route",
        "Gulf of Aden",
        "Indian Ocean",
        "shipboard photograph",
        "WWII"
      ],
      "description": "Shipping at anchor off Aden, photographed from aboard ship. Numerous merchant vessels are gathered across the anchorage, with a traditional Arab dhow under sail passing among them. The concentration of shipping reflects Aden’s importance as a wartime port and fuelling/convoy staging point on the route between the Red Sea and Indian Ocean.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image113.JPG",
    {
      "photoId": "P00154",
      "filename": "Image113.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "A little high",
      "reverseText": "",
      "keywords": [
        "HMNZS Muritai",
        "T05",
        "gunnery practice",
        "4-inch gun",
        "naval gunfire",
        "shell splash",
        "target practice",
        "target",
        "overshoot",
        "“a little high”",
        "New Zealand Naval Forces",
        "WWII",
        "1940",
        "1941"
      ],
      "description": "Shell splash from gunnery practice at sea, photographed from HMNZS Muritai, c. 1940–41. A small target or target float is visible near the centre of the photograph, with the shell striking the water slightly beyond it. The original caption, “a little high,” indicates the shot had passed over the target.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image114.JPG",
    {
      "photoId": "P00155",
      "filename": "Image114.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "1941",
      "albumComment": "",
      "caption": "Snowstorm:- Scotland",
      "reverseText": "",
      "keywords": [
        "Scotland",
        "snowstorm",
        "snow",
        "winter",
        "naval vessel",
        "ship deck",
        "shipboard life",
        "ship’s boat",
        "davits",
        "deck equipment",
        "Royal New Zealand Navy",
        "WWII"
      ],
      "description": "View along the deck of a naval vessel during heavy winter weather in Scotland. Snow has accumulated across the deck, fittings and equipment, while the ship’s boat and davits are visible overhead. The photograph records the exposed conditions experienced aboard ship during the Scottish winter.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 25 February 1942",
          "caption": "Snowstorm:- Scotland"
        }
      ]
    }
  ],
  [
    "photos/Image115.JPG",
    {
      "photoId": "P00156",
      "filename": "Image115.JPG",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "High Com NZ bids us farewell",
      "reverseText": "",
      "keywords": [
        "New Zealand High Commissioner",
        "“High Com NZ bids us farewell”",
        "official visit",
        "farewell",
        "New Zealand",
        "Scotland",
        "naval personnel",
        "officers",
        "sailors",
        "shipboard",
        "WWII"
      ],
      "description": "The New Zealand High Commissioner and accompanying naval personnel aboard ship in Scotland, photographed during a farewell visit before departure. The High Commissioner appears among the group on deck, surrounded by officers and crew.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 25 February 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image116.JPG",
    {
      "photoId": "P00157",
      "filename": "Image116.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Cornwall",
      "date": "",
      "albumComment": "",
      "caption": "Two cobbers. Cornwall",
      "reverseText": "",
      "keywords": [
        "New Zealand sailors",
        "Royal New Zealand Navy",
        "RNZN",
        "naval ratings",
        "square-rig uniform",
        "sailor uniform",
        "bell-bottom trousers",
        "naval caps",
        "shore leave",
        "shipmates",
        "WWII"
      ],
      "description": "Two New Zealand sailors pose together while ashore. Both wear Royal New Zealand Navy square-rig uniform with dark jumpers, white undershirts, bell-bottom trousers and naval caps. Their trousers have been rolled well above the ankles, suggesting warm-weather conditions and an informal moment while on leave or liberty.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Thursday, 30 October 1941",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image117.JPG",
    {
      "photoId": "P00158",
      "filename": "Image117.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "There she goes",
      "reverseText": "",
      "keywords": [
        "HMNZS Muritai",
        "T05",
        "4-inch gun",
        "naval gun",
        "gunnery practice",
        "gun crew",
        "live firing",
        "shell splash",
        "target practice",
        "auxiliary minesweeper",
        "New Zealand Naval Forces",
        "Royal New Zealand Navy",
        "WWII",
        "1940",
        "1941",
        "naval training"
      ],
      "description": "Crew aboard HMNZS Muritai operating her forward-mounted 4-inch naval gun during gunnery practice, c. 1940–41. A large shell splash is visible close to the target ahead of the ship. Several sailors brace themselves and hold their caps as the gun is fired.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image118.JPG",
    {
      "photoId": "P00159",
      "filename": "Image118.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Scotland",
      "date": "1941-11",
      "albumComment": "",
      "caption": "Firth O Forth - Port Edgar",
      "reverseText": "",
      "keywords": [
        "Forth Bridge",
        "Firth of Forth",
        "Scotland",
        "November 1941",
        "cantilever bridge",
        "railway bridge",
        "shipboard photograph",
        "naval service",
        "WWII",
        "HMNZS Tui",
        "Edinburgh",
        "Queensferry"
      ],
      "description": "The Forth Bridge spanning the Firth of Forth, Scotland, photographed from aboard ship in November 1941. The view from water level shows the massive cantilever structure of the railway bridge as the vessel passes beneath or close alongside it.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image118b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Friday, 12 December 1941",
          "caption": "Forth Bridge / Port Edgar"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image118b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00160",
        "filename": "Image118b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "Scotland",
        "date": "1941-11",
        "albumComment": "",
        "caption": "Firth O Forth - Port Edgar",
        "reverseText": "",
        "keywords": [
          "Forth Bridge",
          "Firth of Forth",
          "Scotland",
          "November 1941",
          "cantilever bridge",
          "railway bridge",
          "shipboard photograph",
          "naval service",
          "WWII",
          "HMNZS Tui",
          "Edinburgh",
          "Queensferry"
        ],
        "description": "The Forth Bridge spanning the Firth of Forth, Scotland, photographed from aboard ship in November 1941. The view from water level shows the massive cantilever structure of the railway bridge as the vessel passes beneath or close alongside it.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image118.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image118b.JPG",
    {
      "photoId": "P00160",
      "filename": "Image118b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "Scotland",
      "date": "1941-11",
      "albumComment": "",
      "caption": "Firth O Forth - Port Edgar",
      "reverseText": "",
      "keywords": [
        "Forth Bridge",
        "Firth of Forth",
        "Scotland",
        "November 1941",
        "cantilever bridge",
        "railway bridge",
        "shipboard photograph",
        "naval service",
        "WWII",
        "HMNZS Tui",
        "Edinburgh",
        "Queensferry"
      ],
      "description": "The Forth Bridge spanning the Firth of Forth, Scotland, photographed from aboard ship in November 1941. The view from water level shows the massive cantilever structure of the railway bridge as the vessel passes beneath or close alongside it.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image118.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image118.JPG",
      "frontSrc": "photos/Image118.JPG"
    }
  ],
  [
    "photos/Image119.JPG",
    {
      "photoId": "P00161",
      "filename": "Image119.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "Firth O Forth - Port Edgar",
      "reverseText": "",
      "keywords": [
        "Forth Bridge",
        "Firth of Forth",
        "Scotland",
        "November 1941",
        "cantilever bridge",
        "railway bridge",
        "shipboard photograph",
        "naval service",
        "WWII",
        "HMNZS Tui",
        "Edinburgh",
        "Queensferry"
      ],
      "description": "The Forth Bridge spanning the Firth of Forth, Scotland, photographed from aboard ship in December 1941. The view from water level shows the massive cantilever structure of the railway bridge as the vessel passes beneath or close alongside it.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image119b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Friday, 12 December 1941",
          "caption": "Photograph"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image119b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00162",
        "filename": "Image119b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "",
        "date": "",
        "albumComment": "",
        "caption": "Firth O Forth - Port Edgar",
        "reverseText": "",
        "keywords": [
          "Forth Bridge",
          "Firth of Forth",
          "Scotland",
          "November 1941",
          "cantilever bridge",
          "railway bridge",
          "shipboard photograph",
          "naval service",
          "WWII",
          "HMNZS Tui",
          "Edinburgh",
          "Queensferry"
        ],
        "description": "The Forth Bridge spanning the Firth of Forth, Scotland, photographed from aboard ship in December 1941. The view from water level shows the massive cantilever structure of the railway bridge as the vessel passes beneath or close alongside it.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image119.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image119b.JPG",
    {
      "photoId": "P00162",
      "filename": "Image119b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "Firth O Forth - Port Edgar",
      "reverseText": "",
      "keywords": [
        "Forth Bridge",
        "Firth of Forth",
        "Scotland",
        "November 1941",
        "cantilever bridge",
        "railway bridge",
        "shipboard photograph",
        "naval service",
        "WWII",
        "HMNZS Tui",
        "Edinburgh",
        "Queensferry"
      ],
      "description": "The Forth Bridge spanning the Firth of Forth, Scotland, photographed from aboard ship in December 1941. The view from water level shows the massive cantilever structure of the railway bridge as the vessel passes beneath or close alongside it.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image119.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image119.JPG",
      "frontSrc": "photos/Image119.JPG"
    }
  ],
  [
    "photos/Image120.JPG",
    {
      "photoId": "P00163",
      "filename": "Image120.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image121.JPG",
    {
      "photoId": "P00164",
      "filename": "Image121.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image122.JPG",
    {
      "photoId": "P00165",
      "filename": "Image122.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image123.JPG",
    {
      "photoId": "P00166",
      "filename": "Image123.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Bert France",
        "Jack",
        "Margaret"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image124.JPG",
    {
      "photoId": "P00167",
      "filename": "Image124.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Pearl Harbour",
      "date": "1942",
      "albumComment": "",
      "caption": "Ray: Pearl Harbour",
      "reverseText": "",
      "keywords": [
        "Raymond Dwight Harshman",
        "Raymond D. Harshman",
        "USS Utah",
        "USS Utah AG-16",
        "Pearl Harbor survivor",
        "Pearl Harbor",
        "Hawaii",
        "Territory of Hawaii",
        "US Navy",
        "Yard Salvage",
        "Building 125",
        "24 June 1942",
        "WWII",
        "Pacific War",
        "sailor",
        "naval uniform"
      ],
      "description": "Studio portrait of Raymond Dwight Harshman, a U.S. Navy sailor and survivor of the Japanese attack on Pearl Harbor while serving aboard USS Utah.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image124b.JPG"
      ],
      "journalEntries": [
        {
          "date": "Monday, 22 June 1942",
          "caption": "Ray: Pearl Harbour"
        }
      ],
      "hasBack": true,
      "backSrc": "photos/Image124b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00168",
        "filename": "Image124b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "Pearl Harbour",
        "date": "1942",
        "albumComment": "",
        "caption": "Ray: Pearl Harbour",
        "reverseText": "",
        "keywords": [
          "Raymond Dwight Harshman",
          "Raymond D. Harshman",
          "USS Utah",
          "USS Utah AG-16",
          "Pearl Harbor survivor",
          "Pearl Harbor",
          "Hawaii",
          "Territory of Hawaii",
          "US Navy",
          "Yard Salvage",
          "Building 125",
          "24 June 1942",
          "WWII",
          "Pacific War",
          "sailor",
          "naval uniform"
        ],
        "description": "Studio portrait of Raymond Dwight Harshman, a U.S. Navy sailor and survivor of the Japanese attack on Pearl Harbor while serving aboard USS Utah.",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image124.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image124b.JPG",
    {
      "photoId": "P00168",
      "filename": "Image124b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Pearl Harbour",
      "date": "1942",
      "albumComment": "",
      "caption": "Ray: Pearl Harbour",
      "reverseText": "",
      "keywords": [
        "Raymond Dwight Harshman",
        "Raymond D. Harshman",
        "USS Utah",
        "USS Utah AG-16",
        "Pearl Harbor survivor",
        "Pearl Harbor",
        "Hawaii",
        "Territory of Hawaii",
        "US Navy",
        "Yard Salvage",
        "Building 125",
        "24 June 1942",
        "WWII",
        "Pacific War",
        "sailor",
        "naval uniform"
      ],
      "description": "Studio portrait of Raymond Dwight Harshman, a U.S. Navy sailor and survivor of the Japanese attack on Pearl Harbor while serving aboard USS Utah.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image124.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image124.JPG",
      "frontSrc": "photos/Image124.JPG"
    }
  ],
  [
    "photos/Image125.JPG",
    {
      "photoId": "P00169",
      "filename": "Image125.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Gloria"
      ],
      "faceCount": 1,
      "companionPhotos": [
        "Image125b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/Image125b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00170",
        "filename": "Image125b.JPG",
        "status": "Active",
        "sortingBox": "Photos With Faces",
        "location": "California",
        "date": "1942",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "Image125.JPG"
        ]
      }
    }
  ],
  [
    "photos/Image125b.JPG",
    {
      "photoId": "P00170",
      "filename": "Image125b.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "Image125.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "Image125.JPG",
      "frontSrc": "photos/Image125.JPG"
    }
  ],
  [
    "photos/Image126.jpg",
    {
      "photoId": "P00171",
      "filename": "Image126.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Ray"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image127.jpg",
    {
      "photoId": "P00172",
      "filename": "Image127.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "After a swim at the \"Plunge\"...\nLong Beach",
      "reverseText": "",
      "keywords": [
        "Long Beach",
        "California",
        "1942",
        "American car",
        "vintage car",
        "coupe",
        "sailor leave",
        "WWII",
        "Second World War",
        "United States",
        "automobile"
      ],
      "description": "A man poses beside a late-1920s/early-1930s American coupe in Long Beach, California, during 1942. The car has a fabric-roofed passenger compartment, separate running boards, sweeping rear bodywork and a rear-mounted spare wheel. A cloth or towel has been hung over the driver's door.",
      "people": [
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image128.jpg",
    {
      "photoId": "P00173",
      "filename": "Image128.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "Would you care for a lift?\nLong Bay",
      "reverseText": "",
      "keywords": [
        "Long Beach",
        "California",
        "1942",
        "New Zealand sailor",
        "Royal New Zealand Navy",
        "American woman",
        "American car",
        "coupe",
        "whitewall tyres",
        "Buick",
        "WWII",
        "shore leave",
        "United States"
      ],
      "description": "A New Zealand sailor poses beside a large American two-door coupe in Long Beach, California, 1942, with a woman seated behind the wheel. The car has prominent whitewall tyres, running boards and streamlined late-1930s/early-1940s styling. Industrial structures visible behind the car reflect the heavily developed Long Beach area.",
      "people": [
        "Bert France",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image129.jpg",
    {
      "photoId": "P00174",
      "filename": "Image129.jpg",
      "status": "Active",
      "sortingBox": "Unconnected",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image130.jpg",
    {
      "photoId": "P00175",
      "filename": "Image130.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Betty-Lou"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image131.jpg",
    {
      "photoId": "P00176",
      "filename": "Image131.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Jackie"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image132.jpg",
    {
      "photoId": "P00177",
      "filename": "Image132.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Gloria",
        "Lester",
        "Virgie"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/Image133.jpg",
    {
      "photoId": "P00178",
      "filename": "Image133.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Dave",
        "Ray"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image134.jpg",
    {
      "photoId": "P00179",
      "filename": "Image134.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Ray"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image135.jpg",
    {
      "photoId": "P00180",
      "filename": "Image135.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "California",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Ray"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image136.jpg",
    {
      "photoId": "P00181",
      "filename": "Image136.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Georgia",
        "Martin",
        "Val"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image137.jpg",
    {
      "photoId": "P00182",
      "filename": "Image137.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Georgia",
        "Martin",
        "Val"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image138.jpg",
    {
      "photoId": "P00183",
      "filename": "Image138.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Georgia",
        "Martin",
        "Val"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image139.jpg",
    {
      "photoId": "P00184",
      "filename": "Image139.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Val",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image140.jpg",
    {
      "photoId": "P00185",
      "filename": "Image140.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Leon France",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image141.jpg",
    {
      "photoId": "P00186",
      "filename": "Image141.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Val"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image142.jpg",
    {
      "photoId": "P00187",
      "filename": "Image142.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Georgia",
        "Val"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image143.jpg",
    {
      "photoId": "P00188",
      "filename": "Image143.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "New Zealand",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Georgia",
        "Val"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image144.jpg",
    {
      "photoId": "P00189",
      "filename": "Image144.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Bermuda",
      "date": "1942",
      "albumComment": "",
      "caption": "Ireland Island, Burmuda",
      "reverseText": "",
      "keywords": [
        "Ireland Island",
        "Bermuda",
        "Somerset Dockyard",
        "HMNZS Tui",
        "Royal New Zealand Navy",
        "RNZN",
        "sailor",
        "naval uniform",
        "limestone",
        "rock formation",
        "shore leave",
        "April 1942",
        "WWII",
        "Second World War",
        "Bermuda 1942"
      ],
      "description": "A sailor in Royal New Zealand Navy uniform poses beside a large, weathered limestone outcrop on Ireland Island, Bermuda. The photograph was taken during Tui's stay at Bermuda in April 1942, when the ship was based at Somerset Dockyard on Ireland Island.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image145.jpg",
    {
      "photoId": "P00190",
      "filename": "Image145.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image146.jpg",
    {
      "photoId": "P00191",
      "filename": "Image146.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "HMNZS Muritai",
      "date": "",
      "albumComment": "",
      "caption": "Action Stations",
      "reverseText": "",
      "keywords": [
        "HMNZS Muritai",
        "Muritai",
        "Royal New Zealand Navy",
        "RNZN",
        "naval gun",
        "gun crew",
        "naval artillery",
        "deck gun",
        "foredeck",
        "bow gun",
        "gun mounting",
        "ammunition",
        "fixed ammunition",
        "gun loading",
        "sailors",
        "naval training",
        "WWII",
        "Second World War",
        "New Zealand Navy"
      ],
      "description": "Sailors operating a large naval gun on an open pedestal mounting, probably positioned on the foredeck of HMNZS Muritai. The crew are shown at their action stations, with one sailor holding a substantial fixed round ready for loading. The gun has a large breech and recoil mechanism, manual training and elevation controls, and an open mounting without a protective gun shield. The narrowing deck and bow immediately ahead of the mounting support the probable identification of the vessel as Muritai.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image147.jpg",
    {
      "photoId": "P00192",
      "filename": "Image147.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "HMNZS Muritai",
      "date": "",
      "albumComment": "",
      "caption": "Up eight hundred",
      "reverseText": "",
      "keywords": [
        "HMNZS Muritai",
        "Muritai",
        "Royal New Zealand Navy",
        "RNZN",
        "naval gun",
        "deck gun",
        "bow gun",
        "foredeck",
        "gun mounting",
        "gun breech",
        "recoil mechanism",
        "gun crew",
        "sailors",
        "naval gunnery",
        "naval training",
        "WWII",
        "Second World War",
        "New Zealand Navy"
      ],
      "description": "View from behind a large naval gun mounted on the foredeck of what is probably HMNZS Muritai. Sailors are positioned around the open pedestal mounting, with the barrel trained forward over the bow. The photograph clearly shows the gun's substantial breech and recoil mechanism, manual control wheel, sighting framework and the unusually exposed mounting without a gun shield. The narrow bow, low guardrails and position of the weapon at the extreme forward end of the vessel are consistent with the Muritai identification.",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image148.jpg",
    {
      "photoId": "P00193",
      "filename": "Image148.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "HMNZS Breeze",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image149.jpg",
    {
      "photoId": "P00194",
      "filename": "Image149.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Sydney",
      "date": "1945",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image150.jpg",
    {
      "photoId": "P00195",
      "filename": "Image150.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Sydney",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image151.jpg",
    {
      "photoId": "P00196",
      "filename": "Image151.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Sydney",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image152.jpg",
    {
      "photoId": "P00197",
      "filename": "Image152.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Sydney",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image153.jpg",
    {
      "photoId": "P00198",
      "filename": "Image153.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image154.jpg",
    {
      "photoId": "P00199",
      "filename": "Image154.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image155.jpg",
    {
      "photoId": "P00200",
      "filename": "Image155.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image156.jpg",
    {
      "photoId": "P00201",
      "filename": "Image156.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image157.jpg",
    {
      "photoId": "P00202",
      "filename": "Image157.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image158.jpg",
    {
      "photoId": "P00203",
      "filename": "Image158.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image159.jpg",
    {
      "photoId": "P00204",
      "filename": "Image159.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image160.jpg",
    {
      "photoId": "P00205",
      "filename": "Image160.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image161.jpg",
    {
      "photoId": "P00206",
      "filename": "Image161.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image162.jpg",
    {
      "photoId": "P00207",
      "filename": "Image162.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 008",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image163.jpg",
    {
      "photoId": "P00208",
      "filename": "Image163.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 007",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image164.jpg",
    {
      "photoId": "P00209",
      "filename": "Image164.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 007",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image165.jpg",
    {
      "photoId": "P00210",
      "filename": "Image165.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image166.jpg",
    {
      "photoId": "P00211",
      "filename": "Image166.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image167.jpg",
    {
      "photoId": "P00212",
      "filename": "Image167.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 008",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image168.jpg",
    {
      "photoId": "P00213",
      "filename": "Image168.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image169.jpg",
    {
      "photoId": "P00214",
      "filename": "Image169.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 007",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image170.jpg",
    {
      "photoId": "P00215",
      "filename": "Image170.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 007",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image171.jpg",
    {
      "photoId": "P00216",
      "filename": "Image171.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "Person 007",
        "William France"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image172.jpg",
    {
      "photoId": "P00217",
      "filename": "Image172.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Panama",
      "date": "1942",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 006",
        "William France"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image173.jpg",
    {
      "photoId": "P00218",
      "filename": "Image173.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/Image174.jpg",
    {
      "photoId": "P00219",
      "filename": "Image174.jpg",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_1613.jpg",
    {
      "photoId": "P00220",
      "filename": "IMG_1613.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_1614.jpg",
    {
      "photoId": "P00221",
      "filename": "IMG_1614.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_1615.jpg",
    {
      "photoId": "P00222",
      "filename": "IMG_1615.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_1616.jpg",
    {
      "photoId": "P00223",
      "filename": "IMG_1616.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_1621.png",
    {
      "photoId": "P00224",
      "filename": "IMG_1621.png",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7720.JPG",
    {
      "photoId": "P00225",
      "filename": "IMG_7720.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Bob",
        "Irene"
      ],
      "faceCount": 2,
      "companionPhotos": [
        "IMG_7721.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7721.JPG",
    {
      "photoId": "P00226",
      "filename": "IMG_7721.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7720.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7722.JPG",
    {
      "photoId": "P00227",
      "filename": "IMG_7722.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7723.JPG",
    {
      "photoId": "P00228",
      "filename": "IMG_7723.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Virgie"
      ],
      "faceCount": 1,
      "companionPhotos": [
        "IMG_7724.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7724.JPG",
    {
      "photoId": "P00229",
      "filename": "IMG_7724.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7723.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7725.JPG",
    {
      "photoId": "P00230",
      "filename": "IMG_7725.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [
        "IMG_7726.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7726.JPG",
    {
      "photoId": "P00231",
      "filename": "IMG_7726.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7725.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7727.JPG",
    {
      "photoId": "P00232",
      "filename": "IMG_7727.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 029"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Monday, 1 June 1942",
          "caption": ""
        }
      ]
    }
  ],
  [
    "photos/IMG_7728.JPG",
    {
      "photoId": "P00233",
      "filename": "IMG_7728.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7729.JPG",
    {
      "photoId": "P00234",
      "filename": "IMG_7729.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7730.JPG",
    {
      "photoId": "P00235",
      "filename": "IMG_7730.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Bob",
        "Irene"
      ],
      "faceCount": 2,
      "companionPhotos": [
        "IMG_7731.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7731.JPG",
    {
      "photoId": "P00236",
      "filename": "IMG_7731.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7730.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7732.JPG",
    {
      "photoId": "P00237",
      "filename": "IMG_7732.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Thursday, 26 March 1942",
          "caption": "Two New Zealand ships in convoy"
        }
      ]
    }
  ],
  [
    "photos/IMG_7733.JPG",
    {
      "photoId": "P00238",
      "filename": "IMG_7733.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7734.JPG",
    {
      "photoId": "P00239",
      "filename": "IMG_7734.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7735.JPG",
    {
      "photoId": "P00240",
      "filename": "IMG_7735.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7736.JPG",
    {
      "photoId": "P00241",
      "filename": "IMG_7736.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7737.JPG",
    {
      "photoId": "P00242",
      "filename": "IMG_7737.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7738.JPG",
    {
      "photoId": "P00243",
      "filename": "IMG_7738.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7739.JPG",
    {
      "photoId": "P00244",
      "filename": "IMG_7739.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7740.JPG",
    {
      "photoId": "P00245",
      "filename": "IMG_7740.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7741.JPG",
    {
      "photoId": "P00246",
      "filename": "IMG_7741.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Hinemoa"
        }
      ]
    }
  ],
  [
    "photos/IMG_7742.JPG",
    {
      "photoId": "P00247",
      "filename": "IMG_7742.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Betty-Lou",
        "Hinemoa",
        "Person 039"
      ],
      "faceCount": 3,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Hinemoa and Betty-Lou"
        }
      ]
    }
  ],
  [
    "photos/IMG_7743.JPG",
    {
      "photoId": "P00248",
      "filename": "IMG_7743.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7744.JPG",
    {
      "photoId": "P00249",
      "filename": "IMG_7744.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Hinemoa",
        "Jack"
      ],
      "faceCount": 2,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 10 June 1942",
          "caption": "Hinemoa and Jack"
        }
      ]
    }
  ],
  [
    "photos/IMG_7745.JPG",
    {
      "photoId": "P00250",
      "filename": "IMG_7745.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7746.JPG",
    {
      "photoId": "P00251",
      "filename": "IMG_7746.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Australia",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7747.JPG",
    {
      "photoId": "P00252",
      "filename": "IMG_7747.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7748.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7748.JPG",
    {
      "photoId": "P00253",
      "filename": "IMG_7748.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7747.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7749.JPG",
    {
      "photoId": "P00254",
      "filename": "IMG_7749.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7750.JPG",
    {
      "photoId": "P00255",
      "filename": "IMG_7750.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Australia",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "Person 022"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7751.JPG",
    {
      "photoId": "P00256",
      "filename": "IMG_7751.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7752.JPG",
    {
      "photoId": "P00257",
      "filename": "IMG_7752.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7753.JPG",
    {
      "photoId": "P00258",
      "filename": "IMG_7753.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7754.JPG",
    {
      "photoId": "P00259",
      "filename": "IMG_7754.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "Bermuda",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7755.JPG",
    {
      "photoId": "P00260",
      "filename": "IMG_7755.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7755b.JPG"
      ],
      "journalEntries": [],
      "hasBack": true,
      "backSrc": "photos/IMG_7755b.JPG",
      "backText": "",
      "reverseSide": {
        "photoId": "P00261",
        "filename": "IMG_7755b.JPG",
        "status": "Active",
        "sortingBox": "Photos Without Faces",
        "location": "",
        "date": "",
        "albumComment": "",
        "caption": "",
        "reverseText": "",
        "keywords": [],
        "description": "",
        "people": [],
        "faceCount": 0,
        "companionPhotos": [
          "IMG_7755.JPG"
        ]
      }
    }
  ],
  [
    "photos/IMG_7755b.JPG",
    {
      "photoId": "P00261",
      "filename": "IMG_7755b.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7755.JPG"
      ],
      "journalEntries": [],
      "isReverseSide": true,
      "frontPhoto": "IMG_7755.JPG",
      "frontSrc": "photos/IMG_7755.JPG"
    }
  ],
  [
    "photos/IMG_7756.JPG",
    {
      "photoId": "P00262",
      "filename": "IMG_7756.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7757.JPG",
    {
      "photoId": "P00263",
      "filename": "IMG_7757.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7758.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7758.JPG",
    {
      "photoId": "P00264",
      "filename": "IMG_7758.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7757.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7759.JPG",
    {
      "photoId": "P00265",
      "filename": "IMG_7759.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7760.JPG",
    {
      "photoId": "P00266",
      "filename": "IMG_7760.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "HMNZS Tui",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Thursday, 11 December 1941",
          "caption": "Gun on HMNZS Tui"
        }
      ]
    }
  ],
  [
    "photos/IMG_7761.JPG",
    {
      "photoId": "P00267",
      "filename": "IMG_7761.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7762.JPG",
    {
      "photoId": "P00268",
      "filename": "IMG_7762.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7763.JPG",
    {
      "photoId": "P00269",
      "filename": "IMG_7763.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Sunday, 26 April 1942",
          "caption": "Photograph"
        }
      ]
    }
  ],
  [
    "photos/IMG_7764.JPG",
    {
      "photoId": "P00270",
      "filename": "IMG_7764.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Tuesday, 14 April 1942",
          "caption": "Deep-sea diver"
        }
      ]
    }
  ],
  [
    "photos/IMG_7765.JPG",
    {
      "photoId": "P00271",
      "filename": "IMG_7765.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7766.JPG",
    {
      "photoId": "P00272",
      "filename": "IMG_7766.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [
        "William France"
      ],
      "faceCount": 1,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7767.JPG",
    {
      "photoId": "P00273",
      "filename": "IMG_7767.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7768.JPG",
    {
      "photoId": "P00274",
      "filename": "IMG_7768.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7769.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7769.JPG",
    {
      "photoId": "P00275",
      "filename": "IMG_7769.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7768.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7770.JPG",
    {
      "photoId": "P00276",
      "filename": "IMG_7770.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7771.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7771.JPG",
    {
      "photoId": "P00277",
      "filename": "IMG_7771.JPG",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [
        "IMG_7770.JPG"
      ],
      "journalEntries": []
    }
  ],
  [
    "photos/IMG_7772.JPG",
    {
      "photoId": "P00278",
      "filename": "IMG_7772.JPG",
      "status": "Active",
      "sortingBox": "Photos With Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/spareacopper.jpg",
    {
      "photoId": "P00279",
      "filename": "spareacopper.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Saturday, 20 September 1941",
          "caption": "spareacopper"
        }
      ]
    }
  ],
  [
    "photos/thefarmerswife.jpg",
    {
      "photoId": "P00280",
      "filename": "thefarmerswife.jpg",
      "status": "Active",
      "sortingBox": "Photos Without Faces",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": [
        {
          "date": "Wednesday, 24 September 1941",
          "caption": "The Farmer's Wife"
        }
      ]
    }
  ],
  [
    "photos/UK.PNG",
    {
      "photoId": "P00281",
      "filename": "UK.PNG",
      "status": "Deleted",
      "sortingBox": "Deleted Photos",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ],
  [
    "photos/World.PNG",
    {
      "photoId": "P00282",
      "filename": "World.PNG",
      "status": "Deleted",
      "sortingBox": "Deleted Photos",
      "location": "",
      "date": "",
      "albumComment": "",
      "caption": "",
      "reverseText": "",
      "keywords": [],
      "description": "",
      "people": [],
      "faceCount": 0,
      "companionPhotos": [],
      "journalEntries": []
    }
  ]
];
