/*
(function()
{
    const dashboard = document.getElementById('dashboard');
    dashboard.width = dashboard.offsetWidth;
    dashboard.height = dashboard.offsetHeight;
    const ctx = dashboard.getContext('2d');
    const graphic = new StaticGraphic
    ({
        dashboard: dashboard,
        ctx: ctx
    });

    graphic.drawStaticPicture();
})();
*/

(function () {
    const dashboard = document.getElementById('dashboard');
    dashboard.width = dashboard.offsetWidth;
    dashboard.height = dashboard.offsetHeight;
    const ctx = dashboard.getContext('2d');

    let entity =
        {
            sky: new Rectangle(
                {
                    x: 0,
                    y: 0,
                    width: dashboard.width,
                    height: dashboard.height / 3 * 2,
                    fillColor: '#3c78d8'
                }),
            floor: new Rectangle(
                {
                    x: 0,
                    y: dashboard.height / 3 * 2,
                    width: dashboard.width,
                    height: dashboard.height / 3,
                    fillColor: '#6aa84f'
                }),
            house: new House(
                {
                    bodyX: dashboard.width / 2 - dashboard.width / 8,
                    bodyY: dashboard.height - dashboard.height / 2 - dashboard.height * 0.05,
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
                    x: dashboard.width * 0.1,
                    y: dashboard.height * 0.1,
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3'
                }),
            cloud2: new Cloud(
                {
                    x: dashboard.width * 0.4,
                    y: dashboard.height * 0.1,
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3'
                }),
            cloud3: new Cloud(
                {
                    x: dashboard.width * 0.7,
                    y: dashboard.height * 0.1,
                    width: dashboard.width * 0.2,
                    height: dashboard.height * 0.2,
                    heightDispersion: 0.05,
                    widthDispersion: 0.7,
                    fillColor: '#cfe2f3'
                }),
            sun: new Sun
            (
                {
                    x: -5,
                    y: -5,
                    radius: dashboard.height * 0.15,
                    fillColor: '#ffbb00'
                }
            )
        };
    redraw(ctx, entity);
    setInterval(function () {
        //redraw(ctx, entity);
    }, 1);
})();

function redraw(ctx, entity) {
    entity.sky.draw(ctx);
    entity.floor.draw(ctx);
    entity.house.draw(ctx);
    entity.cloud1.draw(ctx);
    entity.cloud2.draw(ctx);
    entity.cloud3.draw(ctx);
    entity.sun.draw(ctx);
}


