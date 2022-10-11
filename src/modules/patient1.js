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
        cate: "Dialogue",
        ques: "Diarrhea",
        ans: "Yes",
    },{
        cate: "Dialogue",
        ques: "Weight loss",
        ans: "Yes",
    },{
        cate: "Dialogue",
        ques: "Past medical history",
        ans: "Asthma, Preeclampsia",
    },{
        cate: "Dialogue",
        ques: "Medication history",
        ans: "Occasional albuterol use for asthma",
    },{
        cate: "PE",
        ques: "pitting edema",
        ans: "non-pitting edema"
    },{
        cate: "PE",
        ques: "Thyroid gland",
        ans: "Diffuse, smooth, non-tender goiter"
    },{
        cate: "Monitor",
        ques: "Vital sign",
        ans: [{
            test: "BT",
            unit: "℃",
            result: 39.2,
            upperLimit: 38,
            lowerLimit: 37.
        },{
            test: "BP",
            unit:"mmHg",
            result: "127/75",
            upperLimit: "140/90",
            lowerLimit: "90/60",  
        },{
            test: "PR",
            unit:"/min",
            result: 118,
            upperLimit: 100,
            lowerLimit: 60,
        },{
            test: "RR",
            unit:"/min",
            result: 18,
            upperLimit: 20,
            lowerLimit: 12,
        }],
    },{
        cate: "Lab",
        ques: "Total billirubin",
        ans: 3.26,
        unit: "mg/dL",
        upperLimit: 1.0,
        lowerLimit: 0.1,
    },{
        cate: "Lab",
        ques: "Direct biliburin",
        ans: 2.2,
        unit: "mg/dL",
        upperLimit: 0.4,
        lowerLimit: 0,
    },{
        cate: "Lab",
        ques: "TSH",
        ans: 0.05,
        unit: "mIU/L",
        upperLimit: 5.6,
        lowerLimit: 0.34,
    },{
        cate: "Lab",
        ques: "free T4",
        ans: 2.6,
        unit: "ng/dL",
        upperLimit: 1.8,
        lowerLimit: 0.65,
    },{
        cate: "Lab",
        ques: "T3",
        ans: 261,
        unit: "ng/dL",
        upperLimit: 180,
        lowerLimit: 60,
    },{
        cate: "Lab",
        ques: "T4",
        ans: 22,
        unit: "μg/dL",
        upperLimit: 12,
        lowerLimit: 5,
    },{
        cate: "Image",
        ques: "12-Lead ECG",
        imgsrc: "ECG-1.jpg"
    },

];

export default patient1Data;