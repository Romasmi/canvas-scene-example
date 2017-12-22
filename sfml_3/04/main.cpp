#include <SFML/Graphics.hpp>
#include <math.h>
#include <iostream>
using namespace sf;

struct Arrow
{
    ConvexShape head;
    RectangleShape stem;
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

void updateArrowElements(Arrow &arrow)
{
    const Vector2f headOffset = toEuclidean(40, arrow.rotation);
    arrow.head.setPosition(arrow.position + headOffset);
    arrow.head.setRotation(toDegrees(arrow.rotation));

    const Vector2f stemOffset = toEuclidean(0, arrow.rotation);
    arrow.stem.setPosition(arrow.position + stemOffset);
    arrow.stem.setRotation(toDegrees(arrow.rotation));
}

void initArrow(Arrow &arrow)
{
    arrow.position = {400, 300};

    arrow.head.setPointCount(3);
    arrow.head.setPoint(0, {20, -10});
    arrow.head.setPoint(1, {0, -40});
    arrow.head.setPoint(2, {0, 20});

    arrow.stem.setSize({80, 20});
    arrow.stem.setOrigin({40, 20});
    arrow.stem.setFillColor(Color(255, 0, 255));

    updateArrowElements(arrow);
}

void onMouseMove(const Event::MouseMoveEvent &event, Vector2f &mousePosition)
{
    std::cout << "mouse x=" << event.x << ", y=" << event.y << std::endl;
    mousePosition = {float(event.x), float(event.y)};
}

// Опрашивает и обрабатывает доступные события в цикле.
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

// Обновляет фигуру, указывающую на мышь
void update(const sf::Vector2f &mousePosition, Arrow &arrow)
{
    const Vector2f delta = mousePosition - arrow.position;
    arrow.rotation = atan2(delta.y, delta.x);
    updateArrowElements(arrow);
}

// Рисует и выводит один кадр
void redrawFrame(sf::RenderWindow &window, Arrow &arrow)
{
    window.clear();
    window.draw(arrow.stem);
    window.draw(arrow.head);
    window.display();
}

// Программа рисует в окне стрелку, которая поворачивается вслед за курсором мыши.
int main()
{
    constexpr unsigned WINDOW_WIDTH = 800;
    constexpr unsigned WINDOW_HEIGHT = 600;

    sf::ContextSettings settings;
    settings.antialiasingLevel = 8;
    sf::RenderWindow window(sf::VideoMode({WINDOW_WIDTH, WINDOW_HEIGHT}), "Arrow follows mouse", sf::Style::Default, settings);
    Arrow arrow;
    sf::Vector2f mousePosition;

    initArrow(arrow);
    while (window.isOpen())
    {
        pollEvents(window, mousePosition);
        update(mousePosition, arrow);
        redrawFrame(window, arrow);
    }
}