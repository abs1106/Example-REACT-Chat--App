import {useState} from 'react';

const Message = ({text}) => {
    return <>
      <p>
        {text}
      </p>
    </>;
}

const App = () => {
    //
    // business logic
    //

    /*
    const messages = [
        "Argentina",
        "Bolivia",
        "Cambodia",
    ];
    */

    const [messages, setMessages] = useState([]);

    return <>
        <h1>
            Chatroom
        </h1>

        {
            messages.map(
                (text, index) => <Message key={index} text={text} />
                )
        }

        <form onSubmit={(event) => {
            event.preventDefault();

            // determine what the new message is
            const new_message = event.target.incoming_text.value;

            // add the new message to the message state
            setMessages([...messages, new_message]);

            // note: this is not best practice in react but it works for now
            document.getElementById('incoming_text').value = '';
        }}>
        <input name='incoming_text' id='incoming_text' />
        <button type='submit'>
            send
        </button>
        </form>
    </>;
}

export default App;