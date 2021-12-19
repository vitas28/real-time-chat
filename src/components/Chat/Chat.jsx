import React, { useContext, useState } from 'react';
import { Context } from '../../context/context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from '../Loader/Loader';

const Chat = () => {
  const { firebase, auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const messageRef = firestore.collection('message');
  const [messages, loading] = useCollectionData(messageRef, { idField: 'id' });

  const sendMessage = async () => {
    firestore.collection('message').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue('');
  };

  const messageHandler = (e) => {
    setValue(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="chat">
        <div className="messages">
          {messages.map((msg) => (
            <div
              key={msg.createdAt}
              style={{
                padding: 10,
                margin: 10,
                border:
                  user.uid === msg.uid ? '2px solid red' : '2px dotted #ccc',
                marginLeft: user.uid === msg.uid ? 'auto' : '10px',
                width: 'fit-content',
              }}
            >
              <Grid container>
                <Avatar src={msg.photoURL} />
                <h3 style={{ marginLeft: 10 }}>{msg.displayName}</h3>
              </Grid>
              <div>{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="form-send">
          <TextField
            variant={'outlined'}
            fullWidth
            maxRows={2}
            value={value}
            onChange={messageHandler}
          />
          <Button onClick={sendMessage} variant={'outlined'}>
            Send
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Chat;
