class AnimatedGraphic extends StaticGraphic
{
    constructor(options = {}) {
        super
        ({
            ctx: options.ctx
        });
        this.cloudSpeed = options.cloudSpeed;
        this.dashboard = options.dashboard;
        this.cloud1Size =
            {
                x: this.dashboard.width / 10,
                y: this.dashboard.height * 0.1,
                viewCoefficient: 0.9,
                fillColor: '#cfe2f3'
            };
        this.cloud2Size =
            {
                x: this.dashboard.width / 10 * 4,
                y: this.dashboard.height * 0.1,
                viewCoefficient: 1.2,
                fillColor: '#cfe2f3'
            };
        this.cloud3Size =
            {
                x: this.dashboard.width / 10 * 9,
                y: this.dashboard.height * 0.1,
                viewCoefficient: 0.5,
                fillColor: '#cfe2f3'
            };
    };

    redraw()
    {
        this.drawStaticPicture
        ({
            dashboard: this.dashboard,
            cloud1Size: this.updateCloud(this.cloud1Size),
            cloud2Size: this.updateCloud(this.cloud2Size),
            cloud3Size: this.updateCloud(this.cloud3Size),
        });
    }

    updateCloud(cloud)
    {
        cloud.x += this.cloudSpeed;

        if (cloud.x > this.dashboard.width * 1.2)
        {
            cloud.x =  -this.dashboard.width * 0.3;
        }

        return cloud;
    }
}