using CustomerCommLib;
using Moq;
using NUnit.Framework;

namespace CustomerComm.Tests
{
    [TestFixture]
    public class CustomerCommTests
    {
        private Mock<IMailSender> _mailSenderMock;
        private CustomerCommLib.CustomerComm _customerComm;

        [OneTimeSetUp]
        public void OneTimeSetUp()
        {
            _mailSenderMock = new Mock<IMailSender>();
            _mailSenderMock.Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);

            _customerComm = new CustomerCommLib.CustomerComm(_mailSenderMock.Object);
        }

        [TestCase]
        public void SendMailToCustomer_ReturnsTrue()
        {
            var result = _customerComm.SendMailToCustomer();

            Assert.That(result, Is.True);
            _mailSenderMock.Verify(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>()), Times.Once);
        }

        [TearDown]
        public void TearDown()
        {
            _mailSenderMock.Reset();
        }
    }
}
