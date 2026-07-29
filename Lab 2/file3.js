const writeName = (fnmae,constent) =>{

}
const writeData = (fname,constents) =>{
    await writerFile(fname,contents);
    console.log('file written');

};
const readData = (fname) =>{
    const data = await readFile(fname,'utf-8')
    console.log('File content');
    console.log(data);

};
await writeData("happy.txt","I am very happy");
await readData("happy.txt");
await appendData("happy.txt", "FSD is inteeresting");
await readData("happy.txt",);