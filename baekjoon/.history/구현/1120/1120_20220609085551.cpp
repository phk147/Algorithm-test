#include <bits/stdc++.h>
using namespace std;

int main()
{
	freopen("input.txt", "r", stdin);
	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
	
	string a,b;

	cin>>a>>b;

	int a_len = a.length();
	int b_len = b.length();
	int def = b_len-a_len;
	vector<int> v_min;

	for(int i=0;i<=def;i++){
		int min=0;
		for(int j=i;j<i+a_len;j++){
			if(a[j-i]==b[j]){
				min++;
				cout<<a[j-i]<<"\n";
		}
	
		v_min.push_back(min);
	}

	int ans = *min_element(v_min.begin(),v_min.end());

	cout<<ans<<"\n";


	return 0;
}