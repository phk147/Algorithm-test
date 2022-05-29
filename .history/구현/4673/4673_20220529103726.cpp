#include <bits/stdc++.h>
using namespace std;

int arr[10004];

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  for(int i=1;i<=10;i++){
    string temp = to_string(i);
    int psum= i;
    cout<<temp<<":"<<psum<<"\n";
    for(int j=0;j<temp.length();j++){
      psum += (int)temp[j];
    }
    arr[psum]++;
  }

  // for(int a=1;a<=10000;a++){
  //   if(arr[a] == 0)cout<<a<<"\n";
  // }


  return 0;
}