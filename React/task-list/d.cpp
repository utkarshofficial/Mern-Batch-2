#include<iostream>
using namespace std;

class Base{
public:
    Base(){
        cout<<"Base C.\n";
    }
    ~Base(){
        cout<<"Base D.\n";
    }
};

class Derived: public Base{
public:
    Derived()
        : Base()
    {
        cout<<"Derived C.\n";
    }
    ~Derived(){
        cout<<"Derived D.\n";
    }
};
int main(){
    Derived D;

    return 0;
}