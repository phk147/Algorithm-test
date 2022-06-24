#include <bits/stdc++.h>
using namespace std;

deque<int> dq;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n;
  cin>>n;

  for(int i=0;i<n;i++){
    string tmp;
    cin>> tmp;
    if(tmp == "front"){
      int num = (dq.empty()) ? -1 : dq.front();
      cout<<num<<"\n";
    } else if(tmp =="push_front"){
      int a;
      cin>>a;
      dq.push_front(a);
    } else if(tmp =="push_back"){
      int b;
      cin>>b;
      dq.push_back(b);
    }else if(tmp =="pop_front"){
      int num = (dq.empty()) ? -1 : dq.front();
      dq.pop_front();
      cout<<num<<"\n";
    }else if(tmp =="pop_back"){
      int num = (dq.empty()) ? -1 : dq.back();
      dq.pop_back();
      cout<<num<<"\n";
    }else if(tmp =="size"){
      int size = dq.size();
      cout<<size<<"\n";
    }else if(tmp =="empty"){
      if(dq.empty()){
        cout<<1<<"\n";
      } else {
        cout<<0<<"\n";
      }
    }else {
      int num = (dq.empty()) ? -1 : dq.back();
      cout<<num<<"\n";
    }
  }

}