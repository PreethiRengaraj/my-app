import React, { useState } from 'react';

function Contacts() {
  return (
   <div>
    <p>welcome to Contacts</p>
   </div>
  );
}

export default Contacts;
// import React, { useState } from 'react';


// const Contacts: React.FC = () => {
//   const [showPopup, setShowPopup] = useState<boolean>(false);

//   // Function to handle opening the popup
//   const handleOpenPopup = () => {
//     setShowPopup(true);
//   };

//   // Function to handle closing the popup
//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   // Function to handle form submission
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted');
//     setShowPopup(false);
//   };

//   return (
//     <div className="App">
//       <button onClick={handleOpenPopup}>Show Form</button>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-inner">
//             <h2>Form Title</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" required />
//               </div>
//               <div className="popup-buttons">
//                 <button type="submit">Submit</button>
//                 <button type="button" onClick={handleClosePopup}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contacts;
