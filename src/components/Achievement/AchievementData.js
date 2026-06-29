import paper from "../../assets/kawaii/achievement/paper.png";
import internship from "../../assets/kawaii/achievement/internship.png";
import cloud from "../../assets/kawaii/achievement/cloud_1.png";
import rocket from "../../assets/kawaii/achievement/rocket_1.png";
import smiley from "../../assets/kawaii/achievement/smiley.png";
const achievements = [
  {
    id: 1,
    icon: internship,
    color: "bg-[#7FC7FF]",
    title: "DATA INTERN",
    subtitle: "@ TechnoForte",

    description:
      "Started my industry journey as a Data Intern, working on real-world Data Analytics & BI projects.",

    tag: "DATA • BI • ANALYTICS",
  },

  {
    id: 2,
    icon: paper,
    color: "bg-[#FFE14D]",
    title: "PAPER ACCEPTED",
    subtitle: "NCCCi Conference",

    description:
      "One of my research papers has been accepted at the NCCCi Conference. Excited to contribute to AI & Research.",

    tag: "RESEARCH • AI • INNOVATION",
  },

  {
    id: 3,
    icon: cloud,
    color: "bg-[#FF8FC6]",
    title: "NPTEL CLOUD",
    subtitle: "Score : 73%",

    description:
      "Completed NPTEL Cloud Computing certification, strengthening cloud fundamentals and distributed systems knowledge.",

    tag: "CLOUD • SYSTEMS",
  },

  {
    id: 4,
    icon: rocket,
    color: "bg-[#B7FF6D]",
    title: "LOAN RISK ANALYZER",
    subtitle: "Hybrid ML System",

    description:
      "Built a hybrid ML-powered credit risk analyzer using XGBoost, SHAP and FastAPI for explainable lending decisions.",

    tag: "FINTECH • ML • AI",
  },

];

export default achievements;