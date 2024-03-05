export const toggle = () => ({type: 'toggle'});
export const clickTech = () => ({type: 'clickTech', payload: {"tech": true, "exp": false, "education": false}});
export const clickExp = () => ({type: 'clickExp', payload: {"tech": false, "exp": true, "education": false}});
export const clickEducation = () => ({type: 'clickEducation', payload: {"tech": false, "exp": false, "education": true}});
export const processSenEmail = (process) => ({type: 'process', payload: {"sendprocess": process}});



// const d = {
//     "exp": false,
//     "education": false
// }
// console.log(d.exp);