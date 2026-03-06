import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userId, taskType } = await req.json();
  const reward = taskType === 'daily' ? 1 : 2;

  const userRef = doc(db, 'users', String(userId));
  await updateDoc(userRef, {
    balance: increment(reward),
    total_earnings: increment(reward)
  });

  const userSnap = await getDoc(userRef);
  return NextResponse.json({ success: true, newBalance: userSnap.data().balance });
}
