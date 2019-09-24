(window["webpackJsonpbasic-react-todolist"]=window["webpackJsonpbasic-react-todolist"]||[]).push([[0],{34:function(t,e,a){t.exports=a(62)},39:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(30),c=a.n(r),l=a(19),i=a(6),s=a(7),d=a(9),u=a(8),p=a(10),m=a(14),f=a(11),h=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px solid #ccc",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,a=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),a,o.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,e),style:b},"x")))}}]),e}(n.Component),b={background:"#ff0000",color:"#ffffff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=h,y=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo})}))}}]),e}(n.Component);a(39);function j(){return o.a.createElement("header",{style:E},o.a.createElement("h1",null,"TodoList"),o.a.createElement(m.b,{className:"nav-link",to:"/"},"Home")," |",o.a.createElement(m.b,{className:"nav-link",to:"/about"},"About"))}var E={background:"#333333",color:"#ffffff",textAlign:"center",padding:"10px"},g=a(33),O=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},a.onSubmit=function(t){t.preventDefault(),a.props.addToDo(a.state.title),a.setState({title:""})},a.onChange=function(t){return a.setState(Object(g.a)({},t.target.name,t.target.value))},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,className:"textForm",style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do...",className:"addTextField",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn"}))}}]),e}(n.Component);function k(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList app v1.0.0 It is part of a React crash course."))}var x=a(15),C=a.n(x),T=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},a.markComplete=function(t){a.setState({todos:a.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},a.deleteTodo=function(t){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return a.setState({todos:Object(l.a)(a.state.todos.filter((function(e){return e.id!==t})))})}))},a.addToDo=function(t){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return a.setState({todos:[].concat(Object(l.a)(a.state.todos),[t.data])})}))},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(j,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addToDo:t.addToDo}),o.a.createElement(y,{todos:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo}))}}),o.a.createElement(f.a,{path:"/about",component:k}))))}}]),e}(n.Component);c.a.render(o.a.createElement(T,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7aee66f3.chunk.js.map