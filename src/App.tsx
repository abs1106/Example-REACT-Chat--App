import {useState} from 'react';
import Message from './components/Message';
import { faker } from "@faker-js/faker";
import './App.css';

const App = () => {
    const [messages, setMessages] = useState<MessageType[]>([]); // empty array of message objects 

    type MessageType = { // defined the type, like a blueprint (class definition)
        text: string;
        name: string;
        timestamp: Date;
    };

    return <>
        <h1>
            Chatroom
        </h1>

        {
            messages.map(
                ({text, name, timestamp}, index) =>
                    <Message
                        key={index}
                        text={text}
                        name={name}
                        timestamp={timestamp}
                    />
                )
        }

        <form onSubmit={(event) => {
            event.preventDefault();

            // determine what the new message is
            const new_message = event.target.incoming_text.value;

            // generate a fake name for this particular message
            const name = faker.person.fullName();

            // add the new message to the message state
          setMessages((prevMessages) => [
            ...prevMessages,{
                text: new_message,
                name,
                timestamp:new Date()
            }
          ]);

            // note: this is not best practice in react but it works for now
            // document.getElementById('incoming_text').value = '';
            const input = document.getElementById('incoming_text') as HTMLInputElement | null;
                if (input) {
                    input.value = '';
}
        }}>
            <input name='incoming_text' id='incoming_text' />
            <button type='submit'>
                send
            </button>
        </form>
    </>;
}

export default App;