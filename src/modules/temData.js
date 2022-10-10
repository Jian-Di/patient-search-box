/**
 * 搜尋 TEM 可以查到我覺得怪怪的 data
 * 非數值類的 我通常會給一個 interval 的 property 然後沒有upper lower limit
 * 
 */

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
        ques: "CBC",
        ans: [{
            test: "WBC",
            unit:"10^3/μL",
            result: 85, 
            upperLimit: 11,
            lowerLimit: 4.5,  
        },{
            test: "RBC",
            unit:"10^6/μL",
            result: 4.9, 
            upperLimit: 5.5,
            lowerLimit: 3.9,  
        },{
            test: "Hb",
            unit:"g/dL",
            result: 15.1, 
            upperLimit: 17.7,
            lowerLimit: 12.6, 
        },{
            test: "Hct",
            unit:"%",
            result: 44.6, 
            upperLimit: 50,
            lowerLimit: 42, 
        },{
            test: "MCV",
            unit:"fL",
            result: 92, 
            upperLimit: 100,
            lowerLimit: 80, 
        },{
            test: "MCH",
            unit:"pg/cell",
            result: 29.8, 
            upperLimit: 34,
            lowerLimit: 26, 
        },{
            test: "MCHC",
            unit:"g/dL",
            result: 35.4, 
            upperLimit: 37,
            lowerLimit: 33, 
        },{
            test: "RDW",
            unit:"%",
            result: 12.5, 
            upperLimit: 15,
            lowerLimit: 11.5, 
        },{
            test: "Platelet",
            unit:"10^3/μL",
            result: 223, 
            upperLimit: 350,
            lowerLimit: 150, 
        },],
    },{
        cate: "Lab",
        ques: "WBC DC",
        ans: [{
            test: "Neutrophils",
            unit:"%",
            result: 53, 
            upperLimit: 75,
            lowerLimit: 40,  
        },{
            test: "Lymphocytes",
            unit:"%",
            result: 37, 
            upperLimit: 45,
            lowerLimit: 20,  
        },{
            test: "Monocytes",
            unit:"%",
            result: 4.8, 
            upperLimit: 10,
            lowerLimit: 2, 
        },{
            test: "Eosinophils",
            unit:"%",
            result: 3.3, 
            upperLimit: 6,
            lowerLimit: 1, 
        },{
            test: "Basophils",
            unit:"%",
            result: 1.3, 
            upperLimit: 1,
            lowerLimit: 0, 
        },{
            test: "Immature granulocytes",
            unit:"%",
            result: 0, 
            upperLimit: 3,
            lowerLimit: 0, 
        },],
    },{
        cate: "Lab",
        ques: "Arterial blood gas",
        ans: [{
            test: "Blood pH",
            unit:"-",
            result: 7.43, 
            upperLimit: 7.45,
            lowerLimit: 7.35,  
        },{
            test: "PaO2",
            unit:"mmHg",
            result: 91.7, 
            upperLimit: 100,
            lowerLimit: 75,  
        },{
            test: "PaCO2",
            unit:"mmHg",
            result: 36.1, 
            upperLimit: 45,
            lowerLimit: 35, 
        },{
            test: "HCO3",
            unit:"mmol/L",
            result: 23.9, 
            upperLimit: 30,
            lowerLimit: 22, 
        },{
            test: "BE",
            unit:"mmol/L",
            result: 1.4, 
            upperLimit: 3,
            lowerLimit: -2, 
        },{
            test: "O2 Sat",
            unit:"%",
            result: 100, 
            upperLimit: 100,
            lowerLimit: 95,
        },]
    },{
        cate: "Lab",
        ques: "Urinalysis",
        ans: [{
            test: "Urine color",
            unit:"-",
            result: "Yellow", 
            interval: "Yellow", 
        },{
            test: "Apperance",
            unit:"-",
            result: "Clear", 
            interval: "Clear", 
        },{
            test: "Specific gravity",
            unit:"-",
            result: 1.012, 
            upperLimit: 1.030,
            lowerLimit: 1.005,
        },{
            test: "pH",
            unit:"-",
            result: 6.0, 
            upperLimit: 7.45,
            lowerLimit: 5.0,
        },{
            test: "Leukocyte esterase",
            unit:"-",
            result: "Negative", 
            interval: "Negative", 
        },{
            test: "Nitrite",
            unit:"-",
            result: "Negative", 
            interval: "Negative", 
        },{
            test: "Protein",
            unit:"-",
            result: "Negative", 
            interval: "Negative", 
        },{
            test: "Glucose",
            unit:"-",
            result: "Negative", 
            interval: "Negative", 
        },{
            test: "Ketones",
            unit:"-",
            result: "Negative", 
            interval: "Negative", 
        },{
            test: "Blood",
            unit:"-",
            result: "Negative", 
            interval: "Negative", 
        },{
            test: "Bilirubin",
            unit:"-",
            result: "Negative", 
            interval: "Negative", 
        },{
            test: "Urobilinogen",
            unit:"-",
            result: 0, 
            upperLimit: 1.5,
            lowerLimit: 0,
        },]
    },{
        cate: "Lab",
        ques: "HbA1c",
        ans: 5.5,
        unit: "%",
        upperLimit: 5.6,
        lowerLimit: 4,
    },{
        cate: "Lab",
        ques: "aPTT",
        ans: 30.4,
        unit: "s",
        upperLimit: 38,
        lowerLimit: 28,
    },{
        cate: "Lab",
        ques: "PT",
        ans: 10.9,
        unit: "s",
        upperLimit: 13.8,
        lowerLimit: 9.5,
    },{
        cate: "Lab",
        ques: "Troponin I",
        ans: 0.01,
        unit: "ng/mL",
        upperLimit: 0.04,
        lowerLimit: 0,
    },{
        cate: "Lab",
        ques: "CK-MB",
        ans: 3.2,
        unit: "ng/mL",
        upperLimit: 6.3,
        lowerLimit: 0.6,
    },{
        cate: "Lab",
        ques: "Na",
        ans: 139.0,
        unit: "mEq/L",
        upperLimit: 145,
        lowerLimit: 135,
    },{
        cate: "Lab",
        ques: "K",
        ans: 4.1,
        unit: "mEq/L",
        upperLimit: 5.5,
        lowerLimit: 3.5,
    },{
        cate: "Lab",
        ques: "Lipid profile",
        ans: [{
            test: "Total Cholesterol",
            unit:"mg/dL",
            result: 162, 
            upperLimit: 200,
            lowerLimit: 0,  
        },{
            test: "TG",
            unit:"mg/dL",
            result: 120, 
            upperLimit: 150,
            lowerLimit: 0,  
        },{
            test: "HDL",
            unit:"mg/dL",
            result: 43, 
            upperLimit: "", // TEM 這個也怪怪的
            lowerLimit: 40,  
        },{
            test: "LDL",
            unit:"mg/dL",
            result: 95, 
            upperLimit: 100,
            lowerLimit: 0,  
        },],
    },{
        cate: "Lab",
        ques: "AST",
        ans: 17,
        unit: "IU/L",
        upperLimit: 30,
        lowerLimit: 10,
    },{
        cate: "Lab",
        ques: "ALT",
        ans: 18,
        unit: "IU/L",
        upperLimit: 40,
        lowerLimit: 10,
    },{
        cate: "Lab",
        ques: "ALP",
        ans: 42,
        unit: "IU/L",
        upperLimit: 120,
        lowerLimit: 30,
    },{
        cate: "Lab",
        ques: "Total billirubin",
        ans: 0.7,
        unit: "mg/dL",
        upperLimit: 1.0,
        lowerLimit: 0.1,
    },{
        cate: "Lab",
        ques: "Direct biliburin",
        ans: 0.2,
        unit: "mg/dL",
        upperLimit: 0.4,
        lowerLimit: 0,
    },{
        cate: "Lab",
        ques: "GGT",
        ans: 22,
        unit: "IU/L",
        upperLimit: 60,
        lowerLimit: 4,
    },{
        cate: "Lab",
        ques: "Albumin",
        ans: 5.2,
        unit: "g/dL",
        upperLimit: 6,
        lowerLimit: 4,
    },{
        cate: "Lab",
        ques: "Creatinine",
        ans: 0.75,
        unit: "mg/dL",
        upperLimit: 1.35,
        lowerLimit: 0.74,
    },{
        cate: "Lab",
        ques: "BUN",
        ans: 10.9,
        unit: "mg/dL",
        upperLimit: 23,
        lowerLimit: 8,
    },{
        cate: "Lab",
        ques: "eGFR",
        ans: 108, // 這裡應該要帶入身高體重公式 但我先亂寫了
        unit: "mL/min/1.73m^2",
        upperLimit: "", // TEM 亂寫的
        lowerLimit: 60,
    },{
        cate: "Lab",
        ques: "Stool routine",
        ans: [{
            test: "Form",
            unit:"-",
            result: "Formed", 
            interval: "Formed",  
        },{
            test: "Color",
            unit:"-",
            result: "Brown", 
            interval: "Brown",  
        },{
            test: "Mucus",
            unit:"-",
            result: "Negative", 
            interval: "Negative",  
        },{
            test: "OB",
            unit:"-",
            result: "Negative", 
            interval: "Negative",  
        },{
            test: "Parasite",
            unit:"-",
            result: "Negative", 
            interval: "Negative",  
        },],
    },{
        cate: "Lab",
        ques: "CRP",
        ans: 0.7,
        unit: "mg/dL",
        upperLimit: 1,
        lowerLimit: 0,
    },{
        cate: "Lab",
        ques: "Serum osm",
        ans: 286,
        unit: "mOsm/L",
        upperLimit: 295,
        lowerLimit: 275,
    },{
        cate: "Lab",
        ques: "COVID-19 RAT",
        ans: "Negative",
        interval: "Negative",
    },{
        cate: "Lab",
        ques: "TSH",
        ans: 3.12,
        unit: "mIU/L",
        upperLimit: 5.6,
        lowerLimit: 0.34,
    },{
        cate: "Lab",
        ques: "free T4",
        ans: 1.17,
        unit: "ng/dL",
        upperLimit: 1.8,
        lowerLimit: 0.65,
    },{
        cate: "Lab",
        ques: "T3",
        ans: 102,
        unit: "ng/dL",
        upperLimit: 180,
        lowerLimit: 60,
    },{
        cate: "Lab",
        ques: "T4",
        ans: 7,
        unit: "μg/dL",
        upperLimit: 12,
        lowerLimit: 5,
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
            result: "122/80", // TEM 這邊就先這樣了，其實這樣不太好
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