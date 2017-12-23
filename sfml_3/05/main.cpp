#include <SFML/Graphics.hpp>
#include <math.h>
#include <iostream>
using namespace sf;

struct Pupil
{
    ConvexShape body;
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

    eye.pupil.ellipseRadius = {20.f, 20.f};
    eye.pupil.body.setFillColor(Color(0, 0, 0));
    eye.pupil.body.setPointCount(pointCount);
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

Vector2f normilizeVector(Vector2f vector)
{
    float length = std::sqrt(vector.x * vector.x + vector.y * vector.y);
    return {vector.x / length, vector.y / length};
}

Vector2f getPupilPositionRadius(Eye &eye, Vector2f direction)
{
    float angle = atan2(direction.x, direction.y);
    Vector2f radius;
    radius.x = (eye.ellipseRadius.x - eye.pupil.ellipseRadius.x) * sin(angle);
    radius.y = (eye.ellipseRadius.y - eye.pupil.ellipseRadius.y) * cos(angle);
    std::cout << radius.x << ", " << radius.y << std::endl;
    return radius;
}

void updateEyeElements(Eye &eye, Vector2f cursorDelta)
{
    Vector2f cursorDirecton = normilizeVector(cursorDelta);
    Vector2f pupilPositionRadius = getPupilPositionRadius(eye, cursorDirecton);
    pupilPositionRadius.x = std::abs(pupilPositionRadius.x) < std::abs(cursorDelta.x) ? pupilPositionRadius.x : cursorDelta.x;
    pupilPositionRadius.y = std::abs(pupilPositionRadius.y) < std::abs(cursorDelta.y) ? pupilPositionRadius.y : cursorDelta.y;

    Vector2f pupilPositon = eye.body.getPosition() + pupilPositionRadius;
    eye.pupil.body.setPosition(pupilPositon);
}

void update(const sf::Vector2f &mousePosition, Eye &eye)
{
    const Vector2f delta = mousePosition - eye.body.getPosition();
    updateEyeElements(eye, delta);
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
        update(mousePosition, eye1);
        update(mousePosition, eye2);
        redrawFrame(window, eye1, eye2);
    }
}