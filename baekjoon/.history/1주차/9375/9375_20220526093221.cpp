#include <bits/stdc++.h>
using namespace std;

int t,n;
string a,b;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);


    cin>> t;
    while(t--){
      cin>>n;
      map<string,int> _map;

      for(int i=0;i<n;i++){
        cin>>a>>b;
        _map[b]++;
      }

      for(auto c :_map) cout << c.first <<":"<<c.second<<"\n";

    }

  

  return 0;
}

