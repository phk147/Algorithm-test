#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

	int n,temp,psum,avg,mid,mode,cnt,cntTemp;
	bool b = false;
	cin>>n;
	vector<int> v;

	for(int i=0;i<n;i++){
		cin>>temp;
		v.push_back(temp);
		psum += temp;
	}
	//avg
	avg = ceil(psum/n);
	cout<<avg<<"\n";
	//mid
	sort(v.begin(),v.end());
	mid = v.size()/2;
	cout<<v[mid]<<"\n";

	//mode
	for(int i=0;i<n;i++){
		
	}









	return 0;
}