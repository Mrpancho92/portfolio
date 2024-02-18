export const toggle = () => ({type: 'toggle'});
export const clickTech = () => ({type: 'clickTech', payload: {"tech": true, "exp": false, "education": false}});
export const clickExp = () => ({type: 'clickExp', payload: {"tech": false, "exp": true, "education": false}});
export const clickEducation = () => ({type: 'clickEducation', payload: {"tech": false, "exp": false, "education": true}});
export const remember = () => ({type: 'rememberMe'});



// const d = {
//     "exp": false,
//     "education": false
// }
// console.log(d.exp);