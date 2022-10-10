const stanPatientData = [
    {
        cate: "Dialogue",
        ques: "dia-Q1",
        ans: "dia-A1",
    },{
        cate: "Dialogue",
        ques: "dia-Q2",
        ans: "dia-A22222222222222222",
    },{
        cate: "Dialogue",
        ques: "dia-Q2",
        ans: "dia-A22222222222222222",
    },{
        cate: "Dialogue",
        ques: "dia-Q2",
        ans: "dia-A22222222222222222",
    },{
        cate: "PE",
        ques: "GCS",
        ans: "E4V5M6"
    },{
        cate: "PE",
        ques: "Skin turgor",
        ans: "Normal"
    },{
        cate: "PE",
        ques: "Conjunctivae",
        ans: "Pink"
    },{
        cate: "PE",
        ques: "Sclera",
        ans: "Anicteric"
    },{
        cate: "PE",
        ques: "Jugular vein engorgement",
        ans: "No"
    },{
        cate: "PE",
        ques: "Breathing sound",
        ans: "Bilateral clear breathing sound"
    },{
        cate: "PE",
        ques: "Heart sound",
        ans: "Regular heart beat"
    },{
        cate: "PE",
        ques: "Bowel sound",
        ans: "Normo-active"
    },{
        cate: "PE",
        ques: "Abdomen palpation",
        ans: "Normal"
    },{
        cate: "PE",
        ques: "CVA tenderness",
        ans: "Absent"
    },{
        cate: "PE",
        ques: "Pitting edema",
        ans: "Absent"
    },{
        cate: "PE",
        ques: "Murphy's sign",
        ans: "Absent"
    },{
        cate: "PE",
        ques: "McBurney's sign",
        ans: "Absent"
    },{
        cate: "PE",
        ques: "Thyroid gland",
        ans: "Unremarkable"
    },{
        cate: "Lab",
        ques: "lab-Q1",
        ans: "lab-A1"
    },{
        cate: "Lab",
        ques: "lab-Q2",
        ans: "lab-A2222222222"
    },{
        cate: "Lab",
        ques: "lab-Q3",
        ans: "lab-A33333333"
    },{
        cate: "Lab",
        ques: "lab-Q4",
        ans: "lab-A444"
    },{
        cate: "Lab",
        ques: "lab-Q5",
        ans: "lab-A55555555"
    },{
        cate: "Image",
        ques: "Chest X-ray",
        imgsrc: "CXR-1.jpg"
    },{
        cate: "Image",
        ques: "12-Lead ECG",
        imgsrc: "CXR-1.jpg"
    },{
        cate: "Image",
        ques: "Abdominal CT",
        imgsrc: "Not offered"
    },{
        cate: "Image",
        ques: "Abdominal radiography",
        imgsrc: "Not offered"
    },{
        cate: "Image",
        ques: "Abdominal ultrasound",
        imgsrc: "Not offered"
    },{
        cate: "Image",
        ques: "Chest CT",
        imgsrc: "Not offered"
    },{
        cate: "Image",
        ques: "Head CT",
        imgsrc: "Not offered"
    },{
        cate: "Monitor",
        ques: "Random blood glucose",
        ans: 96,
        unit: "mg/dL",
        upperLimit: 140,
        lowerLimit: 70,
    },{
        cate: "Monitor",
        ques: "SpO2",
        ans: 98,
        unit: "%",
        upperLimit: 100,
        lowerLimit: 95,
    },{
        cate: "Monitor",
        ques: "Vital sign",
        ans: [{
            test: "BT",
            unit: "℃",
            result: 37.2,
            upperLimit: 38,
            lowerLimit: 37.
        },{
            test: "BP",
            unit:"mmHg",
            result: "122/80", //這邊就先這樣了，其實這樣不太好
            upperLimit: "140/90",
            lowerLimit: "90/60",  
        },{
            test: "PR",
            unit:"/min",
            result: 80,
            upperLimit: 100,
            lowerLimit: 60,
        },{
            test: "RR",
            unit:"/min",
            result: 15,
            upperLimit: 20,
            lowerLimit: 12,
        }],
    }

];

export default stanPatientData;