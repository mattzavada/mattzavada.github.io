let studentsScore = 18;
let totalScore = 20;

function getGrade(ss, ts) {
  let percent = (ss / ts) * 100;
  let grade;

  switch (true) {
    case percent >= 90:
      grade = "A";
      break;
    case percent >= 80:
      grade = "B";
      break;
    case percent >= 70:
      grade = "C";
      break;
    case percent >= 60:
      grade = "D";
      break;
    case percent < 60:
      grade = "F";
  }

  return `You got a ${grade} (${percent}%)`;
}

console.log(getGrade(studentsScore, totalScore));
