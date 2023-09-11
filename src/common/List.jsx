import { deleteBook as deleteBookAction } from '../features/library/LibrarySlice';
import { useDispatch } from 'react-redux';

function List ({data}){

    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            {
                data.length > 0 ?
                data.map(data => {
                    return (
                        <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between align-item-center">
                            <span>Titre: <strong>{data.title}</strong></span>
                            <span>Auteur: <strong>{data.author}</strong></span>
                            <button 
                                className="btn btn-danger" 
                                onClick={()=>dispatch(deleteBookAction(data.id))}
                            >
                                x
                            </button>
                        </li>
                    )
                })
                : <p className="text-center mt-3">Aucun livre à afficher</p>
            }
        </ul>
    )
}

export default List