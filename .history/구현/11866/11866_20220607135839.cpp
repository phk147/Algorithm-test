#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int N, K;
	queue<int> q;
	cin >> N >> K;
 
	for (int i = 1; N >= i; i++) {
		q.push(i);
	}
	
	cout << "<";
	while (!q.empty()) {
		for (int i = 0; i < K - 1; i++) {
			q.push(q.front());
			q.pop();
		}
 
		cout << q.front();
		q.pop();
 
		if (!q.empty()) {
			cout << ", ";
		}
 
	}
	cout << ">" << "\n";
 
	return 0;
}