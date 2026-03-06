import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/botNotify';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { id, first_name, last_name, username, start_param } = body;
  
  const userRef = doc(db, 'users', String(id));
  const userSnap = await getDoc(userRef);

  let userData;

  if (!userSnap.exists()) {
    userData = {
      telegram_id: String(id),
      name: `${first_name} ${last_name || ''}`.trim(),
      username: username || 'N/A',
      balance: 0,
      total_earnings: 0,
      referred_by: start_param || null,
      join_date: new Date().toISOString()
    };
    await setDoc(userRef, userData);

    // Notify Admin New User
    let msg = `🟢 <b>নতুন ইউজার স্টার্ট করেছে</b>\nনাম: ${userData.name}\nআইডি: <code>${id}</code>\nইউজারনেম: @${userData.username}`;
    
    // Notify if referred
    if(start_param) {
      msg += `\n\n🔗 <b>রেফার জয়েন</b>\nরেফারার আইডি: <code>${start_param}</code>`;
    }
    await sendAdminNotification(msg);
  } else {
    userData = userSnap.data();
  }

  return NextResponse.json({ success: true, user: userData });
}
