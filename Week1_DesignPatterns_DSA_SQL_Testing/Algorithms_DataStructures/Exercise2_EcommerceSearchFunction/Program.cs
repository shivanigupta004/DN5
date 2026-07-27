using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.RegularExpressions;

// Algorithms_DataStructures: E-commerce search demo + analysis
// Steps covered:
// 1) Understand Asymptotic Notation (brief comments below)
// 2) Setup: simple inverted-index data structure
// 3) Implementation: indexing + ranked search (term-frequency)
// 4) Analysis: complexity notes in comments and printed summary

namespace Exercise2_EcommerceSearchFunction
{
	internal static class Tokenizer
	{
		private static readonly Regex _tokenRegex = new(@"\\w+", RegexOptions.Compiled);

		public static IEnumerable<string> Tokenize(string text)
		{
			foreach (Match m in _tokenRegex.Matches(text.ToLowerInvariant()))
				yield return m.Value;
		}
	}

	// Simple inverted index supporting add/search operations
	public class InvertedIndex
	{
		// term -> (docId -> frequency)
		private readonly Dictionary<string, Dictionary<int, int>> _index = new();
		private readonly Dictionary<int, string> _documents = new();

		public void AddDocument(int docId, string content)
		{
			if (_documents.ContainsKey(docId))
				throw new ArgumentException("docId already exists");

			_documents[docId] = content;

			foreach (var token in Tokenizer.Tokenize(content))
			{
				if (!_index.TryGetValue(token, out var posting))
				{
					posting = new Dictionary<int, int>();
					_index[token] = posting;
				}

				if (posting.ContainsKey(docId))
					posting[docId]++;
				else
					posting[docId] = 1;
			}
		}

		// Simple ranked search: sum of term frequencies (TF) for query terms
		public List<(int docId, double score)> Search(string query, int topK = 10)
		{
			var t0 = Stopwatch.GetTimestamp();

			var queryTokens = Tokenizer.Tokenize(query).ToList();
			var scores = new Dictionary<int, double>();

			foreach (var term in queryTokens)
			{
				if (!_index.TryGetValue(term, out var posting))
					continue; // term not found

				foreach (var kv in posting)
				{
					// TF scoring
					if (!scores.TryGetValue(kv.Key, out var s)) s = 0;
					s += kv.Value; // add term frequency
					scores[kv.Key] = s;
				}
			}

			// Optionally normalize by document length to reduce bias toward long docs
			var results = scores
				.Select(kv => (docId: kv.Key, score: kv.Value / (double)Math.Log(1 + _documents[kv.Key].Length)))
				.OrderByDescending(x => x.score)
				.Take(topK)
				.ToList();

			var t1 = Stopwatch.GetTimestamp();
			var elapsedMs = (t1 - t0) * 1000.0 / Stopwatch.Frequency;
			Console.WriteLine($"Search time: {elapsedMs:F3} ms (query tokens: {queryTokens.Count})");

			return results;
		}

		public string GetDocument(int docId) => _documents.TryGetValue(docId, out var d) ? d : null;

		// Sizes for analysis
		public int VocabularySize => _index.Count;
		public int DocumentCount => _documents.Count;
		public long PostingCount => _index.Values.Sum(p => p.Count);
	}

	class Program
	{
		static void Main()
		{
			PrintAsymptoticNotes();

			var index = new InvertedIndex();

			// Setup: add some sample product descriptions (in a real system these would be many)
			index.AddDocument(1, "Red running shoes for men - comfortable, breathable, size 10");
			index.AddDocument(2, "Blue running shoes for women - lightweight, cushioned sole");
			index.AddDocument(3, "Wireless headphones - noise cancelling, over-ear, long battery life");
			index.AddDocument(4, "Running socks - moisture-wicking for athletes");
			index.AddDocument(5, "Waterproof hiking boots - durable, ankle support");

			Console.WriteLine();
			Console.WriteLine("Index built.");
			Console.WriteLine($"Documents: {index.DocumentCount}, Vocabulary: {index.VocabularySize}, Total postings: {index.PostingCount}");

			Console.WriteLine();
			Console.WriteLine("Try searches (examples): 'running shoes', 'noise cancelling', 'hiking boots'\n");

			var queries = new[] { "running shoes", "noise cancelling", "hiking boots", "running" };

			foreach (var q in queries)
			{
				Console.WriteLine($"Query: {q}");
				var results = index.Search(q, topK: 5);
				if (results.Count == 0) Console.WriteLine("  (no matches)");
				else
				{
					foreach (var r in results)
					{
						Console.WriteLine($"  Doc {r.docId} (score {r.score:F3}): {index.GetDocument(r.docId)}");
					}
				}
				Console.WriteLine();
			}

			PrintAnalysis();

			Console.WriteLine("Demo complete. Press any key to exit...");
			Console.ReadKey();
		}

		private static void PrintAsymptoticNotes()
		{
			Console.WriteLine("Asymptotic notation (brief):");
			Console.WriteLine("  - O(f(n)): upper bound (worst-case)");
			Console.WriteLine("  - Θ(f(n)): tight bound (average-case if proven)");
			Console.WriteLine("  - Ω(f(n)): lower bound (best-case)");
			Console.WriteLine();
		}

		private static void PrintAnalysis()
		{
			Console.WriteLine("Analysis summary:");
			Console.WriteLine("  Indexing: For each document of length m, tokenization + index updates cost O(m) time.");
			Console.WriteLine("    - Building the whole index for D documents of average length m: O(D * m)");
			Console.WriteLine("  Vocabulary size V = number of distinct terms.");
			Console.WriteLine("  Search: For a query with q tokens, retrieving postings is O(q) to lookup each term, but merging/ scoring cost proportional to the sum of posting list lengths for those terms.");
			Console.WriteLine("    - Worst-case search cost: O(sum of posting lengths) which can be O(D) per term in degenerate cases");
			Console.WriteLine("  Space: storing postings requires O(total tokens) space, typically O(D * m).");
			Console.WriteLine();
			Console.WriteLine("Optimizations for real e-commerce search:");
			Console.WriteLine("  - Use stop-word removal and stemming to reduce vocabulary");
			Console.WriteLine("  - Compressed posting lists and skip pointers for fast merges");
			Console.WriteLine("  - Inverted index sharding, caching, and using a search engine (Elasticsearch, Lucene)");
			Console.WriteLine("  - Use TF-IDF or BM25 for better ranking instead of raw TF");
		}
	}
}
