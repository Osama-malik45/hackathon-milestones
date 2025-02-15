// Display Area


const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle Form Submission

form.addEventListener('submit',(event:Event)=> {
    event.preventDefault();

    // collect input values

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const eduction = (document.getElementById('eduction') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


    // content dynamically
    const resumeHTML = `
    <h2<b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Eduction</h3>
    <p>${eduction}</p>

     <h3>Experience</h3>
    <p>${experience}</p>

     <h3>Skills</h3>
    <p>${skills}</p>
    `
// display resume
 if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
 }
})