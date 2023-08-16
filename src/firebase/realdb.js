import { app } from '@/firebase/setup'
import { getDatabase } from "firebase/database";

const dbRT = getDatabase(app);