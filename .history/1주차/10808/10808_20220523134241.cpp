#include <bits/stdc++.h>

using namespace std;

    string s;
char a='z';
int arr[30];
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  getline(cin,s);
  fill(arr,arr+30,0);

  for(int a:arr) cout << a << " ";
//97~ 122
  for(char i=97;i<123;i++){
    for(int j=0;j<s.length();j++){
      if(s.find(i) != string::npos){
        arr[(int)i-97]+=1;
      }
    }
  }

  

  return 0;
}