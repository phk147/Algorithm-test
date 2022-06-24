#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n,m;
    cin>>n>>m;

    vector<string> square;
    for(int i=0;i<n;i++){
      string tmp;
      cin>> tmp;
      square.push_back(tmp);
      cout<<tmp<<"\n";
    }

    




  return 0;
}