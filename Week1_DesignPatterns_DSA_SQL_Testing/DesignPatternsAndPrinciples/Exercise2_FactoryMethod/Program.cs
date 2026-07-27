using System;

namespace Exercise2_FactoryMethod
{
	internal class Program
	{
		private static void Main(string[] args)
		{
			DocumentCreator creator;
			Document doc;

			// Create a Word document
			creator = new WordCreator();
			doc = creator.CreateDocument("MyReport");
			doc.Open();
			doc.Save();

			Console.WriteLine();

			// Create a PDF document
			creator = new PdfCreator();
			doc = creator.CreateDocument("UserGuide");
			doc.Open();
			doc.Save();

			Console.WriteLine();

			// Create an Excel document
			creator = new ExcelCreator();
			doc = creator.CreateDocument("Budget2026");
			doc.Open();
			doc.Save();

			Console.WriteLine();
			Console.WriteLine("Factory Method demo complete. Press any key to exit...");
			Console.ReadKey();
		}
	}
}
