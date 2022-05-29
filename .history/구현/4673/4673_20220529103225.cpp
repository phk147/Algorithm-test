#include <bits/stdc++.h>
using namespace std;

int arr[10004];

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  for(int i=1;i<=10000;i++){
    string temp = to_string(i);
    int psum= i;
    for(int j=0;j<temp.length();j++){
      psum += (int)temp[j];
    }
    arr[psum]++;
  }

  for(int i=1;)


  return 0;
}