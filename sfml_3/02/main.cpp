#include <SFML/Graphics.hpp>
#include <iostream>
using namespace sf;

void pollEvents(sf::RenderWindow &window)
{
    Event event;
    while (window.pollEvent(event))
    {
        switch (event.type)
        {
        case Event::Closed:
            window.close();
            break;
        case Event::MouseButtonPressed:
            std::cout << "Mouse pressed, x = " << event.mouseButton.x << ", y = " << event.mouseButton.y << std::endl;
            break;
        case Event::MouseButtonReleased:
            std::cout << "mouse released, "
                      << " x = " << event.mouseButton.x << ", y = " << event.mouseButton.y << std::endl;
            break;
        default:
            break;
        }
    }
}

void redrawFrame(sf::RenderWindow &window)
{
    window.clear();
    window.display();
}

int main()
{
    constexpr unsigned WINDOW_WIDTH = 800;
    constexpr unsigned WINDOW_HEIGHT = 600;

    sf::RenderWindow window(VideoMode({WINDOW_WIDTH, WINDOW_HEIGHT}), "Prints mouse events to terminal");
    while (window.isOpen())
    {
        pollEvents(window);
        redrawFrame(window);
    }
}