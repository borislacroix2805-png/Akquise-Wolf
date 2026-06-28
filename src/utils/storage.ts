import { Lead, SessionStats } from '../types';
import { initialLeads } from '../data/sample';
const KEY='akquise-wolf-leads-v1';
const SESSION='akquise-wolf-session-v1';
export function loadLeads(): Lead[]{ try{const raw=localStorage.getItem(KEY); return raw?JSON.parse(raw):initialLeads;}catch{return initialLeads;} }
export function saveLeads(leads:Lead[]){ localStorage.setItem(KEY,JSON.stringify(leads)); }
export const defaultSession: SessionStats={calls:0,reached:0,appointments:0,notReached:0,contacts:0,startedAt:null};
export function loadSession():SessionStats{ try{const raw=localStorage.getItem(SESSION); return raw?JSON.parse(raw):defaultSession;}catch{return defaultSession;} }
export function saveSession(session:SessionStats){ localStorage.setItem(SESSION,JSON.stringify(session)); }
