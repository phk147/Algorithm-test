#include <bits/stdc++.h>
using namespace std;
int arr[26];
string s;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>s;

  for(char a : s){
    a = toupper(a);
    arr[a-65]++;
  }
  
  max_element(arr,arr+arr.size()-1)


  return 0;
}