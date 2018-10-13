(function () {
    const dashboard = document.getElementById('dashboard');
    dashboard.width = dashboard.offsetWidth;
    dashboard.height = dashboard.offsetHeight;
    const ctx = dashboard.getContext('2d');

    let entity =
        {
            sky: new Rectangle(
                {
                    position: new Vector2D(0, 0),
                    width: dashboard.width,
                    height: dashboard.height / 3 * 2,
                    fillColor: '#3c78d8'
                }),
            floor: new Rectangle(
                {
                    position: new Vector2D(0, dashboard.height / 3 * 2),
                    width: dashboard.width,
                    height: dashboard.height / 3,
                    fillColor: '#6aa84f'
                }),
            house: new House(
                {
                    position: new Vector2D(dashboard.width / 2 - dashboard.width / 8, dashboard.height - dashboard.height / 2 - dashboard.height * 0.05),
                    width: dashboard.width / 4,
                    height: dashboard.height / 2,
                    bodyColor: '#bf9000',
                    windowColor: '#ffd966',
                    windowBorderColor: '#000',
                    roofColor: '#c00',
                    trumpetColor: '#666666'
                }),
            cloud1: new Cloud(
                {
                    position: new Vector2D(dashboard.width * 0.1, dashboard.height * 0.1),
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3'
                }),
            cloud2: new Cloud(
                {
                    position: new Vector2D(dashboard.width * 0.4, dashboard.height * 0.1),
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3'
                }),
            cloud3: new Cloud(
                {
                    position: new Vector2D(dashboard.width * 0.7, dashboard.height * 0.1),
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3'
                }),
            sun: new Sun
            (
                {
                    position: new Vector2D(-5, -5),
                    radius: dashboard.height * 0.15,
                    fillColor: '#ffbb00'
                }
            )
        };

    let scene = new Scene(ctx);

    scene.addObject(entity.sky);
    scene.addObject(entity.floor);
    scene.addObject(entity.house);
    scene.addObject(entity.cloud1);
    scene.addObject(entity.cloud2);
    scene.addObject(entity.cloud3);
    scene.addObject(entity.sun);

    scene.draw();
})();