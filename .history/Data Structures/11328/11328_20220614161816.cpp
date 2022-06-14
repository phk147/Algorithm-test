#include <bits/stdc++.h>
using namespace std;

    int n,arr[2][26]={0,};
    string s1,s2;
    
int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n;

    for(int i=0;i<n;i++){
      cin>>s1>>s2;

      for(char a : s1) arr[0][a-'a']++;
      for(char b : s2) arr[1][b-'a']++;


      for(int i=0;i<26;i++){
        if(arr[0][i]!=arr[1][i]){
          cout<<"Impossible"<<"\n";
          break;
        }
      }

    }

  

}