(this.webpackJsonphubgant=this.webpackJsonphubgant||[]).push([[0],{14:function(t){t.exports=JSON.parse('{"workspaces":{"projects":[{"updateDates":["8/3/2021"],"files":[],"cards":[{"tasks":[{"id":1,"text":"first","start_date":"2021-02-12","duration":3,"progress":0.6,"priority":"high"},{"id":3,"text":"second","start_date":"2021-04-16","duration":3,"progress":0.1,"priority":"high"},{"id":4,"text":"third","start_date":"2022-02-12","duration":4,"progress":1,"priority":"high"}],"_id":"6045f52050da7be7735e15ee","project":"6045dc3f066887987959007b","name":"new card","__v":2},{"tasks":[{"id":11,"text":"shoppinggggg","start_date":"2021-02-12","duration":3,"progress":0,"priority":"hige"}],"_id":"6045f52e50da7be7735e15ef","project":"6045dc3f066887987959007b","name":"one card","__v":0}],"teams":[],"_id":"6045dc3f066887987959007b","name":"project1","description":"enb n","dueDate":"08/06/2021","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#BF2E63","__v":2},{"updateDates":["8/3/2021"],"files":[],"cards":[{"tasks":[{"id":1,"text":"some task","start_date":"2021-03-18","duration":2,"progress":0.3,"priority":"high","color":"#44D7B6"},{"id":2,"text":"shopping","start_date":"2021-04-20","duration":5,"progress":0.7,"priority":"high","color":"#8868FC"}],"_id":"6045f52050da7be7735e15ee","project":"6045dc3f066887987959007b","name":"1","__v":2},{"tasks":[],"_id":"6045f52e50da7be7735e15ef","project":"6045dc3f066887987959007b","name":"2","__v":0}],"teams":[],"_id":"6045dc4e066887987959007d","name":"project2","description":"enb n","dueDate":"2021-03-08","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#44D7B6","__v":0},{"updateDates":["8/3/2021"],"files":[],"cards":[],"teams":[],"_id":"6045dc4f066887987959007e","name":"project3","description":"enb n","dueDate":"2021-03-08","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#F8B520","__v":0},{"updateDates":["8/3/2021"],"files":[],"cards":[],"teams":[],"_id":"6045dc51066887987959007f","name":"project4","description":"enb n","dueDate":"2021-03-08","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#8868FC","__v":0}],"teams":[],"_id":"6045cf2e802211521d51e020","userId":"60449956108a053d534ed441","productionDate":"08/03/2021","color":"#C967B6","__v":4}}')},20:function(t,e,a){},31:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},40:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var s=a(0),o=a.n(s),n=a(11),c=a.n(n),r=(a(31),a(22)),i=a(23),d=a(26),l=a(25),p=a(8),u=(a(20),a(32),a(1)),j=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).dataProcessor=null,s.initZoom(),s}return Object(i.a)(a,[{key:"initZoom",value:function(){p.gantt.ext.zoom.init({levels:[{name:"Days",scale_height:60,min_column_width:40,scales:[{unit:"month",step:1,format:"%F %Y"},{unit:"day",step:1,format:"%j"}]}]})}},{key:"setZoom",value:function(t){p.gantt.ext.zoom.setLevel(t)}},{key:"initGanttDataProcessor",value:function(){this.props.onDataUpdated}},{key:"shouldComponentUpdate",value:function(t){return this.props.zoom!==t.zoom}},{key:"componentDidMount",value:function(){p.gantt.attachEvent("onBeforeTaskDisplay",(function(t,e){return"high"==e.priority})),p.gantt.config.xml_date="%Y-%m-%d %H:%i";var t=this.props.tasks;p.gantt.init(this.ganttContainer),this.initGanttDataProcessor(),p.gantt.parse(t),p.gantt.templates.scale_cell_class=function(t){return"weekend"},p.gantt.templates.task_class=function(t,e,a){a.progress>0&&a.progress<1?a.color="pink":a.color="green"},p.gantt.templates.tooltip_date_format=function(t){return p.gantt.date.date_to_str("%Y-%m-%d")(t)}}},{key:"componentWillUnmount",value:function(){this.dataProcessor&&(this.dataProcessor.destructor(),this.dataProcessor=null)}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{})}}]),a}(s.Component),m=(a(34),a(13)),h=a(3),g=(a(35),a(14));var f=Object(h.f)((function(t){var e={workspaces:g}.workspaces.workspaces.projects;console.log(e);var a=[];return e.map((function(t,e){a[e]=t.name})),console.log(a),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container ",children:[Object(u.jsx)("div",{className:"row  header2"}),Object(u.jsxs)("div",{className:"row header1",children:[Object(u.jsx)("div",{className:"col-3",children:Object(u.jsxs)("div",{className:"btn-group",children:[Object(u.jsx)("div",{className:"dropBtn dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Projects"}),Object(u.jsx)("div",{className:"   dropContainer dropdown-menu dropdown-menu-right container ",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col"}),e.map((function(t){return Object(u.jsxs)("div",{className:" row mt-2",children:[Object(u.jsxs)("div",{className:"col-1  itemCircle ml-3",style:{backgroundColor:t.color?t.color:"blue"},children:["   ",t.name[0]," "]}),Object(u.jsx)("div",{className:"col-1 ",children:Object(u.jsx)("button",{className:" dropdown-item dropItem ",children:t.name})})]})}))]})})]})})," ",Object(u.jsx)("div",{className:"col-3"}),Object(u.jsx)("div",{className:"col-3 gantt",children:"Gantt"})]})]})})}));a(40);function b(){var t=this,e="project1";console.log(e);var a={workspaces:g};console.log(a);var s=a.workspaces.workspaces.projects,o=[],n=[],c=[];s.map((function(t,a){t.name===e?t.cards.map((function(t,e){o.push(t),console.log("pppppppp",t)})):console.log("bed",t.cards)})),console.log("the cards",o),o.map((function(t,e){var a=0;t.tasks.map((function(t){a++,n.push(t)})),c.push(a)})),console.log("mone",c);var r,i="3000-01-01",d="1000-01-01";n.map((function(t){var e=t.start_date.split("-")[0];if(e>d.split("-")[0])r=e,console.log("papapap",e),e=e.concat("-01-01"),console.log("tttt",e),d=e;else{if(!(e<i))return;i=e}})),r=parseInt(r),r=(r=(r+=2).toString()).concat("-01-01"),d=r,console.log(),n.push({id:2985730,text:"first",start_date:r,duration:3,progress:.6}),console.log("the tasks",n);var l={data:n,links:[{id:1,source:7,target:7,type:"0"}]},p="Days";return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"gantt-container row ",children:[Object(u.jsx)("div",{className:"col-2"}),Object(u.jsx)("div",{className:"col-4",children:o.map((function(t,e){return Object(u.jsxs)("div",{className:"cardsName",style:{lineHeight:c[e]+3},children:[t.name," "]})}))}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)(j,{tasks:l,zoom:p,onDataUpdated:function(e,a,s,o){var n=s&&s.text?" (".concat(s.text,")"):"",c="".concat(e," ").concat(a,": ").concat(o," ").concat(n);"link"===e&&"delete"!==a&&(c+=" ( source: ".concat(s.source,", target: ").concat(s.target," )")),t.addMessage(c)}})})]})})}a(42);function v(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(h.c,{children:Object(u.jsx)(h.a,{path:"/DisplayGantt/:projectName",children:Object(u.jsx)(b,{})})})]})})}function x(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)("br",{}),Object(u.jsx)(b,{})]})}var _=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(e){var a=e.getCLS,s=e.getFID,o=e.getFCP,n=e.getLCP,c=e.getTTFB;a(t),s(t),o(t),n(t),c(t)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),_()}},[[43,1,2]]]);
//# sourceMappingURL=main.c2175591.chunk.js.map