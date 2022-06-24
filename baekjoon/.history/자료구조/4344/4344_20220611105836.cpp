#include <bits/stdc++.h>
using namespace std;


int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int c;
  cin >> c;

  for(int i=0;i<c;i++){
    int n,psum=0;
    cin>>n;
    vector<int> v(n);
    for(int j=0;j<v.size();j++){
      int tmp;
      cin>>tmp;
      psum+=tmp;
      v.push_back(tmp);
    }

    cout<<psum<<"\n";



  }

}