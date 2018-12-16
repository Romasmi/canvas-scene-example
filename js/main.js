(function () {
    const dashboard = document.getElementById('dashboard');
    dashboard.width = dashboard.offsetWidth;
    dashboard.height = dashboard.offsetHeight;
    const ctx = dashboard.getContext('2d');

    let currentTimeInHour = 0;
    let speedPxPerSecond = 100;
    let entity =
        {
            sky: new Sky(
                {
                    position: new Vector2D(0, 0),
                    width: dashboard.width,
                    height: dashboard.height / 3 * 2,
                    fillColor: hslColor(203, 98, 45)
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
                    position: new Vector2D(dashboard.width * 0.1, dashboard.height * 0.2),
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3',
                    speed: -300,
                    sinStretchingY: Math.random() * dashboard.height * config.cloudsYStretchingCoefficient,
                    sinStretchingX: Math.random() * dashboard.width * config.cloudsXStretchingCoefficient,
                }),
            cloud2: new Cloud(
                {
                    position: new Vector2D(dashboard.width * 0.4, dashboard.height * 0.2),
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3',
                    speed: 120,
                    sinStretchingY: Math.random() * dashboard.height * config.cloudsYStretchingCoefficient,
                    sinStretchingX: Math.random() * dashboard.width * config.cloudsXStretchingCoefficient,
                }),
            cloud3: new Cloud(
                {
                    position: new Vector2D(dashboard.width * 0.7, dashboard.height * 0.2),
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3',
                    speed: 400,
                    sinStretchingY: Math.random() * dashboard.height * config.cloudsYStretchingCoefficient,
                    sinStretchingX: Math.random() * dashboard.width * config.cloudsXStretchingCoefficient,
                }),
            sun: new Sun
            (
                {
                    position: new Vector2D(dashboard.width * 0.05, dashboard.height),
                    radius: dashboard.height * 0.1,
                    fillColor: '#ffbb00',
                    container: dashboard
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

    let lastTimestamp = Date.now();
    const animateFn = () => {
        const currentTimeStamp = Date.now();
        const deltaTime = (currentTimeStamp - lastTimestamp) * 0.001;
        lastTimestamp = currentTimeStamp;
        currentTimeInHour = getUpdatedTime(currentTimeInHour);

        scene.update
        (
            {
                deltaTime: deltaTime,
                container: dashboard,
                timeInHour: currentTimeInHour
            });
        scene.draw();

        requestAnimationFrame(animateFn);
    };

    animateFn();
})();
