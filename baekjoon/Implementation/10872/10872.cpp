#include <bits/stdc++.h>
using namespace std;
int n,ret=1;

int factorial(int n){
  if(n>2)
  n *=factorial(n-1);
  return n;
}

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;

  if(n!=0){
    ret = factorial(n);
  }
  cout<<ret<<"\n";


  return 0;
}