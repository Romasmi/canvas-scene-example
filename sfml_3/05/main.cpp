#include <SFML/Graphics.hpp>
#include <math.h>
#include <iostream>
using namespace sf;

struct Pupil
{
    ConvexShape body;
    Vector2f position;
    Vector2f ellipseRadius;
    float rotation;
};

struct Eye
{
    ConvexShape body;
    Vector2f ellipseRadius;
    Vector2f position;
    Pupil pupil;
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

void initEye(Eye &eye, float eyeX, float eyeY)
{
    const int pointCount = 200;

    eye.ellipseRadius = {40.f, 70.f};
    eye.body.setFillColor(Color(255, 255, 255));
    eye.body.setPointCount(pointCount);
    eye.body.setPosition({eyeX, eyeY});

    eye.pupil.ellipseRadius = {10.f, 12.f};
    eye.pupil.body.setFillColor(Color(0, 0, 0));
    eye.pupil.body.setPointCount(pointCount);
    eye.pupil.body.setOrigin(-12.f, 5.f);
    eye.pupil.body.setPosition({eyeX + 5, eyeY + 10});

    for (int i = 0; i < pointCount; ++i)
    {
        float angle = 2 * M_PI * i / pointCount;
        Vector2f eyePoint = {
            eye.ellipseRadius.x * std::sin(angle),
            eye.ellipseRadius.y * std::cos(angle)};
        eye.body.setPoint(i, eyePoint);

        Vector2f pupilPoint = {
            eye.pupil.ellipseRadius.x * std::sin(angle),
            eye.pupil.ellipseRadius.y * std::cos(angle)};
        eye.pupil.body.setPoint(i, pupilPoint);
    }
}

void onMouseMove(const Event::MouseMoveEvent &event, Vector2f &mousePosition)
{
    mousePosition = {float(event.x), float(event.y)};
}

void pollEvents(sf::RenderWindow &window, sf::Vector2f &mousePosition)
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

void updateEyeElements(Pupil &pupil)
{
    pupil.body.setRotation(toDegrees(pupil.rotation));
}

void update(const sf::Vector2f &mousePosition, Pupil &pupil)
{
    const Vector2f delta = mousePosition - pupil.body.getPosition();
    pupil.rotation = atan2(delta.y, delta.x);
    updateEyeElements(pupil);
}

void redrawFrame(sf::RenderWindow &window, Eye &eye1, Eye &eye2)
{
    window.clear();
    window.draw(eye1.body);
    window.draw(eye1.pupil.body);
    window.draw(eye2.body);
    window.draw(eye2.pupil.body);
    window.display();
}

int main()
{
    constexpr unsigned WINDOW_WIDTH = 800;
    constexpr unsigned WINDOW_HEIGHT = 600;

    sf::ContextSettings settings;
    settings.antialiasingLevel = 8;
    sf::RenderWindow window(sf::VideoMode({WINDOW_WIDTH, WINDOW_HEIGHT}), "Arrow follows mouse", sf::Style::Default, settings);
    Eye eye1;
    Eye eye2;
    sf::Vector2f mousePosition;

    initEye(eye1, 350, 250);
    initEye(eye2, 450, 250);

    while (window.isOpen())
    {
        pollEvents(window, mousePosition);
        update(mousePosition, eye1.pupil);
        update(mousePosition, eye2.pupil);
        redrawFrame(window, eye1, eye2);
    }
}