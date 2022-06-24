#include <iostream>
#include <bits/stdc++.h>

using namespace std;

    vector<int> input;
int main()
{
  freopen("input.txt", "r", stdin);
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
  for(int i=0;i<9;i++){
  cin >> input[i];
  }
  for(int i=0;i<9;i++) cout << input[i]<<"\n";

  return 0;
}