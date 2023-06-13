import { app } from '@/firebase/setup'
import { getAnalytics, logEvent } from "firebase/analytics";
import { serverTimestamp } from "firebase/firestore";

const analytics = getAnalytics(app);

logEvent(analytics, "firebase-initialize" + serverTimestamp);

export { analytics, logEvent }