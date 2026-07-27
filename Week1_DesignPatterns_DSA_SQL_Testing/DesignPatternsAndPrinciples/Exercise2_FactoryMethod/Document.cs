using System;

namespace Exercise2_FactoryMethod
{
    public abstract class Document
    {
        public string Name { get; protected set; }

        protected Document(string name)
        {
            Name = name;
        }

        public abstract void Open();
        public abstract void Save();
    }

    public class WordDocument : Document
    {
        public WordDocument(string name) : base(name) { }
        public override void Open() => Console.WriteLine($"Opening Word document: {Name}");
        public override void Save() => Console.WriteLine($"Saving Word document: {Name}.docx");
    }

    public class PdfDocument : Document
    {
        public PdfDocument(string name) : base(name) { }
        public override void Open() => Console.WriteLine($"Opening PDF document: {Name}");
        public override void Save() => Console.WriteLine($"Saving PDF document: {Name}.pdf");
    }

    public class ExcelDocument : Document
    {
        public ExcelDocument(string name) : base(name) { }
        public override void Open() => Console.WriteLine($"Opening Excel document: {Name}");
        public override void Save() => Console.WriteLine($"Saving Excel document: {Name}.xlsx");
    }
}
