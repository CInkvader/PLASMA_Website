using MailKit.Security;
using Microsoft.AspNetCore.Identity.UI.Services;
using MimeKit;
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace PLASMA.Utility
{
    public class EmailSender : IEmailSender
    {
        private static readonly EmailSettings settings;

        static EmailSender()
        {
            try
            {
                string json = File.ReadAllText("emailsettings.json");
                settings = JsonSerializer.Deserialize<EmailSettings>(json)
                    ?? throw new InvalidOperationException("Invalid or empty emailsettings.json");
            }
            catch (FileNotFoundException)
            {
                settings = new EmailSettings
                {
                    SenderEmail = Environment.GetEnvironmentVariable("SenderEmail") ?? throw new InvalidOperationException("Missing environment variables for EmailSender"),
                    AppPassword = Environment.GetEnvironmentVariable("AppPassword") ?? throw new InvalidOperationException("Missing environment variable for EmailSender")
                };
            }
        }


        public async Task SendEmailAsync(string recipientEmail, string subject, string body)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("PLASMA Inc. Verification", settings.SenderEmail));
                message.To.Add(new MailboxAddress("", recipientEmail));
                message.Subject = subject;
                message.Body = new TextPart("html") { Text = body };

                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {
                    await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);

                    await client.AuthenticateAsync(settings.SenderEmail, settings.AppPassword);

                    await client.SendAsync(message);
                    await client.DisconnectAsync(true);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        //public Task SendEmailAsync(string email, string subject, string htmlMessage)
        //{
        //    return Task.CompletedTask;
        //}
    }
}
