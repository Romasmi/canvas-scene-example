#include <SFML/Graphics.hpp>
#include <cmath>
#include <iostream>
#include <algorithm>
using namespace sf;

const float DEGREES_PER_SECOND = 15;

float toDegrees(float radians)
{
    return float(double(radians) * 180.0 / M_PI);
}

float toRadians(float degrees)
{
    return float(double(degrees) * M_PI / 180.0);
}

void init(ConvexShape &pointer)
{
    pointer.setPointCount(3);
    pointer.setPoint(0, {40, 0});
    pointer.setPoint(1, {-20, -20});
    pointer.setPoint(2, {-20, 20});
    pointer.setPosition(400, 300);
    pointer.setFillColor(Color(255, 128, 0));
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

float normalizeAngle(const float &angle)
{
    return (angle < 0) ? angle + 360 : angle;
}

void update(const Vector2f &mousePosition, ConvexShape &pointer, Clock &clock, float positionDelta)
{
    const Vector2f delta = mousePosition - pointer.getPosition();
    float angle = normalizeAngle(toDegrees(atan2(delta.y, delta.x)));
    float pointerRotation = pointer.getRotation();
    float rotationStep = DEGREES_PER_SECOND * clock.restart().asSeconds();
    std::cout << rotationStep << std::endl;
    float angleDelta = angle - pointerRotation;

    rotationStep = std::min(rotationStep, std::abs(angleDelta));

    if (angle != pointerRotation)
    {
        int direction = (angleDelta > 180 || (angleDelta < 0 && angleDelta > -180)) ? -1 : 1;
        pointerRotation += rotationStep * direction;
        pointerRotation = (pointerRotation > 360) ? pointerRotation - 360 : pointerRotation;
        pointer.setRotation(pointerRotation);
    }
}

void redrawFrame(RenderWindow &window, ConvexShape &pointer)
{
    window.clear();
    window.draw(pointer);
    window.display();
}

int main()
{
    constexpr unsigned WINDOW_HEIGHT = 800;
    constexpr unsigned WINDOW_WIDTH = 600;

    ContextSettings settings;
    settings.antialiasingLevel = 8;
    RenderWindow window(VideoMode({WINDOW_WIDTH, WINDOW_HEIGHT}), "Pointer follows mouse", Style::Default, settings);

    ConvexShape pointer;
    Vector2f mousePosition;
    Clock clock;
    float positionDelta = 0;

    init(pointer);
    while (window.isOpen())
    {
        pollEvents(window, mousePosition);
        update(mousePosition, pointer, clock, positionDelta);
        redrawFrame(window, pointer);
    }
}