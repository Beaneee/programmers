function solution(n) {
  let dp = new Array(n + 1).fill(0); // n + 1만큼 배열 생성
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    const sum = dp[i - 1] + dp[i - 2];
    dp[i] = sum > 1000000007 ? sum % 1000000007 : sum ;
  }

  return dp[n-1];
}