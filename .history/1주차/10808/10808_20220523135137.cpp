#include <bits/stdc++.h>

using namespace std;

    string s;
int arr[26];

int main()
{
  freopen("input.txt", "r", stdin);
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  getline(cin,s);
  fill(arr,arr+30,0);

//97~ 122
  for(char i=97;i<123;i++){
      if(s.find(i) != string::npos){
        arr[(int)i-97]+=1;
    }
  }

  for(int a:arr) cout<< a << " ";

  return 0;
}