#include <bits/stdc++.h>
using namespace std;
int n;


int main()
{

	cin >> n;

	if (n < 1 || n > 100)
		return 0;
	

	for (int i = 5; i>= n; i--)  // 1부터 n 줄까지 반복 
	{
		for (int j = 0; j < i; j++) 
		{
			cout << "*";
		}

		for (int k = n - i; k > 0; k--)
		{
			cout << " ";
		}
		
		cout << "\n";
	}

	return 0;
}