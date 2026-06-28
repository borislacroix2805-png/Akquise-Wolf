import { Bell, HelpCircle, Menu, Moon, Phone } from 'lucide-react';
export function Topbar({title,subtitle,onSession,onMenu}:{title:string;subtitle:string;onSession:()=>void;onMenu:()=>void}){return <>
 <div className="mobileHeader"><button className="btn" onClick={onMenu}><Menu size={18}/></button><strong>Akquise Wolf</strong><button className="btn btnPrimary" onClick={onSession}><Phone size={16}/></button></div>
 <div className="topbar"><div><h2>{title}</h2><p className="muted">{subtitle}</p></div><div className="quickActions"><button className="btn btnPrimary" onClick={onSession}><Phone size={18}/>Telefon-Session starten</button><button className="btn"><Bell size={18}/></button><button className="btn"><Moon size={18}/></button><button className="btn"><HelpCircle size={18}/></button></div></div>
 </>}
