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
      cin>>n>>m;
      for(int i=0;i<n;i++){
        cin>>temp;
        q.push(pair<int,int>(i,temp));
        pq.push(temp);
      }

      



      t--;
    }
    




  return 0;
}