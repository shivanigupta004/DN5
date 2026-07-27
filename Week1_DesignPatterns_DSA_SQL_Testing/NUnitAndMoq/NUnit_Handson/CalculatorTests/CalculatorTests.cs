using CalcLibrary;
using NUnit.Framework;

namespace CalculatorTests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp]
        public void SetUp()
        {
            _calculator = new Calculator();
        }

        [TearDown]
        public void TearDown()
        {
            // Cleanup the calculator instance if required
        }

        [Test]
        public void Add_WhenCalled_ReturnsSum()
        {
            Assert.That(_calculator.Add(2, 3), Is.EqualTo(5));
        }

        [TestCase(1, 2, 3)]
        [TestCase(-1, 4, 3)]
        [TestCase(100, 200, 300)]
        public void Add_WithTestCase_ReturnsExpectedResult(int a, int b, int expected)
        {
            Assert.That(_calculator.Add(a, b), Is.EqualTo(expected));
        }

        [Test]
        [Ignore("Example of ignoring a test until fix is ready")]
        public void IgnoredTestExample()
        {
            Assert.Fail("This test should be ignored.");
        }
    }
}
