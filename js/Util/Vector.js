class Vector2D {
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    add(vector)
    {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }

    sub(vector)
    {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }

    mulByScalar(scalar)
    {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }

    divByScalar(scalar)
    {
        return new Vector2D(this.x / scalar, this.y / scalar);
    }

    getNormaliazed()
    {
        const length = this.getLength();
        return length ? this.divByScalar(length) : new Vector2D(0, 0);
    }

    getLength()
    {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}