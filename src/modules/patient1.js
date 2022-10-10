const patient1Data = [
    {
        infoText: "A 33-year-old woman presented to ER for fever for two days",
        ansText: "Diagnosis: Thyroid storm related to Grave's disease undiagonosis",
        countDownValue: 900000,
        ques: "" // 為了SearchBar.js:82 toLowerCase() 的補救措施XDD 

    },{
        cate: "Dialogue",
        ques: "Palpitation",
        ans: "Yes",
    },{
        cate: "PE",
        ques: "pitting edema",
        ans: "non-pitting edema"
    },{
        cate: "PE",
        ques: "Thyroid gland",
        ans: "Diffuse, smooth, non-tender goiter"
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
        cate: "Monitor",
        ques: "monitor-Q1",
        ans: "monitor-A1"
    },

];

export default patient1Data;