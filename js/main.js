Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTA0YmMyYy1iNzFkLTRmZDYtYTE2Mi1jNGYzMDRiNWNhY2YiLCJpZCI6MjkyMDUwLCJpYXQiOjE3NDQxMTY3NDd9.G9MSEuHjPF4ZPjAe8r4yEo_qnrSgrJ-_duBiKfYko8o';

const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

// List of cities and their coordinates
const cities = [
    { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Cape Town', latitude: -33.9249, longitude: 18.4241 },
    { name: 'Sydney', latitude: -33.8688, longitude: 151.2153 },
    { name: 'Tokyo', latitude: 35.6812, longitude: 139.7671 },
    { name: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729 },
    { name: 'Mexico City', latitude: 19.4326, longitude: -99.1332 },
    { name: 'Moscow', latitude: 55.7558, longitude: 37.6176 },
    { name: 'Beijing', latitude: 39.9087, longitude: 116.3975 },
    { name: 'Cairo', latitude: 30.0444, longitude: 31.2357 },
    { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
    { name: 'Rome', latitude: 41.9033, longitude: 12.4534 },
    { name: 'Dubai', latitude: 25.276987, longitude: 55.296233 },
];

// Add city markers to the viewer
cities.forEach(city => {
    viewer.entities.add({
      id: city.name, // unique id
      name: city.name,
      position: Cesium.Cartesian3.fromDegrees(city.longitude, city.latitude),
      point: {
        pixelSize: 8,
        color: Cesium.Color.ORANGE,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2
      },
      label: {
        text: city.name,
        font: "14pt sans-serif",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -10)
      }
    });
  });

const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);

handler.setInputAction(function(click) {
    const pickedLocation = viewer.camera.pickEllipsoid(click.position, viewer.scene.globe.ellipsoid);
    if (pickedLocation) {
        const cartographic = Cesium.Cartographic.fromCartesian(pickedLocation);
        const latitude = Cesium.Math.toDegrees(cartographic.latitude);
        const longitude = Cesium.Math.toDegrees(cartographic.longitude);
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
});