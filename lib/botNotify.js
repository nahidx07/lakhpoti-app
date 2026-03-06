import axios from 'axios';

export async function sendAdminNotification(message) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const adminId = process.env.ADMIN_TELEGRAM_ID;
  if (!token || !adminId) return;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: adminId,
      text: message,
      parse_mode: "HTML"
    });
  } catch (error) {
    console.error("Bot Notification Error:", error.message);
  }
}
