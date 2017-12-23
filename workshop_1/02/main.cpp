#include <SFML/Graphics.hpp>
#include <math.h>
#include <iostream>
using namespace sf;
const float STEP_SPEED = 200;
const float ROTATION_SPEED = 90;

struct Arrow
{
    ConvexShape body;
    Vector2f position;
    float rotation;
};

float toDegrees(float radians)
{
    return float(double(radians) * 180.0 / M_PI);
}

Vector2f toEuclidean(float radius, float angle)
{
    return {
        radius * cos(angle),
        radius * sin(angle)};
}

void initArrow(Arrow &arrow)
{
    arrow.body.setPointCount(7);
    arrow.body.setPoint(0, {0, 0});
    arrow.body.setPoint(1, {60, 40});
    arrow.body.setPoint(2, {30, 40});
    arrow.body.setPoint(3, {30, 120});
    arrow.body.setPoint(4, {-30, 120});
    arrow.body.setPoint(5, {-30, 40});
    arrow.body.setPoint(6, {-60, 40});
    arrow.body.setFillColor(Color(255, 255, 0));
    arrow.body.setRotation(15);
    arrow.body.setPosition(300, 400);

    arrow.body.setOutlineThickness(3);
    arrow.body.setOutlineColor(Color(0, 0, 0));
}

void onMouseMove(const Event::MouseMoveEvent &event, Vector2f &mousePosition)
{
    mousePosition = {float(event.x), float(event.y)};
}

void pollEvents(RenderWindow &window, Vector2f &mousePosition)
{
    Event event;
    while (window.pollEvent(event))
    {
        switch (event.type)
        {
        case Event::Closed:
            window.close();
            break;
        case Event::MouseMoved:
            onMouseMove(event.mouseMove, mousePosition);
            break;
        default:
            break;
        }
    }
}

Vector2f normilizeVector(Vector2f vector)
{
    float length = std::sqrt(vector.x * vector.x + vector.y * vector.y);
    return {vector.x / length, vector.y / length};
}

float normalizeAngle(const float &angle)
{
    return (angle < 0) ? angle + 360 : angle;
}

void updateArrowPosition(Vector2f &mousePosition, Arrow &arrow, float time)
{
    Vector2f arrowPositon = arrow.body.getPosition();

    if (!(mousePosition.x == arrowPositon.x && mousePosition.y == arrowPositon.y))
    {
        Vector2f motion = mousePosition - arrowPositon;
        Vector2f direction = normilizeVector(motion);

        float frameStep = STEP_SPEED * time;
        arrow.body.setPosition(arrowPositon + direction * frameStep);
    }
}

void updateArrowRotation(Vector2f &mousePosition, Arrow &arrow, float time)
{
    Vector2f arrowPositon = arrow.body.getPosition();
    const Vector2f delta = mousePosition - arrowPositon;
    float angle = toDegrees(atan2(delta.y, delta.x));
    float arrowRotation = arrow.body.getRotation();
    float rotationStep = ROTATION_SPEED * time;
    float angleDelta = angle - arrowRotation;
    std::cout << arrowRotation << std::endl;

    rotationStep = std::min(rotationStep, std::abs(angleDelta));

    if (!(mousePosition.x == arrowPositon.x && mousePosition.y == arrowPositon.y))
    {
        arrowRotation += rotationStep;
        arrow.body.setRotation(arrowRotation);
    }
}

void update(Vector2f &mousePosition, Arrow &arrow, Clock &time)
{
    float frameTimeInSeconds = time.restart().asSeconds();
    updateArrowPosition(mousePosition, arrow, frameTimeInSeconds);
    updateArrowRotation(mousePosition, arrow, frameTimeInSeconds);
}

void redrawFrame(RenderWindow &window, Arrow arrow)
{
    window.clear(Color(255, 255, 255));
    window.draw(arrow.body);
    window.display();
}

int main()
{
    constexpr unsigned WINDOW_WIDTH = 800;
    constexpr unsigned WINDOW_HEIGHT = 600;

    ContextSettings settings;
    settings.antialiasingLevel = 8;
    RenderWindow window(VideoMode({WINDOW_WIDTH, WINDOW_HEIGHT}), "Yellow arrow", Style::Default, settings);
    Arrow arrow;
    Vector2f mousePosition;
    Clock clock;

    initArrow(arrow);

    while (window.isOpen())
    {
        pollEvents(window, mousePosition);
        update(mousePosition, arrow, clock);
        redrawFrame(window, arrow);
    }
}