#include <bits/stdc++.h>
using namespace std;
string s;
vector<string> arr;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>s;

arr = {"c=","c-","dz=","d-","lj","nj","s=","z="};

for(string a : arr) {
  while(s.find(a) != string::npos){
    s.replace(s.find(a),a.length(),"A");
  }
}

cout<<s.length()<<"\n";


  return 0;
}