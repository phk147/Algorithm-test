#include <bits/stdc++.h>
using namespace std;

    string s1,s2;
    int arr[2][26], ans;
int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>s1>>s2;
    for(char a:s1) arr[0][a-'a']++;
    for(char b:s2) arr[1][b-'a']++;

    for(int i=0;i<26;i++){
      ans +=abs(arr[0][i]-arr[1][i]);
    }

  cout<<ans<<"\n";

}