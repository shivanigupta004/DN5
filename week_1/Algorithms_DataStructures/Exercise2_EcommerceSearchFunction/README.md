# Exercise 2 — E-commerce Search Function (C#)

This project demonstrates a simplified e-commerce search implementation using an inverted index and term-frequency ranking.

## How to run

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\Alogithms_DataStructures"
dotnet build
dotnet run
```

## What is included

- `Program.cs` — search demo with sample product descriptions
- Inverted index implementation for quick query lookup
- Basic ranking using term frequency and document length normalization
- Printed analysis of time and space complexity

## Notes

- Indexing cost: O(D * m) for D documents and average document length m.
- Search cost: O(q + P), where q is number of query terms and P is combined posting list size.
- Real e-commerce systems would use stop words, stemming, compressed indexes, and BM25 for ranking.
