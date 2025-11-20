# EmailJS Setup Guide

To enable email functionality in the contact form, you need to set up EmailJS (free service for sending emails from frontend).

## Steps:

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account

2. **Create an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions to connect your email account
   - Copy the **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     From: {{from_name}} <{{from_email}}>
     To: thisisus533@gmail.com
     
     Subject: New Contact Form Message from {{from_name}}
     
     Message:
     {{message}}
     
     ---
     Sent from: {{from_email}}
     ```
   - Save the template and copy the **Template ID**

4. **Get Your Public Key**
   - Go to "Account" → "General" in the EmailJS dashboard
   - Copy your **Public Key**

5. **Configure Environment Variables**
   - Create a `.env` file in the root of your project
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the placeholder values with your actual IDs and keys

6. **Restart Your Development Server**
   - Stop your current dev server (Ctrl+C)
   - Run `npm run dev` again to load the new environment variables

## Testing

Once configured, test the contact form:
1. Enter your name and press Enter
2. Enter your email and press Enter
3. Type your message and press Enter
4. You should receive an email at thisisus533@gmail.com

## Troubleshooting

- Make sure your `.env` file is in the root directory (same level as `package.json`)
- Environment variables must start with `VITE_` to be accessible in Vite
- Check the browser console for any error messages
- Verify your EmailJS service is properly connected

