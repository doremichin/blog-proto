## Blog 만들기

- Firebase 사용


- react-hook-form

###react-toastify
- App에서 ToastContainer를 넣어주면 어느 컴포넌트에서든 toast() 를 사용해 토스트메세지를 날릴 수 있음
```javascript
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
```
- 컴포넌트에 여러 타입을 지정해서 커스텀 할 수 있음
```javascript
    <ToastContainer
    position="top-right" 
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <ToastContainer />

    toast.success('🦄 Wow so easy!', {  // toast 뒤에 메서드를 붙여서 여러종류의 타입 사용 가능
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
```

