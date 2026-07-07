# Contact Form Email Configuration Guide

## Environment Variables Setup

To make the contact form functional, you need to configure email settings in your `.env.local` file.

### For Gmail:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

**Important:** For Gmail, you need to:
1. Enable 2-Factor Authentication on your Google account
2. Create an App Password (not your regular password)
3. Go to: https://myaccount.google.com/apppasswords
4. Select Mail and Windows Computer
5. Google will generate a 16-character password - use this as `EMAIL_PASS`

### For SendGrid:

```bash
EMAIL_USER=apikey
EMAIL_PASS=SG.your-sendgrid-api-key
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
```

### For Outlook/Microsoft 365:

```bash
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

### For AWS SES:

```bash
EMAIL_USER=your-ses-smtp-username
EMAIL_PASS=your-ses-smtp-password
EMAIL_HOST=email-smtp.region.amazonaws.com
EMAIL_PORT=587
```

## Contact Form Features

- **Automatic Email Verification:** Validates email addresses before sending
- **Rate Limiting:** Basic protection against spam (can be enhanced with Redis)
- **Localization:** Sends confirmation emails in user's language (EN, NL, ES, DE)
- **Sanitization:** Prevents injection attacks by escaping HTML
- **Error Handling:** Graceful error messages for both sender and admin
- **Recipient:** All messages are sent to `sjottens76@gmail.com`

## Testing the Contact Form

1. Set up your `.env.local` file with email credentials
2. Test with a minor submission to verify email delivery
3. Check both spam and inbox folders in case emails are filtered

## Production Deployment

For production:
1. Use a proper email service (SendGrid, AWS SES recommended)
2. Implement proper rate limiting (consider using Redis)
3. Add CAPTCHA verification (Google reCAPTCHA recommended)
4. Monitor email delivery and bounce rates
5. Implement proper logging and error tracking

## Troubleshooting

- **"Email credentials not configured":** Ensure `EMAIL_USER` and `EMAIL_PASS` are set in `.env.local`
- **"Failed to send message":** Check SMTP credentials, firewall, and email service logs
- **Emails go to spam:** Verify SPF, DKIM, and DMARC records for your domain
- **Rate limiting issues:** Consider implementing Redis-based rate limiting for production
