// import React from "react";

// function Certification({ title, image, certificateLink }) {
//   return (
//     <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
//       {image && <img src={image} alt="" loading="lazy" />}
//       <div className="dark:bg-dark-card p-4">
//         <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
//         <div className="flex justify-between items-center mt-5">
//           {certificateLink && (
//             <div className="flex items-center">
//               <svg
//                 className="stroke-dark-heading dark:stroke-white inline-block min-w-fit"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12.5 2.5H8.75C6.67893 2.5 5.64339 2.5 4.8217 2.90924C3.92876 3.35401 3.22903 4.05374 2.78426 4.94668C2.375 5.76837 2.375 6.80391 2.375 8.875V15C2.375 16.6569 3.71815 18 5.375 18H14.625C16.2819 18 17.625 16.6569 17.625 15V8.875C17.625 6.80391 17.625 5.76837 17.2157 4.94668C16.771 4.05374 16.0712 3.35401 15.1783 2.90924C14.3566 2.5 13.3211 2.5 11.25 2.5H12.5Z"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                 />
//                 <circle cx="10" cy="10.5" r="2" strokeWidth="1.5" />
//               </svg>
//               <a
//                 href={certificateLink}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="underline pl-2 font-light dark:text-white"
//               >
//                 See Certificate
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }

// export default Certification;
