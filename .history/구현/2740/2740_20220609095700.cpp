#include <bits/stdc++.h>
using namespace std;

int main()
{
	freopen("input.txt", "r", stdin);
	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
	
	int n,m,h,k;
	vector<vector<int>> a,b,ret;
	
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


  for (int i = 0; i < n; i++) {
    vector<int> tmp;
    for (int j = 0; j < k; j++) {
      int mul = 0;
      for (int c = 0; c < m; c++) {
        mul += a[i][c] * b[c][j];
      }
	  cout<<mul<<"\n";
      tmp.push_back(mul);
    }
    ret.push_back(tmp);
  }

//   for(int i =0;i<ret.size();i++){
// 	  for(int j=0;j=ret[0].size();j++){
// 		  cout<<ret[i][j]<<" ";
// 	  }
// 	  cout<<"\n";
//   }
	

	return 0;
}