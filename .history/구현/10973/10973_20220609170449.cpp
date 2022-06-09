#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false); //제출 시 삭제
    cin.tie(NULL);
    cout.tie(NULL);

    int n;
    cin>>n;

    vector<int> v(n);

    for(int i=0;i<n;i++) cin>>v[i];

    if(prev_permutation(v.begin(),v.end())){
      for(int a:v) cout<<a<<" ";
    } else {
      cout<<-1;
  }


  return 0;
}