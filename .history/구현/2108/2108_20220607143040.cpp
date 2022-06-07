#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

	int n,temp;
	cin>>n;
	vector<int> v;

	for(int i=0;i<n;i++){
		cin>>temp;
		v.push_back(temp);
	}
	double num1;
	int num2,num3,num4,psum=0,cnt=0,cntTemp=0,;

	for(int i=0;i<n;i++){
		psum += v[i];
		cntTemp=count(v.begin(),v.end(),v[i]);
		if(cntTemp>cnt){
			cnt = cntTemp;
			num3= v[i]; 
		}
	}

	num1 = psum / n;
	printf("%.0f\n",ceil(num1));

	sort(v.begin(),v.end());
	cout<<v[v.size()/2]<<"\n";

	cout<<num3<<"\n";



 
	return 0;
}