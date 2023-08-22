
function Card(props){
    const {id ,name ,age, isActive} = props;
    return<div className="card">
        <h1> id: {props.id}</h1>
        <h1> name: {props.name}</h1>
        <h1> Age: {props.age}</h1>
        <h1> Institute: {props.institute}</h1>
        <h1> isActive: {props.isActive}</h1>

    </div>
}




export default Card;