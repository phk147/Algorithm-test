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
	int num2,num3,num4,psum=0,cnt=1,cntTemp=0,mid,vMax,vMin;

	for(int i=0;i<n;i++){
		psum += v[i];
		cntTemp=count(v.begin(),v.end(),v[i]);
		if(cntTemp>cnt){
			cnt = cntTemp;
			num3= v[i]; 
		}
	}


	num1 = psum / n;
	printf("num1:%.0f\n",ceil(num1));

	sort(v.begin(),v.end());
	

	mid = v.size()/2;
	printf("num2:%d\n",v[mid]);

	printf("num3:%d\n",num3);

	vMax = max_element(v.begin(),v.end());
	vMin = min_element(v.begin(),v.end());
	printf("num4:%d\n",num4);





	return 0;
}