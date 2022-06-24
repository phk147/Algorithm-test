#include <bits/stdc++.h>
using namespace std;

int n, a[27];
string s;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;

  //a~z
  for(int i=0;i<n;i++) {
    cin>>s;
    a[s[0]-'a']++;
  }

  for(int i=0;i<26;i++){
    if(a[i]>=5){
      cout<<char(i+97);
    }
  }
  for(int b:a) cout<<b<<"\n" ;

  


  return 0;
}