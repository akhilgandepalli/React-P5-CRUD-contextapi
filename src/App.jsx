import { useState,useEffect,createContext } from 'react'
import './App.css'
import Container from './components/Container'
import { getData, postData, putData, deleteData} from './api';
import Form from './components/Form';

export const dataContext = createContext();
function App() {
  const[dataBase, setDataBase]=useState([]);
  const[openForm, setOpenForm]=useState(false);
  const [initialState, setInitialState] = useState({id:`${(dataBase.length+1)}`,name:'',price:'',category:''});
  const [edit, setEdit]= useState(false);


  useEffect(()=>{
    getProducts();
  },[])
  const getProducts = async()=>{
    let products = await getData();
    setDataBase(products.data);
  }
  const postProducts = async(data)=>{
    if(edit){
      await putData(data.id,data)
    }else{
      await postData(data);
    }
    getProducts();
  }
  const editProduct = (data)=>{
    setOpenForm(true);
    setEdit(true);
    setInitialState(data);
  }
  const deleteProduct= async(id)=>{
    await deleteData(id);
    getProducts();
  }
  const showForm = ()=>{
    setInitialState({id:`${(dataBase.length+1)}`,name:'',price:'',category:''})
    setOpenForm(true);
    setEdit(false);
  }

  return(
    <dataContext.Provider value={{dataBase,setOpenForm,postProducts,deleteProduct,initialState,editProduct}}>
      <main>
        <h2>CRUD operations using React</h2>
        <div style={{width:'100px', height:'30px',textAlign:'center'}}>
          <button className='addnew-btn' onClick={showForm}>New +</button>
        </div>
        <Container/>
        {openForm&&<Form/>}
      </main>
    </dataContext.Provider>
  )
}

export default App
