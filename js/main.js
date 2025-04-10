Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTA0YmMyYy1iNzFkLTRmZDYtYTE2Mi1jNGYzMDRiNWNhY2YiLCJpZCI6MjkyMDUwLCJpYXQiOjE3NDQxMTY3NDd9.G9MSEuHjPF4ZPjAe8r4yEo_qnrSgrJ-_duBiKfYko8o';

const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});