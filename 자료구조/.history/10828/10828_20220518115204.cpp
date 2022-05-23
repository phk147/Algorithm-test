#include <iostream>

using namespace from std;

int main(int N) {
    int ret = 0;
    for (int i=1; i<=N;i++){
        if(i%3==0 || i%5==0) ret +=i;
    }
    return ret;
}