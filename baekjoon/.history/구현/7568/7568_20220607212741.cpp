#include <bits/stdc++.h>
using namespace std;

bool condition (pair<int,int> p){

}

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n,x,y;

    vector<pair<int,int>> v;

    cin>>n;

    for(int i=0;i<n;i++){
      cin>>x>>y;
      v.push_back(make_pair(x,y));
    }

    int cnt = count_if(v.begin(),v.end(),condition);


    

  return 0;
}