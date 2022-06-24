#include <bits/stdc++.h>
using namespace std;

int n,m;
string s;
map<string,int> _map1;
map<int,string> _map2;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n>>m;

  for(int i=0;i<n;i++){
    cin>>s;
    _map1[s]=i+1;
    _map2[i+1]=s;
  }

  //string, int?
  for(int j=0;j<m;j++){
    cin>>s;
    if(atoi(s.c_str()) == 0){
      cout<<_map1[j+1]<<"\n";
    } else {
      cout << _map2[s]<<"\n";
    }
  }


  return 0;
}