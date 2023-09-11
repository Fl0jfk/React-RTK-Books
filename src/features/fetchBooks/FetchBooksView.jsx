import Jumbotron from '../../components/Jumbotron';
import { useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { fetchBooks as fetchBooksAsyncAction } from './FetchBooksSlice';
import { addBook as addBookAction } from '../library/LibrarySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FetchBooksView (){
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const booksSliceData = useSelector(state => state.search);
    const notify = () => toast("Livre enregistré");
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchBooksAsyncAction(title));
    };
    const handleSave = (title, author) => {
        const bookToSave ={
            title: title,
            author: author
        }
        dispatch(addBookAction(bookToSave))
        notify()
    }
    const displayFetchedBooks = booksSliceData.isLoading ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
    : 
    booksSliceData.error !== ''? (
        <p>{booksSliceData.error}</p>
    )
    : (
        booksSliceData.fetchedBooks.map(data => {
            return (
                <div className="accordion-item" key={data.id}>
                    <h2 className="accordion-header" id={`heading${data.id}`}>
                        <button 
                            className="accordion-button" 
                            type="button"
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse${data.id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${data.id}`}
                        >
                        {data.volumeInfo.title}
                        </button>
                    </h2>
                    <div id={`collapse${data.id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${data.id}`} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            {
                                data.volumeInfo.hasOwnProperty('imageLinks') &&
                                <img src={data.volumeInfo.imageLinks.thumbnail} alt={`Couverture du livre : ${data.volumeInfo.title}`}/>
                            }
                            <br />
                            <h4 className="card-title mt-3">Titre :  {data.volumeInfo.title}</h4>
                            <h5 className="card-title mt-3">Auteurs : {data.volumeInfo.authors}</h5>
                            <p className="card-text mt-3">Description : {data.volumeInfo.description}</p>
                            <a 
                                className="btn btn-outline-secondary" 
                                target="blank" rel="noopener noreferrer" 
                                href={data.volumeInfo.previewLink}
                            >
                                Plus d'infos
                            </a>
                            <button 
                                className="btn btn-outline-secondary ms-3"
                                onClick={()=> handleSave(data.volumeInfo.title, data.volumeInfo.authors)}
                            >
                                Enregistrer
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            )
        }) 
    ) 
    return(
       <>
           <Jumbotron subtitle="Indiquer le sujet du livre à rechercher sur Google">
                <form className='form-inline justify-content-center d-flex align-items-center' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input 
                            value={title}
                            type="text"
                            className="form-control"
                            placeholder="Que rechercher ?"
                            required
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-warning ms-3'>Rechercher</button>
                    </div>  
                </form>
           </Jumbotron>
           <main className='container'>
                <div className='accordion' id='accordion'>
                    {displayFetchedBooks}
                </div>

           </main>
       </>
    )
   }
   
   export default FetchBooksView;