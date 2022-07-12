#include <bits/stdc++.h>
using namespace std;
string s;
int cnt[26], lcnt,vcnt;

bool isVowel(int a){
  return (a==0||a==4||a==8||a==14||a==20);
}

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  while(true){
    cin>>s;
    if(s=="end") break;
    memset(cnt,0,sizeof(cnt));
    lcnt = vcnt = 0;
    bool check = true;

    for(int i=0;i<s.size();i++){
      int idx = s[i]-'a';
      cnt[idx]++;
      if(isVowel(idx)) lcnt++, vcnt=0;
      else vcnt++,lcnt=0;
      if(vcnt==3||lcnt==3) check=false;
      if((s[i+1]==s[i]) && (idx!=4 && idx !=14)){
        check = false;
      }
    }

    if(!cnt[0]&&!cnt[4]&&!cnt[8]&&!cnt[14]&&!cnt[20]) check= false;

    if(check) cout<<"<"<<s<<">"<<" is acceptable.\n";
    else cout<<"<"<<s<<">"<<" is not acceptable.\n";
  }
  return 0;

}