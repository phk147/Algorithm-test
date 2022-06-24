#include <bits/stdc++.h>

using namespace std;
int n;
vector<char> name;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin >> n;

  for(int i=0;i<n;i++){
    char tmp;
    cin>>tmp;
    name.push_back(tmp);
  }
  
  for(char a:name ) cout<<a<<"\n";



  return 0;
}