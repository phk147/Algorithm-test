#include <bits/stdc++.h>
using namespace std;

int main()
{
	freopen("input.txt", "r", stdin);
	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
	
	int n,m,h,k;
	vector<vector<int>> v;
	
	cin >>n>>m;
	for(int i=0;i<n;i++){
		vector<int> t;
		for(int j=0;j<m;j++){
			int x;
			cin>>x;
			t.push_back(x);
		}
	v.push_back(t)
	}

	return 0;
}