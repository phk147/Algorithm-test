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

    } else if(tmp =="push_front"){
      int a;
      cin>>a;
      dq.push_front(a);
    } else if(tmp =="push_back"){
      int b;
      cin>>b;
      dq.push_back(b);
    }else if(tmp ==" "){
      
    }else if(tmp ==" "){
      
    }else if(tmp ==" "){
      
    }else if(tmp ==" "){
      
    }else if(tmp ==" "){
      
    }else if(tmp ==" "){
      
    } else {

    }
  }

}