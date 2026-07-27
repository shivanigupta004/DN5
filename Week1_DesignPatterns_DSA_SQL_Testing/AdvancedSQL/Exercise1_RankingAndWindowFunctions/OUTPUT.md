Exercise 1: Ranking and Window Functions

SQL examples using window functions:
  SELECT Category, Name, Price, ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RowNumber
  SELECT Category, Name, Price, RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS Rank
  SELECT Category, Name, Price, DENSE_RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS DenseRank

Top 3 products per category using ROW_NUMBER():
Category: Electronics, Product: 4K Smart TV, Price: ₹ 899.50, RowNumber: 1
Category: Electronics, Product: Noise-Cancelling Headphones, Price: ₹ 329.99, RowNumber: 2
Category: Electronics, Product: Wireless Speaker, Price: ₹ 199.99, RowNumber: 3
Category: Home, Product: Robot Vacuum, Price: ₹ 449.00, RowNumber: 1
Category: Home, Product: Espresso Machine, Price: ₹ 349.95, RowNumber: 2
Category: Home, Product: Air Purifier, Price: ₹ 229.99, RowNumber: 3
Category: Sports, Product: Carbon Fiber Bicycle, Price: ₹ 1,599.00, RowNumber: 1
Category: Sports, Product: Treadmill, Price: ₹ 1,199.50, RowNumber: 2
Category: Sports, Product: Fitness Tracker, Price: ₹ 149.95, RowNumber: 3

Top products per category using RANK() (ties may skip values):
Category: Electronics, Product: 4K Smart TV, Price: ₹ 899.50, Rank: 1
Category: Electronics, Product: Noise-Cancelling Headphones, Price: ₹ 329.99, Rank: 2
Category: Electronics, Product: Wireless Speaker, Price: ₹ 199.99, Rank: 3
Category: Home, Product: Robot Vacuum, Price: ₹ 449.00, Rank: 1
Category: Home, Product: Espresso Machine, Price: ₹ 349.95, Rank: 2
Category: Home, Product: Air Purifier, Price: ₹ 229.99, Rank: 3
Category: Home, Product: Smart Thermostat, Price: ₹ 229.99, Rank: 3
Category: Sports, Product: Carbon Fiber Bicycle, Price: ₹ 1,599.00, Rank: 1
Category: Sports, Product: Treadmill, Price: ₹ 1,199.50, Rank: 2
Category: Sports, Product: Fitness Tracker, Price: ₹ 149.95, Rank: 3
Category: Sports, Product: Golf Bag, Price: ₹ 149.95, Rank: 3

Top products per category using DENSE_RANK() (ties do not skip values):
Category: Electronics, Product: 4K Smart TV, Price: ₹ 899.50, DenseRank: 1
Category: Electronics, Product: Noise-Cancelling Headphones, Price: ₹ 329.99, DenseRank: 2
Category: Electronics, Product: Wireless Speaker, Price: ₹ 199.99, DenseRank: 3
Category: Home, Product: Robot Vacuum, Price: ₹ 449.00, DenseRank: 1
Category: Home, Product: Espresso Machine, Price: ₹ 349.95, DenseRank: 2
Category: Home, Product: Air Purifier, Price: ₹ 229.99, DenseRank: 3
Category: Home, Product: Smart Thermostat, Price: ₹ 229.99, DenseRank: 3
Category: Sports, Product: Carbon Fiber Bicycle, Price: ₹ 1,599.00, DenseRank: 1
Category: Sports, Product: Treadmill, Price: ₹ 1,199.50, DenseRank: 2
Category: Sports, Product: Fitness Tracker, Price: ₹ 149.95, DenseRank: 3
Category: Sports, Product: Golf Bag, Price: ₹ 149.95, DenseRank: 3

Demo complete.
