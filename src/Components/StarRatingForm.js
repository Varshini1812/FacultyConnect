// import React, { useState } from 'react';

// const StarRatingForm = () => {
//   const [ratings, setRatings] = useState({
//     question1: null,
//     question2: null,
//     question3: null,
//     question4: null,
//     question5: null,
//     question6: null,
//     question7: null,
//     question8: null,
//     question9: null,
//     question10: null
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(ratings); // You can do something else with the ratings here
//   };

//   const handleRatingChange = (event, question) => {
//     setRatings({ ...ratings, [question]: parseInt(event.target.value) });
//   };

//   const StarRating = ({ question }) => {
//     const stars = [1, 2, 3, 4, 5];

//     return (
//       <div>
//         <label htmlFor={question}>{question}:</label>
//         <select id={question} onChange={(event) => handleRatingChange(event, question)}>
//           <option value="">--Select rating--</option>
//           {stars.map((star) => (
//             <option key={star} value={star}>
//               {'★'.repeat(star)}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <StarRating question="Question 1" />
//       <StarRating question="Question 2" />
//       <StarRating question="Question 3" />
//       <StarRating question="Question 4" />
//       <StarRating question="Question 5" />
//       <StarRating question="Question 6" />
//       <StarRating question="Question 7" />
//       <StarRating question="Question 8" />
//       <StarRating question="Question 9" />
//       <StarRating question="Question 10" />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default StarRatingForm;


import React, { useState } from 'react';

const StarRatingForm = () => {
  const [ratings, setRatings] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const allQuestionsAnswered = Object.values(ratings).every(rating => rating !== null);
    
    if (allQuestionsAnswered) {
      console.log(ratings); // Do something with the ratings here
      setErrorMessage('');
    } else {
      setErrorMessage('Please answer all questions.');
    }
  };

  const handleRatingChange = (event, question) => {
    setRatings({ ...ratings, [question]: parseInt(event.target.value) });
  };

  const StarRating = ({ question }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div>
        <label htmlFor={question}>{question}:</label>
        <select id={question} onChange={(event) => handleRatingChange(event, question)} value={ratings[question] || ''}>
          <option value="">--Select rating--</option>
          {stars.map((star) => (
            <option key={star} value={star}>
              {'★'.repeat(star)}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <StarRating question="question1" />
      <StarRating question="question2" />
      <StarRating question="question3" />
      <StarRating question="question4" />
      <StarRating question="question5" />
      <StarRating question="question6" />
      <StarRating question="question7" />
      <StarRating question="question8" />
      <StarRating question="question9" />
      <StarRating question="question10" />

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StarRatingForm;
