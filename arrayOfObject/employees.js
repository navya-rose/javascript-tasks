
var employees=[
    {id:101,name:"nieve",department:"sales",salary:"25000",exp:"2yr"},
    {id:102,name:"nathel",department:"hr",salary:"30000",exp:"4yr"},
    {id:102,name:"nathel",department:"hr",salary:"30000",exp:"4yr"},
    {id:103,name:"navaneeth",department:"it",salary:"28000",exp:"3yr"},
    {id:104,name:"naveen",department:"sales",salary:"27000",exp:"1yr"},
    {id:105,name:"nakul",department:"hr",salary:"35000",exp:"5yr"},
    {id:106,name:"nivin",department:"it",salary:"28000",exp:"3yr"},
    {id:107,name:"nithesh",department:"sales",salary:"25000",exp:"2yr"}
]

//display sales employees names
var salesEmplo=employees.filter(em=>em.department=="sales").map(em=>em.name)
// console.log(salesEmplo);

//display salary>25000

var GT =employees.filter(sa=>sa.salary>25000).map(sa=>sa.name)
// console.log(GT);

//max salary

var maxsalary =employees.reduce((e1,e2)=>e1.salary>e2.salary?e1:e2).salary
var maxsalaryemploy=employees.filter(em=>em.salary==maxsalary)
// console.log(maxsalaryemploy);

var minsalary=employees.reduce((e1,e2)=>e1.salary<e2.salary?e1:e2).salary
var minsalaryemployes=employees.filter(em=>em.salary==minsalary)
console.log(minsalaryemployes);


