#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string s1,s2;
    cin>>s1>>s2;

    for(char a : s1){
      for(char b: s2){
        if(a==b){
          s1.erase(a);
          s2.erase(b);
        }
      }
    }

    int ans = s1.length()+s2.length();

  

}