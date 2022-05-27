#include <bits/stdc++.h>
using namespace std;

int n,m;
string s,p;

map<string,int> _map1;
map<int,string> _map2;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n>>m;

    for(int i=1;i<n+1;i++){
      cin>>s;
      _map1[s]=i;
      _map2[i]=s;
    }

    for(int j=0;j<m;j++){

    }

  return 0;
}