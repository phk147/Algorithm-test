#include <bits/stdc++.h>
using namespace std;

int n,m;
vector<string> p;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n>>m;

  for(int i=0;i<n;i++){
    string temp;
    cin>>temp;
    p.push_back(temp);
  }

  return 0;
}