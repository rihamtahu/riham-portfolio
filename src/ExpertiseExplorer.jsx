import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Activity, Cloud, ScanLine, BrainCircuit, Database, Network, ShieldCheck, Code2, Check, Plus } from 'lucide-react';
import { domains, projects } from './data';
import './expertise.css';

const presentation = [
 { icon: Activity, description: 'Following the signals behind a security incident.', practice: 'I have explored log analysis, contextual threat investigation, and behavioral monitoring through the AI Cyber RAG assistant and an authorized keylogger lab.', tools: ['Python', 'FastAPI', 'FAISS', 'MITRE ATT&CK'] },
 { icon: Cloud, description: 'Exploring identity, data protection, and the cloud.', practice: 'My AWS labs cover IAM, KMS, and CloudTrail. Azure Emotion Analyzer gave me practical experience connecting cloud storage with an event-driven serverless application.', tools: ['AWS IAM', 'AWS KMS', 'AWS CloudTrail', 'Azure Functions', 'Azure Blob Storage'] },
 { icon: ScanLine, description: 'Understanding attack behavior to strengthen defenses.', practice: 'In authorized virtual labs, I have studied keylogger behavior, suspicious processes, and SQL injection testing, connecting offensive techniques with defensive monitoring.', tools: ['Kali Linux', 'Python', 'SQLmap', 'DVWA', 'Virtual machines'] },
 { icon: BrainCircuit, description: 'Bringing context and multiple perspectives to analysis.', practice: 'I have applied retrieval-augmented generation to SOC investigation and designed threat, behavioral, and governance agents for transaction risk assessment.', tools: ['Python', 'Google Gemini 2.5 Flash', 'Sentence Transformers', 'Llama 3', 'RAG', 'asyncio'] },
 { icon: Database, description: 'Making access intentional and protecting data.', practice: 'My database security labs explore role-based access, authentication, least privilege, and controlled SQL injection testing.', tools: ['PostgreSQL', 'SQL', 'RBAC', 'TOTP', 'SQLmap', 'DVWA'] },
 { icon: Network, description: 'Looking closely at systems and how they behave.', practice: 'I have used virtual environments to study process behavior and defensive monitoring, alongside practical learning in digital forensics and evidence analysis.', tools: ['Linux', 'Wireshark', 'VMware', 'Kali Linux', 'Windows 7'] },
 { icon: ShieldCheck, description: 'Connecting technical decisions with organizational risk.', practice: 'At BASF Maroc, I observed information security management and governance practices. My labs also cover ISO 27005 risk analysis, while AegisPay explores security policy verification.', tools: ['ISO/IEC 27001', 'ISO/IEC 27005', 'ISMS'] },
 { icon: Code2, description: 'Turning security questions into practical tools.', practice: 'I use programming across AI investigation, database security, and serverless workflows, including Python-based tools and SQL access controls.', tools: ['Python', 'SQL', 'JavaScript', 'C', 'Git'] }
];

export default function ExpertiseExplorer() {
 const [selected, setSelected] = useState(0);
 const panelId = useId();
 const domain = domains[selected];
 const detail = presentation[selected];
 const Icon = detail.icon;
 return <div className="expertise-editorial">
  <div className="expertise-grid" aria-label="Explore expertise areas">
   {domains.map((item, index) => { const CardIcon = presentation[index].icon; const active = selected === index; return <motion.button type="button" key={item.name} className={`expertise-card expertise-card-${index}${active ? ' is-selected' : ''}`} aria-pressed={active} aria-controls={panelId} onClick={() => setSelected(index)} whileHover={{ y: -3 }} transition={{ duration: .2 }}>
    <span className="expertise-card-top"><CardIcon size={24} strokeWidth={1.5} aria-hidden="true"/><span className="expertise-state">{active ? <><Check size={13} aria-hidden="true"/> Exploring</> : <Plus size={16} aria-hidden="true"/>}</span></span>
    <span className="expertise-card-title">{item.name}</span>
    <span className="expertise-card-description">{presentation[index].description}</span>
   </motion.button> })}
  </div>
  <div id={panelId} className="expertise-panel" role="region" aria-label="Selected expertise details" aria-live="polite" aria-atomic="true">
   <motion.div key={domain.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .22 }}>
    <div className="expertise-panel-heading"><span className="expertise-panel-icon"><Icon size={27} strokeWidth={1.4} aria-hidden="true"/></span><h3>{domain.name}</h3><span className="expertise-panel-note">From learning to practice</span></div>
    <div className="expertise-panel-grid">
     <div><h4>What I've studied & practiced</h4><p>{detail.practice}</p><h4>Technologies & tools</h4><ul className="expertise-tools">{detail.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></div>
     <div className="expertise-projects"><h4>Where I've applied it</h4>{domain.projects.map(id => { const project = projects.find(item => item.id === id); return <Link key={id} to={`/projects/${id}`} className="expertise-project"><span>{project.name}<small>{project.subtitle}</small></span><span className="expertise-project-action">View project</span></Link> })}</div>
    </div>
   </motion.div>
  </div>
 </div>;
}
