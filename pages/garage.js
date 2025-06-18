export default function Garage(){
 const veh=[{id:1,year:2021,make:'Volkswagen',model:'Tiguan',mileage:45600}];
 return(<div><h1>My Garage</h1>{veh.map(v=><div key={v.id} style={{border:'1px solid #ccc',borderRadius:8,padding:12,marginBottom:12}}>
   <strong>{v.year} {v.make} {v.model}</strong><br/>Mileage: {v.mileage.toLocaleString()} mi
 </div>)}</div>);
}
