/**
 * Real-Time Admin Audit & Notification Webhook Configuration
 * 
 * Configured for Platform Owner: Sabari Meiyappan M (VIT Vellore)
 * Owner Email: sabarimeiyappan594@gmail.com
 * 
 * Every student login, registration, and test session triggers an instant
 * real-time webhook dispatch containing:
 * - Student Full Name
 * - Email / Mobile Number
 * - ISO Timestamp (Date & Time)
 * - Device & User-Agent Information
 * - Session Method (Google Sign-In / Verified OTP)
 */

export interface AdminNotificationConfig {
  platformOwner: string;
  ownerEmail: string;
  platformName: string;
  webhookUrl: string;
  enableConsoleAudit: boolean;
  enableTelegramAlerts: boolean;
  telegramBotToken?: string;
  telegramChatId?: string;
}

export const ADMIN_NOTIFICATION_CONFIG: AdminNotificationConfig = {
  platformOwner: 'Sabari Meiyappan M (VIT Vellore)',
  ownerEmail: 'sabarimeiyappan594@gmail.com',
  platformName: 'NEET NCERT Mastery Portal',
  
  /**
   * Primary Webhook Endpoint Placeholder:
   * Replace this with your Google Apps Script Web App URL, Telegram Bot Webhook,
   * Discord/Slack Incoming Webhook, or Zapier/Make automation URL.
   * You can also override this by setting the environment variable:
   * ADMIN_AUDIT_WEBHOOK_URL="https://your-webhook-endpoint.com/webhook"
   */
  webhookUrl: process.env.ADMIN_AUDIT_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbx_NEET_MASTERY_REALTIME_AUDIT_NOTIFIER/exec',

  enableConsoleAudit: true,
  enableTelegramAlerts: false,
  telegramBotToken: '',
  telegramChatId: '',
};
