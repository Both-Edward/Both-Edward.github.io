// Group 5 Team Members Data
const teamMembers = [
  { name: "XU Hanxi", id: "25149923G", contribution: "Team Leader, Project Management, Document Retrieval" },
  { name: "ZHAO Shanhe", id: "25149861G", contribution: "Text Writing, Document Research, Web Development" },
  { name: "ZHAN Changhao", id: "25150816G", contribution: "Brainstorming, Feedback Revision, Document Research" },
  { name: "YI Sipeng", id: "25148316G", contribution: "--" },
  { name: "ZHANG Zhiyuan", id: "25150114G", contribution: "--" },
];

function renderTeamTable() {
  const tbody = document.getElementById('team-tbody');
  if (!tbody) return;
  teamMembers.forEach(member => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${member.name}</td>
      <td>${member.id}</td>
      <td>${member.contribution}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderTeamTable);
