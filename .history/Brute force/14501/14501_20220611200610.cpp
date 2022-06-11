#include <bits/stdc++.h>
using namespace std;
typedef pair<int, int> tp;
int n;
vector<tp> arr;
int ans;
void solution(int idx, int sum);
int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin >> n;

	for (int i = 0; i < n; i++) {
		int t, p;

		cin >> t >> p;

		arr.push_back({ t, p });
	}

	for (int i = 0; i < n; i++) {
		if (i + arr[i].first > n)
			continue;

		solution(i, arr[i].second);
	}

	cout << ans;

	return 0;
  

}

void solution(int idx, int sum) {

	int next = idx + arr[idx].first;

	if (idx == n - 1 || next >= n) {
		ans = max(ans, sum);
		return;
	}
	else {
		for (int i = next; i < n; i++) {
			if (i + arr[i].first <= n)
				solution(i, sum + arr[i].second);
		}
	}

	ans = max(ans, sum);
}