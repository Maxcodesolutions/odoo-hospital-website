# EmailJS Setup Guide

This guide will help you configure EmailJS to send emails from the contact form to `ishkirat@maxcodesolutions.in`.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Submission - Maxcode Solutions

**Body:**
```
Hello,

You have received a new contact form submission from the Maxcode Solutions website.

Contact Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Hospital: {{hospital_name}}
- Message: {{message}}

This email was sent from: {{from_email}}

Best regards,
Maxcode Solutions Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update the JavaScript Code

Replace the placeholder values in `script.js`:

```javascript
// Replace "YOUR_PUBLIC_KEY" with your actual public key
emailjs.init("user_def456");

// Replace "YOUR_SERVICE_ID" with your service ID
// Replace "YOUR_TEMPLATE_ID" with your template ID
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test the Form

1. Open your website
2. Fill out the contact form
3. Submit the form
4. Check your email at `ishkirat@maxcodesolutions.in`

## Troubleshooting

- Make sure all IDs are correct (Service ID, Template ID, Public Key)
- Check the browser console for any error messages
- Verify that your email service is properly configured
- Test with a simple email first before using complex templates

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles the email sending securely
- No sensitive credentials are stored in your website code

## Free Plan Limits

- EmailJS free plan allows 200 emails per month
- Consider upgrading for higher volume usage 