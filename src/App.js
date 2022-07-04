import Users from "./Components/users/Users";
import "./styles.css";
import data from "./utils/data.json";
export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [salaryOrder, setSalaryOrder] = useState("ASC");
  const [filterRating, setFilterRating] = useState("0");
  const [page, setPage] = useState(1);
 
    function getUser({filterRating,page}){
      setLoading(true);
      setError(false);
      return fetch(
        "https:json-server-mocker-masai.herokuapp.com/candidates" + 
        `?rating_gte=${filterRating}&_page=${page}&_limit=5`
)
.then({res})=>res.json())
.then((res)=>{
  console.log(res);
  setLoading(false);
  setData(res);
})
.catch((err)=>{
  setLoading(false);
  setError(true);
});
}
useEffect(()=>{
  getUser({filterRating,page,salaryOrder});
},[filterRating,page,salaryOrder]);
return (
  <div className="App">
    {/* <VideoPlayer /> */}
    <Users />
  </div>
);
}
<button  disabled = {page===1} onClick={ ()=>setPage(page -1)}>Prev</button>
      <button  onClick={ ()=>setPage(page +1)}>Next</button>
      </div>
      <div>
        <button

disabled = {salaryOrder ==="ASC"}
onClick={()=>salaryOrder("ASC")}
>
  </button>
  <button
  disabled = {salaryOrder ==="DESC"}
  onClick={()=>salaryOrder("DESC")}
  >
    </button>
    </div>
    {data?.map((res)=>)
    <UserCard key = {res.id} data = {res} />
))}
</div>
  


