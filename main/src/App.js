import './App.css';
import React, {useState} from 'react';
import TodoComponent from './TodoComponent.js';
import Login from './Login.js'
import { NextUIProvider } from '@nextui-org/react';
import { Button, Avatar } from '@nextui-org/react';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  }
  
const pictureUsers = [
    {
      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      color: "primary",
    },
    {
      src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      color: "secondary",
    },
    {
      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      color: "success",
    },
    {
      src: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      color: "warning",
    },
    {
      src: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      color: "gradient",
    },
  ]  

  return (
    <NextUIProvider>
      {isLogin ? <TodoComponent /> : <Login />}
      <Button onClick={loginHandler}>
        {isLogin ? "Logout" : "Login"}
      </Button>
      <Avatar 
      text={isLogin ? "bruh" : "nah"}
      squared
      size='xl'
      />
      {pictureUsers.map((data) => 
        <Avatar src={data.src} color={data.color} size="xl" bordered/>
      )}
    </NextUIProvider>
  );
}

export default App;
