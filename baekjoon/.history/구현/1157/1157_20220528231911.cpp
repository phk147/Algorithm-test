#include <bits/stdc++.h>
using namespace std;
int arr[26],cnt,flag;
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
  
  cnt = *max_element(arr,arr +26);

  for(int i=0;i<26;i++){
    if(cnt == arr[i]){
      flag++;
      if(flag == 2){
        cout<<"?"<<"\n";
        break;
      }
    }
  }



  return 0;
}