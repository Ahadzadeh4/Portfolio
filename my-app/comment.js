import { useEffect, useState } from 'react';
import Axios from 'axios';

// variabel
const Getname = () => {
  return "mammad"
}

//  ============================  //

// componnet
const GetnameComponnet = () => {
  return <h1>mammad</h1>
}

function App() {
  const user = {
    firstname: "Hosein",
    lastname: "Ahadzadeh"
  }
  return <div>
    <user />
  </div>
}

//  ============================  //

// if تک خطی //
<button style={{ color: name == "ali" ? "green" : 'red' }}>click me</button>

//  ============================  //

// list in react

function App() {
  const friends = [
    { name: "ali", age: 70 }, { name: "mohammad", age: 9 }, { name: "hosein", age: 40 }
  ]
  return (
    <dvi>
      {
        friends.map((friend, index) => {
          return <h1 key={index}>{friend.name} is {friend.age}</h1>
        })
      }
    </dvi>
  )
}

function App() {
  const classes = [
    { name: "html", finished: true },
    { name: "css", finished: false },
    { name: "js", finished: true },
    { name: "python", finished: false },
    { name: "django", finished: true },
    { name: "c++", finished: false },
  ]
  return (
    <div>
      {classes.filter(item => item.finished).map((item, index) => {
        return <h2 key={index}>{item.name} is finished</h2>
      })}
    </div>
  )

}

//  ============================  //

//state
function App() {
  const [rekord, rekordset] = useState(0)

  return (
    <div>
      <h1>{rekord}</h1>
      <button onClick={() => rekordset(rekord + 1)}>click me</button>
    </div>
  )

}
//usestate function (project)

function App() {
  const [item, setitem] = useState([])
  const [workname, setwork] = useState("")
  const handlework = (event) => {
    setwork(event.target.value)
  }
  const sethandlework = () => {
    const bolianfild = prompt("(اگه انجام شه = 1 - اگه انجام نشده = 0 )1 or 0??")
    if (bolianfild === "1" || bolianfild === "0") {
      setitem([
        ...item,
        { name: workname, done: bolianfild === "1" }
      ])
      setwork("")
    } else {
      return alert("لطفا درست وارد کنید")
    }
  }
  const deleteitem = () => {

  }

  return (
    <div>
      <div>
        <input type='text' onChange={handlework}></input>
        <button onClick={sethandlework}>set to work </button>
      </div>
      <span>
        {item.map((work, index) => {
          return (
            <div>
              <h1 key={index} className={work.done ? "truefield" : "falsefield"}>{work.name}</h1>
              <button onClick={deleteitem}>delete</button>
            </div>
          )
        })}
      </span>
    </div>
  )
}

function App() {
  const [item, setitem] = useState([])
  const [workname, setwork] = useState("")
  const handlework = (event) => {
    setwork(event.target.value)
  }
  const sethandlework = () => {
    const work = {
      id: item.length == 0 ? 1 : item[item.length - 1].id + 1,
      workit: workname
    }
    const bolianfild = prompt("(اگه انجام شه = 1 - اگه انجام نشده = 0 )1 or 0??")
    if (bolianfild === "1" || bolianfild === "0") {
      setitem([
        ...item,
        { ...work, done: bolianfild === "1" }
      ])
      setwork("")
    } else {
      return alert("لطفا درست وارد کنید")
    }
  }
  const deleteitem = (newworkID) => {
    const newworklist = item.filter((work) => {
      return newworkID !== work.id ? true : false
    })
    setitem(newworklist)
  }

  return (
    <div>
      <div>
        <input type='text' onChange={handlework}></input>
        <button onClick={sethandlework}>set to work </button>
      </div>
      <span>
        {item.map((work, index) => {
          return (
            <div key={index}>
              <h1 className={work.done ? "truefield" : "falsefield"}>{work.workit}</h1>
              <button onClick={() => deleteitem(work.id)}>delete</button>
            </div>
          )
        })}
      </span>
    </div>
  )
}

//  ============================  //

//use efect

useEffect(() => {
  console.log("hello")
}, [])

//  ============================  //

//axios

