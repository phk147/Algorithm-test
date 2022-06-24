#include <bits/stdc++.h>
using namespace std;
int n;
string s,p;

vector<string> split(string input,string delimiter){
  long long pos=0;
  vector<string> ret;
  string temp;

  while(pos=input.find(delimiter)!=string::npos){
    temp=input.substr(0,pos);
    ret.push_back(temp);
    input.erase(0,pos+delimiter.length());
  }
  ret.push_back(input);

  return ret;
}



int main()

{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;
  cin>>s;

  vector<string> a= split(s,"*");

  for(string b:a) cout<<b<<"\n";

  // for(int i=0; i<n;i++){
  //   cin>>p;
  //   if(a[0] ==p[] && a[1]==p[p.size()-1]){
  //     cout << "DA"<<"\n";
  //   } else {
  //     cout<< "NE"<<"\n";
  //   }
  // }

  return 0;
}