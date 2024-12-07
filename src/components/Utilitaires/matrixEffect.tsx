// import { useState, useEffect } from 'react';

// export function MatrixTextEffect() {
//   const [matrixText, setMatrixText] = useState('');
//   const fullText =
//     "👋 Hello! I'm Samy, a Software Engineer, IT Analyst, and Full Stack Developer. Welcome to my universe! I craft intuitive web applications and create innovative solutions.";

//   useEffect(() => {
//     let timeoutId: ReturnType<typeof setTimeout>; // Corrige le type

//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let iteration = 0;

//     const updateText = () => {
//       const newText = fullText
//         .split('')
//         .map((char, index) => {
//           if (index < iteration) {
//             return char; // Afficher le caractère original une fois atteint
//           }
//           return characters[Math.floor(Math.random() * characters.length)];
//         })
//         .join('');

//       setMatrixText(newText);

//       if (iteration < fullText.length) {
//         iteration += 1;
//         timeoutId = setTimeout(updateText, 50); // Ajustez la vitesse au besoin
//       }
//     };

//     updateText();

//     return () => clearTimeout(timeoutId);
//   }, [fullText]);

//   return (
//     <div className={styles.content}>
//       <h1 className={styles.matrixText}>{matrixText}</h1>
    
//     </div>
//   );
// }
