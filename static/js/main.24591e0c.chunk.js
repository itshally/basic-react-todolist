(window["webpackJsonpbasic-react-todolist"]=window["webpackJsonpbasic-react-todolist"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),i=n(1),s=n(2),l=n(4),p=n(3),u=n(5),d=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px solid #ccc",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),n))}}]),e}(o.Component),m=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(d,{key:e.id,todo:e,markComplete:t.props.markComplete})}))}}]),e}(o.Component),h=(n(13),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Practice React js",completed:!1}]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,{todos:this.state.todos,markComplete:this.markComplete}))}}]),e}(o.Component));c.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.24591e0c.chunk.js.map