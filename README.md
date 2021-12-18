## Blog 만들기

- Firebase 사용

- react-toastify
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

<br/>
<br/>

###react-hook-form

- 리액트에서 form을 쉽게 다룰 수 있는 라이브러리

```javascript
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("id")} />

            <input {...register("password", { required: true })} />
            
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}
```

- register() 안쪽에 form이 submit 될 때 해당 input의 value를 넣어줄 key값과 validation(옵션)을 넣어줌.
- 위의 예시대로 하면 form의 handleSubmit()가 리턴해주는 값은 { id :'xxxx' , password :'yyyy' } 형식의 객체가 될 것.


```javascript

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(errors); // error : {email: {ref: input.sc-cZMNgc.kVScea, type: 'isValidEmail', message: ''}}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register('email', {
                    required: true,
                    validate: { [errorTypes.IS_VALID_EMAIL]: (value) => Validate.isValidEmail(value) },
                })}
            />
        </form>
    ); 


```

- validate 는 유효성 검사를 할때 사용됨.
- validate 의 value로 { [errorType] : () => {} } 형식을 사용. 콜백이 false를 리턴하면 error.type으로 [errorType]이 나온다.
  
