(this.webpackJsonptestreact=this.webpackJsonptestreact||[]).push([[0],{138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),s=a.n(r),i=(a(92),a(93),a(11)),c=a(12),o=a(14),m=a(13),u=a(16),d=a(9),p=a(150),h=a(151),f=a(149),E=a(84),g=a(59),b=(a(94),a(55)),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={fileName:e.props.fileName,visible:e.props.visible,file:"/testreact/images/"+e.props.fileName,numPages:null},e}return Object(c.a)(a,[{key:"handleClick",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){var e=this.state,t=e.file;e.numPages;return l.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement(g.a,null,l.a.createElement("i",{className:"fas fa-download"}),l.a.createElement(b.a,{size:"20"})))}}]),a}(n.Component),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.song;this.props.index,e.image1&&e.image1.split(".").pop();return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("tr",null,e.title),l.a.createElement("tr",null," ",e.artist)),l.a.createElement("td",{className:"linkColumn"},l.a.createElement("tr",null,l.a.createElement("a",{href:e.video,target:"_blank",rel:"noopener noreferrer"},"video")),e.music?l.a.createElement("tr",null,l.a.createElement("a",{href:e.music,target:"_blank",rel:"noopener noreferrer"},e.music_alt?e.music_alt:"Link naar chords")):"",e.image1?l.a.createElement("tr",null,l.a.createElement(E.a,{small:"/testreact/images/2020-09-06 drumstel in de nieuwe kast van Hans.jfif",large:"/testreact/images/"+e.image1,smallSrcSet:"300w",alt:"akkoorden "+e.image1})):"",e.pdf?l.a.createElement("tr",null,l.a.createElement(v,{fileName:e.pdf,visible:!1})):""),l.a.createElement("td",null," ",e.afspraken," "))}}]),a}(l.a.Component),k=a(36),j=(a(46),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={cachedSomeProp:null,filter:""},e}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h4",null,"Playlist V1 Silvermusic (klik op de linkjes)"),l.a.createElement("table",{className:"songlist"},l.a.createElement("tr",null," ",l.a.createElement("th",{className:"SLTH"},"Song / artist "),l.a.createElement("th",{className:"SLTH"},"afspraken")," ",l.a.createElement("th",{className:"SLTH"}," Linkjes ")),k.SongList1.filter((function(t){return t.artist.includes(e.state.filter)})).map((function(e,t){return l.a.createElement(w,{song:e,index:t})}))),l.a.createElement("br",null),l.a.createElement("table",{className:"songlist"},l.a.createElement("tr",null," ",l.a.createElement("th",{className:"SLTH"},"Voorgestelde songs / artist "),l.a.createElement("th",{className:"SLTH"},"afspraken"),l.a.createElement("th",{className:"SLTH"}," Linkjes ")),k.SongList2.filter((function(t){return t.artist.includes(e.state.filter)})).map((function(e,t){return l.a.createElement(w,{song:e,index:t})}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{cachedSomeProp:e.someProp}}}]),a}(l.a.Component)),y=a(6),O=a(34),S=a.n(O),N=a(148),C=a(144),_=a(60),I=a.n(_),L=a(78),P=S.a.create({baseURL:"http://localhost/php_api_test/apiBasic/updateSongInPlaylist.php"}),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).execAPIPost=Object(L.a)(I.a.mark((function e(){var t,a,l,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.id,l=t.title,t.result,e.next=3,P.post("/",{id:a,title:l});case 3:200==(r=e.sent).status&&(n.setState({result:r.data}),console.log(" ------- UpdateSong via API AXIOS --------"),console.log(r.data),console.log(" ------- EINDE   UpdateSong via API AXIOS --------"));case 5:case"end":return e.stop()}}),e)}))),n.state={id:"1",title:"sultans of swing2",result:"--"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=(t.modus,t.id,t.title,t.message,t.bron,t.page,t.imageName,t.result);return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return e.execAPIPost()}},"Click me 24"),a)}}]),a}(l.a.Component);S.a.create({baseURL:"https://silvermusic.nl/test/apiBasic/updateSongInPlaylist.php"});var B=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(null),c=Object(y.a)(i,2),o=(c[0],c[1],Object(n.useState)(null)),m=Object(y.a)(o,2),u=(m[0],m[1]),d=Object(n.useState)("niet aangepast"),p=Object(y.a)(d,2),h=p[0],f=p[1],E=Object(n.useState)(e.song.id),v=Object(y.a)(E,2),w=v[0],k=(v[1],Object(n.useState)(e.song.title)),j=Object(y.a)(k,2),O=j[0],_=j[1],I=Object(n.useState)(e.song.artist),L=Object(y.a)(I,2),P=L[0],A=L[1],B=Object(n.useState)(e.song.videoURL1),x=Object(y.a)(B,2),T=x[0],R=x[1],U=Object(n.useState)(e.song.musicSheetURL1),H=Object(y.a)(U,2),F=H[0],J=H[1],z=Object(n.useState)(e.song.download1),D=Object(y.a)(z,2),M=D[0],V=D[1],W={id:w,title:O,artist:P,videoURL1:T,musicSheetURL1:F,download1:M},G=function(){f("op Save geklikt");S.a.post("http://localhost/php_api_test/apiBasic/updateSongInPlaylist.php",W).then((function(e){return u(e.data)})),e.callBack()},K=function(){e.callBack(),s(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{variant:"primary",onClick:function(){return s(!0)}},l.a.createElement(b.b,{size:20})," "," ",l.a.createElement("span",{className:"small"}," ",e.song.order1," ")),l.a.createElement(N.a,{show:r,onHide:K,active:"true",backdrop:!1},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,e.song.song)),l.a.createElement(N.a.Body,null,l.a.createElement(C.a,{responsive:!0,striped:!0,bordered:"true",hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"14%"}," item "),l.a.createElement("th",null," waarde "))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null," id:"),l.a.createElement("td",null,l.a.createElement("input",{className:"small",type:"text",value:w}))),l.a.createElement("tr",null,l.a.createElement("td",null," titel:"),l.a.createElement("td",null,l.a.createElement("input",{className:"small",type:"text",value:W.title,onChange:function(e){_(e.target.value)}}))),l.a.createElement("tr",null,l.a.createElement("td",null," artist:"),l.a.createElement("td",null,l.a.createElement("input",{className:"small",type:"text",value:W.artist,onChange:function(e){A(e.target.value)}}))),l.a.createElement("tr",null,l.a.createElement("td",null," video1:"),l.a.createElement("td",null,l.a.createElement("input",{className:"small width95",type:"text",value:W.videoURL1,onChange:function(e){R(e.target.value)}}))),l.a.createElement("tr",null,l.a.createElement("td",null," chords1:"),l.a.createElement("td",null,l.a.createElement("input",{className:"small width95",type:"text",value:W.musicSheetURL1,onChange:function(e){J(e.target.value)}}))),l.a.createElement("tr",null,l.a.createElement("td",null," download1:"),l.a.createElement("td",null,l.a.createElement("input",{className:"small width95",type:"text",value:W.download1,onChange:function(e){V(e.target.value)}})))))),l.a.createElement(N.a.Footer,null,h,l.a.createElement(g.a,{variant:"secondary",onClick:K},"Sluit"),l.a.createElement(g.a,{variant:"primary",onClick:G},"Opslaan"),l.a.createElement(g.a,{variant:"primary",onClick:function(){G(),K()}},"Sla op en sluit"))))},x=function(){var e,t=Object(n.useState)(!0),a=Object(y.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(null),c=Object(y.a)(i,2),o=c[0],m=c[1],u=Object(n.useState)(!1),d=Object(y.a)(u,2),p=d[0],h=d[1],f=Object(n.useState)(""),E=Object(y.a)(f,2),b=E[0],w=E[1],k=Object(n.useState)("10"),j=Object(y.a)(k,2),O=j[0],S=j[1],N={method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({code:O,filter:b})},C=(JSON.stringify({code:"11"}),function(){return fetch("https://silvermusic.nl/test/apiBasic/listSongsV4.php",N).then((function(e){if(!e.ok)throw e;return e.json()}))});return Object(n.useEffect)((function(){C().then((function(e){return m(e)})).then(s(!1))}),[r]),l.a.createElement("table",{border:"1",className:"songlist"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"SLTH"}))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},"Accesscode:",l.a.createElement("input",{className:"small width10",name:"name",value:O,onChange:function(e){return t=e.target.value,S(t),void s(!0);var t}}),"Filter",l.a.createElement("input",{className:"small width30",name:"name",value:b,onChange:function(e){return w(e.target.value)}}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},"Song"," ",l.a.createElement("button",{className:"small width30 ",onClick:function(){return s(!0)}}," refresh page")," "," ",l.a.createElement("button",{className:"small width30 ",onClick:function(){return h(!p)}},p?"hide APIinfo":"show APIinfo"))),o?void 0!==o.done?l.a.createElement(l.a.Fragment,null,p?l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,"accessCodeOkay (authorisatie?)"),l.a.createElement("td",null,void 0!==o.accessCodeOkay?o.accessCodeOkay?"Okay":"Code niet okay":"Niet door API verstuurd")),l.a.createElement("tr",null,l.a.createElement("td",null,"done (verzoek door Server uitgevoerd?)"),l.a.createElement("td",null,void 0!==o.done?o.done?"Ja":"Nee, is wat fout gegaan":"Niet door API verstuurd")),l.a.createElement("tr",null,l.a.createElement("td",null,"message (info van server)"),l.a.createElement("td",null,void 0!==o.message?JSON.stringify(o.message):"Niet door API verstuurd")),l.a.createElement("tr",null,l.a.createElement("td",null," errorMessage? (bij verwerken server)"),l.a.createElement("td",null,void 0!==o.errorMessage?JSON.stringify(o.errorMessage):"Niet door API verstuurd")),l.a.createElement("tr",null,l.a.createElement("td",null,"rowCount (aantal songs aangepast)"),l.a.createElement("td",null,void 0!==o.rowCount?JSON.stringify(o.rowCount):"Niet door API verstuurd"))):l.a.createElement("tr",null,l.a.createElement("td",null)),void 0!==o.resData?l.a.createElement(l.a.Fragment,null,null===(e=o.resData)||void 0===e?void 0:e.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.title," ",e.artist," ",l.a.createElement("span",{className:"small"}," ",e.afspraken," ")," ",l.a.createElement("br",null),l.a.createElement(B,{callBack:C,song:e})," ",e.videoURL1?l.a.createElement("a",{href:e.videoURL1,target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement(g.a,null,l.a.createElement("i",{className:"fas fa-download"}),"Video")," "):"",e.videoURL2?l.a.createElement("a",{href:e.videoURL2,target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement(g.a,null,l.a.createElement("i",{className:"fas fa-download"}),"Video(2)")," "):"",e.musicSheetURL1?l.a.createElement("a",{href:e.musicSheetURL1,target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement(g.a,null,l.a.createElement("i",{className:"fas fa-download"}),"Chords")," "):"",e.musicSheetURL2?l.a.createElement("a",{href:e.musicSheetURL2,target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement(g.a,null,l.a.createElement("i",{className:"fas fa-download"}),"Chords(2)")," "):"",e.download1?l.a.createElement(v,{fileName:e.download1,visible:!1}):""))}))):h(!0)):l.a.createElement("tr",null,l.a.createElement("td",null,"no done found "),l.a.createElement("td",null,JSON.stringify(o)," ",o.done?"done":"false")):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},"no data found "))))},T=function(){var e=Object(n.useState)(!0),t=Object(y.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),i=Object(y.a)(s,2),c=i[0],o=i[1],m=Object(n.useState)(!1),u=Object(y.a)(m,2),d=(u[0],u[1],Object(n.useState)("sul")),p=Object(y.a)(d,2),h=(p[0],p[1],Object(n.useState)("11")),f=Object(y.a)(h,2),E=(f[0],f[1],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:"12"})});return Object(n.useEffect)((function(){fetch("https://silvermusic.nl/test/apiBasic/testParameters.php",E).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){return o(e)})).then(r(!1))}),[a]),l.a.createElement(l.a.Fragment,null,"data2:",c?JSON.stringify(c):".no data..")},R=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=(t[0],t[1]);return Object(n.useEffect)((function(){fetch("".concat("http://localhost/php_api_test/apiBasic/read_playlist.php","/posts")).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Dit scherm is voor de beheerder"),l.a.createElement("h3",null,"http://localhost/php_api_test/apiBasic/read_playlist.php"),l.a.createElement("h3",null,"http://silvermusic.nl/test/apiBasic/read_playlist.php"))},U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleFetchRead1=function(){fetch("http://www.silvermusic.nl/test/apiBasic/read1.php").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,items:e},console.log(n.setState.items))}))},n.handleRerender=function(){n.handleFetchRead1()},n.state={isLoaded:!1,rer:"leeg",items:[],filter:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.handleFetchRead1()}},{key:"handleChange",value:function(e){this.setState({filter:e.target.value.toLowerCase()})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoaded,n=(t.rer,t.items);t.showModal;return a?l.a.createElement(l.a.Fragment,null,"Filter messages: ",l.a.createElement("input",{type:"text",value:this.state.filter,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),n.filter((function(t){return t.title.toLowerCase().includes(e.state.filter)||t.id.toLowerCase().includes(e.state.filter)})).map((function(e,t){return l.a.createElement(l.a.Fragment,null,e.title,"   ",e.message,l.a.createElement("br",null),"  ",l.a.createElement("br",null))}))):l.a.createElement("div",null,"Loading .... ")}}]),a}(l.a.Component),H=a(145),F=a(146),J=a(147),z=(a(73),{homeContainer:{height:1356,backgroundImage:"url(".concat("/testreact/images/2020-09-10 Eerste oefensessie overzicht.jfif",")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},content:{height:"100%",width:"100%",backgroundColor:"rgba(250, 250, 250, 0.8)"}}),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:z.homeContainer},l.a.createElement(H.a,{style:z.content,fluid:"md"},l.a.createElement(F.a,{xs:1,md:1,className:"row"},l.a.createElement("h1",null,"Silvermusic ",l.a.createElement("span",{className:"xSmall"}," V1.01 "),"  ")),l.a.createElement(F.a,{xs:1,md:1,className:"row"},l.a.createElement("h3",null,"Muzikale Verbinding in Zilverkamp Huissen ")),l.a.createElement(F.a,{xs:1,md:2,className:"row"},l.a.createElement(J.a,{xs:12,md:6,lg:7,className:"col"},l.a.createElement("img",{width:"100%",src:"/testreact/images/Kranten arrtikel Silvermusic okt 2020.jpg",alt:"Kranten arrtikel Silvermusic okt 2020.jpg"})),l.a.createElement(J.a,{xs:12,md:6,lg:5,className:"col"},l.a.createElement("img",{width:"100%",src:"/testreact/images/2020-09-10 Eerste oefensessie overzicht.jfif",alt:"Eerste oefensessie overzicht.jfif"}),l.a.createElement("h5",null,l.a.createElement("a",{href:"https://kpproce.github.io/testreact/#/lijst"}," ",l.a.createElement("h4",null," Onze playlist")," ")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://kpproce.github.io/testreact/#/player"}," ",l.a.createElement("h4",null," Videos oefensessies")," "),l.a.createElement("br",null),l.a.createElement("a",{href:"https://kpproce.github.io/testreact/#/fotosBasic"}," ",l.a.createElement("h4",null," Onze foto's ")," "))),l.a.createElement(F.a,{xs:1,md:2,className:"row"},l.a.createElement(J.a,{xs:12,md:9,lg:10,className:"col"},"      Onze",l.a.createElement("h4",null," Ben je geinteresseerd: neem dan contact op met Hans Vos via email: jhjmvos@gmail.com")),l.a.createElement(J.a,{xs:6,md:3,lg:2,className:"col"},l.a.createElement("img",{width:"100%",src:"/testreact/images/2020-09-10 Hans on percussion.jfif",alt:"2020-09-10 Hans on percussion"}))),l.a.createElement(F.a,{xs:1,md:2,className:"row"},l.a.createElement(J.a,{xs:12,md:9,lg:10,className:"col"},l.a.createElement("h4",null," ",l.a.createElement("a",{href:"https://kpproce.github.io/testreact/#/fotosBasic"}," ",l.a.createElement("h3",null," Klik hier voor wat foto's")," ")," ")))))}}]),a}(l.a.Component);var M=function(){var e=Object(n.useState)(0),t=Object(y.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("p",null,"You clicked ",a," times"),l.a.createElement("button",{onClick:function(){return r(a+1)}},"Click me"))};var V=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),i=Object(y.a)(s,2),c=i[0],o=(i[1],Object(n.useState)("this song")),m=Object(y.a)(o,2),u=m[0],d=m[1],p=Object(n.useState)([c,u]),h=Object(y.a)(p,2);return h[0],h[1],Object(n.useEffect)((function(){}),[]),l.a.createElement("div",null,l.a.createElement("h5",{className:"card-header"},"POST Request with React Hooks"),"Song titel: ",l.a.createElement("span",null," "),l.a.createElement("input",{className:"small",type:"text",value:u,onChange:function(e){d(e.target.value)}}),l.a.createElement(g.a,{variant:"secondary",onClick:function(){S.a.post("http://localhost/php_api_test/apiBasic/updateSongInPlaylist.php",{id:c,title:u}).then((function(e){return r(e.data)}))}},"Save"),l.a.createElement("div",{className:"card-body"},"response: ",a))},W=a(80),G=a(41),K=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).filenamePart=function(e){return e.substring(e.lastIndexOf("/")+1,e.length-e.lastIndexOf("/"))},e.fileInclPath=function(e){return"../images/"+e.substring(e.lastIndexOf("/")+1,e.length-e.lastIndexOf("/"))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,null,k.ImageList.map((function(t){return l.a.createElement(G.a,{className:"minWidth3"},l.a.createElement(G.a.Img,{variant:"bottom",src:"/testreact/images/"+e.filenamePart(t.imageName)}),l.a.createElement(G.a.Body,null,l.a.createElement(G.a.Title,null),l.a.createElement(G.a.Text,null,e.filenamePart(t.imageName),l.a.createElement("br",null))))}))))}}]),a}(l.a.Component),Q=a(61),X=a.n(Q),q=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Eerste oefensessie"),l.a.createElement(X.a,{width:"95%",controls:"true",url:"https://youtu.be/2e5feNT_7yE"}),l.a.createElement("h2",null,"Voorbeeld van onze zusterclub uit Arnhem"),l.a.createElement(X.a,{width:"95%",controls:"true",url:"https://youtu.be/DBOx_61h_NE"}))}}]),a}(l.a.Component),Z=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleRerender=function(){},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(u.a,{basename:"/"},l.a.createElement(p.a,{bg:"dark",variant:"dark",sticky:"top"},l.a.createElement("span",{className:"menuWebsiteName"}," Silvermusic Huissen v1.1"),l.a.createElement(p.a.Brand,{href:"#home"}),l.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(h.a,{className:"mr-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/home"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/playList"},"Playlist"),l.a.createElement(u.b,{className:"nav-link",to:"/fotosBasic"},"Fotos"),l.a.createElement(u.b,{className:"nav-link",to:"/player"},"Videos"),l.a.createElement(f.a,{title:"Overig",id:"basic-nav-dropdown"},l.a.createElement(f.a.Item,{as:u.b,to:"/playlistOld"}," PlayList Oud"),l.a.createElement(f.a.Item,{as:u.b,to:"/testAPIPAR"},"test API Parameters"),l.a.createElement(f.a.Item,{as:u.b,to:"/player"}," Video vb"),l.a.createElement(f.a.Item,{as:u.b,to:"/SongDetailsModal"}," Song details modal (test)"),l.a.createElement(f.a.Item,{as:u.b,to:"/playlistTable"}," PlaylistTabel (test)"),l.a.createElement(f.a.Item,{as:u.b,to:"/test"},"test"),l.a.createElement(f.a.Item,{as:u.b,to:"/testUpdate2"},"testUpdate2"),l.a.createElement(f.a.Item,{as:u.b,to:"/testUpdate3"},"TestUpdate3"),l.a.createElement(u.b,{className:"nav-link",to:"/playlistTable"},"PlaylistTabel (test)"))))),l.a.createElement("br",null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:D}),l.a.createElement(d.a,{path:"/playlist",component:x}),l.a.createElement(d.a,{path:"/playlistTable",component:R}),l.a.createElement(d.a,{path:"/messages",component:U}),l.a.createElement(d.a,{path:"/fotosBasic",component:K}),l.a.createElement(d.a,{path:"/songdetailsModal",component:B}),l.a.createElement(d.a,{path:"/home",component:D}),l.a.createElement(d.a,{path:"/player",component:q}),l.a.createElement(d.a,{path:"/test",component:M}),l.a.createElement(d.a,{path:"/testUpdate2",component:A}),l.a.createElement(d.a,{path:"/playListOld",component:j}),l.a.createElement(d.a,{path:"/testUpdate3",component:V}),l.a.createElement(d.a,{path:"/testAPIPAR",component:T}))))))}}]),a}(l.a.Component);a(138);var Y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(Z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e){e.exports=JSON.parse('{"SongList1":[{"title":"1) Sultans of Swing","artist":"Dire straits","afspraken":"d (Dm)","video":"https://www.youtube.com/watch?v=h0ffIJ7ZO4U","music":"https://tabs.ultimate-guitar.com/tab/dire-straits/sultans-of-swing-chords-791868","music_alt":"Chords Am ultimate-guitar","pdf":"Sultans of swing Am.pdf"},{"title":"2) Something","artist":"Beatles","afspraken":"C (Sax in D)","video":"https://www.youtube.com/watch?v=5b_kvE_DsCU","music":"https://tabs.ultimate-guitar.com/tab/the-beatles/something-chords-335727","music_alt":"Chords in C ultimate-guitar"},{"title":"3) I\'m a believer","artist":"Monkeys","afspraken":"G","video":"https://www.youtube.com/watch?v=wB9YIsKIEbA","music":"https://tabs.ultimate-guitar.com/tab/the-monkees/im-a-believer-chords-25298","music_alt":"ultimate-guitar"},{"title":"4) Californication","artist":"Red Hot Chilly Peppers","afspraken":"a (Am)","video":"https://www.youtube.com/watch?v=A__cH65WRvE","music":"https://tabs.ultimate-guitar.com/tab/red-hot-chili-peppers/californication-chords-202765","music_alt":"ultimate-guitar"},{"title":"5) Ain\'t no sunshine","artist":"Paul Carrack ","afspraken":"a (Am)","video":"https://youtu.be/BHgyLfsTmTc?t=46","music":"https://tabs.ultimate-guitar.com/tab/bill-withers/aint-no-sunshine-chords-468744","music_alt":"ultimate-guitar"},{"title":"6) if you leave me now","artist":"Chicago","afspraken":"A (of Jan Willem: is het a (Am)?","video":"https://www.youtube.com/watch?v=j1ykMNtzMT8","music":"https://tabs.ultimate-guitar.com/tab/chicago/if-you-leave-me-now-chords-151311","music_alt":"ultimate-guitar (A)"},{"title":"7) Besame Mucho","artist":"Jimmy Dorsey","afspraken":"d (Dm), 1e noot een d, voor Wim e","video":"https://www.youtube.com/watch?v=2ZSADBhXBm4","image1":"besamemucho.png"},{"title":"8) Here comes the sun","artist":"Beatles","afspraken":"A, kapo op 7th fred --\x3e D","video":"https://www.youtube.com/watch?v=U_O1QKQCsGs","music":"https://tabs.ultimate-guitar.com/tab/the-beatles/here-comes-the-sun-chords-70711","music_alt":"ultimate-guitar (A)"},{"title":"9) Lost","artist":"Anouk","afspraken":"G","video":"https://www.youtube.com/watch?v=dn_CjkNtl6s","music":"https://tabs.ultimate-guitar.com/tab/anouk/lost-chords-171222","music_alt":"ultimate-guitar (G)"},{"title":"10) Venus","artist":"Shocking Blue","afspraken":"e of Em","video":"https://www.youtube.com/watch?v=aPEhQugz-Ew","music":"https://tabs.ultimate-guitar.com/tab/shocking-blue/venus-chords-665","music_alt":"ultimate-guitar (E)","pdf":"Venus.pdf"}],"SongList2":[{"title":"26 Hello (Voorstel om op te nemen)","artist":"Lionel Richie","afspraken":"a (Am), voor Wim f#;","video":"https://www.youtube.com/watch?v=CmD0Xlh5O9w","music":"https://tabs.ultimate-guitar.com/tab/lionel-richie/hello-chords-1004004","music_alt":"ultimate-guitar (Am)"},{"title":"27 Make you feel my love (voorstel)","artist":"Adele","afspraken":"Bb","video":"https://www.youtube.com/watch?v=yq_I2JGQpkc","music":"https://tabs.ultimate-guitar.com/tab/adele/make-you-feel-my-love-chords-752102","music_alt":"ultimate-guitar Bes"},{"title":"28 Spics and specks (voorstel) ","artist":"BeeGees","afspraken":"G","video":"https://www.youtube.com/watch?v=rBF6u_Qt-A0","music":"https://tabs.ultimate-guitar.com/tab/bee-gees/spicks-and-specks-chords-60782","music_alt":"ultimate-guitar (G)"},{"title":"29 Ironic (suggestie Rinske) ","artist":"Alanis Morisette","afspraken":"B","video":"https://www.youtube.com/watch?v=i4Xl7UvUq_I","music":"https://tabs.ultimate-guitar.com/tab/alanis-morissette/ironic-chords-523246"}],"ImageList":[{"imageName":"2020-09-10 Eerste oefensessie overzicht.jfif"},{"imageName":"2020-09-10 Douwe on Bass.jfif"},{"imageName":"2020-09-10 Hans on percussion.jfif"},{"imageName":"2020-09-10 Kim op gitaar.png"},{"imageName":"2020-09-10 Toon on drums.jfif"},{"imageName":"2020-09-10 Wim on sax.jfif"},{"imageName":"2020-09-10 Jan Willem on keyboards.jfif"},{"imageName":"2020-09-10 Paul op keyboards.jfif"},{"imageName":"2020-09-10 Jan op gitaar.png"},{"imageName":"2020-09-06 drumstel in de nieuwe kast van Hans.jfif"},{"imageName":"2020-09-06 plaatsen kast Hans de bouwer.jfif"},{"imageName":"2020-09-06 plaatsen kast bij oude brandweer.jfif"},{"imageName":"silvermusicLeden.jpg"},{"imageName":"Anouk.jpg"},{"imageName":"silvermusic1.png"},{"imageName":"drumstel.jfif"},{"imageName":"2020-08-06 oefen paar leden Tuin Hans.jfif"},{"imageName":"2020-09-05 Jan en Kim Oefenen in Tuin Jans.jfif"}],"videoList":[{"title":"10 sept eerste optreden ","video":"https://youtu.be/2e5feNT_7yE"},{"title":"10 sept eerste optreden ","video":"https://youtu.be/2e5feNT_7yE"},{"title":"10 sept eerste optreden ","video":"https://youtu.be/2e5feNT_7yE"},{"title":"10 sept eerste optreden ","video":"https://youtu.be/2e5feNT_7yE"}],"homeTitle":"SilverMusic 1:  zomer 2020","homeBody":"Silvermusic is het initiatief van Hans. GladBck (Arnhem) heeft als voorbeeld gediend voor dit initaiatief om de wijk meer te verbinden en samen muziek te maken","homeImage":"BBKing.jpg"}')},46:function(e,t,a){},73:function(e,t,a){},87:function(e,t,a){e.exports=a(139)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.ac2966bb.chunk.js.map