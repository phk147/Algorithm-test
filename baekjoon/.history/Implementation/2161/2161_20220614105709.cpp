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

    for(int i=1;i<=n;i++) q.push(i);
    
    while(!q.empty()){
      int front = q.front();
      if(q.size() == 1){
        cout<<front<<"\n";
        break;
      } else{
        cout<<front<<" ";
      q.pop();
      front = q.front();
      q.push(front);
      }
      q.pop();
      int tmp = q.front();
    }




    
    return 0;
  

}