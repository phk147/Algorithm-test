#include <bits/stdc++.h>
using namespace std;

queue<int> q;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    //input

    int n;
    cin>>n;

    if(n==1){
      cout<<1<<"\n";
      return 0;
    }

    for(int i=1;i<=n;i++) q.push(i);
    
    while(!q.empty()){
      q.pop();
      int tmp = q.front();
      if(q.size() == 1){
        cout<<tmp<<"\n";
        break;
      } else{
      q.pop();
      q.push(tmp);
      }
    }




    
    return 0;
  

}