#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false); //제출 시 삭제
    cin.tie(NULL);
    cout.tie(NULL);

    int n,tmp;
    cin>>n;

    vector<int> v;
    for(int i=0;i<n;i++){
      cin>>tmp;
      v.push_back(tmp);
    }


  return 0;
}