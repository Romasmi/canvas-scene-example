#include <SFML/Graphics.hpp>
#include <SFML/Window.hpp>
#include <cmath>
using namespace sf;

int main()
{
    constexpr int pointCount = 200;

    ContextSettings settings;
    settings.antialiasingLevel = 8;
    RenderWindow window(VideoMode({800, 600}), "Rose", Style::Default, settings);

    ConvexShape ellipse;
    ellipse.setPosition({400, 320});
    ellipse.setFillColor(Color{255, 9, 128});

    ellipse.setPointCount(pointCount);

    float angleTurn = 0;
    float sizeChanchingSpeed = 0.01;
    float angleRotation = 0;

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

        for (int pointNumber = 0; pointNumber < pointCount; ++pointNumber)
        {
            float angle = float(2 * M_PI * pointNumber) / float(pointCount);
            float radius = 100 * std::sin(6 * angle) * angleTurn;
            Vector2f point = {radius * std::sin(angle + angleRotation), radius * std::cos(angle + angleRotation)};
            ellipse.setPoint(pointNumber, point);
        }

        angleRotation += 0.01f;

        angleTurn += sizeChanchingSpeed;
        if (angleTurn > 2 && sizeChanchingSpeed > 0)
        {
            sizeChanchingSpeed = -0.01;
        }
        else if (angleTurn < 1 && sizeChanchingSpeed < 0)
        {
            sizeChanchingSpeed = 0.005;
        }

        window.clear();
        window.draw(ellipse);
        window.display();
    }

    return 0;
}