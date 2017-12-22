#include <SFML/Graphics.hpp>
#include <SFML/Window.hpp>
#include <cmath>
using namespace sf;

int main()
{
    constexpr int pointCount = 200;
    const Vector2f ellipseRadius = {200.f, 80.f};

    ContextSettings settings;
    settings.antialiasingLevel = 8;
    RenderWindow window(VideoMode({800, 600}), "Ellipse", Style::Default, settings);

    ConvexShape ellipse;
    ellipse.setPosition({400, 320});
    ellipse.setFillColor(Color{255, 255, 255});

    ellipse.setPointCount(pointCount);
    for (int pointNumber = 0; pointNumber < pointCount; ++pointNumber)
    {
        float angle = float(2 * M_PI * pointNumber) / float(pointCount);
        Vector2f point = {ellipseRadius.x * std::sin(angle), ellipseRadius.y * std::cos(angle)};
        ellipse.setPoint(pointNumber, point);
    }

    while (window.isOpen())
    {
        Event event;
        while (window.pollEvent(event))
        {
            if (event.type == Event::Closed)
            {
                window.close();
            }
        }

        window.clear();
        window.draw(ellipse);
        window.display();
    }

    return 0;
}