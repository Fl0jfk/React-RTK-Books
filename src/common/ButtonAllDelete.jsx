import { deleteAllBooks as deleteAllBooksAction } from "../features/library/LibrarySlice";
import { useDispatch } from 'react-redux'

function ButtonAllDelete (){
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-center mb-5 align-items-center">
            <button onClick={() => dispatch(deleteAllBooksAction())} className="btn btn-danger mt-5 mb-5">Effacer tous les livres</button>
        </div>
    )
}

export default ButtonAllDelete;