function App() {
  const [content, setcontent] = useState("")

  const feachfact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setcontent(res.data.fact)
    })
  }



  return (
    <div>
      <button onClick={feachfact}>click me</button>
      <h1>{content}</h1>
    </div>
  )
}

Axios.get("https://catfact.ninja/fact").then((res) => {
  setcontent(res.data.fact)
})

function App() {
  const [item, setitem] = useState([])
  const [content, setcontent] = useState("")

  const fetchfact = () => {
    Axios.get(`https://api.agify.io/?name=${content}`).then((res) => {
      if (res.data) {
        setitem(res.data.name)
      }
    })
  }




  return (
    <div>
      <input onChange={(event) => setcontent(event.target.value)}></input>
      <button onClick={fetchfact}>click me</button>
      <h1>{item}</h1>
    </div>
  )
}

//  ============================  //

//route

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./profile";

function App() {
  const Errorfunction = () => {
    return <h1>Not Found</h1>
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <h1>This is mammad web page</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">about</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Profile/:name/:id" element={<Profile />} />
          <Route path="*" element={Errorfunction()} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;

//  ============================  //

//about
//usenavigate

import { useNavigate } from "react-router-dom"
import React from "react";
function About() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <h1>hello about</h1>
      <button onClick={() => { navigate("/") }}>go to home</button>
    </React.Fragment>
  )
}

//export default About

//  ============================  //

//profile
//useparams

import { useParams } from "react-router-dom"
function Profile() {
  const { name, id } = useParams()
  return (
    <h1>this is page of {name} - {id}</h1>
  )
}

// export default Profile

//  ============================  //

// مینی پروژه بلاگ با استفاده از usecontext 
//App.jg

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/CreateBlog"
import Header from "./components/header"
import { useState, createContext } from 'react';

export const Articlecontext = createContext()
// صفحه اصلی برنامه

export function App() {
  const [article, setArticle] = useState([])
  return (
    <div className='App'>
      <Articlecontext.Provider value={{ article, setArticle }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<Blog setArticle={setArticle} />} />
          </Routes>
        </BrowserRouter>
      </Articlecontext.Provider>
    </div>
  )
}

//Home.js

