using System;
using System.IO;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Reflection.Metadata;

var path = @"C:\Users\94shi\.nuget\packages\microsoft.openapi\2.7.5\lib\net8.0\Microsoft.OpenApi.dll";
using var fs = File.OpenRead(path);
using var pe = new PEReader(fs);
var metadata = pe.GetMetadataReader();
var types = metadata.TypeDefinitions.Select(t => metadata.GetTypeDefinition(t));
foreach (var type in types)
{
    var ns = metadata.GetString(type.Namespace);
    var name = metadata.GetString(type.Name);
    if (name.Contains("OpenApiInfo") || ns.Contains("OpenApi"))
    {
        Console.WriteLine($"{ns}.{name}");
    }
}
