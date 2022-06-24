#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int t;
  cin>>t;

  while(t--){
    string cmd;
    int n;
    cin>>cmd;
    cin>>n;
    deque<int>dq;
    for(int i=0;i<n;i++){
      int tmp;
      cin>>tmp;
      dq.push_back(tmp);
    }

    for(char a:cmd){
      if(a == 'R'){
        reverse(dq.begin(),dq.end());
      }
      if(a == 'D'){
        dq.pop_front();
      }
    }

    if(dq.empty()){
      cout<<"error"<<"\n";
    } else{
      cout<<"[";

      cout<<"]";
    }


  }
 
}

