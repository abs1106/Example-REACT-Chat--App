import{useState} from "react";

const Messages = ({text}: {text: string}) => { //boiler plate code for messages component
    return <>
    <p>{text}</p>
    </>;

}

const App = () => {



// const messages =[
//     " Argentina",
//     " Peru",
//     " Brazil",

// ]

const [messages, setMessages] = useState([
    " Argentina",
    " Peru",
    " Brazil",

]) //state variable to hold the messages array and a function to update it

  return<>
  <h1>Chat Room </h1>
    {
        messages.map(
            (text) => <Messages text={text} /> //rendering the messages component for each message in the messages array
        )
    }


  <input/>
  <button>Send</button>
  </>;
    
}
export default App;