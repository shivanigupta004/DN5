Historical values: 120.5, 123, 125.8, 124.1, 126.4, 128, 129.5
Forecast window: last 3 values
Forecasted next value: 128.13

Analysis:
  - This implementation uses recursion to combine the last k values with a previous recursive forecast.
  - Time complexity: O(n * k) in the worst case, since each recursive step computes an average over up to k values.
  - Space complexity: O(n) due to recursion depth and storing history.
  - In practice, iterative methods or dynamic programming would be faster and safer for large histories.

Exercise 7 complete. Press any key to exit...
