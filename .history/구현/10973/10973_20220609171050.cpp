#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false); //제출 시 삭제
    cin.tie(NULL);
    cout.tie(NULL);

    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin>>a[i];
    if (prev_permutation(a.begin(), a.end())) {
        for (int i = 0; i < n; i++) cout << a[i]<<" ";
    }
    else{
      cout << "-1";
    }

  return 0;
}