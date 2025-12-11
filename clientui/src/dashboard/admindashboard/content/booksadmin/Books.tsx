// import { booksAPI, TBooks } from "@/books/booksApi"


// export const Books = () => {
//     const { data:booksData, isLoading: booksLoading, error: booksError } = booksAPI.useGetAllBooksQuery
//   return (
//     <div>



//            {booksLoading && <p>Books loading....</p>}
//            {booksError && <p className="text-red-500">Error fetching Books</p>}
//            {booksData && booksData.data && booksData.data.length>0 ? (
                
//           <div className="overflow-x-auto">
//              <table className="table table-zebra">
//              {/* head */}
//                <thead>
//                 <tr>
//                 <th></th>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Category</th>
//                 <th>Category</th>
//                 <th>Category</th>
//                 <th>Category</th>
//                 </tr>
//                </thead>
//             <tbody>
      
//       {/* row 1 */}
//              <tr>
//              <th>1</th>
//                <td>Cy Ganderton</td>
//                <td>Quality Control Specialist</td>
//                <td>Blue</td>
//             </tr>
//         {/* row 2 */}
//             <tr>
//              <th>2</th>
//              <td>Hart Hagerty</td>
//              <td>Desktop Support Technician</td>
//              <td>Purple</td>
//             </tr>
//       {/* row 3 */}
//            <tr>
//              <th>3</th>
//              <td>Brice Swyre</td>
//              <td>Tax Accountant</td>
//              <td>Red</td>
//            </tr>
//         </tbody>
//       </table>
//     </div>

//            ) : (
//             <p> Books not Found</p>
//            )}




//     </div>
//   )
// }
