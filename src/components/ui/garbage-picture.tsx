// import { FC, MouseEvent } from "react";
// import GarbagePicture from "../../pictures/garbage.svg";
// import { deleteCard } from "../../store/slices/movies-slice";
// import { useAppDispatch } from "../../store";

// interface IGarbageProps {
//   id: string;
// }

// const Garbage: FC<IGarbageProps> = ({ id }) => {
//   const dispatch = useAppDispatch();

//   const deleteItem = (e: MouseEvent<HTMLImageElement>, id: string) => {
//     e.stopPropagation();
//     dispatch(deleteCard(id));
//   };
//   return (
//     <>
//       <img
//         className="card__garbage"
//         onClick={(e) => deleteItem(e, id)}
//         src={GarbagePicture}
//         alt="garbage"
//       />
//     </>
//   );
// };

// export default Garbage;