import React from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Articlecontext } from "../App"
// محل نمایش بلاگ ها
export function Home(props) {
  const navigate = useNavigate()
  const { article } = useContext(Articlecontext)
  return (
    <React.Fragment>
      <div>
        <h2>Hello ، Welcome to my mini blog web site <br />. If you want to publish a blog, Click here.</h2>
        <div>
          <button onClick={() => { navigate("/Blog") }}>Create</button>
        </div>
      </div>
      <div style={{ backgroundColor: "green", margin: "10px" }}>
        {article.map((blog, index) => {
          return (
            <div key={index}>
              <p>{blog}</p>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

//CreateBlog 
import { useContext, useState } from "react"
import { Articlecontext } from "../App"

// محل ساخت بلاگ
export function Blog() {
  const { setArticle } = useContext(Articlecontext)
  const [blog, setCreateBlog] = useState("")
  const blogfunction = () => {
    setArticle(prev => [...prev, blog])
    setCreateBlog("")
  }
  return (
    <div style={{ backgroundColor: "green" }}>
      <input onChange={(event) => { setCreateBlog(event.target.value) }} value={blog} style={{ width: "700px", height: "400px", fontSize: "18px", margin: "20px" }}></input>
      <button onClick={blogfunction} style={{ width: "50px", height: "50px", fontSize: "18px", borderRadius: "5px", margin: "20px" }}>done</button>
    </div>
  )
}

//header
import { Link } from "react-router-dom"

// header
export function Header() {
  return (
    <header>
      <div style={{ backgroundColor: "black" }}>
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>Home</Link>
      </div>

    </header>
  )
}

//  ============================  //

// react-query
//App.js 

import logo from './logo.svg';
import Home from './pages/Home';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// صفحه اصلی برنامه
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
    mutations: {

    },
  },
})
function App() {


  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </div>
  )
}


// export default App;

//  ============================  //

//Home.js

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function Home() {
  const { data, isLoading, isError: caterror, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  })
  if (isLoading) return <h1>loading</h1>
  if (caterror) return <h1>error : {error.message}</h1>

  return (
    <div>
      {data?.fact}
      <button onClick={refetch}>update</button>
    </div>
  )
}

// export default Home

//  ============================  //

//useform
//App.js 
import logo from './logo.svg';
import Home from './pages/Home';



function App() {

  return (
    <div className='App'>
      <Home />
    </div>
  )
}


// export default App;

//  ============================  //

//Home.js
import { useForm } from "react-hook-form";


function Home() {
  const { register, handleSubmit } = useForm()
  const OnSubmitForm = (data) => {
    console.log("the form is submit", data)
  }

  return (
    <form onSubmit={handleSubmit(OnSubmitForm)}>
      <input type="text" placeholder="name" {...register("name")} />
      <input type="text" placeholder="email" {...register("email")} />
      <input type="number" placeholder="age" {...register("age")} />
      <input type="password" placeholder="password" {...register("password")} />
      <input type="password" placeholder="conform password" {...register("nconform password")} />
      <input type="submit" />
    </form>
  )
}

// export default Home

//  ============================  //

//customhook
//App.js

import { useState } from 'react';
import UseToggle from './useToggle';



function App() {
  const [state, toggle] = UseToggle(false)
  return (
    <div className='App'>
      <button onClick={toggle}>
        {state ? "Hide" : "Show"}
      </button>
      {state && <h1>Its my text</h1>}
    </div>
  )
}


// export default App;

//  ============================  //

//useToggle

import { useState } from "react"
function UseToggle(intivalue = false) {
  const [state, setState] = useState(intivalue)
  const Toggle = () => {
    setState((prev) => !prev)
  }
  return [state, Toggle]
}

// export default UseToggle

//  ============================  //

//useReducer
//App.js

import axios from "axios";
import { useState, useReducer } from "react";
import { factReducer, initialstate } from "./components/FactReducer";

function App() {


  const handleChange = () => {
    dispatch({ type: "fetch-start" })
    axios.get("https://catfact.ninja/fact")
      .then((res) => {
        console.log(res.data)
        dispatch({ type: "fetch-success", data: res.data.fact })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: "fetch-error" })
      })
  }

  const [state, dispatch] = useReducer(factReducer, initialstate)

  return (
    <div className='App'>
      <button onClick={handleChange}>
        {state.loading ? "is loading" : "fetch cat fact"}
      </button>
      {state.error && <p>error</p>}
      <h2>{state.fact}</h2>
    </div>
  )
}


// export default App;

//  ============================  //
//FactReducer.js

import { ACTION_TYPES } from "./factAction"

export const initialstate = {
  loading: false,
  fact: "",
  error: false
}

export const factReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.Fetch_start:
      return { loading: true, fact: "", error: false }
    case ACTION_TYPES.Fetch_success:
      return { loading: false, fact: action.data, error: false }
    case ACTION_TYPES.Fetch_error:
      return { loading: false, fact: "", error: true }
    default:
      return state
  }

}

//  ============================  //
//factAction.js

export const ACTION_TYPES = {
  Fetch_start: "fetch-start",
  Fetch_success: "fetch-success",
  Fetch_error: "fetch-error"
}

//  ============================  //
// Redux

//App.js
import Home from "./Home"
import Login from "./Login"
import Contact from "./Contact"
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

//  ============================  // 
//Home
const Home = () => {
  return (
    <div>Home </div>
  )
}

//  ============================  // 
//store.js

import { configureStore, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialstate: { username: "" },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username
    },
    logout: (state) => {
      state.username = ""
    }
  }
})
export const { login, logout } = userSlice.actions
export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})


//  ============================  //
//contact.js
import { useSelector } from "react-redux"

export const Contact = () => {
  const selectore = useSelector((state) => state.user)
  return (
    <div>
      Contact{selectore.username}
    </div>
  )
}

//  ============================  //
//login.js

import { useState } from "react"
import { login, logout } from "./store"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
  const [newUsername, setNewUsername] = useState("")
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.user)
  return (
    <div>
      <h1>login{selector.username}</h1>
      <input onChange={(event) => setNewUsername(event.target.value)} />
      <button onClick={() => dispatch(login({ username: newUsername }))}>login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  )
}

//  ============================  //
//redux project1

