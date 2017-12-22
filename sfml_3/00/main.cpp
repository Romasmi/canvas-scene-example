#include <iostream>
using namespace std;

int main()
{
    int num = 0;

    while (num < 100)
    {
        if (num % 15)
        {
            cout << "FizzBuzz" << endl;
        }
        else if (num % 3)
        {
            cout << "Fizz" << endl;
        }
        else if (num % 5)
        {
            cout << "Buzz" << endl;
        }
        else
        {
            cout << num << endl;
        }

        num++;
    }
}