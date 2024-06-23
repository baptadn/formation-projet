import { useState } from 'react'
import MessageItem from './MessageItem'

const MessageList = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello', username: 'Tom' },
        { id: 2, text: 'There', username: 'Alice' },
    ])

    return (
        <ul style={{ borderColor: 'grey', padding: 10, listStyle: 'none' }}>
            {messages.map((message) => (
                <MessageItem message={message} key={message.id} />
            ))}
        </ul>
    )
}

export default MessageList
