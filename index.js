const students = [
    { 
      studentName: "John Doe", 
      guardianName: "Jane Doe", 
      arrivalTime: 8.45, 
      weekly: {
        lateness: 1, 
        absence: 0
      }, 
      total: {
        lateness: 5, 
        absence: 2
      },
      excusedLateness: false 
    },
    { 
      studentName: "Emily Smith", 
      guardianName: "Robert Smith", 
      arrivalTime: null, 
      weekly: {
        lateness: 0, 
        absence: 1
      }, 
      total: {
        lateness: 2, 
        absence: 30
      },
      excusedLateness: true 
    },
    { 
      studentName: "Liam Johnson", 
      guardianName: "Sara Johnson", 
      arrivalTime: 9.01, 
      weekly: {
        lateness: 2, 
        absence: 0
      }, 
      total: {
        lateness: 8, 
        absence: 1
      },
      excusedLateness: false 
    },
    { 
      studentName: "Sophia Brown", 
      guardianName: "Mike Brown", 
      arrivalTime: 10.30, 
      weekly: {
        lateness: 3, 
        absence: 0
      }, 
      total: {
        lateness: 12, 
        absence: 3
      },
      excusedLateness: true 
    },
    { 
      studentName: "Mason Davis", 
      guardianName: "Laura Davis", 
      arrivalTime: 8.00, 
      weekly: {
        lateness: 0, 
        absence: 0
      }, 
      total: {
        lateness: 0, 
        absence: 0
      },
      excusedLateness: false 
    },
    { 
      studentName: "Isabella Wilson", 
      guardianName: "David Wilson", 
      arrivalTime: null, 
      weekly: {
        lateness: 4, 
        absence: 2
      }, 
      total: {
        lateness: 15, 
        absence: 10
      },
      excusedLateness: false 
    },
    { 
      studentName: "James Martinez", 
      guardianName: "Luis Martinez", 
      arrivalTime: 9.00, 
      weekly: {
        lateness: 2, 
        absence: 1
      }, 
      total: {
        lateness: 9, 
        absence: 5
      },
      excusedLateness: true 
    },
    { 
      studentName: "Olivia Garcia", 
      guardianName: "Maria Garcia", 
      arrivalTime: 9.05, 
      weekly: {
        lateness: 1, 
        absence: 0
      }, 
      total: {
        lateness: 4, 
        absence: 2
      },
      excusedLateness: false 
    }
  ];
  
// You should use a similar structure to the SNAP lab to process these students
// Your goal to is go through every student and console log an appropriate message
// Some students may have multiple messages (e.g. That they were late, they have weekly detention, AND that they have a family meeting)


