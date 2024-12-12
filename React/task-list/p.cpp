#include<iostream>
using namespace std;

class Base{
    int bData = 0;
public:
    Base(){
        cout<<"Base Default C.\n";
    }
    Base(int data){
        this->bData = data;
        cout<<"Data: "<<this->bData<<endl;
        cout<<"Base Parameterized C.\n";
    }
    ~Base(){
        cout<<"Base D.\n";
    }
};

class Derived: public Base{
    int dData = 1;
public:
    Derived(){
        cout<<"Derived Default C.\n";
    }
    Derived(int data)
    {
        this->dData = data;
        cout<<"Derived Parameterized C.\n";
    }
    Derived(int dData, int bData)
        : Base(bData)
    {
        this->dData = dData;
        cout<<"Data: "<<this->dData<<endl;
        cout<<"Derived Parameterized C.\n";
    }
    ~Derived(){
        cout<<"Derived D.\n";
    }
};
int main(){
    Derived D(20, 50);

    return 0;
}