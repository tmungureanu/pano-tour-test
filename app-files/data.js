var APP_DATA = {
  "scenes": [
    {
      "id": "0-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "yaw": -1.5686412605685192,
        "pitch": 0.021269423288501343,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.5686412605685192,
          "pitch": 0.021269423288501343,
          "rotation": 6.283185307179586,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.256546021367324,
          "pitch": 0.00790552536223288,
          "title": "This is a title!",
          "text": "... and this is a lift!"
        }
      ]
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2217944969723824,
          "pitch": -0.01263659840623177,
          "rotation": 7.853981633974483,
          "target": "0-courtyard"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7008457149220639,
          "pitch": -0.8879686443390877,
          "title": "Balcony",
          "text": "This is a cool balcony!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
