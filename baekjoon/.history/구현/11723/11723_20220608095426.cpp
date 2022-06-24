#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

	int m,num;
	string cmd;
	vector<int> s;

	cin>>m;

	for(int i=0;i<m;i++){
		cin>>cmd>>num;

		if(cmd == "add"){
			if(find(s.begin(),s.end(),num) == s.end()){
				s.push_back(num);
			}
		} else if (cmd == "remove"){
			if(find(s.begin(),s.end(),num) != s.end()){
				s.erase(remove(s.begin(),s.end(),num),s.end());
			}
		}
	}


  
}