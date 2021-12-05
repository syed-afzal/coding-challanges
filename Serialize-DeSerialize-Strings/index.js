const serialize = (patientData) => {
  patientData = patientData.sort((a, b) => (a.patientId > b.patientId ? 1 : -1))
  let str="";
  patientData.forEach((patient) => {
    const paid = patient.paid ? "Y" : "N";
    const codes = (patient.treatmentCodes || []).join(",")
    if (str.includes(patient.patientId)) {
      str +=`\n+${patient.visitDate}|${paid}|${codes}`;
    } else {
      str +=`${str.length > 0 ? '\n' : ''}>${patient.patientId}
+${patient.visitDate}|${paid}|${codes}`;
    }

  })
  return str
}

const deserialize = (patientStrings) => {
  const output = [];
  const lines = patientStrings.split("\n");
  for (let i=0; i<lines.length; i+=2) {
    const segments = lines[i+1].split("|");
    output.push({
      patientId: lines[i].substr(1),
      visitDate: segments[0].substr(1),
      paid: (segments[1] === "Y"),
      treatmentCodes: segments[2].split(",").map(Number)
    })
  }
  return output;
}

console.log(serialize([{
  patientId: "PI-31415",
  visitDate: "2018-06-17",
  paid: true,
  treatmentCodes: [41524, 9810, 33179]
},
  {
    patientId: "PI-31415",
    visitDate: "2018-05-31",
    paid: false,
    treatmentCodes: []
  }]))
console.log(deserialize(">PI-31415\n+2018-05-31|Y|41524,9810,33179"))