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
	sort(v.begin(),v.end());
	

	for(int i=0;i<n;i++){
		psum += v[i];
		cntTemp=count(v.begin(),v.end(),v[i]);
		if(cntTemp>cnt){
			cnt = cntTemp;
			num3= v[i]; 
		} else if(cnt == cntTemp && i == 1){
			num3 = v[i];
		}
	}


	num1 = psum / n;

	

	mid = v.size()/2;


	vMax = *max_element(v.begin(),v.end());
	vMin = *min_element(v.begin(),v.end());
	num4 = vMax-vMin;
	
	printf("%.0f\n",ceil(num1));
	printf("%d\n",v[mid]);
	printf("%d\n",num3);
	printf("%d\n",num4);





	return 0;
}