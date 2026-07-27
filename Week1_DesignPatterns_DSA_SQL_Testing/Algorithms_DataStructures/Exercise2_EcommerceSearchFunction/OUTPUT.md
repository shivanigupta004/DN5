//Output

Asymptotic notation (brief):
  - O(f(n)): upper bound (worst-case)
  - Θ(f(n)): tight bound (average-case if proven)
  - Ω(f(n)): lower bound (best-case)


Index built.
Documents: 5, Vocabulary: 0, Total postings: 0

Try searches (examples): 'running shoes', 'noise cancelling', 'hiking boots'

Query: running shoes
Search time: 18.696 ms (query tokens: 0)
  (no matches)

Query: noise cancelling
Search time: 0.130 ms (query tokens: 0)
  (no matches)

Query: hiking boots
Search time: 0.047 ms (query tokens: 0)
  (no matches)

Query: running
Search time: 0.021 ms (query tokens: 0)
  (no matches)

Analysis summary:
  Indexing: For each document of length m, tokenization + index updates cost O(m) time.
    - Building the whole index for D documents of average length m: O(D * m)
  Vocabulary size V = number of distinct terms.
  Search: For a query with q tokens, retrieving postings is O(q) to lookup each term, but merging/ scoring cost proportional to the sum of posting list lengths for those terms.
    - Worst-case search cost: O(sum of posting lengths) which can be O(D) per term in degenerate cases
  Space: storing postings requires O(total tokens) space, typically O(D * m).

Optimizations for real e-commerce search:
  - Use stop-word removal and stemming to reduce vocabulary
  - Compressed posting lists and skip pointers for fast merges
  - Inverted index sharding, caching, and using a search engine (Elasticsearch, Lucene)
  - Use TF-IDF or BM25 for better ranking instead of raw TF
Demo complete. Press any key to exit...