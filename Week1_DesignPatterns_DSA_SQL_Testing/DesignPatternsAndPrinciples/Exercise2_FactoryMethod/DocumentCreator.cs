using System;

namespace Exercise2_FactoryMethod
{
    public abstract class DocumentCreator
    {
        // Factory method
        protected abstract Document FactoryMethod(string name);

        // Product-creating operation that clients call
        public Document CreateDocument(string name)
        {
            var doc = FactoryMethod(name);
            // shared steps
            Console.WriteLine($"Document created: {doc.Name}");
            return doc;
        }
    }

    public class WordCreator : DocumentCreator
    {
        protected override Document FactoryMethod(string name)
        {
            return new WordDocument(name);
        }
    }

    public class PdfCreator : DocumentCreator
    {
        protected override Document FactoryMethod(string name)
        {
            return new PdfDocument(name);
        }
    }

    public class ExcelCreator : DocumentCreator
    {
        protected override Document FactoryMethod(string name)
        {
            return new ExcelDocument(name);
        }
    }
}
