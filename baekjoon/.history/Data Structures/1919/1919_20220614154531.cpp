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

    for(int i=0;i<s1.length();i++){
      for(int j=0;j<s2.length();j++){
        if(s1[i]==s2[j]){
          s1.erase(i);
          s2.erase(j);
        }
      }
    }

    int ans = s1.length()+s2.length();

  

}