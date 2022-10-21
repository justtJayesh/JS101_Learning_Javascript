// Grande Students Marks

// Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total.

let data = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},        //0
			{name: "Prateek", marks: [20, 30, 40]}        //1
		]
	},                                                                    //0
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},         //0
			{name: "Albert", marks: [20, 30, 40]}        //1
		]
	},                                                                    //1
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},        //0
			{name: "Sandhya", marks: [20, 30, 40]}        //1
		]
	}                                                                      //2
];


for(let x = 0; x < data.length; x++){

    for(let a=0; a<data[x]["students"].length; a++){
        let sum = 0;
        for(let i=0; i<data[x]["students"][a]["marks"].length; i++){
            sum += data[x]["students"][a]["marks"][i];
        }
        for(let key in data[x]["students"][a]["marks"]){
            data[x]["students"][a]["marks"] = sum;
        }
    }

    for(let i=0; i<data[x]["students"].length; i++){
        if(data[x]["students"][i]["marks"] < data[x]["students"][1]["marks"]){
            console.log(data[x]["grade"]+"-"+data[x]["students"][i+1]["name"]+"-"+data[x]["students"][1]["marks"]);
        }else{
            continue;
        }
    }
  
}