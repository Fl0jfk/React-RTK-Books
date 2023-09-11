import Jumbotron from "../../components/Jumbotron";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { addBook as addBookAction, getLocalStorageData as getLocalStorageDataAction } from "./LibrarySlice";
import List from "../../common/List";
import ButtonAllDelete from "../../common/ButtonAllDelete";

function LibraryView (){
    const libraryData = useSelector(state => state.library.books);
    const dispatch = useDispatch();
    const initialState ={
        title: '',
        author: ''
    }
    const [data, setData] = useState(initialState);
    useEffect(() => {
        if(localStorage.getItem('booksData')){
            dispatch(getLocalStorageDataAction())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBookAction(data));
        setData(initialState);
    }
 return(
    <>
        <Jumbotron subtitle="Ajouter un livre à votre bibliothèque">
            <form 
                onSubmit={handleSubmit}
            >
                <div className="container">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="col-lg-4 m-2">
                            <input 
                                value={data.title}
                                type="text"
                                className="form-control"
                                placeholder="Titre"
                                required
                                onChange={e => setData({...data, title: e.target.value})}
                            />
                        </div>
                        <div className="col-lg-4 m-2">
                            <input 
                                value={data.author}
                                type="text"
                                className="form-control"
                                placeholder="Auteur"
                                required
                                onChange={e => setData({...data, author: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="justify-content-center mt-2">
                        <button className="btn btn-warning">Ajouter un livre</button>
                    </div>
                </div>
            </form>
        </Jumbotron>
        <main className="container">
            <List data={libraryData}/>
            {
                libraryData.length > 0  && <ButtonAllDelete/>
            }
        </main>    
    </>
 )
}

export default LibraryView;