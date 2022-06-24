#include <bits/stdc++.h>
using namespace std;
int t,n,m,temp;
queue<pair<int,int>> q;
priority_queue<int> pq;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>t;
    
    while(t>0){
      int cnt =0;
      cin>>n>>m;
      for(int i=0;i<n;i++){
        cin>>temp;
        q.push(pair<int,int>(i,temp));
        pq.push(temp);
      }

      

      while(!q.empty()){
        int l = q.front().first;
        int i = q.front().second;
        q.pop();


        if(pq.top() == i){
        cout<<pq.top()<<"\n";
          
          pq.pop();
          cnt++;
          if(l == m){
            cout<<cnt<<"\n";
            break;
          }
        }
        q.push(make_pair(l,i));
      }
      t--;
    }
    




  return 0;
}