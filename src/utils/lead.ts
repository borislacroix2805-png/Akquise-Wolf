import { Lead, LeadStatus, Priority } from '../types';
export const todayIso=()=>new Date().toISOString().slice(0,10);
export function dueClass(lead:Lead){ if(lead.status==='Archiv') return 'grey'; const today=todayIso(); if(lead.priority==='Sofort') return 'red'; if(lead.dueDate<today) return 'red'; if(lead.dueDate===today) return 'green'; return 'yellow'; }
export function nextDate(days:number){ return new Date(Date.now()+days*86400000).toISOString().slice(0,10); }
export function updateAfterStatus(lead:Lead,status:LeadStatus):Lead{ let attempts=lead.attempts; let dueDate=lead.dueDate; let nextAction=lead.nextAction; if(status.startsWith('Nicht erreicht')){ attempts=attempts+1; dueDate=nextDate(attempts===1?1:attempts===2?2:3); nextAction=`Versuch ${attempts+1} planen`; }
 if(status==='Termin'){ dueDate=nextDate(1); nextAction='Termin vorbereiten'; }
 if(status==='Kontakt hergestellt'){ dueDate=nextDate(4); nextAction='Nachfassen'; }
 if(status==='Gewonnen'||status==='Verloren'||status==='Archiv'){ nextAction=status; }
 return {...lead,status,attempts,dueDate,nextAction,updatedAt:new Date().toISOString()}; }
export const priorities:Priority[]=['Niedrig','Mittel','Hoch','Sofort'];
