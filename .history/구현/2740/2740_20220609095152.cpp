#include <bits/stdc++.h>
using namespace std;

int main()
{
	freopen("input.txt", "r", stdin);
	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
	
	int n,m,h,k;
	vector<vector<int>> a,b;
	
	cin >>n>>m;
	for(int i=0;i<n;i++){
		vector<int> t;
		for(int j=0;j<m;j++){
			int x;
			cin>>x;
			t.push_back(x);
		}
		a.push_back(t);
	}

	cin>>h>>k;
	for(int i=0;i<h;i++){
		vector<int> t;
		for(int j=0;j<k;j++){
			int x;
			cin>>x;
			t.push_back(x);
		}
		b.push_back(t);
	}

	
	

	return 0;
}