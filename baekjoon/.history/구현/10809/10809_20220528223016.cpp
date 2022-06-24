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



  for(char i='a';i<='z';i++){
    int temp = s.find(i);
    if(temp != string::npos){
      arr[i-97] = temp;
    } else {
      arr[i-97] = -1;
    }
  }

  for(int a:arr)cout<< a<<" ";


  return 0;
}