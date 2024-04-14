type Student = {
  major: string
  choices: string[]
  class: '2200' | '3200'
}

type Project = {
  name: string
  requiredMajors: string[]
}

function setup3200Students(teams: any, students: Student[], minimumStudents:number, maximumStudents:number) 
{ 
  students.forEach(student, index) => {
    // boolean foundTeam = false;
    for(const choice of students.choices)
    {
      if(choice.class = "3200")
      {
        teams[students.choices[0]].push(student);
      }
    }
  }
}

function setup2200Students(teams: any, students: Student[], minimumStudents:number, maximumStudents:number) 
{
  // get only students of class '2200' that picked choices
  // assign student to the first choice that has room
  // for each student, for each choice, check if that choice has less than the maximum, if so assign student
  // if no choice has less than maximum, assign to first
}
function setupNoChoiceStudents(teams: any, students: Student[], minimumStudents:number, maximumStudents:number) 
{
  // get only students that didnt pick anything
  // assign these students only to teams that have less than the required minimum of students
}

function calcTeamScore() { }

function calcStudentImpactOnTeam() { }

function passOne(teams: Student[], students: Student[], projects: Project[], minimumStudents: number, maximumStudents: number) {
  setup3200Students(teams, students, projects, minimumStudents, maximumStudents)
  setup2200Students(teams, students, minimumStudents, maximumStudents)
  setupNoChoiceStudents(teams, students, minimumStudents, maximumStudents);
}

function passTwo() { }

function generateTeams(students: Student[], projects: Project[], minimumStudents: number, maximumStudents: number) {
  const teams = {}
  // pass 1
  passOne(teams, students, projects, minimumStudents, maximumStudents)
  // pass 2
  passTwo()
    // balancing pass - function that takes only the teams and min/max students
    // order teams by least students to most
    // any team with less than minimum, find a student from a team that has the most students and move the least impactful student

  // pass 3
  // can be run multiple times to achieve best average team score within 100 iterations
  // calculate average team score, if we have run less than 100 times AND avg team deviation is less than 1 std deviation then do a pass 
  // ends up being a while loop with 2 conditions

}
