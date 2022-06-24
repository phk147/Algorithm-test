#include <bits/stdc++.h>
using namespace std;
int t,n,m,temp;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>t;
    
    while(t>0){
      queue<pair<int,int>> q;
      priority_queue<int> pq;
      int cnt =0;
      cin>>n>>m;
      for(int i=0;i<n;i++){
        cin>>temp;
        q.push({i,temp});
        pq.push(temp);
      }

      
      while(!q.empty()){
        int l = q.front().first;
        int important = q.front().second;
        q.pop();

        if(pq.top() == important){
          pq.pop();
          cnt++;
          if(l == m){
            cout<<cnt<<"\n";
            break;
          }
        }
        q.push({l,important});
      }

      t--;
    }
    




  return 0;
}