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
      int temp;
  cin >> temp;
  input.push_back(temp);
  }

sort(input.begin(),input.end());



do{
    int sum =0;
    for(int i=0;i<7; i++) sum+= input[i];
    if(sum == 100) break;
} while(next_permutation(input.begin(),input.end()));

  for(int i=0;i<7;i++) cout << input[i]<<"\n";

  return 0;
}