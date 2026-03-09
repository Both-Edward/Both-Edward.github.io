// Nokia Decision Timeline Comparison Table Data
// Source: table.csv

const decisionTableData = [
  {
    time: "2007–2008",
    real: "轻视iPhone，坚持Symbian",
    optimal: "接触/测试Android，准备切换",
    gap: "在Android市场仍然能够领先其他厂商1–2年时间"
  },
  {
    time: "2009",
    real: "5800/X6/N97 电阻屏+Symbian",
    optimal: "全面转向电容多点触控+Android",
    gap: "可能仍是智能手机时代的领头羊，保持全球20%+市场份额"
  },
  {
    time: "2010",
    real: "Symbian^3 + Ovi崩溃",
    optimal: "全力研发 MeeGo 或 开始大规模使用Android",
    gap: "仍有翻盘机会，可能保持 10% ~ 15% 市场份额"
  },
  {
    time: "2011",
    real: "all in WP，放弃MeeGo",
    optimal: "如果选Android，至少保中高端",
    gap: "可能保持12%左右的市场份额"
  },
  {
    time: "2013",
    real: "手机业务卖给微软",
    optimal: "--",
    gap: "无力回天"
  }
];

function renderDecisionTable() {
  const tbody = document.getElementById('decision-tbody');
  if (!tbody) return;
  tbody.innerHTML = decisionTableData.map(row => `
    <tr>
      <td>${row.time}</td>
      <td class="dt-real">${row.real}</td>
      <td class="dt-optimal">${row.optimal}</td>
      <td class="dt-gap">${row.gap}</td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderDecisionTable);
