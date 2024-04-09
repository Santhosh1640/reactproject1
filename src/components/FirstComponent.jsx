const FirstComponent = (props) => {
  return (
    <div>
      {props.data}
      <button onClick={()=>{props.fn(10)}}>Set 10</button>
    </div>
  )
}

export default FirstComponent
