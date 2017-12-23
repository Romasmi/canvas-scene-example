#include <SFML/Graphics.hpp>
#include <math.h>
#include <iostream>
using namespace sf;

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

void pollEvents(RenderWindow &window)
{
    Event event;
    while (window.pollEvent(event))
    {
        switch (event.type)
        {
        case Event::Closed:
            window.close();
            break;
        default:
            break;
        }
    }
}

int main()
{
    constexpr unsigned WINDOW_WIDTH = 800;
    constexpr unsigned WINDOW_HEIGHT = 600;

    ContextSettings settings;
    settings.antialiasingLevel = 8;
    RenderWindow window(VideoMode({WINDOW_WIDTH, WINDOW_HEIGHT}), "Yellow arrow", Style::Default, settings);
    Arrow arrow;

    initArrow(arrow);
    window.clear(Color(255, 255, 255));
    window.draw(arrow.body);
    window.display();

    while (window.isOpen())
    {
        pollEvents(window);
    }
}