import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, increment } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/botNotify';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userId, name, amount, method } = await req.json();

  // Deduct Balance
  const userRef = doc(db, 'users', String(userId));
  await updateDoc(userRef, { balance: increment(-Number(amount)) });

  // Add Request
  await addDoc(collection(db, 'withdraw_requests'), {
    user_id: userId,
    amount: amount,
    method: method,
    status: 'pending',
    date: new Date().toISOString()
  });

  // Notify Admin
  const msg = `💸 <b>উইথড্র রিকোয়েস্ট</b>\n\nনাম: ${name}\nআইডি: <code>${userId}</code>\nপরিমাণ: ৳${amount}\nমেথড: ${method}`;
  await sendAdminNotification(msg);

  return NextResponse.json({ success: true });
}
