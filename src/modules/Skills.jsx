import { useEffect, useState } from "react";
import anime from "animejs";
import SKILLS from "../skill.json";

const skillColor = "#ffffff";
const skillColorFill = "#1e1e2e";
const skillBackFill = "#2e2e3e";

function Skill() {
  const [skillText, setSkillText] = useState([]);

  const createPolygonBacks = (s) => {
    for (let i = 4; i >= 0; i--) {
      const e = SKILLS[s].map(() => ({ level: (4 - i) / 5 + 0.2 }));
      const newPointsBack = compilePoints(e, true);
      anime({
        targets: [`.skillPolygonBack${i}`],
        points: newPointsBack,
        duration: 200,
        easing: "easeInOutQuad",
      });
    }
  };

  const compilePoints = (pointList, ignoreText = false) => {
    const skillCount = pointList.length;
    const skillTexts = [];
    const newPoints = pointList
      .map((skill, i) => {
        const x = Math.round(skill.level * Math.sin((i / skillCount) * Math.PI * 2) * 1000) / 10;
        const y = Math.round(skill.level * Math.cos((i / skillCount) * Math.PI * 2) * 1000) / 10;
        const txtX = Math.sin((i / skillCount) * Math.PI * 2) * 140;
        const txtY = Math.cos((i / skillCount) * Math.PI * 2) * 140;
        const txt = (
          <text
            key={i}
            x={txtX}
            y={txtY}
            className="text-gray-300 text-sm font-semibold drop-shadow-md"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {skill.name}
          </text>
        );
        skillTexts.push(txt);
        return `${x} ${y}`;
      })
      .join(" ");

    if (!ignoreText) setSkillText(skillTexts);
    return newPoints;
  };

  useEffect(() => {
    const newPoints = compilePoints(SKILLS.Languages);
    anime({
      targets: [".skillPolygon"],
      points: newPoints,
      duration: 300,
      easing: "easeInOutQuad",
    });
    createPolygonBacks("Languages");
  }, []);

  return (
    <div className="text-gray-100 bg-gray-900 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <p className="text-gray-400 mb-6">A showcase of my expertise</p>
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg max-w-4xl w-full flex flex-col items-center">
        <h2 className="text-center text-lg font-semibold mb-4">Statistics</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(SKILLS).map(([key], i) => (
              <button
                key={i}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-all duration-200"
                onClick={() => {
                  const newPoints = compilePoints(SKILLS[key]);
                  anime({
                    targets: [".skillPolygon"],
                    points: newPoints,
                    duration: 300,
                    easing: "easeInOutQuad",
                  });
                  createPolygonBacks(key);
                }}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="flex-grow flex justify-center">
            <svg className="w-72 sm:w-96" viewBox="-250 -150 500 300">
              {[...Array(5)].map((_, i) => (
                <polygon
                  key={i}
                  strokeWidth="1"
                  fill={skillBackFill}
                  stroke="#bebebe"
                  points="0 0 0 0 0 0 0 0 0 0"
                  className={`skillPolygonBack${i}`}
                ></polygon>
              ))}
              <polygon
                strokeWidth="1.5"
                fill={skillColorFill}
                stroke={skillColor}
                points="0 0 0 0 0 0 0 0 0 0"
                className="skillPolygon"
              ></polygon>
              {skillText}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
